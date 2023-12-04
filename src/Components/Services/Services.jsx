import React from 'react'
import './Services.css'
import Cards from '../Card/Card'
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from "C://Users//visha//portfolio-starter//src//Components//Services/Resume.pdf";
const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            Officia harum sequi similique, nemo 
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
      <div style={{left:'14rem'}}>
            <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            
            />
        </div>
        <div style={{top: "12rem",left: "-4rem"}}>
            <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        <div style={{top: "19rem",left: "12rem"}}>
            <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      
    </div>
  )
}

export default Services
