import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home'); // State to track active section

  // Typed.js initialization
  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Third Year Student', 'Software Engineer', 'Entrepreneur'],
      typeSpeed: 180,
      backSpeed: 180,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  // Intersection Observer to detect active section
  useEffect(() => {
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'aboutme', ref: aboutRef },
      { id: 'projects', ref: projectsRef },
      { id: 'contact', ref: contactRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
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
        {/* Conditionally render the navigation bar */}
        {activeSection !== 'home' && (
          <nav className="NavBar">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </nav>
        )}
      </div>

      {/* Sections */}
      <section id="home" ref={homeRef}>
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

      <section id="aboutme" ref={aboutRef}>
        <h2>About Me</h2>
      </section>

      <section id="projects" ref={projectsRef}>
        <h2>Projects</h2>
      </section>

      <section id="contact" ref={contactRef}>
        <div className="ContactContent">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me! I'd love to hear from you.</p>
          <div className="ContactImages">
            <a href="https://github.com/jaclynsunardi" target="_blank" rel="noopener noreferrer">
              <img src="github.png" alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/jaclynsunardi" target="_blank" rel="noopener noreferrer">
              <img src="LI-In-Bug.png" alt="LinkedIn" />
            </a>
            <a href="mailto:jaclyn.sunardi@gmail.com">
              <img src="Gmail-logo.png" alt="Gmail/Mail" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;