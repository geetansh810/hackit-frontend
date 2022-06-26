import React, { useEffect, useState } from "react";
import { API } from "../backend";
import Base from "../core/Base";
import { getAllPlacements } from "../core/helper/apicalls";
import rgpvLogo from "../imgs/rgpv-logo.jpg";

export default function Placements() {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    getAllPlacements().then((data) => {
      // console.log(data);
      var realresData = data;
      setPlacements(realresData);
    });
  }, []);
  console.log(placements);

  function reverseString(str) {
    var blocks = str.split("-");
    var newString = "";
    newString = blocks[2] + "-" + blocks[1] + "-" + blocks[0];
    return newString;
  }

  function changeTimeFormat(time) {
    var dateandtime = time.split("T");
    var finalDate = reverseString(dateandtime[0]);
    var finalStr = "";
    finalStr = finalDate;
    return finalStr;
  }

  return (
    <Base title="Home Page">
      {/*<div className="row">
        {products.map((product, index) => {
          return (
            <div className="col-md-3" key={index}>
              <Card product={product} />
            </div>
          );
        })}
      </div> */}

      <div className="wrapper">
        <div className="main-container">
          <div className="searched-jobs">
            <div className="searched-bar">
              <div className="searched-show">
                {placements.length} Placements Available
              </div>
              <div className="searched-sort">
                Sort by: <span className="post-time">Newest Post </span>
                <span className="menu-icon">▼</span>
              </div>
            </div>
            <div className="placements-cards">
              {/* <!-- Our contest card --> */}

              {placements.map((placement) => {
                return (
                  <div className="placement-card job-card" key={placement._id}>
                    <div className="placement-card-header px-2">
                      <div className="iconsofPlacement">
                        <img src={rgpvLogo} alt=""></img>
                      </div>
                      <div className="ms-auto placement-name">
                        {placement.companyName}
                      </div>
                    </div>

                    <div className="job-card-title mb-auto h-25">
                      <span className="job-card-value mb-3">
                        {placement.description}
                      </span>
                    </div>

                    <div className="explain-bar mt-5">
                      <div className="explain-contents">
                        <div className="explain-title">Eligiblity</div>
                        <div className="explain-subtitle">
                          {placement.eligiblity}
                        </div>
                      </div>
                      <div className="explain-contents">
                        <div className="explain-title">Job Profile</div>
                        <div className="explain-subtitle">
                          {placement.jobProfile}
                        </div>
                      </div>
                      <div className="explain-contents">
                        <div className="explain-title">Offer Salary</div>
                        <div className="explain-subtitle">
                          {placement.minSalary} lpa - {placement.maxSalary} lpa
                        </div>
                      </div>
                      <div className="explain-contents">
                        <div className="explain-title">Employee Type</div>
                        <div className="explain-subtitle">Full Time Jobs</div>
                      </div>
                    </div>

                    <div className="job-subtitle-wrapper placement-subtitle-wrapper">
                      <div className="company-name">
                        <button className="search-buttons detail-button text-primary">
                          Year
                          <span className="comp-location text-dark">
                            {placement.yearStart} - {placement.yearEnd}
                          </span>
                        </button>
                      </div>
                      <div className="d-flex">
                        <div className="company-name">
                          <button className="search-buttons detail-button">
                            Last Date to Register
                            <span className="comp-location">
                              {changeTimeFormat(placement.lastDateToRegister)}
                            </span>
                          </button>
                        </div>

                        <div className="company-name ms-4">
                          <button className="search-buttons detail-button text-warning">
                            Exam Date
                            <span className="comp-location">
                              {changeTimeFormat(placement.examDateStart)}{" "}
                              <span className="text-dark"> to </span>{" "}
                              {changeTimeFormat(placement.examDateEnd)}
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="posted mt-2">
                        Posted at {changeTimeFormat(placement.updatedAt)}
                        <span className="app-number">Application Open</span>
                      </div>
                    </div>

                    <div className="job-card-buttons">
                      <a href={placement.registerLink} target="_blank" rel="noreferrer">
                        <button className="search-buttons card-buttons header-shadow">
                          Register
                        </button>
                      </a>
                      <a href={API+"/placements/pdf/"+placement._id} target="_blank" rel="noreferrer"> 
                        <button className="search-buttons card-buttons-msg">
                          Open Document ⮥
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
