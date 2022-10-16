import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
const Profile = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  return (
    <Base title="Profile Page">
      <h1>{name}</h1>
      <h1>{email}</h1>
      {/* <h1>{name}</h1> */}
    </Base>
  );
};

export default Profile;
