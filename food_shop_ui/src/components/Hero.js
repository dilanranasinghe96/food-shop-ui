import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/pizza.jpeg';
import '../styles/Hero.css';

function Hero() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}} >
    <div className='headerContainer' >
      <h1>Pizza House</h1>
      <p>Order your favourite pizza from our menu</p>
      <Link to='/menu'><button>Order Now</button></Link>
    </div>

  </div>
  )
}

export default Hero
