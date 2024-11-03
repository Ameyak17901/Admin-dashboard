import { useNavigate } from "react-router-dom";
import { deleteUser } from "../services/fetchData";

/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {

  const navigate = useNavigate() 
  const handleUpdate = () => {
    navigate(`/user/${user.id}`)
  }  

  const handleDelete = async () => {
    const res = await deleteUser(user.id)
    console.log(res)
  } 
  return (
    <tr>
      <td>{user["name"]}</td>
      <td>{user["email"]}</td>
      <td className="tabcell">{user["status"] ? "active" : "inactive"}</td>
      <td>
        <div className="d-flex gap-1">
          <button type="button" className="btn btn-warning btn-sm" onClick={handleUpdate}>
            Edit
          </button>
          <button type="button" className="btn btn-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default UserCard;
