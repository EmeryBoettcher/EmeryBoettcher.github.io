import React from "react"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon from '@material-ui/icons/Instagram'

const LinksBar = () => {
    const container = {
        color: '#950952',
        position:  'fixed',
        padding: 10,
        bottom: 0,
        left: 0,
        
    }
     
    return (
        <div style={container}> 
            <a href="https://www.linkedin.com/in/emery-boettcher/"> <LinkedInIcon style={{ color: '#950952'}}/> </a>
            <a href="https://github.com/eboettch-trinity"> <GitHubIcon style={{ color: '#950952'}}/> </a>
            <a href="https://www.instagram.com/emery.boettcher/"> <InstagramIcon style={{ color: '#950952'}}/> </a>
        </div>
    )

}

export default LinksBar