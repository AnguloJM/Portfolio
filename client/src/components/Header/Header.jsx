import React from 'react'
import './Header.css'

const Header = () => {  

  return (
    <div className="header-container">
      
      <img
        id="home-img"
        src="/assets/foggy-mountains-nature-fog.jpg"
        alt="Mountain Image"
      />
      <div id="name-logo">
        <p>JA</p>
      </div>
      <ul className="links">
        <li id="home-link"><a href="#home-img">Home</a></li>
        <li id="aboutme-link"><a href="#bio-title">About Me</a></li>
        <li id="projects-link"><a href="#projects-section-title">Projects</a></li>
        <li id="contactme-link"><a href="#contactme-title">Contact Me</a></li>
      </ul>
      <div className="short-bio">
        <img id="s-bio-img" src="/assets/366058cd421e6a981e50c6f800abbbd0.png" alt="Bio Image" />
        <p id="intro-name">Jairo Angulo</p>
        <p id="intro-statement">Aspiring Software-Engineer | Bringing Ideas to Life</p>
      </div>
    </div>
)
}

export default Header;