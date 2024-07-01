import React, { useState, useEffect } from 'react';
import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.position = '';
      document.documentElement.style.width = '';
      document.documentElement.style.height = '';
    }
  }, [isOpen]);

  return (
    <nav className="nav-container-landing">
      <a href="/" className="home-link">© Code by Victor</a>
      <div className="hambu-container">
        <a href="/work" className="landing-hola">Work</a>
        <a href="/about" className="landing-hola">About</a>
        <a href="/contact" className="landing-hola">Contact</a>
      </div>
      <div className="hambu-container-mobile" onClick={toggleMenu}>
        <div className="landing-hola">• Menu</div>
      </div>
      {isOpen && (
        <div className="side-nav">
          <div className="close-btn" onClick={toggleMenu}>X</div>

          <div className='links-pages'>
            <div className='description-content'>
              <p>NAVIGATION</p>
              <hr className='hr-class'></hr>
            </div>

                    <a href="/" className="side-nav-link" onClick={toggleMenu}>Home</a>
                    <a href="/work" className="side-nav-link" onClick={toggleMenu}>Work</a>
                    <a href="/about" className="side-nav-link" onClick={toggleMenu}>About</a>
                    <a href="/contact" className="side-nav-link" onClick={toggleMenu}>Contact</a>
          </div>


       
          <div className='social-media'>

          <div className='description-content'>
              <p>SOCIALS</p>
              <hr className='hr-class'></hr>
          </div>

          <div  className="social-media-links">
            <a href="#" className="social-link">Behance</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
