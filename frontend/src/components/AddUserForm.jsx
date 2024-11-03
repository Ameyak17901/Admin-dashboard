import { useState } from "react";
import { addUser } from "../services/fetchData";

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await addUser(formData);
    console.log(data)
    if (data.status === 500) {
      throw new Error(data.message);
    }
    setFormData({ name: "", email: "", role: "", password: "" });
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <form
        className="form d-flex flex-column gap-2 border border-dark rounded p-4 text-bg-light"
        onSubmit={handleSubmit}
      >
        <div className="d-flex justify-content-center">
          <h5>Add User</h5>
        </div>
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
        <div className="d-flex justify-content-between">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success btn-sm">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
