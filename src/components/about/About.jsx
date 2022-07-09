import React from 'react'
import "./About.css";
import Fred from "../../img/brave.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <img className="about-img"
                src={Fred} alt="" />
            </div>
            <div className="about-right">
                <div className="about-title">
                    <h1>About me</h1>
                </div>
                <div className="about-sub">
                    <p>I'm a <b>SOFTWARE DEVELOPER</b> based in Lagos, Nigeria with over 2 years of experience in the software industry in the area of
                        frondend using HTML, CSS, JavaScript. experienced in creating logical and innovative solutions to complex problems. I have a strong 
                        intrest in technology and innovations.
                    </p>
                </div>
                <div className="about-desc">
                    <h3>Skills</h3>
                    <ul>
                        <li>Problem solving</li>
                        <li>Team Player</li>
                        <li>Good Communication Skills</li>
                        <li>Time Management Skills</li>
                        <li>Positive Learning Process</li>
                        
                    </ul>
                </div>



            </div>
        </div>
    )
}

export default About