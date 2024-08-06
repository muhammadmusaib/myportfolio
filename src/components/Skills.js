import React from "react";
import html from "../html.png";
import css from "../css3.png";
import js from "../javascript.png";
import java from "../java.png";
import react from "../react.png";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container" id="skills">
      <h3 style={{ display: "flex", justifyContent: "center" }}>Skills</h3>
      <section className="SkillsFirstSection">
        <div className="card">
          <img src={html} className="card-img-top" alt="html" />
          <span>Hyper Text Markup Language(HTML)</span>
        </div>

        <div className="card">
          <img src={css} className="card-img-top cssimage" alt="html" />
          <span>Casscading Style Sheet(CSS)</span>
        </div>

        <div className="card">
          <img src={js} className="card-img-top" alt="html" />
          <span>JavaScript(JS)</span>
        </div>

        <div className="card">
          <img src={java} className="card-img-top" alt="html" />
          <span>(Core Java)</span>
        </div>

        <div className="card">
          <img src={react} className="card-img-top" alt="html" />
          <span>(React.Js)</span>
        </div>
      </section>
    </div>
  );
};

export default Skills;
