import React from 'react'
import './About.css';
import victorPic from '../../assets/victorenalbania.jpg';
import Header from '../Header/Header';




export default function About() {
  return (
      <>
      <Header/>

      <div className='container-first'>

        <div className='first-title'>Helping brands thrive</div>
        <div className='first-title'>in the digital world</div>
        <div className='line'>
          <div className='circle-overline'></div>
        </div>

      </div>

      <div className='container-second'>

        <div className='container-textfirst-about'>
        <div className='container-flechita-text'>
           
            <div className='container-double-text'>
              <div>I help companies from all over the world with tailor made solutions. With each project, I push my work to new horizons, always putting quality first.</div>
              <div className='secondtext-short'>Always Exploring</div>
            </div>
        </div>

        </div>

        <div className='container-image-about'>
        <img src={victorPic} alt="Victor in Albania" />
        </div>

      </div>

    
      </>
    )
  }