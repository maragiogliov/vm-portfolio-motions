import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import './Header.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sideNavRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to(sideNavRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.position = 'fixed';
      document.documentElement.style.width = '100%';
      document.documentElement.style.height = '100%';
    } else {
      gsap.to(sideNavRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
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

  const getLinkClass = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav className="nav-container-landing">
      <a href="/" className="home-link">© Code by Victor</a>
      <div className="hambu-container">
        <a href="/work" className={`landing-hola ${getLinkClass('/work')}`}>Work</a>
        <a href="/about" className={`landing-hola ${getLinkClass('/about')}`}>About</a>
        <a href="/contact" className={`landing-hola ${getLinkClass('/contact')}`}>Contact</a>
      </div>
      <div className="hambu-container-mobile" onClick={toggleMenu}>
        <div className="landing-hola">• Menu</div>
      </div>
      <div className="side-nav" ref={sideNavRef}>
        <div className="close-btn" onClick={toggleMenu}>X</div>

        <div className='links-pages'>
          <div className='description-content'>
            <p>NAVIGATION</p>
            <hr className='hr-class'></hr>
          </div>
          <a href="/" className={`side-nav-link ${getLinkClass('/')}`} onClick={toggleMenu}>Home</a>
          <a href="/work" className={`side-nav-link ${getLinkClass('/work')}`} onClick={toggleMenu}>Work</a>
          <a href="/about" className={`side-nav-link ${getLinkClass('/about')}`} onClick={toggleMenu}>About</a>
          <a href="/contact" className={`side-nav-link ${getLinkClass('/contact')}`} onClick={toggleMenu}>Contact</a>
        </div>
        
        <div className='social-media'>
          <div className='description-content'>
            <p>SOCIALS</p>
            <hr className='hr-class'></hr>
          </div>
          <div className="social-media-links">
            <a href="#" className="social-link">Behance</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
