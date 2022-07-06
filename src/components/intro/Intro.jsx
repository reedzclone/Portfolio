import React from 'react';
import "./Intro.css";
import IntroImg from "../../img/intro.png";

const Intro = () => {
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-left-wrapper">
                <h2 className='i-intro'>Hi, My name is</h2>
                <h1 className='intro-name'>Oloye Reedwan</h1>
                <div className="intro-title">
                    <div className="intro-title-wrapper">
                        <div className="intro-title-items">web developer</div>
                        <div className="intro-title-items">html</div>
                        <div className="intro-title-items">css/bootstrap</div>
                        <div className="intro-title-items">javascript</div>
                        <div className="intro-title-items">reactjs</div>
                    </div>
                </div>
                <div className="intro-desc">
                    <p>I design and develop website services for clients, specializes in user friendly website, high quality design, online stores and effiecnt interface.</p> 
                </div>
        
            </div>
        </div>
        <div className="intro-right">
            <div className="intro-bg">
                
            </div>
            <img className="intro-img" src={IntroImg} alt="" />
            </div>
    </div>
  )
}

export default Intro