import React, { useState } from 'react';
import './Header.css';


const Header = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false); 

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen); 
  };

  const closeBox = () => {
    setIsBoxOpen(false); 
  };

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <div className="menu-icon" onClick={toggleBox}>
            <i className="fa fa-bars fa-2x"></i>
          </div>
          <img src="/images/logo.jpg" alt="BOOKERY logo" />
          <div className="title">BOOKERY</div>
        </div>
        <nav className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#categories" className="nav-link">Categories</a>
          <a href="#authors" className="nav-link">Authors</a>
          <a href="#help" className="nav-link">Contact us</a>
        </nav>
        <div className="icons-container">
        <div className="icon cart-icon">
          <i className="fa fa-shopping-cart" />
          <span className='cart-badge'>0</span>
        </div>
        <div className="icon">
          <a href="connexion">
          <i className='fa fa-user' /></a>
        </div>
      </div>
      </header>

      
      {isBoxOpen && (
        <div className="box-overlay" onClick={closeBox}>
          <div className="box-content" onClick={(e) => e.stopPropagation()}>
            <h2>Menu</h2>
            <ul>
              <li><a href="#home" onClick={closeBox}>Home</a></li>
              <li><a href="#categories" onClick={closeBox}>Categories</a></li>
              <li><a href="#authors" onClick={closeBox}>Authors</a></li>
              <li><a href="#help" onClick={closeBox}>Contact us</a></li>
            </ul>
            <button className="close-button" onClick={closeBox}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

