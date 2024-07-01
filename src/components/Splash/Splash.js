import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Splash.css'; // Import your Splash CSS for styling

const Splash = ({ setShowSplash }) => {
  const splashRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ onComplete: () => setShowSplash(false) });

    // Animation to fade in the splash screen
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
      delay: 1,
      onComplete: () => setShowSplash(false), // Set showSplash to false after animation completes
    });

    return () => {
      timeline.kill(); // Ensure animation cleanup
    };
  }, [setShowSplash]);

  return (
    <div className="splash" ref={splashRef}>
      <h1>Welcome</h1>
    </div>
  );
};

export default Splash;
