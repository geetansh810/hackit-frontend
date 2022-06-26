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
        <div className="slogan">If you got any questions, feel free to reach out!!!</div>
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
          <div className="col-md-8 text-muted">
            Made by{" "}
            <span className="text-white">
              <a
                href="https://www.linkedin.com/in/geetansh-agrawal-1b8a27190/"
                className="text-decoration-none text-white fw-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Geetansh Agrawal - Arthraj Rathore
              </a>
            </span>{" "}
            in MERN Stack
          </div>
          <div className="col-md-4 d-flex text-light gap-4 justify-content-center align-items-center">
            <div>
              <a
                className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
                href="https://github.com/geetansh810"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Github</span>
                {/* <img className="social-logo" src={github} alt="" /> */}
              </a>
            </div>
            |
            <div className="d-flex align-items-center gap-3">
              <a
                className="d-flex align-items-center gap-3 text-decoration-none text-light fw-bold"
                href="https://www.linkedin.com/in/geetansh-agrawal-1b8a27190/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkenIN</span>
                {/* <img className="social-logo" src={linkedin} alt="" /> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
