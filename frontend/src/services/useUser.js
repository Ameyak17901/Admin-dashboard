import { useEffect, useState } from "react";

export const useUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    status: false,
    password: "",
  });
  const id = localStorage.getItem('userId')
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}user/${id}`, {
      });
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();
      setUser(data.data);
    }
    getData();
  }, [id]);
  return user;
};
