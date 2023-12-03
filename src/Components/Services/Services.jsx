import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Cards from '../Card/Cards';


const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            Officia harum sequi similique, nemo amet reprehenderit eum quo repellendus modi. Soluta beatae sunt ex modi atque cum rem reprehenderit corrupti assumenda!
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="cards">
        <div style={{left:'14rem'}}>
        <Cards
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
        </div>
        <div>
        <Cards
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Services
