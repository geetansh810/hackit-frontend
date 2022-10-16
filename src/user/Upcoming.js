import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { getAllContests, getAllContestsIcons } from "../core/helper/apicalls";
import SearchBar from "../core/SearchBar";
import cup from "../imgs/cup.png";

export default function Upcoming() {
  const [resource, setResource] = useState([]);
  const [dataSet, setDataSet] = useState([]);
  // const [latestContests,setLatestContests]=useState([]);
  // const [showLatest,setShowLatest]=useState(false);
  const [filterWord, setFilterWord] = useState("");

  var contestType = ["Hackathon", "Contest"];
  var difficulty = ["Basic", "Easy", "Medium", "Hard"];

  useEffect(() => {
    // fetch("https://clist.by/api/v1/resource//?username=minor-project&api_key=76c4a281d8c5636fb8dab0cdd36d6c88c85fb213")
    //   .then(res => res.json())
    //   .then((resData) => {
    //     var realresData = resData["objects"];
    //     setResource(realresData);
    //   })

    getAllContestsIcons().then((data) => {
      // console.log(data.objects);
      var realresData = data["objects"];
      setResource(realresData);
    });
  }, []);

  const resourseMap = new Map();
  resource.map((icons) => {
    if (icons.id !== undefined) {
      const str = icons.icon;
      const finalLink = "https://clist.by" + str;
      resourseMap.set(icons.id, finalLink);
    }
    return 0;
  });

  useEffect(() => {
    getAllContests(300).then((data) => {
      // console.log(data.objects);
      var realData = data["objects"];
      setDataSet(realData);
    });

    // fetch("https://clist.by/api/v1/resource//?username=minor-project&api_key=76c4a281d8c5636fb8dab0cdd36d6c88c85fb213")
    //   .then(res => res.json())
    //   .then((resData) => {
    //     var realresData = resData["objects"];
    //     setResource(realresData);
    //   })
  }, []);
  // console.log(dataSet.reverse());

  const futureContests = dataSet.filter(checkContest);
  futureContests.sort(
    (a, b) => endTimeExtracter(a.end) - endTimeExtracter(b.end)
  );
  // console.log(futureContests);
  // setLatestContests(futureContests);
  // console.log(latestContests);

  function endTimeExtracter(endTime) {
    var dateandtime = endTime.split("T");
    var finaldate = dateandtime[0] + " " + dateandtime[1];
    var endObject = new Date(finaldate);
    return endObject;
  }

  function checkContest(contest) {
    var endTime = contest.end;
    // var year=endTime.slice(0,4);
    // var month=endTime.slice(5,7);
    // var day=endTime.slice(8,10);
    // var hours=endTime.slice(11,13);
    // var min=endTime.slice(14,16);
    // var sec=endTime.slice(17,19);

    // var contestEndDate=new Date(year,month,day,hours,min,sec);
    var currentDate = new Date();
    var contestEndDate = endTimeExtracter(endTime);
    if (currentDate.getTime() < contestEndDate.getTime()) {
      return contest;
    }
  }

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
    finalStr = finalDate + " at " + dateandtime[1];
    return finalStr;
  }

  function search(name) {
    return setFilterWord(name)
  }

  return (
    <Base title="Home Page">
      <div className="wrapper">
        <SearchBar filter={search} />
        <div className="main-container">
          <div className="search-type">
            {/* <!-- Alert box create code --> */}
            <div className="alert">
              <div className="alert-title">Create contest Alert</div>
              <input type="text" placeholder="Enter contest keyword" />
              <button className="search-buttons">Create contest Alerts</button>
            </div>

            {/* <!-- filter codes --> */}
            <div className="job-time">
              <div className="job-time-title">Type of Employment</div>
              <div className="job-wrapper">
                <div className="type-container">
                  <input type="checkbox" id="job1" className="job-style" />
                  <label>Full Time Jobs</label>
                  <span className="job-number">56</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job2" className="job-style" />
                  <label>Part Time Jobs</label>
                  <span className="job-number">43</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job3" className="job-style" />
                  <label>Remote Jobs</label>
                  <span className="job-number">24</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job4" className="job-style" />
                  <label>Internship Jobs</label>
                  <span className="job-number">27</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job5" className="job-style" />
                  <label>Contract</label>
                  <span className="job-number">76</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job6" className="job-style" />
                  <label>Training Jobs</label>
                  <span className="job-number">28</span>
                </div>
              </div>
            </div>
            <div className="job-time">
              <div className="job-time-title">Seniority Level</div>
              <div className="job-wrapper">
                <div className="type-container">
                  <input type="checkbox" id="job7" className="job-style" />
                  <label>Student Level</label>
                  <span className="job-number">98</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job8" className="job-style" />
                  <label>Entry Level</label>
                  <span className="job-number">44</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job9" className="job-style" />
                  <label>Mid Level</label>
                  <span className="job-number">35</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job10" className="job-style" />
                  <label>Senior Level</label>
                  <span className="job-number">29</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job11" className="job-style" />
                  <label>Directors</label>
                  <span className="job-number">26</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job12" className="job-style" />
                  <label htmlFor="">VP or Above</label>
                  <span className="job-number">56</span>
                </div>
              </div>
            </div>
            <div className="job-time">
              <div className="job-time-title">Salary Range</div>
              <div className="job-wrapper">
                <div className="type-container">
                  <input type="checkbox" id="job1" className="job-style" />
                  <label htmlFor="job1">$700 - $1000</label>
                  <span className="job-number">49</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job2" className="job-style" />
                  <label htmlFor="job2">$1000 - $1200</label>
                  <span className="job-number">67</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job3" className="job-style" />
                  <label htmlFor="job3">$1200 - $1400</label>
                  <span className="job-number">24</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job4" className="job-style" />
                  <label htmlFor="job4">$1500 - $1800</label>
                  <span className="job-number">27</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job5" className="job-style" />
                  <label htmlFor="job5">$2000 - $3000</label>
                  <span className="job-number">76</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job6" className="job-style" />
                  <label htmlFor="job6">$3000 - $4000</label>
                  <span className="job-number">22</span>
                </div>
                <div className="type-container">
                  <input type="checkbox" id="job6" className="job-style" />
                  <label htmlFor="job6">$4000 - $5000</label>
                  <span className="job-number">18</span>
                </div>
              </div>
            </div>
          </div>

          <div className="searched-jobs">
            <div className="searched-bar">
              <div className="searched-show">
                Total Contests Live : {futureContests.length}
              </div>
              <div className="searched-sort">
                Show: <span className="post-time">Upcoming </span>
                <span className="menu-icon">▼</span>
              </div>
            </div>
            <div className="job-cards">
              {futureContests.filter((value) => {
                if (value === "") {
                  return value;
                }
                return value.event.toLowerCase().includes(filterWord.toLowerCase())
              }).map((contest) => {
                return (
                  <div className="job-card" key={contest.id}>
                    <div className="job-card-header">
                      <div className="iconsofContest">
                        {
                          <img
                            src={resourseMap.get(contest.resource_id) || cup}
                            alt={contest.host}
                          ></img>
                        }
                      </div>
                      <div className="ms-auto text-success fw-bold overflow-hidden">
                        {contest.host}
                      </div>
                      {/* <div className="menu-dot"></div> */}
                    </div>

                    <div className="job-card-title">
                      Event:{" "}
                      <span className="job-card-value">{contest.event}</span>
                    </div>
                    <div className="job-card-title">
                      Host:{" "}
                      <span className="job-card-value"> {contest.host}</span>
                    </div>
                    <div className="job-card-title">
                      Start:{" "}
                      <span className="job-card-value">
                        {changeTimeFormat(contest.start)}
                      </span>{" "}
                    </div>
                    <div className="job-card-title">
                      End:{" "}
                      <span className="job-card-value">
                        {changeTimeFormat(contest.end)}
                      </span>
                    </div>

                    <div className="job-detail-buttons">
                      <button className="search-buttons detail-button">
                        {
                          contestType[
                          Math.floor(Math.random() * contestType.length)
                          ]
                        }
                      </button>
                      <button className="search-buttons detail-button">
                        {contest.duration / 3600} Hours
                      </button>
                      <button className="search-buttons detail-button">
                        {
                          difficulty[
                          Math.floor(Math.random() * difficulty.length)
                          ]
                        }
                      </button>
                    </div>

                    <div className="job-card-buttons">
                      <a href={contest.href} target="_blank" rel="noreferrer">
                        <button className="search-buttons card-buttons header-shadow">
                          Register
                        </button>
                      </a>
                      <a
                        href={"https://" + contest.resource}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <button className="search-buttons card-buttons-msg">
                          Visit Site
                        </button>
                      </a>
                    </div>
                  </div>
                );
              })}

              {/* <!-- Overview boxes chote waale --> */}

              <div className="job-overview">
                <div className="job-overview-cards">
                  <div className="job-overview-card">
                    <div className="job-card overview-card">
                      <div className="overview-wrapper">
                        {/* <svg viewBox="0 -13 512 512" xmlns="http://www.w3.org/2000/svg" style="background-color:#2e2882">
        <g fill="#feb0a5" >
         <path d="M256 92.5l127.7 91.6L512 92 383.7 0 256 91.5 128.3 0 0 92l128.3 92zm0 0M256 275.9l-127.7-91.5L0 276.4l128.3 92L256 277l127.7 91.5 128.3-92-128.3-92zm0 0" />
         <path d="M127.7 394.1l128.4 92 128.3-92-128.3-92zm0 0" />
        </g>
        <path d="M512 92L383.7 0 256 91.5v1l127.7 91.6zm0 0M512 276.4l-128.3-92L256 275.9v1l127.7 91.5zm0 0M256 486.1l128.4-92-128.3-92zm0 0" fill="#feb0a5" />
       </svg> */}
                        <div className="overview-detail">
                          <div className="job-card-title">UI / UX Designer</div>
                          <div className="job-card-subtitle">
                            2972 Westheimer Rd. Santa Ana.
                          </div>
                        </div>
                        {/* <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg> */}
                      </div>
                      <div className="job-overview-buttons">
                        <div className="search-buttons time-button">
                          Full Time
                        </div>
                        <div className="search-buttons level-button">
                          Senior Level
                        </div>
                        <div className="job-stat">New</div>
                        <div className="job-day">4d</div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="background-color:#f76754">
        <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z" fill="#042b48" data-original="#212121" />
        <path xmlns="http://www.w3.org/2000/svg" d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe" data-original="#f4511e" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">Sr. Product Designer</div>
          <div className="job-card-subtitle">
           1901 Thornridge Cir.Shiloh, Hawaii.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
      <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff" style="background-color:#55acee">
        <path d="M512 97.2c-19 8.4-39.3 14-60.5 16.6 21.8-13 38.4-33.4 46.2-58a209.8 209.8 0 01-66.6 25.4A105 105 0 00249.5 153c0 8.3.8 16.3 2.5 24A297.1 297.1 0 0135.6 67 105.1 105.1 0 0068 207.4c-16.9-.3-33.4-5.2-47.4-12.9v1.1c0 51 36.4 93.4 84 103.2-8.5 2.3-17.8 3.4-27.4 3.4-6.8 0-13.5-.3-20-1.8a106 106 0 0098.2 73.2A211 211 0 010 416.9 295.5 295.5 0 00161 464c193.2 0 298.8-160 298.8-298.7 0-4.6-.2-9.1-.4-13.6A209.4 209.4 0 00512 97.2z" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">User Experience Designer</div>
          <div className="job-card-subtitle">
           414 Parker Rd. Allentown, New york
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
      <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff" style="background-color:#1e1f26">
        <path d="M24 7.6c0-.3 0-.5-.4-.6C12.2.2 12.4-.3 11.6 0 3 5.5.6 6.7.2 7.1c-.3.3-.2.8-.2 8.3 0 .9 7.7 5.5 11.5 8.4.4.3.8.2 1 0 11.2-8 11.5-7.6 11.5-8.4V7.6zm-1.5 6.5l-3.9-2.4L22.5 9zm-5.3-3.2l-4.5-2.7V2L22 7.6zM12 14.5l-3.9-2.7L12 9.5l3.9 2.3zm-.8-12.4v6L6.8 11 2.1 7.6zm-5.8 9.6l-3.9 2.4V9zm1.3 1l4.5 3.1v6l-9-6.3zm6 9.1v-6l4.6-3.1 4.6 2.8z" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">Product Designer</div>
          <div className="job-card-subtitle">
           4517 Washington Ave. Syracuse.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
      <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color:#ffe80f">
        <path d="M9.5 9.3l-.7 2h1.4z" />
        <path d="M12 1C5.4 1 0 5.2 0 10.4c0 3.4 2.2 6.3 5.6 8-1.3 4.4-1.3 4.4-1 4.6.2.1.5 0 5.3-3.4l2.1.2c6.6 0 12-4.2 12-9.4S18.6 1 12 1zM6 13c0 .4-.3.7-.6.7s-.7-.3-.7-.7V9H3.6c-.4 0-.7-.4-.7-.7s.3-.7.7-.7H7c.4 0 .7.3.7.7s-.3.6-.7.6h-1zm5.4.7c-.7 0-.6-.6-.9-1.2h-2c-.4.6-.3 1.2-1 1.2s-.8-.4-.6-1.1l1.6-4.3a1 1 0 011-.7c.4 0 .8.3.9.7 1 3.4 2.6 5.4 1 5.4zm4-.1h-2.2c-1.2 0-.5-1.6-.7-5.3 0-.4.3-.7.7-.7s.7.3.7.7v4h1.5c.3 0 .6.3.6.6 0 .4-.3.7-.6.7zm5.4-.5l-.3.4c-1 .7-1.6-1.4-2.6-2.3l-.2.3V13c0 .4-.3.7-.7.7a.7.7 0 01-.7-.7V8.3a.7.7 0 011.4 0v1.5c1.3-1 2-2.7 2.8-2 .8.9-.9 1.6-1.5 2.5 1.6 2.2 1.9 2.3 1.8 2.8z" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">UI / UX Designer</div>
          <div className="job-card-subtitle">
           2711 Ash Dr. San Jose, South Dark.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
      <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color: #fe5b5f">
        <path d="M12 20.6c-1.4 1.5-3.1 3-5.1 3.3-2 .8-5.9-1.3-5.9-5 0-2.5 3.2-8 6.6-15.1C8.5 1.9 9.4 0 12 0c2.6 0 3.5 1.8 4.6 4C23 17 23 17.7 23 19c0 4.4-5.5 8-11 1.7zm9.5-1.7c0-2-6.4-14.4-6.5-14.5-.9-1.9-1.4-2.9-3-2.9-1.8 0-2.3 1.5-3.2 3.2C2.5 17.2 2.5 18 2.5 19c0 3 3.7 6 8.5.6-2-2.6-3-4.8-3-6.6 0-2.7 2-4.2 4-4.2s4 1.5 4 4.2c0 1.8-1 4-3 6.6 4.6 5.2 8.5 2.5 8.5-.6zM12 10.2c-1.2 0-2.5.9-2.5 2.7 0 1.4.9 3.3 2.5 5.4 1.6-2.1 2.5-4 2.5-5.4 0-1.8-1.3-2.7-2.5-2.7z" fill="#fff" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">UI Developer</div>
          <div className="job-card-subtitle">
           1725 Preston Rd. Inglewood.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
      <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="background-color: #5c6bc0">
        <g fill="#fff">
         <path d="M3.6 21.2h14.2l-.6-2.2 5.8 5V2.5C23 1 21.8 0 20.4 0H3.6A2.6 2.6 0 001 2.5v16.2c0 1.4 1.2 2.5 2.6 2.5zM14 5.7zM6.5 7C8.3 5.6 10 5.7 10 5.7l.2.1c-2.3.6-3.3 1.6-3.3 1.6.1 0 4.6-2.7 10.1 0 0 0-1-1-3.1-1.5l.2-.2c.3 0 1.8 0 3.5 1.3 0 0 1.8 3.1 1.8 7 0 0-1.1 1.6-4 1.7l-.7-1a4 4 0 002.2-1.4c-3.2 2-6 1.7-9.3.3h-.1l-.4-.2s.6 1 2.2 1.4l-.8 1c-2.8 0-3.8-1.8-3.8-1.8 0-3.9 1.8-7 1.8-7z" />
         <path d="M14.3 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7zM9.7 12.8c.7 0 1.3-.6 1.3-1.4 0-.7-.6-1.3-1.3-1.3a1.3 1.3 0 000 2.7z" />
        </g>
       </svg>
         <div className="overview-detail">
          <div className="job-card-title">User Interface Designer</div>
          <div className="job-card-subtitle">
           2972 Westheimer Rd. Santa Ana.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
       <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#fff" style="background-color:#ea4c88">
        <path d="M16.4 23.2C28.6 18.2 25.2 0 12 0a12 12 0 104.4 23.2zM5.3 20c.8-1.5 3.6-5.5 8.3-7 1 2.6 1.7 5.5 1.7 8.8-3.5 1.2-7.3.4-10-1.8zm11.5 1.2a27 27 0 00-1.7-8.4c2-.4 4.5-.2 7.2 1-.6 3.2-2.6 6-5.5 7.4zm5.7-9c-3-1.1-5.7-1.3-8-.8a28 28 0 00-1.1-2.3 20 20 0 006.5-4c1.7 1.9 2.7 4.3 2.6 7zM18.9 4c-.9.8-2.9 2.4-6.3 3.8A28 28 0 008 2.3C11.6.8 15.8 1.4 19 4zM6.6 3c.8.7 2.7 2.5 4.5 5.3a33 33 0 01-9.4 1.5c.6-3 2.4-5.4 4.9-6.9zm-5 8.3c4.2-.1 7.6-.8 10.3-1.7l1.1 2.1A17.4 17.4 0 004.2 19c-1.8-2-2.8-4.7-2.7-7.6z" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">UI / UX Designer</div>
          <div className="job-card-subtitle">
           1976 Thornide Joshua. Andr Maria.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div>
      </div>
      <div className="job-overview-card">
       <div className="job-card overview-card">
        <div className="overview-wrapper">
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M113.5 309.4L95.6 376l-65 1.4A254.9 254.9 0 010 256c0-42.5 10.3-82.5 28.6-117.7l58 10.6 25.4 57.6a152.2 152.2 0 001.5 103z" fill="#fbbb00" />
        <path d="M507.5 208.2a256.3 256.3 0 01-91.2 247.4l-73-3.7-10.4-64.5c29.9-17.6 53.3-45 65.6-78H261.6V208.3h246z" fill="#518ef8" />
        <path d="M416.3 455.6a256 256 0 01-385.8-78.3l83-67.9a152.2 152.2 0 00219.4 78l83.4 68.2z" fill="#28b446" />
        <path d="M419.4 59l-83 67.8A152.3 152.3 0 00112 206.5l-83.4-68.2a256 256 0 01390.8-79.4z" fill="#f14336" /></svg>
         <div className="overview-detail">
          <div className="job-card-title">UX Designer</div>
          <div className="job-card-subtitle">
           2972 Westheimer Rd. Santa Ana.
          </div>
         </div>
         <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        </div>
        <div className="job-overview-buttons">
         <div className="search-buttons time-button">Full Time</div>
         <div className="search-buttons level-button">Senior Level</div>
         <div className="job-stat">New</div>
         <div className="job-day">4d</div>
        </div>
       </div> */}
                </div>
              </div>

              <div className="job-explain">
                {/*
      <img className="job-bg" alt="">
      <div className="job-logos">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" style="background-color:#f76754">
        <path xmlns="http://www.w3.org/2000/svg" d="M0 .5h4.2v23H0z" fill="#042b48" data-original="#212121"></path>
        <path xmlns="http://www.w3.org/2000/svg" d="M15.4.5a8.6 8.6 0 100 17.2 8.6 8.6 0 000-17.2z" fill="#fefefe" data-original="#f4511e"></path></svg>
      </div>
      <div className="job-explain-content">
      <div className="job-title-wrapper">
       <div className="job-card-title">UI /UX Designer</div>
       <div className="job-action">
        <svg className="heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.7 0l-1.1 1-1-1a5.5 5.5 0 00-7.8 7.8l1 1 7.8 7.8 7.8-7.7 1-1.1a5.5 5.5 0 000-7.8z" /></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
       </div>
       </div>
       <div className="job-subtitle-wrapper">
        <div className="company-name">Patreon <span className="comp-location">Londontowne, MD.</span></div>
        <div className="posted">Posted 8 days ago<span className="app-number">98 Application</span></div>
       </div>
       <div className="explain-bar">
        <div className="explain-contents">
        <div className="explain-title">Experience</div>
        <div className="explain-subtitle">Minimum 1 Year</div>
         </div>
        <div className="explain-contents">
        <div className="explain-title">Work Level</div>
        <div className="explain-subtitle">Senior level</div>
         </div>
        <div className="explain-contents">
        <div className="explain-title">Employee Type</div>
        <div className="explain-subtitle">Full Time Jobs</div>
         </div>
        <div className="explain-contents">
        <div className="explain-title">Offer Salary</div>
        <div className="explain-subtitle">$2150.0 / Month</div>
         </div>
       </div>
       <div className="overview-text">
        <div className="overview-text-header">Overview</div>
        <div className="overview-text-subheader">We believe that design (and you) will be critical to the company's success. You will work with our founders and our early customers to help define and build our product functionality, while maintaining the quality bar that customers have come to expect from modern SaaS applications. You have a strong background in product design with a quantitavely anf qualitatively analytical mindset. You will also have the opportunity to craft our overall product and visual identity and should be comfortable to flex into working.</div>
       </div>
       <div className="overview-text">
        <div className="overview-text-header">Job Description</div>
        <div className="overview-text-item">3+ years working as a product designer.</div>
        <div className="overview-text-item">A portfolio that highlights your approach to problem solving, as well as you skills in UI.</div>
        <div className="overview-text-item">Experience conducting research and building out smooth flows.</div>
        <div className="overview-text-item">Excellent communication skills with a well-defined design process.</div>
        <div className="overview-text-item">Familiarity with design tools like Sketch and Figma</div>
        <div className="overview-text-item">Up-level our overall design and bring consistency to end-user facing properties</div>
       </div>
      </div>
      */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
