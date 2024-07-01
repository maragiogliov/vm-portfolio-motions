// src/components/Splash/Splash.js
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Splash.css'; // Create appropriate CSS for your splash animation

const Splash = ({ setShowSplash }) => {
  const splashRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ onComplete: () => setShowSplash(false) });
    timeline.to(splashRef.current, {
      duration: 1,
      opacity: 1,
      ease: 'power2.inOut',
    });
    timeline.to(splashRef.current, {
      duration: 1,
      opacity: 0,
      ease: 'power2.inOut',
      delay: 1,
    });

    return () => {
      timeline.kill();
    };
  }, [setShowSplash]);

  return (
    <div className="splash" ref={splashRef}>
      {/* Add your splash content here */}
      <h1>Welcome</h1>
    </div>
  );
};

export default Splash;
