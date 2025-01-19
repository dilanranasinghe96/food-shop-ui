import React from 'react';
import multiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop'  style={{backgroundImage:`url(${multiplePizzas})`}}></div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Our pizza is the best pizza in the world. We have been making pizza for over 100 years. We use only the best ingredients. Our pizza is made with love. We have been voted the best pizza in the world for 10 years in a row. Come try our pizza today!</p>
      </div>
    </div>
  )
}

export default About
