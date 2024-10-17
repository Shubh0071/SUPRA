import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
  
  


 <nav className="navbar">
 <h1>Bolt Racers </h1>
 <ul>
   <li><Link to="/">Home</Link></li>
   <li><Link to="/about">About Us</Link></li>
   <li><Link to="/team">Team</Link></li>
   <li><Link to="/projects">Projects</Link></li>
   <li><Link to="/gallery">Gallery</Link></li>
   <li><Link to="/contact">Contact</Link></li>
 </ul>
 <div class="nav-logo">
   <div class="logo"></div>
   </div>
   
   
</nav>
  );
};

export default Navbar;
