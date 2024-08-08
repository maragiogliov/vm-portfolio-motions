import React, { useEffect, useState } from 'react';
import './Landing_02.css';
import thebarn from '../../assets/thebarn-img.png';
import imageSrc from '../../assets/Lenguapp-img.png';
import cvDesign from '../../assets/XCV-img.png';
import mothercode from '../../assets/mothercode-img.png';
import greenhousecalculator from '../../assets/greenhouse-img.png';
import vportfolio from '../../assets/vportfolio-img.png';

export default function Landing_02() {
  const [projects, setProjects] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    fetch('/WorksData.json')
      .then(response => response.json())
      .then(data => {
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
      })
      .catch(error => console.error('Error fetching the projects data:', error));
  }, []);

  const numberOfProjectsToShow = screenWidth < 900 ? 4 : 4;

  return (
    <>
      <div className='landing_02-main-container'>
        <div className='title-landing_02'>RECENT WORK</div>
        <div className='landing_02-projects-container'>
          {projects.slice(0, numberOfProjectsToShow).map((project, index) => (
            <div className='landing_02-project-card' key={index}>
              <div className='landing_02-project-info'>
              <img src={project.image} alt={project.name} className='project-image' />
              <h2>{project.name}</h2>
                <p>{project.services}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <a href='/work' className='landing_02-morework-button'>More Work</a>

      
    </>
  );
}
