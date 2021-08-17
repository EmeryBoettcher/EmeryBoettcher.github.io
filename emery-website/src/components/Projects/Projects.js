import React from "react"
//import { Link } from "react-router-dom"
import './Projects.css'
import websiteSS from "../../images/Screenshot 2021-08-17 14.29.51.png"


const ProjectsPage = () => {
    return (
        <div>
            <div className="projectsTitle">
                <h2>Projects</h2>
            </div>
            <div>
                <div>
                    <img className="projectsImg" src={websiteSS} alt=""/>
                        <div className="projectsText">
                            <h3>emeryboettcher.dev</h3>
                        </div>
                        <div className="projectsText">
                            <p1>This website is my first publicly displayed front-end project. I built it using ReactJS. As my portfolio grows and my creative vision evolves I plan to continue to update it.</p1>
                        </div>
                            <a className="projectsButton" href="https://github.com/eboettch-trinity/EmeryBoettcher.github.io/tree/main/emery-website">GITHUB</a>
                        </div>
                </div>
            </div>
    )
}

export default ProjectsPage 