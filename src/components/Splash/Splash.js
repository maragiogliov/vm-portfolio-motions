import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Splash.css'; // Ensure Splash.css includes appropriate styles for your splash animation

const Splash = ({ setShowSplash }) => {
  const splashRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ onComplete: () => setShowSplash(false) });

    // Ensure splash starts with the correct background color
    gsap.set(splashRef.current, { backgroundColor: '#141414' });

    // Animation to fade in the splash screen from the dark grey color
    timeline.to(splashRef.current, {
      duration: 1,
      opacity: 1,
      ease: 'power2.inOut',
    });

    // Animation to withdraw the splash screen from bottom to top
    timeline.to(splashRef.current, {
      duration: 1,
      height: 0,
      ease: 'power2.inOut',
      delay: 1, // Delay after initial animation
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
