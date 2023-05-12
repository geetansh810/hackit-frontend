import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import AdminRoutes from "./auth/helper/AdminRoutes";
import UserRoutes from "./auth/helper/UserRoutes";
import Home from "./core/Home";
import AdminDashBoard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AddProduct from "./admin/AddProduct";
import Placements from "./user/Placements";
import Upcoming from "./user/Upcoming";
import Profile from "./user/Profile";
import Students from "./user/Students";
import Resume from "./profileForm/Resume"

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/upcoming" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />

        <Route path="/placements" element={<Placements />} />
        <Route path="/" element={<Upcoming />} />

        <Route
          path="/admin/dashboard"
          element={
            <AdminRoutes>
              <AdminDashBoard />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/create/product"
          element={
            <AdminRoutes>
              <AddProduct />
            </AdminRoutes>
          }
        />

        <Route
          path="/admin/students"
          element={
            <AdminRoutes>
              <Students />
            </AdminRoutes>
          }
        />

        <Route
          path="/profile"
          element={
            <UserRoutes>
              <Profile />
            </UserRoutes>
          }
        />

        <Route
          path="/createProfile"
          element={
            <UserRoutes>
              <Resume />
            </UserRoutes>
          }
        />


        <Route
          path="*"
          element={
            <div className="text-center">
              <h1 className="text-muted">Page not found</h1>
            </div>
          }
        />
      </Switch>
    </Router>
  );
}
