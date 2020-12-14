import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="main-bio-box">
      <div className="inner-bio-box">
        <img id="main-bio-pic" src="/assets/Screenshot_20201214-094807_Gallery.jpg"/>
        <article className="main-bio">
          <h2 id="bio-title">About Me</h2>
          <p id="bio-statement">Highly passionate and self-driven Software 
          Engineer with a background in field engineering support, management, 
          remote user, and retail. Proven outstanding problem solving, 
          critical thinking, creative, analytical ability, and computer 
          skills. Well-rounded technical skills with superior IT 
          troubleshooting and analysis experience. Self-starter with 
          persistent follow through ensuring problems are resolved,
          deadlines are met, and goals achieved.
          </p>
          <h2 id="skills-title">Languages & Frameworks</h2>
          <p id="skills">HTML, CSS, JavaScript, React, Node.js, Ruby, Ruby on Rails, Postgresql, Express, MongoDB, & Mongoose.</p>
        </article>
      </div>
    </div>
  )
}

export default AboutMe;