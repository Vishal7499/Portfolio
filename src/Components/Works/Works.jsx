import React from 'react'
import Java from "../../img/java.png";
import './Works.css'
import HTML from "../../img/html.png";
import Reactjs from "../../img/react.png";
import Mysql from "../../img/mysql.png";
import Data from "../../img/data.png";
import { useContext } from 'react';
import { themeContext } from '../../Context';
import { Link } from 'react-scroll'
const Works = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="Works">
      <div className="awesome">
        <span style={{color: darkMode? 'white':''}}>Works with all these</span>
        <span>Tech Stack</span>
        <span>
        Proficient in a diverse technology stack encompassing front-end and back-end languages,<br />
         frameworks, and databases for crafting dynamic and innovative solutions 
        </span>
        <Link to="Contact" spy={true} smooth={true}>
        <button className="button s-button">Contact me</button>
        </Link>
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="w-right">
       <div className="w-mainCircle">
        <div className="w-secCircle">
            <img src={Java} alt="" />
        </div>
        <div className="w-secCircle">
            
            <img src={Reactjs} alt="" />
        </div>
        <div className="w-secCircle">
        <img src={HTML} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Mysql} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Data} alt="" />
        </div>
        </div> 
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
