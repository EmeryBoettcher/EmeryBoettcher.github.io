import React from 'react';
//import Button from '@material-ui/core/Button';
import imgPath from "../../images/EmeryBoettcher_Resume.png";
import pdfPath from "../../images/Resume 7_28_21.pdf";


const ResumePage = () => {
  return (
      <div className="flex flex-row flex-wrap m-auto pb-10">
          <div className="page-heading">
              Resume
          </div>
          <div className="flex flex-row justify-center m-auto pl-4 sm:pl-0 pr-3">
              <div className="flex flex-col items-center space-y-3 pt-7 pl-10 sm:pl-0">
                  <img className="img" src={imgPath} alt="Screenshot of resume"/>
                  <a href={pdfPath} download="EmeryBoettcher_Resume">
                      <button className="button">DOWNLOAD</button>
                  </a>
              </div>
          </div>
      </div>
  )
}

export default ResumePage
