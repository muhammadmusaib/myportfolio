import React from "react";
import './Navbar.css';
import logo from '../logo3.jpg'
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg ">
        <div className="container-fluid">
          
          <img src={logo} alt="logo"  className="logo" />
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link mx-4 " activeClass="active" to="intro" spy={true} smooth={true} duration={5} offset={-220} >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4"activeClass="active" to="work" spy={true} smooth={true} duration={5} offset={-80}>
                  Work Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" activeClass="active" to="project" spy={true} smooth={true} duration={5} offset={-80}>
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" activeClass="active" to="skills" spy={true} smooth={true} duration={5} offset={-80}>
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-4" activeClass="active" to="contact" spy={true} smooth={true} duration={5} offset={-90}>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
