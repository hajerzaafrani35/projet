import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    
      <div className="hero-section">
        <div className="hero-content">
          <img src="/images/logo.jpg" alt="Bookery Logo" className="logo" />
          <h1 className="main-title">BOOKERY</h1>
        </div>
        <p className="slogan">Read, Dream, and Discover</p>
        <h2 className="subtitle">The Ultimate Refuge for Book Lovers</h2>
        <div className="search-bar">
          <div className="search">
            <input type="text" className="search-input" placeholder="Search by title, author, category or keyword"/>
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <button className="filter-button">
            <i className="fas fa-sliders-h"></i>
          </button>
        </div>
      </div>
    
  );
};

export default HeroSection;
