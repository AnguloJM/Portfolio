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
        <li id="home-link">Home</li>
        <li id="aboutme-link">About Me</li>
        <li id="projects-link">Projects</li>
        <li id="contactme-link">Contact Me</li>
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