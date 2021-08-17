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
      <div className="Background">
        <LinksBar />
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="Box align"> 
          <ProfilePic />
          <AboutPage />
        </div>
        <ProjectsPage />
      <Resume />
      </div>
    </div>
  )
}

export default App;

