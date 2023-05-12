import React from "react";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import "../externalCss/main.css";
import "../externalCss/print.css";
import "../externalCss/site.css";
import profileLogo from "../imgs/geetu1.JPG"
import hiredLogo from "../imgs/hiredLogo.png"

const Profile = () => {
  const {
    user: { name, email, role },
  } = isAuthenticated();

  return (
    <Base title="Profile Page">
      <div className="page-content my-4">
        <div className="container">
          <div className="cover shadow-lg bg-white">
            <div className="cover-bg p-3 p-lg-4 text-white">
              <div className="row">
                <div className="col-lg-3 col-md-5">
                  <div className="avatar hover-effect bg-white shadow-sm p-1"><img src={profileLogo} width="200"
                    height="200" alt="" /></div>
                </div>
                <div className="col-lg-6 col-md-7 text-center text-md-start">
                  <h2 className="h1 mt-2">{name}</h2>
                  <p> Full Stack Developer (MERN)</p>
                  <div className="d-print-none">
                    <a className="btn btn-light text-dark shadow-sm mt-1 me-1 rounded-pill" href="right-resume.pdf" target="_blank">
                      Download CV
                    </a>
                    <a className="btn btn-success rounded-pill shadow-sm mt-1" href="#contact">Developer</a>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="placedLogo"><img src={hiredLogo} width="120"
                    height="120" alt="" /></div>
                </div>
              </div>
            </div>
            <div className="about-section pt-4 px-3 px-lg-4 mt-5">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="h3 mb-3">About Me</h2>
                  <p>Hello! I'm an innovative, task-driven professional with experience in Web and App development.
                    Proficient in developing databases, creating user interfaces, troubleshooting simple/complex issues, and implementing new features based on user feedback.
                  </p>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="row mt-2">
                    <div className="col-sm-4">
                      <div className="pb-1">Age</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">23</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Email</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">{email}</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Phone</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">+91-000-000-0000</div>
                    </div>
                    <div className="col-sm-4">
                      <div className="pb-1">Address</div>
                    </div>
                    <div className="col-sm-8">
                      <div className="pb-1 text-secondary">Bhopal, Madhya Pradesh, India</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="skills-section px-3 px-lg-4">
              <h2 className="h3 mb-3">Professional Skills</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="mb-2"><span>React.JS</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Node.JS</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>JavaScript</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-primary" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2"><span>JAVA</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "80%" }} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Data Structures and Algorithms</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>MongoDB</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="mb-2"><span>SQL</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="90" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>Express.JS</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="85" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className="mb-2"><span>React Native</span>
                    <div className="progress my-1">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0"
                        aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="work-experience-section px-3 px-lg-4">
              <h2 className="h3 mb-4">Work Experience</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Full-Stack Developer <span className="text-muted h6">at FULL Creative</span></div>
                    <div className="text-muted text-small mb-2">Jan, 2023 - Present</div>
                    <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                      approaches to corporate strategy foster collaborative thinking to further the overall value
                      proposition.</div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Frontend Developer <span className="text-muted h6">at Hackerkernel</span></div>
                    <div className="text-muted text-small mb-2">June, 2021 - May, 2022</div>
                    <div>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion
                      along the information highway will close the loop on focusing solely on the bottom line.</div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-primary card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Junior Web Developer <span className="text-muted h6">at Indie Studio</span></div>
                    <div className="text-muted text-small mb-2">Jan, 2011 - May, 2013</div>
                    <div>User generated content in real-time will have multiple touchpoints for offshoring. Organically grow
                      the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="page-break"></div>
            <div className="education-section px-3 px-lg-4 pb-4">
              <h2 className="h3 mb-4">Projects</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">CoHackIN <span className="text-muted h6">using MERN</span></div>
                    <div className="text-muted text-small mb-2">2011 - 2013</div>
                    <div>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative
                      approaches to corporate strategy foster collaborative thinking to further the overall value
                      proposition.</div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Books Store <span className="text-muted h6">using MERN</span></div>
                    <div className="text-muted text-small mb-2">2007 - 2011</div>
                    <div>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion
                      along the information highway will close the loop on focusing solely on the bottom line.</div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Todo App <span className="text-muted h6">using React, Redux HTML, CSS, Javascript</span>
                    </div>
                    <div className="text-muted text-small mb-2">1995 - 2007</div>
                    <div>User generated content in real-time will have multiple touchpoints for offshoring. Organically grow
                      the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="page-break"></div>
            <div className="education-section px-3 px-lg-4 pb-4">
              <h2 className="h3 mb-4">Education</h2>
              <div className="timeline">
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Bachelor of Computer Science <span className="text-muted h6">from UIT RGPV, Bhopal</span></div>
                    <div className="text-muted text-small mb-2">2019 - 2023</div>
                    <div>Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion
                      along the information highway will close the loop on focusing solely on the bottom line.</div>
                  </div>
                </div>
                <div className="timeline-card timeline-card-success card shadow-sm">
                  <div className="card-body">
                    <div className="h5 mb-1">Science and Mathematics <span className="text-muted h6">from St. Xavier's Ser. Sec. Co-ed Scool</span>
                    </div>
                    <div className="text-muted text-small mb-2">2018</div>
                    <div>User generated content in real-time will have multiple touchpoints for offshoring. Organically grow
                      the holistic world view of disruptive innovation via workplace diversity and empowerment.</div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="d-print-none" />
            <div className="contant-section px-3 px-lg-4 pb-4" id="contact">
              <h2 className="h3 text mb-3">Contact</h2>
              <div className="row">
                <div className="col-md-7 d-print-none">
                  <div className="my-2">
                    <form action="https://formspree.io/your@email.com" method="POST">
                      <div className="row">
                        <div className="col-6">
                          <input className="form-control" type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-6">
                          <input className="form-control" type="email" id="email" name="_replyto" placeholder="Your E-mail"
                            required />
                        </div>
                      </div>
                      <div className="form-group my-2">
                        <textarea className="form-control" style={{ resize: "none;" }} id="message" name="message" rows="4"
                          placeholder="Your Message" required></textarea>
                      </div>
                      <button className="btn btn-primary mt-2" type="submit">Send</button>
                    </form>
                  </div>
                </div>
                <div className="col">
                  <div className="mt-2">
                    <h3 className="h6">Address</h3>
                    <div className="pb-2 text-secondary">Bhopal, Madhya Pradesh, India</div>
                    <h3 className="h6">Phone</h3>
                    <div className="pb-2 text-secondary">+91-000-000-0000</div>
                    <h3 className="h6">Email</h3>
                    <div className="pb-2 text-secondary">{email}</div>
                  </div>
                </div>
                <div className="col d-none d-print-block">
                  <div className="mt-2">
                    <div>
                      <div className="mb-2">
                        <div className="text-dark"><i
                          className="fab fa-twitter mr-1"></i><span>https://twitter.com/templateflip</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-dark"><i
                          className="fab fa-facebook mr-1"></i><span>https://www.facebook.com/templateflip</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-dark"><i
                          className="fab fa-instagram mr-1"></i><span>https://www.instagram.com/templateflip</span>
                        </div>
                      </div>
                      <div className="mb-2">
                        <div className="text-dark"><i
                          className="fab fa-github mr-1"></i><span>https://github.com/templateflip</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h1>{name}</h1> */}
    </Base>
  );
};

export default Profile;
