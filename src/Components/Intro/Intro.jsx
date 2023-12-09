import React, { useContext} from 'react'
import './Intro.css';
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import { MotionValue, motion } from "framer-motion";
import { themeContext } from '../../Context';
import { Link } from 'react-scroll'
/*import FloatinDiv from '../FloatingDiv/FloatingDiv';*/
const Intro = () => {
  const Transition = { duration:2, type: "spring" };

  const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="Intro">
      <div className="i-left">
      <div className="i-name">
        <span style={{color:darkMode? 'white': ""}}>Hey! <br /> I Am</span>
        <span>Vishal Markad</span>
        <span>
        A seasoned Fullstack Developer with a high level of experience in Java, web development, and databases, dedicated to producing quality work.
          </span>
      </div>
      <Link to="Contact" spy={true} smooth={true}>
      <button className="button i-button">Connect</button>
        </Link>
      <div className="i-icons">
        <a href="https://github.com/Vishal7499">
          <img src={Github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/vishal-markad-a1802817b/">
          <img src={LinkedIn} alt="" />
          </a> 
          <a href="https://www.instagram.com/vishal_markad_/">
          <img src={Instagram} alt="" />
          </a>
        </div>

      </div>
      <div className="i-right">
      <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img
        initial={{left:"-36%"}}
        whileInView={{left:"-24%"}}
        transition={Transition}
        src={glassesimoji} alt="" /> 
        
        <div style={{top:'-20%',left:'50%'}}>
          <FloatinDiv img={crown} txt1="web" txt2="Developer"/>
        </div>
        <div style={{top:'18rem',left:'0rem'}}>
        <FloatinDiv img={thumbup} txt1="FullStack" txt2="Developer" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  )
}

export default Intro
