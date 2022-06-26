import React from "react";
// import github from "../imgs/github.png";
// import linkedin from "../imgs/linkedin.png";

const Footer = () => {
  return (
    <footer className="footer bg-dark mt-auto">
      <div className="container-fluid nav-color text-white text-center py-3">
        <div className="slogan">
          A one stop solution for all Academic Needs.
        </div>
        <div className="slogan">
          If you got any questions, feel free to reach out!!!
        </div>
        <a
          className="btn btn-primary btn-md"
          href="mailto:geetanshagrawal810@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Contact Us
        </a>
      </div>
      <div className="container text-center py-2">
        <div className="row">
          <div className="col-md-3 text-muted text-end">
            Made by
          </div>
          <div className="col-md-6 d-flex text-light gap-4 justify-content-center align-items-center">
            <div>
              <a
                className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
                href="https://github.com/geetansh810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-logo bg-white rounded-circle"
                  src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                  alt=""
                />
              </a>
            </div>
            Geetansh Agrawal
            <div className="d-flex align-items-center gap-3">
              <a
                className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
                href="https://www.linkedin.com/in/geetansh-agrawal-1b8a27190/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-logo"
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt=""
                />
              </a>
            </div>
            <div> -------- </div>
            <div>
              <a
                className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
                href="https://github.com/arthraj"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-logo bg-white rounded-circle"
                  src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
                  alt=""
                />
              </a>
            </div>
            Arthraj Rathore
            <div className="d-flex align-items-center gap-3">
              <a
                className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
                href="https://www.linkedin.com/in/arthraj-rathore/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="social-logo"
                  src="https://cdn-icons-png.flaticon.com/512/145/145807.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-md-3 text-muted text-start">
            in MERN Stack
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
