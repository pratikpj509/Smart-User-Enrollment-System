import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card border-0 shadow-lg funky-card">
            <div className="card-body text-center">
              <h2 className="card-title mb-4 funky-title">
                🌈 User Details 🌟
              </h2>
              <div className="card funky-card-inner">
                <div className="card-body">
                  <h5 className="card-title funky-text">Details of User</h5>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item funky-item">
                      <strong>Name:</strong> {user.name}
                    </li>
                    <li className="list-group-item funky-item">
                      <strong>Username:</strong> {user.username}
                    </li>
                    <li className="list-group-item funky-item">
                      <strong>Email:</strong> {user.email}
                    </li>
                  </ul>
                </div>
              </div>
              <Link to={"/"} className="btn btn-primary mt-3 funky-btn">
                Back to Home 🏠
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
