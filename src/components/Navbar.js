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
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand flex-grow-1" href="#">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  onClick={() => setIsOpen(false)}
                  className="nav-link mx-4"
                  activeClassName="active"
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
                  activeClassName="active"
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
                  activeClassName="active"
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
                  activeClassName="active"
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
                  activeClassName="active"
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
