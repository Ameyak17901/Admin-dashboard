import { useState } from "react";
import { getData } from "../services/fetchData";
import { useAuth } from "../authentication/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePChange = (e) => {
    setPassword(e.target.value);
  };
  let filtered = [];
  const handleSubmit = async ({ email }) => {
    const data = await getData();
    filtered = data.filter(
      (user) =>
        user.email === email
    );
    localStorage.setItem("userId", filtered[0]?.id);
    setError("invalid credentials");
    login({ email: email });
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center rounded-2  w-3 h-100">
      <form className="form border rounded p-5 border border-dark w-20  text-bg-light">
        <div className="d-flex gap-2 flex-column justify-content-between align-items-center">
          <h3>Login</h3>
          <div className="d-flex justify-content-between">
            <label className="fw-bold font-monospace" htmlFor="email">
              <span className="d-flex text-light-emphasis">Email:</span>
            </label>
            <input
              className="d-flex border border-grey rounded"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex justify-content-between">
            <label className="fw-bold font-monospace" htmlFor="password">
              <span className="d-flex text-light-emphasis">Password:</span>
            </label>
            {/* <br /> */}
            <input
              className="d-flex border border-grey rounded-2"
              type="password"
              name="password"
              value={password}
              onChange={handlePChange}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleSubmit({ email })}
            >
              Login
            </button>
          </div>
          {error !== "" && <p>{error}</p>}
        </div>
        <Link className="signup" to="/signup">
          <span className="link">Create account</span>
        </Link>
      </form>
    </div>
  );
};

export default Login;
