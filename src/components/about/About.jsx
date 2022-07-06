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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Nemo provident fugiat aut atque? Quibusdam quaerat magni consectetur
                        explicabo! Assumenda, expedita!
                    </p>
                </div>
                <div className="about-desc">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse earum voluptatibus ut odio obcaecati
                        asperiores fuga officiis, similique natus ad culpa aspernatur,
                        fugit assumenda quae perspiciatis molestiae consectetur aliquid
                        quisquam officia omnis nam totam id! Cupiditate, eaque! Veritatis
                        atque blanditiis delectus dolores ex.
                        Neque aut incidunt velit amet illum numquam.
                    </p>
                </div>



            </div>
        </div>
    )
}

export default About