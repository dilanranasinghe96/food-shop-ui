import React from 'react';
import pizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contact() {    
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage:`url(${pizzaLeft})`}}></div>
        <div className='rightSide'>
            <h1>Contact Us</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Enter your name' />
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter your email' />
                <label htmlFor='message'>Message</label>
                <textarea rows='6' placeholder='Enter your message'></textarea>
                <button type='submit'>Submit</button>

            </form>
        </div>

    </div>
  )
}

export default Contact
