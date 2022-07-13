import React from 'react'
import "./Skills.css"

const Skills = () => {
  return (
    <div className='skill'>
        <div className="s-list">
        <h2>Skills</h2>
            <ul>
                <li>Problem solving</li>
                <li>Team Player</li>
               <li>Good Communication Skills</li>
                <li>Time Management Skills</li>
                <li>Positive Learning Process</li>
            </ul>
        </div>
        <div className="p-language">
            <h2>programming language</h2>
            <ul className='lan-list'>
                <li> HTML </li>
                <li> CSS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>Reactjs</li>
            </ul>
        </div>
    </div>
  )
}

export default Skills