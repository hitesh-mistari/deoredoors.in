import React from 'react';
import PageHeader from './PageHeader';
import { MapPin, Phone, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <PageHeader
        title={
          <>
            Let's Build <br />
            <span style={{ color: 'var(--primary)' }}>Something Together</span>
          </>
        }
        description="Visit our showroom in Nashik or get in touch with us. We're here to help you choose the perfect doors for your home or project."
        primaryButton={{
          text: "Get Directions →",
          link: "https://maps.google.com/?q=Deore+Doors+Nashik"
        }}
        secondaryButton={{
          text: "Call Now",
          link: "tel:+917350131608"
        }}
        features={[
          {
            icon: <MapPin size={18} strokeWidth={1.5} />,
            title: "Visit Showroom",
            subtitle: "Ambad Link Road"
          },
          {
            icon: <Phone size={18} strokeWidth={1.5} />,
            title: "Call Anytime",
            subtitle: "+91 73501 31608"
          },
          {
            icon: <Clock size={18} strokeWidth={1.5} />,
            title: "Mon - Sat",
            subtitle: "10 AM - 7 PM"
          }
        ]}
      />

      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={gridStyle}>
            <div style={infoColStyle}>
              <h3>Visit Our Showroom</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>We are ready to help you choose the best doors for your home. Visit us today!</p>
              
              <div style={contactItemStyle}>
                <div style={iconStyle}>📍</div>
                <div>
                  <h4>Our Location</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Ambad Link Road, Nashik, Maharashtra</p>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={iconStyle}>📞</div>
                <div>
                  <h4>Phone Number</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>+91 73501 31608</p>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={iconStyle}>✉️</div>
                <div>
                  <h4>Email Address</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>deoredoors@gmail.com</p>
                </div>
              </div>

              <div style={contactItemStyle}>
                <div style={iconStyle}>⏰</div>
                <div>
                  <h4>Business Hours</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <div style={formColStyle}>
              <form style={formStyle}>
                <div style={inputGroupStyle}>
                  <input type="text" placeholder="Your Name" style={inputStyle} />
                  <input type="email" placeholder="Your Email" style={inputStyle} />
                </div>
                <input type="text" placeholder="Subject" style={inputStyle} />
                <textarea placeholder="Your Message" style={{...inputStyle, height: '150px', resize: 'none'}}></textarea>
                <button className="btn btn-primary" type="button" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginBottom: '80px' };
const infoColStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const contactItemStyle = { display: 'flex', gap: '20px', alignItems: 'center' };
const iconStyle = { width: '50px', height: '50px', borderRadius: '12px', background: '#fcf8f4', display: 'flex', alignItems: 'center', justifyCenter: 'center', fontSize: '1.5rem', flexShrink: 0, justifyContent: 'center' };
const formColStyle = { background: 'white', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)' };
const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
const inputGroupStyle = { display: 'flex', gap: '20px' };
const inputStyle = { width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #eee', outline: 'none', background: '#f9f9f9' };

export default ContactPage;
