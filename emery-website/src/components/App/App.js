import React from 'react';
import './App.css';
import LinksBar from '../LinksBar/Links';
import AboutPage from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import ProjectsPage from '../Projects/Projects';
import ProfilePic from '../ProfilePic/ProfilePic';

function App() {
  return ( 
    <div> 
      <div className="background">
        <div className="name">
          <br></br>
          Emery Boettcher
        </div>
        <div className="title">
          About Me
        </div>
        <div className="box align"> 
          <ProfilePic />
          <AboutPage />
        </div>
        <LinksBar />
      <ProjectsPage />
      <Resume />
      </div>
    </div>
  )
}

export default App;

