import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Splash.css'; // Ensure Splash.css includes appropriate styles for your splash animation

const Splash = ({ setShowSplash, path }) => {
  const splashRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ onComplete: () => setShowSplash(false) });

    // Ensure splash starts with the correct background color
    gsap.set(splashRef.current, { backgroundColor: '#141414' });

    // Animation to fade in the splash screen from the dark grey color
    timeline.to(splashRef.current, {
      duration: 0.7,
      opacity: 1,
      ease: 'power2.inOut',
    });

    // Animation to withdraw the splash screen from bottom to top
    timeline.to(splashRef.current, {
      duration: 0.7,
      height: 0,
      ease: 'power2.inOut',
      delay: 1,
    });

    return () => {
      timeline.kill();
    };
  }, [setShowSplash]);

  // Handle path display logic
  let displayText = "Welcome";
  if (path === "/") {
    displayText = "Welcome";
  } else {
    displayText = path.replace(/\//g, ""); // Remove leading slashes
  }

  return (
    <div className="splash" ref={splashRef}>
      {/* Display the processed text */}
      <h1>{displayText}</h1>
    </div>
  );
};

export default Splash;
