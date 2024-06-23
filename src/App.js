import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from '../src/components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Archive from './components/Archive/Archive'; // Import the new Archive component

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/archive" element={<Archive />} /> {/* Add this line */}
        </Routes>
    
      </div>
    </Router>
  );
}

export default App;
