import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Projects.css';
import imageSrc from '../../assets/Frame 32.jpg';
import cvDesign from '../../assets/xvcwebsite.png';
import mothercode from '../../assets/mothercode.png';
import greenhousecalculator from '../../assets/greenhousecalculator.png';
import vportfolio from '../../assets/v-portfolio.png';
import thebarn from '../../assets/3-devices-black.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'The Barn Coffee',
    description: 'Transformed Shopify architecture, improved UX by app management. Enhanced products with metafields, extracted insights from reports. Crafted responsive interfaces, collaborated cross-functionally at The Barn Coffee Roasters.',
    image: thebarn,
    technologies: [ 'Shopify','UI'],
    buttons: [
      {
        text: 'Web',
        url: 'https://thebarn.de/'
      },
    ]
  },
  {
    name: 'V.PORTFOLIO',
    description: 'This is my personal portfolio where you can check my latest work and more about my journey and who I am.',
    image: vportfolio,
    technologies: [ 'React','UI'],
    buttons: [
      {
        text: 'Web',
        url: 'https://vm-portfolio-iota.vercel.app/'
      },
      {
        text: 'Github',
        url: 'https://github.com/maragiogliov/vm-portfolio'
      }
    ]
  },
  {
    name: 'GH-CALCULATOR',
    description: 'Designed and developed a B2C carbon footprint calculator using React.js, Redux, and IBM Carbon Design System.',
    image: greenhousecalculator,
    technologies: [ 'React','UI'],
    buttons: [
      {
        text: 'Web',
        url: 'https://www.greenhousecalculator.com'
      }
    ]
  },
  {
    name: 'LENGUAPP',
    description: 'I conducted a UX research study for a language learning app, including competitive analysis, user interviews, personas, wireframing, prototyping, and usability tests.',
    image: imageSrc,
    technologies: [ 'UX Research'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/vmaragioglio'
      }
    ]
  },
  {
    name: 'CV DESSERTS',
    description: 'I designed a visually appealing dessert website for a Florida client, highlighting ease of use, appetizing photos, simple ordering, and transparent values. A delight for eyes and taste buds!',
    image: cvDesign,
    technologies: [ 'Shopify', 'UI'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/gallery/139554081/Web-Design-for-CV-Desserts'
      }
    ]
  },
  {
    name: 'CV DESSERTS',
    description: 'I designed a visually appealing dessert website for a Florida client, highlighting ease of use, appetizing photos, simple ordering, and transparent values. A delight for eyes and taste buds!',
    image: cvDesign,
    technologies: [ 'Shopify', 'UI'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/gallery/139554081/Web-Design-for-CV-Desserts'
      }
    ]
  },
  {
    name: 'CV DESSERTS',
    description: 'I designed a visually appealing dessert website for a Florida client, highlighting ease of use, appetizing photos, simple ordering, and transparent values. A delight for eyes and taste buds!',
    image: cvDesign,
    technologies: [ 'Shopify', 'UI'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/gallery/139554081/Web-Design-for-CV-Desserts'
      }
    ]
  },
  {
    name: 'CV DESSERTS',
    description: 'I designed a visually appealing dessert website for a Florida client, highlighting ease of use, appetizing photos, simple ordering, and transparent values. A delight for eyes and taste buds!',
    image: cvDesign,
    technologies: [ 'Shopify', 'UI'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/gallery/139554081/Web-Design-for-CV-Desserts'
      }
    ]
  },
  {
    name: 'MOTHERCODE',
    description: 'Our Educational Management App simplifies learning for DCI Berlin School students, enabling code visualization, learning tracking, and exercise management.',
    image: mothercode,
    technologies: [ 'React','Express', 'Full Stack'],
    buttons: [
      {
        text: 'Youtube',
        url: 'https://www.youtube.com/watch?v=PtlyAgL-d38&t=7s'
      },
      {
        text: 'GitHub',
        url: 'https://github.com/maragiogliov/mothercode-front-end'
      }
    ]
  }
];

export default function Projects() {
  useEffect(() => {
    const container = document.querySelector('.container-mvp');
    const sections = gsap.utils.toArray('.section-mvp');
    gsap.to(sections, {
      x: () => -(container.scrollWidth - window.innerWidth),
      ease: 'none', // Linear easing for constant speed
      duration: 4, // Adjust animation duration for quicker movement
      

      scrollTrigger: {
        trigger: '.container-mvp',
        start: '35% 40%', // Ensures the animation starts immediately
        end:'bottom 40%',
        pin: true,
        scrub: 0.1,
        markers:true, 
        
       

      }
    });
    
    
  }, []);

  return (
    <>
      <div className='container-mvp'>
        <div className='inner-container-mvp'>
          {projects.map((project, index) => (
            <div className='section-mvp card' key={index}>
              <img src={project.image} alt={project.name} />
              <div className='card-text-container'>
                <h2 className='projects-title '>{project.name}</h2>
                <div className='project-description-container'>
                  <p>{project.description}</p>
                </div>
                <div className='chips-container'>
                  {project.technologies.map((technology, index) => (
                    <div key={index} className='chip'>
                      {technology}
                    </div>
                  ))}
                </div>
                <div className='button-container'>
                  {project.buttons.map((button, index) => (
                    <a
                      key={index}
                      href={button.url}
                      className='button'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {button.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <section className='background-scrolltrigger-bottom'></section>
    </>
  );
}
