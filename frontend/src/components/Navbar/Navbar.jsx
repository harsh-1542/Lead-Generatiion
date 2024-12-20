import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <header>
        <div className="container">
            <h1>LeadBoost</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#faqs">FAQs</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    </>
  );
};

export default Navbar;
