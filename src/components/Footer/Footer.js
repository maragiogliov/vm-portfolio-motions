import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer-container">


      <div className='footer-first-container'>

        <div className='headshot-fulltitle-container'>

            <div className='headshot-title-container'>

                <img className='footer-headshot'/>
                <div className='footer-title'>Let's work </div>

            </div>

            <div className='footer-title'>together</div>

        </div>

        <div className='line'>
            <a href='/contact' className='circle-overline'>Get in touch</a>
        </div>

        <div className='buttons-footer-container'>
          <button> victormaragioglio@gmail.com</button>
          <button> +49 1523 6786964</button>
        </div>

      </div>
      


      <div className='footer-bottom-info-container'>

        <div className='footer-version-time-container'>
          <div className='footer-version-container'>
            <div>VERSION</div>
            <div>2024©Edtion</div>
          </div>

          <div>
            <div>LOCAL TIME</div>
            <div>03:16PM GMT+2</div>
          </div>
        </div>

        <div>
          <div>SOCIALS</div>
          <div className='footer-social-container'>
            <a>Instagram</a>
            <a>Behance</a>
            <a>LinkedIn</a>
          </div>
        </div>

      </div>
    
    </div>
  );
}

