import React from 'react';
import Navbar from '../components/Navbar';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      
     <Hero />
    <Menu />
    <About  />
    <Contact /> 
    </div>
  )
}

export default Home
