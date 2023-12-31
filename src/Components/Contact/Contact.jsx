import React, { useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from "react"
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Contact = () => {
    const form = useRef();

    const [done,setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_69ntrs6', 'template_eec36va', form.current, "KOcV_Lu8Zx-CmLf8Z")
      .then((result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
          
      }, (error) => {
          console.log(error.text);
      });
  };

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white':''}}>Get in touch</span>
                <span>Contact me</span>
                
            </div>
        </div>
        <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <textarea type="text" name="user_name" className="user"  placeholder="Name"/>
          <textarea type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message & Email"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
        <div>
       
        </div>
      </div>
    </div>
  )
}

export default Contact
