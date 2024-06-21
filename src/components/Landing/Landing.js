import React from 'react';
import './landing.css';
import { ReactComponent as BehanceIcon } from '../../assets/behance-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin-icon.svg';

import resume from '../../assets/Victor_Maragioglio_Resume_2024.pdf';
import lebenslauf from '../../assets/Victor_Maragioglio_Lebenslauf_2024.pdf';

export default function Landing() {
  return (
    <section className="landing-container">
      <h1 className="landing-title">portfolio</h1>
      <h6 className="landing-hola">Hola, soy</h6>
      <h5 className="landing-name">Victor</h5>
      <h2 className="landing-profession">Junior Frontend Developer</h2>
      <h3 className="landing-location">Based in Germany</h3>

      <div className="landing-icons-container">
        <a href="https://github.com/maragiogliov" target="_blank" rel="noreferrer">
          <GithubIcon className="landing-icon" />
        </a>
        <a href="https://www.linkedin.com/in/victor-maragioglio-ba3073214/" target="_blank" rel="noreferrer">
          <LinkedinIcon className="landing-icon" />
        </a>
        <a href="https://www.behance.net/vmaragioglio" target="_blank" rel="noreferrer">
          <BehanceIcon className="landing-icon" />
        </a>
      </div>
      <div className="buttons-container">
        <a href={resume} download="CV-Victor-Maragioglio" className="download-button">
          Download Resume
        </a>
        <a href={lebenslauf} download="CV-Victor-Maragioglio" className="download-button">
          Lebenslauf herunterladen       
        </a>
      </div>
    </section>
  );
}          

