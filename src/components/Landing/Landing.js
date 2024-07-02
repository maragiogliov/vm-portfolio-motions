import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import horizontalLoop from '../../assets/seamless-scroll';
import './landing.css';
import Header from '../Header/Header';
import Landing_01 from '../Landing_01/Landing_01';

gsap.registerPlugin(ScrollTrigger);

const Landing = () => {
  const landingRef = useRef(null);
  const wrapperRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;
    const colors = ['#f5f5f5'];

    // Horizontal loop animation initialization
    if (boxes.length > 0) {
      gsap.set(boxes, {
        backgroundColor: gsap.utils.wrap(colors),
      });

      horizontalLoop(boxes, { paused: false, repeat: -1, speed: 0.8 });
    }

    // GSAP animation with ScrollTrigger
    gsap.fromTo(
      boxes,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    );

    // Ensure cleanup of animations when component unmounts
    return () => {
      gsap.killTweensOf(boxes);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Immediately set opacity to 1 once component mounts
  useEffect(() => {
    gsap.set(landingRef.current, { opacity: 1 });
  }, []);

  return (
    <>
    
    <section className="landing-container" ref={landingRef}>
      <Header />
      <div className="wrapper" ref={wrapperRef}>
        <div ref={(el) => (boxesRef.current[0] = el)} className="boxtest">
          Victor
        </div>
        <div ref={(el) => (boxesRef.current[1] = el)} className="boxtest">
          Maragioglio
        </div>
        <div ref={(el) => (boxesRef.current[2] = el)} className="boxtest">
          —
        </div>
        <div ref={(el) => (boxesRef.current[3] = el)} className="boxtest">
          Victor
        </div>
        <div ref={(el) => (boxesRef.current[4] = el)} className="boxtest">
          Maragioglio
        </div>
        <div ref={(el) => (boxesRef.current[5] = el)} className="boxtest">
          —
        </div>
      </div>
      <section className="label-text">
        <section>
          <svg
            className="flecha-icon"
            width="20"
            height="20"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="13" y="45" width="38" height="6" fill="black" />
            <rect
              x="51"
              y="13"
              width="38"
              height="6"
              transform="rotate(90 51 13)"
              fill="black"
            />
            <rect
              x="4.67915"
              y="0.436523"
              width="65.6669"
              height="6"
              transform="rotate(45 4.67915 0.436523)"
              fill="black"
            />
          </svg>
          <div> Freelance </div>
          <div> Designer & Developer </div>
        </section>
        <section className="container-globo">
          <svg className="globe" viewBox="0 0 100 100">
            <circle className="wireframe" cx="50" cy="50" r="48"></circle>
            <ellipse className="wireframe" cx="50" cy="50" rx="48" ry="24"></ellipse>
            <ellipse className="wireframe" cx="50" cy="50" rx="48" ry="12"></ellipse>
            <ellipse className="wireframe" cx="50" cy="50" rx="48" ry="6"></ellipse>
            <ellipse
              className="wireframe"
              cx="50"
              cy="50"
              rx="48"
              ry="48"
              transform="rotate(30 50 50)"
            ></ellipse>
            <ellipse
              className="wireframe"
              cx="50"
              cy="50"
              rx="48"
              ry="48"
              transform="rotate(60 50 50)"
            ></ellipse>
            <ellipse
              className="wireframe"
              cx="50"
              cy="50"
              rx="48"
              ry="48"
              transform="rotate(90 50 50)"
            ></ellipse>
            <ellipse
              className="wireframe"
              cx="50"
              cy="50"
              rx="48"
              ry="48"
              transform="rotate(120 50 50)"
            ></ellipse>
            <ellipse
              className="wireframe"
              cx="50"
              cy="50"
              rx="48"
              ry="48"
              transform="rotate(150 50 50)"
            ></ellipse>
            <ellipse
              className="wireframe"
              cx="50"
              cy="50"
              rx="48"
              ry="48"
              transform="rotate(180 50 50)"
            ></ellipse>
          </svg>
        </section>
      </section>
    </section>
    <Landing_01 />
    </>
  );
};

export default Landing;
