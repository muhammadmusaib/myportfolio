import React, { useState } from "react";
import "./Navbar.css";
import logo from "../logo3.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <img src={logo} alt="logo" className="logo" />
        <div className="d-flex">
          <button className="navbar-toggler" type="button" onClick={toggleMenu}>
            <span className="navbar-toggler-icon">&#9776;</span>
          </button>
          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="nav-link mx-4"
                  activeClass="active"
                  to="intro"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-220}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="nav-link mx-4"
                  activeClass="active"
                  to="work"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  Work Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="nav-link mx-4"
                  activeClass="active"
                  to="project"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="nav-link mx-4"
                  activeClass="active"
                  to="skills"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="nav-link mx-4"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-90}
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
