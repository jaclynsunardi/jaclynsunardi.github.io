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
          <img src="logo.png" alt="Logo" id="Logo" />
        </div>
      </div>
      <section ref={homeRef}>
        <div className="Content">
          <div className="NameText">
            <h1>Hi, I'm Jaclyn Sunardi!</h1>
            <p><span className="auto-type"></span></p>
          </div>
          <div className="HomePagePhoto">
            <img src="photo.png" alt="Profile" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
