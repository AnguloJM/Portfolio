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
            src="/assets/Screen Shot 2020-12-11 at 2.37.52 PM (2).png"
            alt="project sample"
          />
          <div className="card-content">
            <h2 className="projects-name">Kepler</h2>
            <p className="projects-description">Kepler is a clone of the iTunes Store. Created with Vanilla 
            Javascript and utilization of the iTunes Store API, users can stay up to date with top rated songs 
            and search for their favorite songs. Returned data includes albums, artist, and music samples.
            </p>
            <div className="project-buttons">
            <a href="https://angulojm.github.io/Kepler/" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Live Site</button></a>
              <a href="https://github.com/AnguloJM/Kepler"target="_blank" rel="noopener noreferrer"><button className="gh-buttons">Github</button></a>  
            </div>
          </div>
        </div>
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/Screen Shot 2020-12-11 at 4.03.08 PM.png"
            alt="project sample"
          />
          <div className="card-content">
            <h2 className="projects-name">Venture-Roulette</h2>
            <p className="projects-description"> Utilizing React and the Airtable API, Ventur-Roulette provides a fun way
            to help users pick their next travel destination. Venture-Roulette shows the user a catalog of pictures,
            not mentioning the destination. The user then likes the pictures that catch their eye. Likes are then 
            tallied up and reveal their next destination.
            </p>
            <div className="project-buttons">
              <a href="https://stoic-boyd-d4e4cf.netlify.app" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Live Site</button></a>
              <a href="https://github.com/AnguloJM/Venture-Roulette"target="_blank" rel="noopener noreferrer"><button className="gh-buttons">Github</button></a>   
            </div>
          </div>
        </div>
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/Screen Shot 2020-12-12 at 12.16.40 PM.png"
            alt="project sample"
          />
          <div className="card-content">
            <h2 className="projects-name">Teacher Source</h2>
            <p className="projects-description">Teacher Source is the result of a 
            cross-collaboration with a UX team. With the help of two other Software Engineers, 
            our team took the UX/UI Team's
            design and brought it to life. This project uses Express, React.js, and Mongo DB
            to create a dashboard for teachers to upload and share lesson planning resources.
            </p>
            <div className="project-buttons">
            <a href="https://teacher-source.netlify.app/" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Live Site</button></a>
              <a href="https://github.com/AnguloJM/teachersource"target="_blank" rel="noopener noreferrer"><button className="gh-buttons">Github</button></a>    
            </div>
          </div>
        </div>
        <div className="project-cards">
          <img
            id="project-imgs"
            src="/assets/Screen Shot 2020-12-11 at 2.42.42 PM (2).png"
            alt="project sample"
          />
          <div className="card-content">
            <h2 className="projects-name">Babel's Shelf</h2>
            <p className="projects-description">Created an online library of books using React and Ruby on Rails.
              Users must create an account and login to use the application. All users can view books within the library.
              If users do not see their desired book, they can add a book to the the library. 
              Users can also personalize and save their own favorite books to your personal 
              shelf!
            </p>
            <div className="project-buttons">
              <a href="https://festive-albattani-b1d71e.netlify.app/" target="_blank" rel="noopener noreferrer" ><button className="ls-buttons">Live Site</button></a>
              <a href="https://github.com/AnguloJM/Babels-Shelf"target="_blank" rel="noopener noreferrer" ><button className="gh-buttons">Github</button></a> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Projects;