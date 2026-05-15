import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" style={footerStyle}>
      <div className="container">
        <div style={footerGridStyle}>
          <div style={footerColStyle}>
            <img 
              src="/images/logo.png" 
              alt="Deore Doors" 
              style={footerLogoStyle}
            />
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginTop: '15px' }}>
              Your destination for premium quality doors and modular furniture in Nashik. We blend durability with style.
            </p>
          </div>
          <div style={footerColStyle}>
            <h4 style={{ marginBottom: '20px' }}>Quick Links</h4>
            <ul style={listStyle}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div style={footerColStyle}>
            <h4 style={{ marginBottom: '20px' }}>Contact Info</h4>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <MapPin size={18} /> Nashik, Maharashtra, India
            </p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={18} /> +91 73501 31608
            </p>
            <p style={{ opacity: 0.7, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={18} /> info@deoredoors.in
            </p>
          </div>
        </div>
        <div style={bottomStyle}>
          <p>© 2026 Deore Door And Modular Furniture. All rights reserved.</p>
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

const footerLogoStyle = {
  height: '70px',
  width: 'auto',
  objectFit: 'contain',
  marginBottom: '10px',
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

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      footer {
        padding: 60px 0 30px 0 !important;
      }
      
      footer > div > div[style*="marginBottom: 50px"] {
        gap: 30px !important;
        margin-bottom: 40px !important;
      }
      
      footer > div > div > div[style*="flex: 1 1 250px"] {
        flex: 1 1 100% !important;
        text-align: center;
      }
      
      footer ul {
        align-items: center;
      }
      
      footer img[alt="Deore Doors"] {
        margin-left: auto;
        margin-right: auto;
      }
    }
    
    @media (max-width: 480px) {
      footer {
        padding: 50px 0 20px 0 !important;
      }
      
      footer h3, footer h4 {
        font-size: 1.2rem;
      }
      
      footer img[alt="Deore Doors"] {
        height: 60px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Footer;
