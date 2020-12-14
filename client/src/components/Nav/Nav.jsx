import React, {useState, useEffect} from 'react';
import './Nav.css';

const Nav = () => {

    const [nav, setNav] = useState("nav");

    const listenScrollEvent = (event) => {
      if (window.scrollY < 50) {
        return setNav("nav")
      } else if (window.scrollY > 52) {
        return setNav("nav nav-is-scrolled")
      }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', listenScrollEvent);
    
      return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, []);
  
  return (
    <div className={nav}>
      <div className="wrapper">
        <div id="name-logo">
          <p>JA</p>
        </div>
        <ul className="links">
          <li id="home-link"><a href="#home-img">Home</a></li>
          <li id="projects-link"><a href="#projects-section-title">Projects</a></li>
          <li id="aboutme-link"><a href="#bio-title">About Me</a></li>
          <li id="contactme-link"><a href="#contactme-title">Contact Me</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav;