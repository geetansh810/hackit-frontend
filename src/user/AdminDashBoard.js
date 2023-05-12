import React from "react";
import { NavLink } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const AdminDashBoard = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  const adminLeft = () => {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">Admin Navigation</div>
        <ul className="list-group">
          <li className="list-group-item">
            <NavLink
              to="/admin/create/product"
              className="text-white btn btn-warning fw-bold rounded"
            >
              Create Post
            </NavLink>
          </li>
          <li className="list-group-item">
            <NavLink
              to="/admin/students"
              className="text-white btn btn-info fw-bold rounded"
            >
              Students
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };

  const adminRight = () => {
    return (
      <div className="card mb-4">
        <h3 className="card-header text-dark">Admin Info</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <h4 className="badge bg-success mr-2">Name :</h4> {name}
          </li>
          <li className="list-group-item">
            <h4 className="badge bg-success mr-2">Email :</h4> {email}
          </li>
          <li className="list-group-item">
            <h4 className="badge bg-success mr-2">Role :</h4>{" "}
            {role === 1 ? "ADMIN" : "USER"}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Base
      title="Welcome to Admin Pannel"
      description="Manage all your products"
      className="container my-5"
    >
      <div className="row py-5">
        <div className="col-md-4">{adminRight()}</div>
        <div className="col-md-6">{adminLeft()}</div>
      </div>
    </Base>
  );
};

export default AdminDashBoard;
