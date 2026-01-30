import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8081/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`http://localhost:8081/user/${id}`);
      loadUsers();
      alert("User deleted successfully!");
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <h2 className="text-center mb-4">👥 User List 👥</h2>
        <table className="table table-striped table-bordered shadow">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/viewuser/${user.id}`} className="btn btn-info">
                    View 👀
                  </Link>
                  <Link
                    to={`/edituser/${user.id}`}
                    className="btn btn-warning mx-2"
                  >
                    Edit ✏️
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-danger"
                  >
                    Delete 🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center">
          <Link to="/adduser" className="btn btn-success">
            Add New User ➕
          </Link>
        </div>
      </div>
    </div>
  );
}
