import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import logo from "../imgs/icons8-coding-49.png"

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <NavLink to="/" className="navbar-brand fw-bolder text-light">
        <div className="logo">
          <img className="me-3" src={logo} alt="" />
          CoHackIn
        </div>
      </NavLink>

      <div className="header-menu">
        <NavLink to="/" className="">
          Hackathons/Internships/Contests
        </NavLink>
        <NavLink to="/upcoming" className="">
          Upcoming Contests
        </NavLink>
        <NavLink to="/placements" className="">
          Placements Notices
        </NavLink>

      </div>
      <div className="user-settings">

        {isAuthenticated() && isAuthenticated().user.role !== 0 && (
          <NavLink
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
              };
            }}
            to="/admin/dashboard"
            className="nav-link"
          >
            Admin Dashboard
          </NavLink>
        )}

        <div className="dark-light">
          <svg viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" /></svg>
        </div>
        <div className="user-menu">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-square">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" /></svg>
        </div>

        <div className="user-name">

          {!isAuthenticated() && (
            <Fragment>
              {/* <li className="nav-item d-flex align-items-center">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                      };
                    }}
                    to="/signup"
                    className="nav-link"
                  >
                    SignUp
                  </NavLink>
                </li> */}
              <li className="nav-item d-flex align-items-center">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                  to="/signin"
                  className="btn btn-primary rounded"
                >
                  SignIn
                </NavLink>
              </li>
            </Fragment>
          )}
          {isAuthenticated() && (
            <li className="nav-item  d-flex align-items-center">
              <span
                className="btn btn-warning rounded text-white"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  signout(() => {
                    navigate("/signin");
                  });
                }}
              >
                Signout
              </span>
            </li>
          )}


        </div>
      </div>
    </div>

  );
};

export default Menu;
