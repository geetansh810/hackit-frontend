import React from "react";
import {
  Route,
  Routes as Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import AdminRoutes from "./auth/helper/AdminRoutes";
import Home from "./core/Home";
import AdminDashBoard from "./user/AdminDashBoard";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import AddProduct from "./admin/AddProduct";
import Placements from "./user/Placements";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />

        <Route path="/placements" element={<Placements />} />

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
