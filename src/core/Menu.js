import React, { Fragment } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
import logo from "../imgs/icons8-coding-49.png";
import man from "../imgs/man.png";
import DarkMode from "./DarkMode";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid menu-bar">
      <div className="row">
        <div className="col-md-5">
          <div class="navbar-top">
            <div class="skew-menu skew-menu-left">
              <ul>
                <li>
                  <NavLink to="/upcoming" className="">
                    Hackathons/Internships/Contests
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/" className="">
                    Upcoming
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/placements" className="">
                    Placements
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <div className="col-md-2">
          <div class="navbar-top">

            <div className="">
              <NavLink to="/" className="fw-bolder text-light">
                <div className="logo">
                  CoHackIn
                  <img className="ms-3" src={logo} alt="" />
                </div>
              </NavLink>
            </div>

          </div>

        </div>
        <div className="col-md-5">
          <div class="navbar-top">

            <div class="skew-menu skew-menu-right">
              <ul>
                {isAuthenticated() && isAuthenticated().user.role !== 0 && (
                  <Fragment>
                    <li>
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                          };
                        }}
                        to="/admin/dashboard"
                        className=""
                      >
                        Admin Dashboard
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                          };
                        }}
                        to="/admin/students"
                        className=""
                      >
                        Students
                      </NavLink>
                    </li>
                  </Fragment>
                )}
                {!isAuthenticated() && (
                  <Fragment>
                    <li className="nav-item d-flex align-items-center justify-content-between bg-primary text-light">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                          };
                        }}
                        to="/signup"
                        className=""
                      >
                        Sign-Up
                      </NavLink>
                    </li>
                    <li className="nav-item d-flex align-items-center bg-success text-light m-0">
                      <NavLink
                        style={({ isActive }) => {
                          return {
                            fontWeight: isActive ? "bold" : "",
                          };
                        }}
                        to="/signin"
                        className=""
                      >
                        Sign-In
                      </NavLink>
                    </li>
                  </Fragment>
                )}
                {isAuthenticated() && (
                  <Fragment>
                    <div className="d-flex">
                      <li className="">
                        <NavLink
                          style={({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                            };
                          }}
                          to="/profile"
                          className=""
                        >
                          {/* <span className="user-profile">
                        <img src={man} alt="Profile" className="" />
                      </span> */}
                          Profile
                        </NavLink>
                      </li>

                      <li className="">
                        <NavLink
                          style={({ isActive }) => {
                            return {
                              fontWeight: isActive ? "bold" : "",
                            };
                          }}
                          to="/createProfile"
                          className=""
                        >
                          {/* <span className="user-profile">
                        <img src={man} alt="Profile" className="" />
                      </span> */}
                          Create Profile
                        </NavLink>
                      </li>

                      <li className="bg-warning"
                        onClick={() => {
                          signout(() => {
                            navigate("/signin");
                          });
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <a>
                          Signout
                        </a>
                      </li>
                    </div>
                  </Fragment>
                )}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>


  );
};

export default Menu;
