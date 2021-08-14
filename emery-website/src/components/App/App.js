import React from 'react';
import './App.css';
import LinksBar from '../LinksBar/Links';
//import Resume from '../Resume/Resume';

function App() {
  return ( 
    <div className="App"> 
      <div className="Background">
        <LinksBar />
        <div className="Box"> 
          Content
        </div>
      
      </div>
    </div>
  )
}

export default App;

