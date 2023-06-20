import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../src/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' />

      <nav className='navbar navbar-expand-md bg-light position-sticky top-0 '>
        <div className='container-fluid'>
          <a href='' className='navbar-brand'>
            Navbar
          </a>

          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarId'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarId'>
            <ul className='navbar-nav '>
              <li className='nav-item'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/review'>
                  Order Review
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/inventory'>
                  Inventory
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
