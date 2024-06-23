import React, { useEffect, useRef } from 'react';
import './landing.css';
import gsap from 'gsap';
import horizontalLoop from "../../assets/seamless-scroll";

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

      const loop = horizontalLoop(boxes, { paused: false, repeat: -1, speed: 1 });

      boxes.forEach((boxtest, i) => {
        boxtest.addEventListener("click", () => loop.toIndex(i, { duration: 0.8, ease: "power1.inOut" }));
      });
    }
  }, []);

  return (
    <section className="landing-container">
      <nav className='nav-container-landing'>
        <div className="landing-hola">© Code by Victor Maragioglio</div>
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
          <div ref={el => boxesRef.current[0] = el} className="boxtest">VICTOR</div>
          <div ref={el => boxesRef.current[1] = el} className="boxtest">MARAGIOGLIO</div>
    
        </div>
    </section>
  );
}
