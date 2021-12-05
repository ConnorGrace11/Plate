import { BrowserRouter as Link} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie'
const cookies = new Cookies();

import './NavBar.css';

function Navbar() {

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
      axios.get("http://localhost:5000/api/auth/login")
          .then((response) => {
              setLoggedIn(response.data)
              console.log(response.data)
          }).catch((error) => {
              console.log(error.message)
              setLoggedIn(false)
          })
  }, [])

  const logout = () => {
    var token = cookies.get("access_token")
    cookies.remove("access_token", token, { path: '/'})
  }

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo'><Link to='/' className='navbar-logo'>MEALS</Link></a>
          <div className='navbar-container2'>
            <a href='/' className="nav-links"><Link to='/' className='nav-links'>Home</Link></a>
            { !loggedIn && <a href='/login' className="nav-links"><Link to='/login'className='nav-links'>Log in</Link></a> }
            { !loggedIn && <a href='/signup' className="nav-links"><Link to='/signup'className='nav-links'>Sign Up</Link></a> }
            { loggedIn && <a href='/meals' className="nav-links"><Link to='/meals'className='nav-links'>Post a Meal</Link></a> }
            { loggedIn && <a href='/protected' className="nav-links"><Link to='/protected'className='nav-links'>Protected</Link></a> }
            { loggedIn && <a href='/logout' className="nav-links" onClick={logout}><Link to='/logout'className='nav-links'>Logout</Link></a> }
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;