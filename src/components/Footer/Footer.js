import React from 'react';
import './Footer.css';

export default function Footer() {
  // Get the current date
  const currentDate = new Date();

  // Format the date as desired (e.g., "May 7, 2023")
  const formattedDate = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  // Format the time as desired (e.g., "12:34 PM")
  const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });

  return (
    <div className='footer-container'>
      <h1>Today: {formattedDate} - Time: {formattedTime}</h1>
    </div>
  );
}

