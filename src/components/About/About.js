import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import './About.css';
import victorPic from '../../assets/victorenalbania.jpg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';




export default function About() {

  const aboutRef = useRef(null);


  // Immediately set opacity to 1 once component mounts
  useEffect(() => {
    gsap.set(aboutRef.current, { opacity: 1 });
  }, []);


  return (
      <>
      <div className='about-main-container' ref={aboutRef}>

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

        <div className='container-third'>
          <div className='third-title'> I can help you with...</div>

          <div className='container-options'>

            <div className='boxes-about'>
              <h2>Design</h2>
              <p>
                With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)
              </p>

              
            </div>
            <div className='boxes-about'>
            <h2>Development</h2>
              <p>
              I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. Build with React, Vanilla or any JavaScript framework.
              </p>
            </div>
            <div className='boxes-about'>
            <h2>The full package</h2>
              <p>
              A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.
              </p>
            </div>

          </div>

        </div>
        <Footer />

      </div>
    
      </>
    )
  }