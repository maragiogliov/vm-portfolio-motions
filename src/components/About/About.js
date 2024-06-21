import React from 'react'
import './About.css';
import victorPic from '../../assets/victor-pic3.jpg';




export default function About() {
  return (
      <>
      <div className='about-container'>
        <h4 className='about-history'>My history </h4>
        <h1 className='about-me'>About me</h1>
        <div className='about-content'>
          <div className='about-left'>
            <img src={victorPic} alt="Victor"className='about-victor-image' />       
          </div>
          <div className='about-right'>
            <h2>Hey!</h2>
            <p>
            I'm a Junior Front-End Developer with a passion for coding and an eye for UX/UI design. My journey has taken me through various experiences, from traveling and volunteering around Europe to settling in Berlin to pursue my interest in coding.  

            </p>
            <br/>
            <p>
            Currently, I'm working with Shopify Liquid Template Language, proficiently re-structuring Shopify's Liquid architecture for enhanced performance and scalability. 
            </p>
            <br/>

            <p>
            ...and that person is me, creating while flying high in the sky.




</p>
            
          <div className='about-years-container'>
            <h1 className='about-years'>3+ years</h1>
            <h4 className='about-years-description'>Web Dev Experience</h4>

            <h1 className='about-years'>7+ years</h1>
            <h4 className='about-years-description'>Traveling and Working Around The World</h4>

            <h1 className='about-years'>10+ years</h1>
            <h4 className='about-years-description'>Architectural Design</h4>
          </div>
          </div>
        </div>
      </div>
      </>
    )
  }