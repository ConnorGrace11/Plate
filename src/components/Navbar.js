import React, { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import HomePage from './HomePage';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <li><Link to='/' className='navbar-logo'>MEALS</Link></li>
          <div className='navbar-container2'>
            <li><Link to='/' className='nav-links'>Home</Link></li>
            <li><Link to='/login'className='nav-links'>Log in</Link></li>
            <li><Link to='/signup'className='nav-links'>Sign Up</Link></li>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;