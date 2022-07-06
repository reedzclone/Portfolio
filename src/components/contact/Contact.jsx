import React, { useContext, useRef, useState } from 'react'
import "./Contact.css";
import Email from "../../img/contact.png";
import Location from "../../img/location.png";
import Phone from "../../img/phone.png";
import Instagram from "../../img/instagram.png";
import Facebook from "../../img/facebook1.png";
import LinkedIn from "../../img/linkedIn.jpg";
import Twitter from "../../img/twitter1.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context';

const Contact = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const formRef = useRef();
  const [done, setDone] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_w6adm0o', 'template_4yxtah1', formRef.current, 'f7_lUqqBRurfhtGJZ')
    .then((result) => {
        console.log(result.text);
        setDone(true);
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className="contact">
      <div className="c-left">
        <h1 className="c-title">How can i be of service</h1>
        <div className="c-info">
          <div className="c-info-items">
            <img className="c-icon" src={Phone} alt="" />
            +23481-321-862-04
          </div>

          <div className="c-info-items">
            <img className="c-icon" src={Email} alt="" />
            oloyereedz@gmail.com
          </div>
          <div className="c-info-items">
            <img className="c-icon" src={Location} alt="" />
            Festac Town Lagos, Nigeria
          </div>
        </div>
        <div className="c-socials">
          <h2 className="social-title">Socials</h2>
        <div className="c-social-icons">
          <a href="https://www.facebook.com/oloye.ishola.7" target="_blank" rel="noreferrer"><img className="social-icon" src={Facebook} alt="" /></a>
          <a href="https://www.linkedin.com/in/oloye" target="_blank"  rel="noreferrer"><img className="social-icon" src={LinkedIn} alt="" /></a>
          <a href="https://www.twitter.com/@reedz_oloye" target="_blank" rel="noreferrer"><img className="social-icon" src={Twitter} alt="" /></a>
          <a href="https://www.instagram.com/wally_oloye" target="_blank" rel="noreferrer"><img className="social-icon" src={Instagram} alt="" /></a>
        </div>
      </div>
      </div>
      
      <div className="c-right">
        <p className="c-desc">
          <b>What do you have in mind?</b> Always available to what with you
          and to achieve a common goal <b>Thank you.</b>
        </p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder="Name" name="user_name" />
          <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder="Subject" name="user_subject" />
          <input style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} type="text" placeholder="Email" name="user_email" />
          <textarea style={{backgroundColor: darkMode && "#333", color: darkMode && "#fff"}} placeholder="Message" name="user_message" id="" cols="30" rows="6"></textarea>
          <button type="submit" className="btn">Submit</button>
          
          {done && alert(`Thank you for reaching out`)}
        </form>
      </div>
    </div>
  )
}

export default Contact