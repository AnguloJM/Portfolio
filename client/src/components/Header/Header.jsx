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
      <div className="short-bio">
        <img id="s-bio-img" src="/assets/me.jpg" alt="Bio Image" />
        <p id="intro-name">Jairo Angulo</p>
        <p id="intro-statement">Aspiring Software-Engineer | Bringing Ideas to Life</p>
      </div>
    </div>
)
}

export default Header;