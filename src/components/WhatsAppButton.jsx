import React from 'react';
import whatsappIcon from '../assets/images/WhatsApp_icon.png';

const WhatsAppButton = () => {
  const phoneNumber = "917350131608";
  const message = "Hello! I'm interested in your premium doors. Can you please help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={stickyButtonStyle}
      className="whatsapp-sticky"
      title="Chat with us on WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" style={{ width: '40px', height: '40px' }} />
      <span style={tooltipStyle}>WhatsApp Support</span>
    </a>
  );
};

const stickyButtonStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  backgroundColor: '#25D366',
  color: 'white',
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  zIndex: 9999,
  cursor: 'pointer',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
};

const tooltipStyle = {
  position: 'absolute',
  right: '75px',
  backgroundColor: 'rgba(0,0,0,0.8)',
  color: 'white',
  padding: '8px 15px',
  borderRadius: '8px',
  fontSize: '0.85rem',
  whiteSpace: 'nowrap',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  transform: 'translateX(10px)',
};

export default WhatsAppButton;
