import React from 'react';
import './ContactMe.css'

const ContactMe = () => {

  const handleSubmit = (event) => {

  }
  
  return (
    <div className="contactme-box">
      <h2>Want to work together?</h2>
      <p>Contact me! Currently looking for new opportunities</p>
      <form>

      </form>
      <div className="icons">
        <a href="https://linkedin.com/in/jairo-angulo-232370139" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square"></a>
        <a href="https://github.com/AnguloJM" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
      </div>
      <p>Copyright &copy Jairo Angulo 2020</p>
    </div>
  );
};

export default ContactMe;