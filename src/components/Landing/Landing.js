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
          x: "1vh",
          rotation: 360,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 1%',
            scrub: 0.5,
            //markers: true,
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



<div className='landing-text-container'>
      <p className="landing-hola">Hola, soy</p>
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
</div>

      <div className="buttons-container">
        <a href={resume} download="CV-Victor-Maragioglio" className="download-button">
          Download Resume
        </a>
        <a href={lebenslauf} download="CV-Victor-Maragioglio" className="download-button">
          Lebenslauf herunterladen       
        </a>
      </div>

     
      <div className="scroll-trigger-container">
        <div className="box gradient-blue">Data Structures</div>
        <div className="box gradient-blue">Algorithms</div>
        <div className="box gradient-blue">Patterns</div>
      </div>
      <section className="section"></section>
    </section>
  );
}
