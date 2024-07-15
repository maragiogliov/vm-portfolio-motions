import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Archive from './components/Archive/Archive';
import Splash from './components/Splash/Splash';

const AppContent = () => {
  const location = useLocation();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setShowSplash(true);
  }, [location]);

  return (
    <>
      {showSplash && <Splash setShowSplash={setShowSplash} path={location.pathname} />}
      {!showSplash && (
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/archive" element={<Archive />} />
          </Routes>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
