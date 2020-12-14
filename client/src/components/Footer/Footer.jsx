import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://linkedin.com/in/jairo-angulo-232370139" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square"></a>
        <a href="https://github.com/AnguloJM" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        <a href="https://drive.google.com/file/d/12_4erQrYcM5xZNDXXAIDQmIdGfgmmRFO/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text" aria-hidden="true"></i></a>
      </div>
      <p id="copyright">Copyright <i class="fa fa-copyright"></i> Jairo Angulo 2020</p>
    </div>
  )
}

export default Footer;