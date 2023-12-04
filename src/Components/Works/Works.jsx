import React from 'react'
import Upwork from "../../img/Upwork.png";
import './Works.css'
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
const Works = () => {
  return (
    <div className="Works">
      <div className="awesome">
        <span>Works for all these</span>
        <span>Brands & Clients</span>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            <br />
            Officia harum sequi similique, nemo 
        </span>
        
        <button className="button s-button">Hire me</button>
        
        <div className="blur s-blur" style={{background:"#ABF1FF94"}}></div>
      </div>
      <div className="w-right">
       <div className="w-mainCircle">
        <div className="w-secCircle">
            <img src={Upwork} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Fiverr} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Amazon} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Shopify} alt="" />
        </div>
        <div className="w-secCircle">
            <img src={Facebook} alt="" />
        </div>
        </div> 
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}

export default Works
