import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './Work.css';
import thebarn from '../../assets/3-devices-black.png';
import imageSrc from '../../assets/Frame 32.jpg';
import cvDesign from '../../assets/xvcwebsite.png';
import mothercode from '../../assets/mothercode.png';
import greenhousecalculator from '../../assets/greenhousecalculator.png';
import vportfolio from '../../assets/v-portfolio.png';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const [filter, setFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const workRef = useRef(null);

  useEffect(() => {
    fetch('/WorksData.json')
      .then(response => response.json())
      .then(data => {
        // Replace placeholders with actual image imports
        const updatedData = data.map(project => {
          if (project.image === 'thebarn') project.image = thebarn;
          if (project.image === 'imageSrc') project.image = imageSrc;
          if (project.image === 'cvDesign') project.image = cvDesign;
          if (project.image === 'mothercode') project.image = mothercode;
          if (project.image === 'greenhousecalculator') project.image = greenhousecalculator;
          if (project.image === 'vportfolio') project.image = vportfolio;
          return project;
        });
        setProjects(updatedData);
        setFilteredProjects(updatedData);
      })
      .catch(error => console.error('Error fetching the projects data:', error));
  }, []);

  useEffect(() => {
    let filtered = projects;
    if (filter === 'Design') {
      filtered = projects.filter(project => project.services.includes('Design'));
    } else if (filter === 'Development') {
      filtered = projects.filter(project => project.services.includes('Development'));
    }
    setFilteredProjects(filtered);
  }, [filter, projects]);

  useEffect(() => {
    gsap.set(workRef.current, { opacity: 1 });
  }, []);

  return (
    <div className='work-main-container' ref={workRef}>
      <Header />
      <div className='work-title-container'>
        <h2>Creating next level</h2>
        <h2>digital products</h2>
      </div>

      <div className='work-filter-container'>
        <div className='work-filters'>
          <button className={filter === 'All' ? 'active' : ''} onClick={() => setFilter('All')}>All</button>
          <button className={filter === 'Design' ? 'active' : ''} onClick={() => setFilter('Design')}>Design</button>
          <button className={filter === 'Development' ? 'active' : ''} onClick={() => setFilter('Development')}>Development</button>
        </div>
        <div className='work-filter-view'>
          <button>List</button>
          <button>Square</button>
        </div>
      </div>

      <div className='container-mvp'>
        <div className='description-row-container'>
          <div className='description-client-container'>CLIENT</div>
          <div className='description-location-container'>LOCATION</div>
          <div className='description-servi-year-container'>
            <div className='description-services-container'>SERVICES</div>
            <div className='description-year-container'>YEAR</div>
          </div>
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
      <Footer />
    </div>
  );
}
