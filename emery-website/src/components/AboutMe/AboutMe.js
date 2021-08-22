import React from "react"
import './AboutMe.css'
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import LocalFloristOutlinedIcon from '@material-ui/icons/LocalFloristOutlined'
import StarRateIcon from '@material-ui/icons/StarRate';
import LaptopChromebookOutlinedIcon from '@material-ui/icons/LaptopChromebookOutlined'
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined'
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';

const AboutPage = () => {
    return (
        <div>
            <div>
                <div className="intro">
                    Hello everybody, I'm
                </div>
                
                <div className="name">
                    Emery Boettcher
                </div>
                <div className="text">
                    <div style={{listStyle: 'none'}}>
                        <li> <LaptopChromebookOutlinedIcon/> Computer science major</li>
                        <li> <SchoolOutlinedIcon/> Trinity University class of 2023</li>
                        <li> <StarRateIcon/> Texas native</li>
                        <li> <SportsBaseballIcon/> Collegiate softball pitcher</li>
                        <li> <LocalLibraryOutlinedIcon/> Book lover</li>
                        <li> <LocalFloristOutlinedIcon/> Plant enthusiast</li>
                        <li> <MusicNoteIcon/>Music maven</li>
                    </div>
                    <br></br>
                    <div>
                        One of the best decisions I have ever made was taking a computer science class on a whim my freshman year of college. Computer science combines 
                        my love of learning new things, logic games, problem solving, art, and creativity. This combination immediately drew me in and I changed 
                        my major soon afterward. I hope to continue to further my knowledge of software development and all things data related. 
                        <br/><br/>
                        Outside of computer science I enjoy discovering new music, reading, and playing softball. I’m passionate 
                        about supporting women in technology. 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage