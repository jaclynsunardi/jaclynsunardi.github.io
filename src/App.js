import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './App.css';

function App() {
  const homeRef = useRef(null);

  useEffect(() => {
    var typed = new Typed('.auto-type', {
      strings: ['Third Year Student', 'Software Engineer', 'Entrepreneur'],
      typeSpeed: 180,
      backSpeed: 180,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <div className="Header">
        <div className="Logo-Brand">
          <a href="#home">
            <img src="logo.png" alt="Logo" className="App-logo" />
          </a>
        </div>
        <nav className='NavBar'>
          <a href="#home">Home</a>
          <a href="#aboutme">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </nav>
      </div>
      <section id = "home" ref={homeRef}>
        <div className="Content">
          <div className="NameText">
            <h1>Hi, I'm Jaclyn Sunardi!</h1>
            <p><span className="auto-type"></span></p>
          </div>
          <div className="HomePagePhoto">
            <img src="image.jpg" alt="Profile Picture" />
          </div>

          {/* Navigation Buttons Below Profile Image */}
          <div className="nav-buttons">
            <a href="#aboutme" className="nav-button">About Me</a>
            <a href="#projects" className="nav-button">Projects</a>
            <a href="#contact" className="nav-button">Contact Me</a>
          </div>
        </div>
      </section>

      {/* Sections for Navigation */}
      <section id="aboutme">
        <h2>About Me</h2>
      </section>
      <section id="projects">
        <h2>Projects</h2>
      </section>
      <section id="contact">
        <h2>Contact Me</h2>
      </section>
    </div>
  );
}

export default App;