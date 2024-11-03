/* eslint-disable react/prop-types */

import UserCard from "./UserCard";

const Users = ({ data }) => {
  return (
    <div>
      <table className="table table-hover table-bordered rounded ">
        <thead>
          <tr align="center">
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user) => (
            <UserCard key={user?.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
