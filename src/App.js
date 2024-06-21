import React from 'react'
import './App.css';
import Header from '../src/components/Header/Header';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Projects from '../src/components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {

  return (
    <>
    <div className='app-container'>

        <Header />
        <Landing />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </div>
    </>
  );
}

export default App;
