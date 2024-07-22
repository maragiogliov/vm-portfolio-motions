import React, { useEffect, useState } from 'react';
import './Landing_02.css';
import thebarn from '../../assets/3-devices-black.png';
import imageSrc from '../../assets/Frame 32.jpg';
import cvDesign from '../../assets/xvcwebsite.png';
import mothercode from '../../assets/mothercode.png';
import greenhousecalculator from '../../assets/greenhousecalculator.png';
import vportfolio from '../../assets/v-portfolio.png';

export default function Landing_02() {
  const [projects, setProjects] = useState([]);

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

  return (
    <>
      <div className='landing_02-main-container'>
        <div className='title-landing_02'>RECENT WORK</div>
        <div className='landing_02-projects-container'>
          {projects.slice(0, 3).map((project, index) => (
            <div className='landing_02-project-card' key={index}>
              <div className='landing_02-project-info'>
                <h2>{project.name}</h2>
                <p>{project.services}</p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <button className='landing_02-morework-button'>More Work</button>


    </>
  );
}
