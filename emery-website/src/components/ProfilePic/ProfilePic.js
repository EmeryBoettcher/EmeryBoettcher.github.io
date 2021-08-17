import React from 'react';
import headshot from "../../images/IMG-3018-Facetune-10-08-2021-14-28-22.jpg"
import './ProfilePic.css'

const ProfilePic = () => {
    return (
        <div>
            <img className="profileImg" src={headshot} alt="Headshot"/>
        </div>
    )
}

export default ProfilePic