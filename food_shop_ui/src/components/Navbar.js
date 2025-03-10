import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/pizzaLogo.png';
import { FaBars, FaTimes } from "react-icons/fa";

import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  }
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? 'open':'close'}>
        <Link to='/'><img src={Logo}/></Link>
        <div className='hiddenLinks'>
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <button onClick={toggleNavbar}>
        <FaBars size={20} style={{color:"#fff"}}/>
        </button>
      </div>

    </div>
  )
}

export default Navbar
