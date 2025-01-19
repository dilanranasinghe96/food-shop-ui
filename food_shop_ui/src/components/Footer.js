import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import '../styles/Footer.css';

function Footer() {
  return (
    <div className='footer'>

        <div className='socialMedia'>
            <FaFacebook />
            <FaInstagram/>
            <FaTwitter/>
            <FaWhatsapp/>
        </div>
        <p>© 2021 Food Shop. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
