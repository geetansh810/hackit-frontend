import React from "react";
// import github from "../imgs/github.png";
// import linkedin from "../imgs/linkedin.png";

const Footer = () => {
  return (
    // <footer className="footer bg-dark mt-auto">
    //   <div className="container-fluid nav-color text-white text-center py-3">
    //     <div className="slogan">
    //       A one stop solution for all Academic Needs.
    //     </div>
    //     <div className="slogan">
    //       If you got any questions, feel free to reach out!!!
    //     </div>
    //     <a
    //       className="btn btn-primary btn-md"
    //       href="mailto:geetanshagrawal810@gmail.com,arthraj.01@gmail.com"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Contact Us
    //     </a>
    //   </div>
    //   <div className="container text-center py-2">
    //     <div className="row">
    //       <div className="col-md-3 text-muted text-md-end">
    //         Made by
    //       </div>
    //       <div className="col-md-6 d-md-flex text-light gap-4 justify-content-center align-items-center">
    //         <div>
    //           <a
    //             className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
    //             href="https://github.com/geetansh810"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="social-logo bg-white rounded-circle"
    //               src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
    //               alt=""
    //             />
    //           </a>
    //         </div>
    //         Geetansh Agrawal
    //         <div className="d-flex align-items-center gap-3">
    //           <a
    //             className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
    //             href="https://www.linkedin.com/in/geetansh-agrawal-1b8a27190/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="social-logo"
    //               src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
    //               alt=""
    //             />
    //           </a>
    //         </div>
    //         <div> -------- </div>
    //         <div>
    //           <a
    //             className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
    //             href="https://github.com/arthraj"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="social-logo bg-white rounded-circle"
    //               src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
    //               alt=""
    //             />
    //           </a>
    //         </div>
    //         Arthraj Rathore
    //         <div className="d-flex align-items-center gap-3">
    //           <a
    //             className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
    //             href="https://www.linkedin.com/in/arthraj-rathore/"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //           >
    //             <img
    //               className="social-logo"
    //               src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
    //               alt=""
    //             />
    //           </a>
    //         </div>
    //       </div>
    //       <div className="col-md-3 text-muted text-md-start">
    //         in MERN Stack
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer class="site-footer mt-2">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">A one stop solution for all types of jobs</p>
          </div>

          {/* <div class="col-xs-6 col-md-3">
            <h6>Famous Hackathon Sites</h6>
            <ul class="footer-links">
              <li><a href="#">CodeChef</a></li>
              <li><a href="#">CtfTime</a></li>
              <li><a href="#">TechGIG</a></li>
              <li><a href="#">GFG</a></li>
              <li><a href="#">CodeForces</a></li>
              <li><a href="#">HackerEarth</a></li>
              <li><a href="#">LeetCode</a></li>
            </ul>
          </div> */}

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="mailto:geetanshagrawal810@gmail.com,arthraj.01@gmail.com" target="_blank" rel="noreferrer">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by
              <a href="#"> Recruit Campus</a>.
            </p>
          </div>

          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li>
                <a
                  className="facebook me-2"
                  href="https://github.com/geetansh810/hackit-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="social-logo bg-white rounded-circle"
                    src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
