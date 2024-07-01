import React, { useEffect, useRef } from 'react';
import './landing.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import horizontalLoop from "../../assets/seamless-scroll";

gsap.registerPlugin(ScrollTrigger);

export default function Landing() {
  const wrapperRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;
    const colors = ["#f5f5f5"]

    if (boxes.length > 0) {
      gsap.set(boxes, {
        backgroundColor: gsap.utils.wrap(colors)
      });

      const loop = horizontalLoop(boxes, { paused: false, repeat: -1, speed: 0.8  });

    }
     // GSAP animation with ScrollTrigger
     gsap.fromTo(boxes, {
      opacity: 0,
    
      }, {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: true
      }
    });


  }, []);

  return (
    <section className="landing-container">
      <nav className='nav-container-landing'>
        <div className="landing-hola">© Code by Victor</div>
        <div className='hambu-container'>
          <div className="landing-hola">Work</div>
          <div className="landing-hola">About</div>
          <div className="landing-hola">Contact</div>
        </div>
        <div className='hambu-container-mobile'>
          <div className="landing-hola">• Menu</div>
        </div>
      </nav>
        <div ref={wrapperRef} className="wrapper">

          <div ref={el => boxesRef.current[0] = el} className="boxtest">Victor</div>
          <div ref={el => boxesRef.current[1] = el} className="boxtest">Maragioglio</div>
          <div ref={el => boxesRef.current[2] = el} className="boxtest">—</div>
          <div ref={el => boxesRef.current[3] = el} className="boxtest">Victor</div>
          <div ref={el => boxesRef.current[4] = el} className="boxtest">Maragioglio</div>
          <div ref={el => boxesRef.current[5] = el} className="boxtest">—</div>
    
        </div>
        <section className="label-text">
                <section>
                      <svg className="flecha-icon" width="20" height="20" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="13" y="45" width="38" height="6" fill="black"/>
                        <rect x="51" y="13" width="38" height="6" transform="rotate(90 51 13)" fill="black"/>
                        <rect x="4.67915" y="0.436523" width="65.6669" height="6" transform="rotate(45 4.67915 0.436523)" fill="black"/>
                      </svg>

                      <div> Freelance </div>
                      <div> Designer & Developer </div>
                </section>

                <section className="container-globo">

                    <svg class="globe" viewBox="0 0 100 100">
                        <circle class="wireframe" cx="50" cy="50" r="48"></circle>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="24"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="12"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="6"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="48" transform="rotate(30 50 50)"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="48" transform="rotate(60 50 50)"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="48" transform="rotate(90 50 50)"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="48" transform="rotate(120 50 50)"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="48" transform="rotate(150 50 50)"></ellipse>
                        <ellipse class="wireframe" cx="50" cy="50" rx="48" ry="48" transform="rotate(180 50 50)"></ellipse>
                    </svg>
                </section>
        </section>


    </section>
  );
}
