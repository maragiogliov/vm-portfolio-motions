import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Work.css';
import imageSrc from '../../assets/Frame 32.jpg';
import cvDesign from '../../assets/xvcwebsite.png';
import mothercode from '../../assets/mothercode.png';
import greenhousecalculator from '../../assets/greenhousecalculator.png';
import vportfolio from '../../assets/v-portfolio.png';
import thebarn from '../../assets/3-devices-black.png';
import Header from '../Header/Header'

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'The Barn',
    location: 'Germany',
    services: 'Design & Development',
    year: '2023',
    description: 'Transformed Shopify architecture, improved UX by app management. Enhanced products with metafields, extracted insights from reports. Crafted responsive interfaces, collaborated cross-functionally at The Barn Coffee Roasters.',
    image: thebarn,
    technologies: ['Shopify', 'UI'],
    buttons: [
      {
        text: 'Web',
        url: 'https://thebarn.de/'
      },
    ]
  },
  {
    name: 'V.PORTFOLIO',
    location: 'Germany',
    services: 'Design & Development',
    year: '2024',
    description: 'This is my personal portfolio where you can check my latest work and more about my journey and who I am.',
    image: vportfolio,
    technologies: ['React', 'UI'],
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
    name: 'GH Calculator',
    location: 'Denmark',
    services: 'Design & Development',
    year: '2023',
    description: 'Designed and developed a B2C carbon footprint calculator using React.js, Redux, and IBM Carbon Design System.',
    image: greenhousecalculator,
    technologies: ['React', 'UI'],
    buttons: [
      {
        text: 'Web',
        url: 'https://www.greenhousecalculator.com'
      }
    ]
  },
  {
    name: 'Lenguapp',
    location: 'Germany',
    services: 'Design',
    year: '2022',
    description: 'I conducted a UX research study for a language learning app, including competitive analysis, user interviews, personas, wireframing, prototyping, and usability tests.',
    image: imageSrc,
    technologies: ['UX Research'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/vmaragioglio'
      }
    ]
  },
  {
    name: 'CV Desserts',
    location: 'USA',
    services: 'Design',
    year: '2022',
    description: 'I designed a visually appealing dessert website for a Florida client, highlighting ease of use, appetizing photos, simple ordering, and transparent values. A delight for eyes and taste buds!',
    image: cvDesign,
    technologies: ['Shopify', 'UI'],
    buttons: [
      {
        text: 'Behance',
        url: 'https://www.behance.net/gallery/139554081/Web-Design-for-CV-Desserts'
      }
    ]
  },
  {
    name: 'MOTHERCODE',
    location: 'Germany',
    services: 'Design & Development',
    year: '2021',
    description: 'Our Educational Management App simplifies learning for DCI Berlin School students, enabling code visualization, learning tracking, and exercise management.',
    image: mothercode,
    technologies: ['React', 'Express', 'Full Stack'],
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

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    let filtered = projects;
    if (filter === 'Design') {
      filtered = projects.filter(project => project.services.includes('Design'));
    } else if (filter === 'Development') {
      filtered = projects.filter(project => project.services.includes('Development'));
    }
    setFilteredProjects(filtered);
  }, [filter]);

  return (
    <>
      <Header />
      <div className='work-title-container'>
        <h2>Creating next level</h2>
        <h2>digital products</h2>
      </div>

      <div className='work-filter-container'>
        <div className='work-filters'>
          <button 
            className={filter === 'All' ? 'active' : ''} 
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button 
            className={filter === 'Design' ? 'active' : ''} 
            onClick={() => setFilter('Design')}
          >
            Design
          </button>
          <button 
            className={filter === 'Development' ? 'active' : ''} 
            onClick={() => setFilter('Development')}
          >
            Development
          </button>
        </div>

        <div className='work-filter-view'>
          <button>List</button>
          <button>square</button>
        </div>
      </div>

      <div className='container-mvp'>
        <div className='description-row-container'>
          <div className='description-client-container'>CLIENT</div>
          <div className='description-location-container'>LOCATION</div>
          <div className='description-services-container'>SERVICES</div>
          <div className='description-year-container'>YEAR</div>
        </div>

        {filteredProjects.map((project, index) => (
          <div className='section-mvp card' key={index}>
            <div className='card-text-container'>
              <div className='projects-title'>
                <h2>{project.name}</h2>
              </div>

              <div className='projects-location'>    
                <h2>{project.location}</h2>
              </div>

              <div className='servi-year-container'>
                <div className='projects-services'>    
                  <h2>{project.services}</h2>
                </div>

                <div className='projects-year'>    
                  <h2>{project.year}</h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
