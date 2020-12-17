import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="icons">
        <a href="https://linkedin.com/in/jairo-angulo-232313709" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square"><span>linkedin</span></a>
        <a href="https://github.com/AnguloJM" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i><span>github</span></a>
        <a href="https://drive.google.com/file/d/1w4y5GoKcjVQzEBq8bchAIqppznwfgokf/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-text" aria-hidden="true"></i><span>resume</span></a>
      </div>
      <p id="copyright">Copyright <i className="fa fa-copyright"></i> Jairo Angulo 2020</p>
    </div>
  )
}

export default Footer;