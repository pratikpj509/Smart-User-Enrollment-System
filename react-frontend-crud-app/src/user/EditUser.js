import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8081/user/${id}`, user);
    navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8081/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="card border-0 shadow-lg funky-card">
            <div className="card-body">
              <h2 className="card-title text-center funky-title">
                🎨 Edit User 🎨
              </h2>
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label funky-label">
                    Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control funky-input"
                    placeholder="Enter your name"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label funky-label">
                    Username
                  </label>
                  <input
                    type={"text"}
                    className="form-control funky-input"
                    placeholder="Enter your username"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label funky-label">
                    E-mail
                  </label>
                  <input
                    type={"text"}
                    className="form-control funky-input"
                    placeholder="Enter your e-mail address"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary funky-btn">
                    Submit 🚀
                  </button>
                  <Link to="/" className="btn btn-danger funky-btn mx-2">
                    Cancel ❌
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
