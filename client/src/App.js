import React from 'react';
import Header from './components/Header/Header';
import AboutMe from './screens/AboutMe/AboutMe';
import Projects from './screens/Projects/Projects';
import ContactMe from './screens/Contact Me/ContactMe';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
