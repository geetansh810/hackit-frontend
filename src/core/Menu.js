import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import logo from "../imgs/icons8-coding-49.png";
import man from "../imgs/man.png";
import DarkMode from "./DarkMode";

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
        <NavLink to="/upcoming" className="">
          Hackathons/Internships/Contests
        </NavLink>
        <NavLink to="/" className="">
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
          {/* <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg> */}
          <DarkMode />
        </div>
        {/* <div className="user-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-square"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          </svg>
        </div> */}

        

        <div className="user-name">
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item d-flex align-items-center justify-content-between">
                {/* <NavLink
                  style={({ isActive }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                    };
                  }}
                  to="/signup"
                  className="btn btn-secondary rounded"
                >
                  SignUp
                </NavLink> */}
                {/* </li>
              <li className="nav-item d-flex align-items-center"> */}
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
            <Fragment>
              <div className="d-flex">
                <li className="nav-item d-flex align-items-center justify-content-between profile-btn">
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        fontWeight: isActive ? "bold" : "",
                      };
                    }}
                    to="/profile"
                    className="btn btn-secondary rounded w-100"
                  >
                    {/* <span>
                      <img src={man} alt="Profile" className="" />
                    </span> */}
                    Profile
                  </NavLink>
                </li>

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
              </div>
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
