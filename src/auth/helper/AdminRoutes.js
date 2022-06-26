import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from ".";

const AdminRoutes = ({ children }) => {
  let auth = isAuthenticated();
  let location = useLocation();

  if (!auth || auth.user.role === 0) {
    // Redirect them to the /signin page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/user/dashboard" state={{ from: location }} replace />;
  }

  return children;
};

export default AdminRoutes;
