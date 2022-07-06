import React, { useContext } from 'react';
import "./Toggle.css";
import Moon from "../../img/moon.jpg";
import Sun from "../../img/sun.jpg";
import { ThemeContext } from '../context';

const Toggle = () => {


  const theme = useContext(ThemeContext);
  
  const handleClick = () => {
    theme.dispatch({type:"TOGGLE"})
  }
  return (
    <div className="toggle">
        <img className="t-icon" src={Moon} alt="" />
        <img className="t-icon" src={Sun} alt="" />
        <button className="t-btn" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 25}}></button>
    </div>
  )
}

export default Toggle