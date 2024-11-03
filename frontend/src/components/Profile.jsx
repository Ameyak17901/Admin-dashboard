import { useEffect, useState } from "react";
import { useUser } from "../services/useUser";
import { updateUser } from "../services/fetchData";

const Profile = () => {
  const user = useUser();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      const { name, email, role, password } = user;
      setFormData({ name, email, role, password });
    }
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user.id, formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="d-flex flex-column border border-dark profile">
      <div className="d-flex justify-content-center align-items-center">
        <h3>Profile</h3>
      </div>
      <form className="d-flex flex-column justify-content-center p-3 gap-2">
        <div className="d-flex justify-content-between">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {formData.role === "admin" && (
          <div className="d-flex justify-content-between">
            <label htmlFor="role">Role</label>
            <input type="text" value={formData.role} onChange={handleChange} />
          </div>
        )}
        <div className="d-flex justify-content-between">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-warning btn-sm" onClick={handleSubmit}>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
