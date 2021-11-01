import { BrowserRouter as Link} from "react-router-dom";

import './Navbar.css';

function Navbar() {

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