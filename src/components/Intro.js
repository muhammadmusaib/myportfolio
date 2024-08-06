import React from "react";
import './Intro.css';
import profilepic from '../profilepic.png';

const Intro = () => {
  return (
    <div>
      <section className="firstSection" id="intro">
        <div className="leftSection">
          <h4 className="my-4 italic">Intro</h4>
          Hello, I'm <br/>
          <span style={{color:"rgb(214, 214, 69)"}}><big>Mohd. Musaib</big></span> As a recent graduate, I've honed my skills through various projects
          and continuous learning and eager to embark on my professional journey
          in the tech industry. I am seeking an opportunity to contribute to a
          forward-thinking team where I can apply my skills and grow as a
          developer. I'm excited to connect with professionals and explore
          opportunities in the <i className="italic">front-end development space.</i>
        </div>
        <div className="rightSection">
         <img src={profilepic} alt="profile" ClassName="myimage" />
        </div>
      </section>
    </div>
  );
};

export default Intro;
