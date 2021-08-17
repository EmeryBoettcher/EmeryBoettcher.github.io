import React from "react"
import './Links.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const LinksBar = () => {
    
    return (
        <div classname="linksBar" style={{listStyle: 'none'}}> 
            <li><a href="https://www.linkedin.com/in/emery-boettcher/"> <LinkedInIcon style={{ color: '#950952'}}/></a> <p1 style={{ color: '#950952'}}>LinkedIn</p1></li>
            <li><a href="https://github.com/eboettch-trinity"> <GitHubIcon style={{ color: '#950952'}}/></a> <p1 style={{ color: '#950952'}}>GitHub</p1></li>
            <li><a href="https://www.instagram.com/emery.boettcher/"> <InstagramIcon style={{ color: '#950952'}}/></a> <p1 style={{ color: '#950952'}}>Instagram</p1></li>
        </div>
    )

}

export default LinksBar