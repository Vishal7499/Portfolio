import React from 'react'
import './Experience.css'
/*import { themeContext } from '../../Context';
import { useContext } from 'react';*/
const Experience = () => {

  /*const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;*/
  return (
    <div className="experience" id='Technologies'>
      <div className="achievement">
        <div className="circle">8+</div>
        <span>Projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle">10+</div>
        <span>completed</span>
        <span>Certifications</span>
      </div>
      <div className="achievement">
        <div className="circle">4+</div>
        <span>Internship</span>
        <span>Done</span>
      </div>
    </div>
  )
}

export default Experience
