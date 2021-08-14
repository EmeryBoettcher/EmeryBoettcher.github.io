/* import React from 'react';
// import Button from '@material-ui/core/Button';
import imgPath from "../images/EmeryBoettcher_Resume.png";
import pdfPath from "../images/Resume 7_28_21.pdf";


const Resume = () => {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: 'white', //theme.palette.getContrastText(purple[500]),
      backgroundColor:  'rgb(83, 86, 89)', // https://material-ui.com/customization/color/
      '&:hover': {
        backgroundColor: blueGrey[900],
      },
    },
  }))(Button)

  return ( 
    <div className="columns is-centered" style={{margin: 'auto'}}>
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
      <div className="column is-narrow">  
        <div className={bookFont} style={{fontSize: 36, fontWeight: 'bold'}}>resume</div>
      </div>

      <div className="column" style={{textAlign: 'center'}}>
        <img className='photo' style={{maxHeight: 1000}} src={imgPath} alt=""/>
        <br />
        <ColorButton variant="contained" color="primary" style={{marginTop: 10, color: 'white'}} href={pdfPath} download="EmeryBoettcher_Resume">
          Download
        </ColorButton>
      </div>
      
      <div className="column is-narrow"><div style={{width: '7vw'}} /></div>
    </div>
   );
}
 
export default Resume;
*/