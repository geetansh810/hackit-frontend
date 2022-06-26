import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

const Signin = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });

  const { email, password, error, loading, didRedirect } = formValues;

  // const { user } = isAuthenticated();

  const handleChange = (fieldName) => (event) => {
    setFormValues({
      ...formValues,
      error: false,
      [fieldName]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, error: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setFormValues({ ...formValues, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setFormValues({
              ...formValues,
              didRedirect: true,
            });
          });
        }
      })
      .catch(console.log("Error in signin"));
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (isAuthenticated().user && isAuthenticated().user.role === 1) {
        return <Navigate to="/admin/dashboard" />;
      } else {
        return <Navigate to="/" />;
      }
    }
    if (isAuthenticated()) {
      return <Navigate to="/" />;
    }
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div
          style={{ width: "max-content" }}
          className="alert alert-info ms-auto text-center"
        >
          Loading.....
        </div>
      )
    );
  };

  const errorMessage = () => {
    return (
      <div
        style={{ display: error ? "" : "none", width: "max-content" }}
        className="alert alert-danger ms-auto text-center fw-bold"
      >
        Error!!!!
        <div>{error}</div>
      </div>
    );
  };

  const signInForm = () => {
    return (
      <div className="row my-5 slide-up-animation">
        <div className="col-md-4 offset-sm-3 text-left m-auto my-4">
          <form action="" className="">
            <div className="form-group mt-4">
              <label htmlhtmlFor="" className="form-label">
                Email
              </label>
              <input
                type="email"
                onChange={handleChange("email")}
                value={email}
                className="form-control"
              />
            </div>
            <div className="form-group mt-4">
              <label htmlhtmlFor="" className="form-label">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange("password")}
                value={password}
                className="form-control"
              />
            </div>

            <button
              className="search-buttons mt-5 px-5 ms-auto"
              type="submit"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>

        </div>
      </div>
    );
  };

  return (
    <div>
      <Base title="Signin">
        {loadingMessage()}
        {errorMessage()}
        {signInForm()}
        {performRedirect()}
      </Base>
    </div>
  );
};

export default Signin;
