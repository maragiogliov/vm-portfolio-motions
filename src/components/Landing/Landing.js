import React, { useLayoutEffect, useRef } from 'react';
import './landing.css';
import { ReactComponent as BehanceIcon } from '../../assets/behance-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/linkedin-icon.svg';
import resume from '../../assets/Victor_Maragioglio_Resume_2024.pdf';
import lebenslauf from '../../assets/Victor_Maragioglio_Lebenslauf_2024.pdf';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.box');
      boxes.forEach((box) => {
        gsap.to(box, {
          x: 100,
          rotation: 360,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: 0.5,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    <section ref={main} className="landing-container">
      <div className="container-animation">
        <div className="cube">
          <div className="cube__face front">JavaScript</div>
          <div className="cube__face back">HTML</div>
          <div className="cube__face left">CSS</div>
          <div className="cube__face right">REACT</div>
          <div className="cube__face top">SHOPIFY LIQUID</div>
          <div className="cube__face bottom">GSAP</div>
        </div>
      </div>

      <h6 className="landing-hola">Hola, soy</h6>
      <h5 className="landing-name">Victor</h5>
      <h2 className="landing-profession">Frontend Developer</h2>
      <h3 className="landing-location">Based in Berlin</h3>

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

      <div className="section flex-center column">
        <h2>Basic ScrollTrigger Baby</h2>
        <p>Scroll down to see the magic happen!!</p>
      </div>
      <div className="section flex-center column">
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
        <div className="box gradient-blue">box</div>
      </div>
      <section className="section"></section>
    </section>
  );
}
