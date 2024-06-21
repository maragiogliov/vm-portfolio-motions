import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import './Header.css';

export default function Header() {
  const container = useRef(null);

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });


  useGSAP(()=>{
    gsap.to('.box', { x: -90, ease: "bounce.out", ease:"back.in"}); 
  });

  return (
    <div className='header-container' >
      <h1>
        <span className="header-v-letter">v</span>.Portfolio
      </h1>
      
      <p className='date-format'>Today: {formattedDate} - Time: {formattedTime}</p>
      
      <div className="box" ref={container} >HOLA</div>
    </div>
  );
}
