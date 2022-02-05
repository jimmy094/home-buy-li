import React from 'react';
import'./Header.css';

function Header() {
  return ( 
  <div className='header-container'>
      <div className="logo">
            <h1>HomeBuy LI</h1>
      </div>

      <div className="navbar">
        <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Sellers</a></li>
        <li><a href="#">Buyers</a></li>
        <li><a href="#">Listings</a></li>
        <li><a href="#">Contact</a></li>
        </ul>
      </div>

  </div>
  )
}

export default Header;
