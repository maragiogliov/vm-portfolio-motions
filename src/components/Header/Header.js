import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

import './Header.css';

export default function Header() {
  const container = useRef(null);

  // Get the current date
  const currentDate = new Date();

  // Format the date as desired (e.g., "May 7, 2023")
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  // Format the time as desired (e.g., "12:34 PM")
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  useEffect(() => {
    if (container.current) {
      gsap.to('.box', { x: -30 }); // <-- automatically reverted
    }
  }, []);

  return (
    <div className='header-container' ref={container}>
      <h1>
        <span className="header-v-letter">v</span>.Portfolio
      </h1>
      
      <p className='date-format'>Today: {formattedDate} - Time: {formattedTime}</p>
      
      <div className="box">HOLA</div>
    </div>
  );
}
