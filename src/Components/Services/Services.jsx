import React from 'react'
import './Services.css'
/*import Cards from '../Card/Card'*/
import Glasses from "../../img/glasses.png";
import HeartEmoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from "C://Users//visha//portfolio-starter//src//Components//Services/Resume.pdf";
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Services = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="services" id='Skills'>
      <div className="awesome">
        <span>My Awesome</span>
        <span style={{color: darkMode? 'white':''}}>Skills</span>
        <span>
        Versatile full-stack developer proficient in creating seamless, innovative solutions for  optimal user <br />experiences. Expertise spans both front-end and back-end technologies.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
      <div
          style={{left: "16rem"}}>
            <Card
            emoji={HeartEmoji}
            heading={"Backend"}
            detail={"Java,Hibernate, SpringBoot,Python"}
            
            />
        </div>
        <div style={{top: "12rem",left: "-1rem"}}>
            <Card
            emoji={Glasses}
            heading={"Frontend"}
            detail={"Html, Css, JavaScript, React"}
          />
        </div>
        <div style={{top: "19rem",left: "16rem"}}>
            <Card
            emoji={Humble}
            heading={"Database"}
            detail={
              "MySQL,MongoDB,SQLite"
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
