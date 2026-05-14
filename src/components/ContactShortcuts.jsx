import React from 'react';
import { PhoneCall } from 'lucide-react';
import whatsappIcon from '../assets/images/WhatsApp_icon.png';

const ContactShortcuts = () => {
  const phoneNumber = "917350131608";
  const whatsappMessage = "Hello! I'm interested in your premium doors. Can you please help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:+917350131608`;

  return (
    <div style={containerStyle}>
      <a 
        href={callUrl}
        style={{...buttonStyle, backgroundColor: '#007bff'}}
        className="shortcut-btn"
        title="Call us now"
      >
        <PhoneCall size={24} />
        <span style={tooltipStyle}>Call Now</span>
      </a>

      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{...buttonStyle, backgroundColor: '#25D366'}}
        className="shortcut-btn whatsapp-btn"
        title="Chat on WhatsApp"
      >
        <img src={whatsappIcon} alt="WhatsApp" style={{ width: '32px', height: '32px' }} />
        <span style={tooltipStyle}>WhatsApp</span>
      </a>
    </div>
  );
};

const containerStyle = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  zIndex: 9999,
};

const buttonStyle = {
  width: '55px',
  height: '55px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, background-color 0.3s ease',
  position: 'relative',
};

const tooltipStyle = {
  position: 'absolute',
  right: '70px',
  backgroundColor: 'rgba(0,0,0,0.8)',
  color: 'white',
  padding: '6px 12px',
  borderRadius: '6px',
  fontSize: '0.8rem',
  whiteSpace: 'nowrap',
  opacity: 0,
  visibility: 'hidden',
  transition: 'opacity 0.3s ease, transform 0.3s ease',
  transform: 'translateX(10px)',
};

export default ContactShortcuts;
