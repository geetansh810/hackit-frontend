import React, { useState } from "react";
import Base from "../core/Base";
import { signup } from "../auth/helper/index";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, lastname, email, password, error, success } = formValues;

  const handleChange = (fieldName) => (event) => {
    setFormValues({
      ...formValues,
      error: false,
      [fieldName]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, error: false });
    signup({ name, lastname, email, password })
      .then((data) => {
        if (data.error) {
          setFormValues({ ...formValues, error: data.error, success: false });
        } else {
          setFormValues({
            ...formValues,
            name: "",
            lastname: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };

  const successMessage = () => {
    return (
      <div
        style={{ display: success ? "" : "none", width: "max-content" }}
        className="alert alert-success ms-auto text-center"
      >
        Registered Successfully !!!!
        <br />
        <Link to="/signin" className="text-decoration-none fw-bold">
          Signup here
        </Link>
      </div>
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

  const signUpForm = () => {
    return (
      <div className="row overflow-auto my-5">
        <div className="col-md-4 offset-sm-3 text-left m-auto overflow-auto">
          <form action="" className="overflow-auto">
            <div className="d-md-flex justify-content-between">
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  onChange={handleChange("name")}
                  className="form-control"
                  value={name}
                />
              </div>
              <div className="form-group mt-4">
                <label htmlFor="" className="form-label ">
                  Last Name
                </label>
                <input
                  type="text"
                  onChange={handleChange("lastname")}
                  className="form-control"
                  value={lastname}
                />
              </div>
            </div>
            <div className="form-group mt-4">
              <label htmlFor="" className="form-label ">
                Email
              </label>
              <input
                type="email"
                onChange={handleChange("email")}
                className="form-control"
                value={email}
              />
            </div>
            <div className="form-group mt-4">
              <label htmlFor="" className="form-label ">
                Password
              </label>
              <input
                type="password"
                onChange={handleChange("password")}
                className="form-control"
                value={password}
              />
            </div>

            <button
              className="btn btn-success btn-block mt-3 form-control"
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
      <Base title="Signup">
        {successMessage()}
        {errorMessage()}
        {signUpForm()}
      </Base>
    </div>
  );
};

export default Signup;
