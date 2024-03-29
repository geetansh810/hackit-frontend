import React, { useState } from "react";
import "../css/Form.css";
function WorkExperience({ onSave, data, next }) {
  const [workExperience, setWorkExperience] = useState(data);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(workExperience);
    next();
  };

  const handleAddField = () => {
    setWorkExperience([
      ...workExperience,
      {
        companyName: "",
        jobTitle: "",
        startDate: "",
        location: "",
        endDate: "",
        aboutRole: "",
      },
    ]);
  };

  const handleDeleteField = (index) => {
    const values = [...workExperience];
    values.splice(index, 1);
    setWorkExperience(values);
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const values = [...workExperience];
    values[index][name] = value;
    setWorkExperience(values);
  };

  return (
    <>
      <h1 className="fs-title">Work Experience</h1>
      <h4 className="fs-subtitle"></h4>

      <form onSubmit={handleSubmit}>
        {workExperience.map((experience, index) => (
          <div key={index} className="">
            <label>
              Company
              <input
                type="text"
                name="companyName"
                value={experience.companyName}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
            <br />
            <label>
              Job Title
              <input
                type="text"
                name="jobTitle"
                value={experience.jobTitle}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
            <br />
            <label>
              Start Date
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            </label>
            <br />
            <label>
              End Date
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(event) => handleInputChange(index, event)}
                min={experience.startDate}
                required
              />
            </label>
            <br />
            <label>
              Location
              <input
                type="text"
                name="location"
                value={experience.location}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <br />
            <label>
              About Role
              <input
                type="text"
                name="aboutRole"
                value={experience.aboutRole}
                onChange={(event) => handleInputChange(index, event)}
              />
            </label>
            <br />
            <button onClick={() => handleDeleteField(index)}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Interface / Trash_Full">
                  <path
                    id="Vector"
                    d="M14 10V17M10 10V17M6 6V17.8C6 18.9201 6 19.4798 6.21799 19.9076C6.40973 20.2839 6.71547 20.5905 7.0918 20.7822C7.5192 21 8.07899 21 9.19691 21H14.8031C15.921 21 16.48 21 16.9074 20.7822C17.2837 20.5905 17.5905 20.2839 17.7822 19.9076C18 19.4802 18 18.921 18 17.8031V6M6 6H8M6 6H4M8 6H16M8 6C8 5.06812 8 4.60241 8.15224 4.23486C8.35523 3.74481 8.74432 3.35523 9.23438 3.15224C9.60192 3 10.0681 3 11 3H13C13.9319 3 14.3978 3 14.7654 3.15224C15.2554 3.35523 15.6447 3.74481 15.8477 4.23486C15.9999 4.6024 16 5.06812 16 6M16 6H18M18 6H20"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
            <hr className="divider"></hr>
          </div>
        ))}
        <button onClick={() => handleAddField()}>Work Experience (+)</button>

        <div className='savebtn'>
          <input className='saveButton' type="submit" value="Save & Next" />
        </div>
      </form>
    </>
  );
}

export default WorkExperience;
