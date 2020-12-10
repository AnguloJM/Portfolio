import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-box">
      <div className="projects-box-header">
        <h2 id="projects-title">Projects</h2>
        <p id="projects-intro-message">Examples of recent projects that I've worked on.</p>
      </div>
      <div className="projects">
        <div className="project-one">
          <img
            id="img-one"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <div className="card-content">
            <h2>Kepler</h2>
            <p>Created a website for Soromma Technologies using React. Was 
            contracted to make a one-page website after the delivery of a 
            wire-frame to the CEO. For this wesite I decide to use 
            syled-components as a new tool.
            </p>
            <button>Live Site</button>
            <button>Github</button>  
          </div>
          
        </div>
        {/* <div className="project-two">
        <img
            id="img-two"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <h2>Venture-Roulette</h2>
        </div> */}
        {/* <div className="project-three">
        <img
            id="img-three"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <h2>Teacher Source</h2>
        </div> */}
        {/* <div className="project-four">
        <img
            id="img-four"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <h2>Babel's Shelf</h2>
          <p></p>
        </div> */}
      </div>
    </div>
  )
};

export default Projects;