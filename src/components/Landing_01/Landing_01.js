import React from 'react';
import './Landing_01.css';
import Footer from '../Footer/Footer';

export const Landing_01 = () => {
  return (
    <>

    <section className='container-landing01'>

      <div className='sub-container-text'>

        <div className='first-text'>Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.</div>


          <div className='second-text'> The combination of my passion for design, code & interaction positions me in a unique place in the web design world</div>

      </div>

      <div className='sub-container-btn'>


      <div className='second-text-mobile'> The combination of my passion for design, code & interaction positions me in a unique place in the web design world</div>

      <a href="/about" className='btn-aboutme'> About me </a>

      </div>
      
 
        

    </section>
    <Footer />

    </>
  )
}

export default Landing_01;