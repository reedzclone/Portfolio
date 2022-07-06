import React from 'react'
import "./Navbar.css";

const navbar = () => {
  return (
    <nav>
            <ul className="navbar-list">
                <li>Intro</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
    </nav>
  )
}

export default navbar