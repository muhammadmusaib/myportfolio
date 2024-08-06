import './Project.css';
import React from "react";
import apws from '../project1.jpg'

const Project = () => {
  return (    
      <div className="container" id='project'>
        <h3 style={{display:'flex',justifyContent:'center'}}>Project</h3>
        <h5>
          <span style={{display:'flex',justifyContent:'center'}}>Automatic Plant Watering System</span>
        </h5>
        <section className="Projectfirstsection">
          <div className="ProjectleftSection">
            
            <p>
             <p>In daily operations related to farming or gardening watering is
              the most important practice and the most labor- intensive task. No
              matter whichever weather it is, either too hot and dry or too
              cloudy and wet, you want to be able to control the amount of water
              that reaches your plants.</p>
              <p>To Improve Agricultural use of water in
              smart way reduce human work and to increase production this
              Automatic Plant Watering System is beneficial.</p> 
              <p>This system involves several key components working together to monitor soil
              moisture level and activates a water pump when needed.</p>
            </p>
          </div>
          <div className="ProjectrightSection">
            <img src={apws} alt="photo" />
          </div>
        </section>
      </div>
      
    
  );
};

export default Project;
