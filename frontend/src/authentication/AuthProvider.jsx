/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

import { useContext } from "react";
export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "",
    role: "",
    status: false,
    password: "",
  });
  const [token, setToken] = useState(localStorage.getItem("user") || "");
  const navigate = useNavigate();
  const login = async (data = { email: "" }) => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      throw new Error("error generating token");
    }

    const tokenReceived = await res.json();
    console.log(tokenReceived);

    if (tokenReceived.data) {
      console.log(tokenReceived.data);
      setUser({ ...user, ...tokenReceived.data });
      setToken(tokenReceived.token);
      localStorage.setItem("user", tokenReceived.token);
      navigate("/");
    }
  };

  const logout = () => {
    setToken("");
    localStorage.removeItem("user");
    localStorage.removeItem("userId");
    navigate("/login");
  };
  return (
    <AuthContext.Provider value={{ user, login, token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
