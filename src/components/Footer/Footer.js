import React, { useEffect, useState } from 'react';
import './Footer.css';

export default function Footer() {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateLocalTime = () => {
      const date = new Date();
      const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
      setLocalTime(date.toLocaleTimeString([], options));
    };

    // Initial time set
    updateLocalTime();

    // Update time every second
    const intervalId = setInterval(updateLocalTime, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="footer-container">
      <div className='footer-first-container'>
        <div className='headshot-fulltitle-container'>
          <div className='headshot-title-container'>
            <img className='footer-headshot' alt="Headshot" />
            <div className='footer-title'>Let's work </div>
          </div>
          <div className='footer-title'>together</div>
        </div>
        <div className='line'>
          <a href='/contact' className='circle-overline'>Get in touch</a>
        </div>
        <div className='buttons-footer-container'>
          <button>victormaragioglio@gmail.com</button>
          <button>+49 1523 6786964</button>
        </div>
      </div>

      <div className='footer-bottom-info-container'>
        <div className='footer-version-time-container'>
          <div className='footer-version-container'>
            <div className='footer-title-end'>VERSION</div>
            <div>2024©Edition</div>
          </div>
          <div>
            <div className='footer-title-end'>LOCAL TIME</div>
            <div>{localTime}</div>
          </div>
        </div>
        <div>
          <div className='footer-title-end'>SOCIALS</div>
          <div className='footer-social-container'>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer">Behance</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
