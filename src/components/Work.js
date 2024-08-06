import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <div className="container Work-container" id="work">
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        Work Experience
      </h3>
      <div className="accordion accordion-flush " id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Web Development Intern
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              <big>At Exposys Data Labs</big>
              <br />
              <small className="my-2">06/06/2023 - 04/12/2023</small>
              <br />
              <ul>
                Description :
                <li>
                  Contributed to the development of a MASS MAIL DESPATCHER
                  project, focusing on frontend implementation.
                </li>
                <li>
                  Designed and developed User-friendly web pages using HTML,
                  CSS.
                </li>
                <li>
                  Ensured responsive design for compatibility with various
                  devices.
                </li>
                <li>
                  This tool also provides the functionality of filtering valid
                  or invalid email addresses from csv files.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
