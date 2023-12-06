import React from 'react'
import './Navbar.css'
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
                    /*
                    Home
                    Services
                    Experience
                    Portfolio
                    Testimonial
                    Contact
                    */
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Vishal</div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeclass'>
                    <li>Home</li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true} activeClass='activeclass'>
                    <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Technologies' smooth={true} activeClass='activeclass'>
                    <li>Technologies</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeclass'>
                    <li>Portfolio</li>
                    </Link>
                    <Link spy={true} to='Training' smooth={true} activeClass='activeclass'>
                    <li>Training</li>
                    </Link>
                </ul>
            </div>
            <Link to="Contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
            </Link>
        </div>
       
    </div>
    
  )
}

export default Navbar
