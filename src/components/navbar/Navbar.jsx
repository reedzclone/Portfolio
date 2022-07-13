import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const navbar = () => {
  return (
    <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                Intro
            </NavLink>
    </nav>
  )
}

export default navbar