import { useEffect, useState } from "react";
import Users from "./Users";
import { getData } from "../services/fetchData";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  let id = localStorage.getItem("userId");
  let filtered = data?.filter((user) => {
    return user?.id === parseInt(id);
  });
  useEffect(() => {
    async function fetchData() {
      const users = await getData();
      setData(users);
    }
    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column justify-content-between border border-dark gap-3 border border-dark p-4">
      <div className="d-grid dashboard gap-2">
        <div className="d-flex border  flex-column border-dark rounded justify-content-center align-items-center">
          <h5>Number of users</h5>
          <p>{data.length}</p>
        </div>
        <div className="d-flex border flex-column border-dark rounded justify-content-center align-items-center">
          <h5>Number of sign ups</h5>
          <p>{data.length}</p>
        </div>
      </div>
      {filtered[0]?.role === "admin" && (
        <>
          <div className=" d-flex justify-content-center align-items-center">
            <Users data={data} />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn btn-success btn-sm"
              type="button"
              onClick={() => navigate("/user")}
            >
              Add
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
