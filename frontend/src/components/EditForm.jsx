import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/fetchData";

const EditForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const data = useParams();
  const navigate = useNavigate();
  const id = data?.id;
  const handleChange = (e) => {
    try {
      setUser({ ...user, [e.target.name]: e.target.value });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async () => {
    console.log(user);
    const res = await updateUser(id, user);
    setMessage(res);
    navigate("/");
  };
  useEffect(() => {
    async function getUser() {
      const data = await getUserById(id);
      setUser(data);
    }
    getUser();
  }, [id]);
  return (
    <div className="d-flex flex-column align-items-center h-65 justify-content-center border border-dark p-3 Edit">
      <div className="d-flex justify-content-center">
        <h4>Edit User</h4>
      </div>
      <form className="form d-flex flex-column justify-content-center gap-2">
        <div className="d-flex gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex gap-2">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={user.password}
            onChange={handleChange}
            disabled={user.role === "admin" ? true : false}
          />
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleSubmit}
          >
            Edit
          </button>
        </div>
      </form>
      {message !== "" && <p>{message}</p>}
    </div>
  );
};

export default EditForm;
