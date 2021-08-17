import React from 'react';
import './App.css';
import LinksBar from '../LinksBar/Links';
import AboutPage from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import ProjectsPage from '../Projects/Projects';

function App() {
  return ( 
    <div className="App"> 
      <div className="Background">
        <LinksBar />
        <div className="title">
          <h2>About Me</h2>
        </div>
        <div className="Box"> 
          <AboutPage />
        </div>
        <ProjectsPage />
      <Resume />
      </div>
    </div>
  )
}

export default App;

