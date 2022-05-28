import React from 'react';
import './Resume.css';
import imgPath from "../../images/Emery_Boettcher_Resume-1.png";
import pdfPath from "../../images/Emery_Boettcher_Resume.pdf";


const ResumePage = () => {
  return (
      <div>
          <div className="resumeText">
              <h2>Resume</h2>
          </div>
          <div>
              <div>
                  <img className="resumeImg" src={imgPath} alt="Screenshot of resume"/>
                  <br></br>
                  <a href={pdfPath} download="EmeryBoettcher_Resume">
                      <button className="downloadButton">DOWNLOAD</button>
                  </a>
              </div>
          </div>
      </div>
  )
}

export default ResumePage
