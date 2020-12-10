import React from 'react'
import './Projects.css'

const Projects = () => {
  return (
    <div className="projects-box">
      <div className="projects-box-header">
        <h2 id="projects-section-title">Projects</h2>
        <p id="projects-intro-message">Examples of recent projects that I've worked on.</p>
      </div>
      <div className="projects">
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <div className="card-content">
            <h2 className="projects-name">Kepler</h2>
            <p className="projects-description">Created a website for Soromma Technologies using React. Was contracted to make a one-page website after the delivery of a wire-frame to the CEO. For this wesite I decide to use syled-components as a new tool.
            </p>
            <button>Live Site</button>
            <button>Github</button>  
          </div>
        </div>
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <div className="card-content">
            <h2 className="projects-name">Venture-Roulette</h2>
            <p>Created a website for Soromma Technologies using React. Was contracted to make a one-page website after the delivery of a wire-frame to the CEO. For this wesite I decide to use syled-components as a new tool.
            </p>
            <button>Live Site</button>
            <button>Github</button>  
          </div>
        </div>
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <div className="card-content">
            <h2 className="projects-name">Teacher Source</h2>
            <p>Created a website for Soromma Technologies using React. Was contracted to make a one-page website after the delivery of a wire-frame to the CEO. For this wesite I decide to use syled-components as a new tool.
            </p>
            <button>Live Site</button>
            <button>Github</button>  
          </div>
        </div>
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/lamborghini-vision-gran-turismo-as-batmobile-t5.jpg"
          />
          <div className="card-content">
            <h2 className="projects-name">Babel's Shelf</h2>
            <p>Created a website for Soromma Technologies using React. Was contracted to make a one-page website after the delivery of a wire-frame to the CEO. For this wesite I decide to use syled-components as a new tool.
            </p>
            <button>Live Site</button>
            <button>Github</button>  
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;