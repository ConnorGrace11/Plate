import { BrowserRouter as Link} from "react-router-dom";

import './NavBar.css';

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/' className='navbar-logo'><Link to='/' className='navbar-logo'>MEALS</Link></a>
          <div className='navbar-container2'>
            <a href='/' className="nav-links"><Link to='/' className='nav-links'>Home</Link></a>
            <a href='/login' className="nav-links"><Link to='/login'className='nav-links'>Log in</Link></a>
            <a href='/signup' className="nav-links"><Link to='/signup'className='nav-links'>Sign Up</Link></a>
            <a href='/meals' className="nav-links"><Link to='/meals'className='nav-links'>Post a Meal</Link></a>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;