import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import {
  createProduct,
} from "./helper/adminapicall";
import JSAlert from "js-alert";

const AddProduct = () => {
  const [formValues, setFormValues] = useState({
    companyName: "",
    jobProfile: "",
    eligiblity: "",
    minSalary: "",
    maxSalary: "",
    registerLink: "",
    description: "",
    lastDateToRegister: "",
    examDateStart: "",
    examDateEnd: "",
    yearStart: "",
    yearEnd: "",
    loading: false,
    error: false,
    createdProduct: "",
    getARedirect: false,
    formData: new FormData(),
  });

  const {
    companyName,
    jobProfile,
    eligiblity,
    minSalary,
    maxSalary,
    registerLink,
    description,
    lastDateToRegister,
    examDateStart,
    examDateEnd,
    yearStart,
    yearEnd,
    loading,
    error,
    createdProduct,
    getARedirect,
    formData,
  } = formValues;

  const { user, token } = isAuthenticated();

  const handleChange = (fieldName) => (event) => {
    console.log(fieldName);
    console.log(event.target.value);
    const value =
      fieldName === "photo" ? event.target.files[0] : event.target.value;

    // formData.append("name", "geetu");
    // formData.append(fieldName, value);
    formData.set(fieldName, value);
    setFormValues({
      ...formValues,
      error: false,
      [fieldName]: value,
    });
    console.log(formData);
    console.log(formValues);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setFormValues({ ...formValues, error: "", loading: true });
    console.log(formValues);
    console.log(formData);
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setFormValues({ ...formValues, error: data.error });
        console.log(data);
        JSAlert.alert(error, "Error");
      } else {
        setFormValues({
          ...formValues,
          companyName: "",
          jobProfile: "",
          eligiblity: "",
          minSalary: "",
          maxSalary: "",
          registerLink: "",
          description: "",
          lastDateToRegister: "",
          examDateStart: "",
          examDateEnd: "",
          yearStart: "",
          yearEnd: "",
          photo: "",
          loading: false,
          createdProduct: data.name,
        });
        JSAlert.alert("Product added successfully");
      }
    });
  };

  const createProductForm = () => (
    <form className="">
      <div className="form-group my-2">
        <input
          onChange={handleChange("companyName")}
          name="companyName"
          className="form-control"
          placeholder="Company Name"
        />
      </div>
      <div className="form-group my-2">
        <input
          onChange={handleChange("jobProfile")}
          className="form-control"
          placeholder="Job Profile"
        />
      </div>
      <div className="form-group my-2">
        <textarea
          onChange={handleChange("eligiblity")}
          className="form-control"
          placeholder="Eligiblity"
        />
      </div>
      <div className="d-flex justify-content-between gap-2">
        <div className="form-group my-2 flex-fill">
          <input
            onChange={handleChange("minSalary")}
            type="number"
            className="form-control"
            placeholder="Min Salary"
          />
        </div>
        <div className="form-group my-2 flex-fill">
          <input
            onChange={handleChange("maxSalary")}
            type="number"
            className="form-control"
            placeholder="Max Salary"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between gap-1">
        <div className="form-group my-2 flex-fill">
          <input
            onChange={handleChange("registerLink")}
            type="text"
            className="form-control"
            placeholder="Register Link"
          />
        </div>
      </div>
      <div>
        <div className="form-group my-2 flex-fill">
          <input
            onChange={handleChange("description")}
            type="text"
            className="form-control"
            placeholder="Description"
          />
        </div>
      </div>

      <div className="form-group my-2">
        <label className="text-white">Last Date to Register</label>
        <input
          onChange={handleChange("lastDateToRegister")}
          type="date"
          className="form-control"
          placeholder="Last Date to Register"
          name="lastDateToRegister"
        />
      </div>
      <div className="d-flex justify-content-between gap-2">

        <div className="form-group my-2 flex-fill">
          <label className="text-white">Start Date of Exam</label>
          <input
            onChange={handleChange("examDateStart")}
            type="date"
            className="form-control"
            placeholder="Starting Date"
          />
        </div>

        <div className="form-group my-2 flex-fill">
          <label className="text-white">End Date of Exam</label>
          <input
            onChange={handleChange("examDateEnd")}
            type="date"
            className="form-control"
            placeholder="End Date"
          />
        </div>
      </div>
      <div className="d-flex justify-content-between gap-2">

        <div className="form-group my-2 flex-fill">
          <input
            onChange={handleChange("yearStart")}
            type="number"
            className="form-control"
            placeholder="From Year"
          />
        </div>

        <div className="form-group my-2 flex-fill">
          <input
            onChange={handleChange("yearEnd")}
            type="number"
            className="form-control"
            placeholder="To Year"
          />
        </div>

      </div>

      <div className="form-group my-4 text-center">
        <label className="btn btn-md-block rounded bg-light">
          <p>Choose a pdf for the post</p>
          <input
            onChange={handleChange("photo")}
            type="file"
            accept=".pdf"
            placeholder="Choose a image for the product"
          />
        </label>
      </div>

      <div className="d-flex justify-content-between my-4">
        {goBack()}
        <button
          type="submit"
          onClick={onSubmit}
          className="search-buttons px-5"
        >
          Post
        </button>
      </div>
    </form>
  );
  const goBack = () => {
    return (
      <NavLink to="/admin/dashboard" className="warning-buttons px-5">
        Back
      </NavLink>
    );
  };

  return (
    <Base title="Add Product">
      <div className="row">
        <div className="col-md-6 offset-md-2 rounded m-auto shadow py-3 bg-secondary">{createProductForm()}</div>
      </div>
    </Base>
  );
};

export default AddProduct;
