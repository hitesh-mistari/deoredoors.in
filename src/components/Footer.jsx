import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={footerStyle}>
      <div className="container">
        <div style={footerGridStyle}>
          <div style={footerColStyle}>
            <h3 style={{ marginBottom: '20px' }}>DEORE DOOR</h3>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>
              Your destination for premium quality doors and modular furniture in Nashik. We blend durability with style.
            </p>
          </div>
          <div style={footerColStyle}>
            <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
            <ul style={listStyle}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div style={footerColStyle}>
            <h4 style={{ marginBottom: '20px' }}>Contact Info</h4>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '10px' }}>📍 Nashik, Maharashtra, India</p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '10px' }}>📞 +91 98XXX XXXXX</p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem' }}>📧 info@deoredoors.in</p>
          </div>
        </div>
        <div style={bottomStyle}>
          <p>© 2024 Deore Door And Modular Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  background: '#121212',
  color: 'white',
  padding: '80px 0 30px 0',
};

const footerGridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '50px',
  flexWrap: 'wrap',
  marginBottom: '50px',
};

const footerColStyle = {
  flex: '1 1 250px',
};

const listStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  fontSize: '0.9rem',
  opacity: 0.7,
};

const bottomStyle = {
  borderTop: '1px solid rgba(255,255,255,0.1)',
  paddingTop: '30px',
  textAlign: 'center',
  fontSize: '0.8rem',
  opacity: 0.5,
};

export default Footer;
