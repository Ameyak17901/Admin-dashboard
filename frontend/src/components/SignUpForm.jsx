import { useState } from "react";
import { addUser } from "../services/fetchData";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "user",
    password: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    const res = await addUser(data);
    if (res.status === 500) {
      throw new Error(res.message);
    }
    // setFormData({ email: "", name: "", role: "user", password: "" });
    navigate("/login");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(formData);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <form className="form d-flex flex-column gap-2 border border-dark rounded p-3 text-bg-light">
        <div className="d-flex justify-content-center">
          <h4>Sign Up</h4>
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="name">Name</label>
          <input
            className="border border-dark rounded"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="email">Email</label>
          <input
            className="border border-dark rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="password">Password</label>
          <input
            className="border border-dark rounded"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            className="border border-dark rounded"
            name="role"
            value={formData.role}
            disabled
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary btn-sm"
            type="button"
            onClick={() => handleSubmit(formData)}
          >
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
