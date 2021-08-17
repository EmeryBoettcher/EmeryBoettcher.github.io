import React from 'react';
import './App.css';
import LinksBar from '../LinksBar/Links';
import AboutPage from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';

function App() {
  return ( 
    <div className="App"> 
      <div className="Background">
        <LinksBar />
        <div className="Box"> 
          <AboutPage />
        </div>
      <Resume />
      </div>
    </div>
  )
}

export default App;

