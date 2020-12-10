import React from 'react';
import './ContactMe.css'

const ContactMe = () => {

  return (
    <div className="contactme-box">
      <div className="contactme-header">
        <h2 id="contactme-title">Want to work together?</h2>
        <p id="contactme-message">Contact me! Currently looking for new opportunities.</p>
      </div>
      <div className="contacts">
        <form className="contactme-form" action="https://formspree.io/f/meqprzqg" method="post">
          <div>
            <label> Name:</label>
            <input type="text" name="name" required/>
          </div>
          <div>
            <label> Email:</label>
            <input type="email" name="email" required/>
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" required></textarea>
          </div>
          <button type="submit" className="submit-button"><span>Send</span></button>
        </form>
      </div>
      <div className="footer">
        <div className="icons">
          <a href="https://linkedin.com/in/jairo-angulo-232370139" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin-square"></a>
          <a href="https://github.com/AnguloJM" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
        </div>
        <p id="copyright">Copyright <i class="fa fa-copyright"></i> Jairo Angulo 2020</p>
      </div>
    </div>
  );
};

export default ContactMe;