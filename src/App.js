import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home'); 
  const [activeTab, setActiveTab] = useState('networking'); 

  useEffect(() => {
    const typed = new Typed('.auto-type', {
      strings: ['Third Year Student', 'Software Engineer', 'Entrepreneur'],
      typeSpeed: 180,
      backSpeed: 180,
      loop: true,
    });
    return () => typed.destroy();
  }, []);


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
      { threshold: 0.5 } 
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

  
  const projects = {
    networking: [
      {
        title: 'Networking Project 1',
        description: 'Lorem ipsum dolor sit amet nulla adipiscing elit. Nunc maximus, nec ut commodo.',
        repoUrl: "https://github.com/nrhuang/dripcheck"

      },
    
    ],
    software: [
      {
        title: 'watchSocket',
        description: 'watchSocket enables you to watch videos with buddies, without the need of worrying about syncing up your videos!',
        repoUrl: "https://github.com/VamiqValji/AngelHacks-2021"

      },
      {
        title: 'JobSecurity Hub',
        description: 'An application that scrapes Indeed.com for relevant job postings.',
        repoUrl: "https://github.com/nrhuang/hackthebreak"

      },
    ],
    ai: [
      {
        title: 'DripCheck',
        description: 'AI-powered outfit generator that recommends weather-appropriate styles based on your location',
        repoUrl: "https://github.com/nrhuang/dripcheck"
      }
    ],
  };

  return (
    <div className="App">
      <div className="Header">
        <div className="Logo-Brand">
          <a href="#home">
            <img src="logo.png" alt="Logo" className="App-logo" />
          </a>
        </div>
        
        {activeSection !== 'home' && (
          <nav className="NavBar">
            <a href="#home">Home</a>
            <a href="#aboutme">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </nav>
        )}
      </div>

      
      <section id="home" ref={homeRef}>
        <div className="Content">
          <div className="NameText">
            <h1>Hi, I'm Jaclyn Sunardi!</h1>
            <p><span className="auto-type"></span></p>
          </div>
          <div className="HomePagePhoto">
            <img src="image.jpg" alt="Profile Picture" />
          </div>
         
          <div className="nav-buttons">
            <a href="#aboutme" className="nav-button">About Me</a>
            <a href="#projects" className="nav-button">Projects</a>
            <a href="#contact" className="nav-button">Contact Me</a>
          </div>
        </div>
      </section>

      <section id="aboutme" ref={aboutRef}>
        <div className='AboutContent'>
          <h2>About Me</h2>
          <div className='AboutText'>
            <p>Hi, I'm Jaclyn Sunardi. I am currently a third year student at Simon Fraser University pursuing a Bachelor's of Science Degree in Computing Science with a concentration in Entrepreneurship. I am interested in cloud computing, software development, artificial intelligence, and embedded systems. <br /> <br/> <a href="Resume - Jaclyn Sunardi.pdf" target="_blank" rel="noopener noreferrer">My Resume</a></p>
            <div>
              <p> Experience: </p>
              <ul>
                <li>Full Stack Developer Intern @ ResponsiveAds</li>
                <li>Web Developer @ DL Roofing Ltd.</li>
                <li>Director of Events and Logistics @ SFU Google Developer Student Club</li>
                <li>Mentor @ SFU WiCS Mentorship Program</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="SkillsSection">
          <h4>Skills</h4>
          <img src="python.png" alt='Python' />
          <img src="c++.png" alt='C++' />
          <img src="js.png" alt='JavaScript' />
          <img src="java.png" alt='Java' />
          <img src="aws.png" alt='AWS' />
          <img src="react.png" alt='React' />
          <img src="matlab.jpeg" alt='Matlab' />
          <img src="svelte.png" alt='Svelte' />
        </div>
      </section>

      <section id="projects" ref={projectsRef}>
        <h2>Projects</h2>
        <div className="ProjectsTabs">
          <button
            className={activeTab === 'networking' ? 'active' : ''}
            onClick={() => setActiveTab('networking')}
          >
            Networking
          </button>
          <button
            className={activeTab === 'software' ? 'active' : ''}
            onClick={() => setActiveTab('software')}
          >
            Software Development
          </button>
          <button
            className={activeTab === 'ai' ? 'active' : ''}
            onClick={() => setActiveTab('ai')}
          >
            Artificial Intelligence
          </button>
        </div>
        <div className="ProjectsContent">
          {projects[activeTab].map((project, index) => (
            <div key={index} className="ProjectCard">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <button className="ViewProjectButton">View Project</button>
              </a>
            </div>
          ))}
        </div>
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