import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="container" style={navContainerStyle}>
        <div style={logoStyle}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>DEORE DOOR</h1>
          <p style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.8 }}>And Modular Furniture</p>
        </div>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li><a href="#home" style={activeLinkStyle}>Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#products">Gallery</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <button className="btn btn-primary" style={{ padding: '10px 20px' }}>Get a Quote</button>
      </div>
    </header>
  );
};

const headerStyle = {
  padding: '20px 0',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 100,
  color: 'white',
};

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

const logoStyle = {
  flex: '0 0 auto',
};

const navStyle = {
  flex: '1 1 auto',
  display: 'flex',
  justifyContent: 'center',
};

const ulStyle = {
  display: 'flex',
  gap: '30px',
  margin: 0,
  padding: 0,
  fontSize: '0.9rem',
  fontWeight: 500,
};

const activeLinkStyle = {
  color: 'var(--primary)',
};

export default Header;
