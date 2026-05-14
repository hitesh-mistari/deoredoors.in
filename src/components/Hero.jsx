import React from 'react';

const Hero = () => {
  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      <div className="container" style={heroContainerStyle}>
        <div style={heroContentStyle} className="animate-fade-in">
          <p style={subtitleStyle}>Quality Doors. Lasting Impressions.</p>
          <h1 style={titleStyle}>
            Doors That <br />
            <span style={{ color: 'var(--primary)' }}>Define Your Space</span>
          </h1>
          <p style={descriptionStyle}>
            Premium PVC doors, Coating doors, and Sagwani doors <br />
            crafted with precision and trusted by families across Nashik.
          </p>
          <div style={btnGroupStyle}>
            <button className="btn btn-primary">Explore Products →</button>
            <button className="btn btn-outline">Contact Us</button>
          </div>
          <div style={statsGroupStyle}>
            <div style={statItemStyle}>
              <span style={iconStyle}>✓</span>
              <div>
                <p style={statTitleStyle}>Premium Quality</p>
                <p style={statSubStyle}>Materials</p>
              </div>
            </div>
            <div style={statItemStyle}>
              <span style={iconStyle}>🛠</span>
              <div>
                <p style={statTitleStyle}>Expert Craftsmanship</p>
                <p style={statSubStyle}>You Can Trust</p>
              </div>
            </div>
            <div style={statItemStyle}>
              <span style={iconStyle}>🏠</span>
              <div>
                <p style={statTitleStyle}>Custom Solutions</p>
                <p style={statSubStyle}>For Every Need</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const heroStyle = {
  height: '100vh',
  minHeight: '700px',
  background: 'url("https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?q=80&w=2072") no-repeat center center/cover',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)',
};

const heroContainerStyle = {
  position: 'relative',
  zIndex: 1,
};

const heroContentStyle = {
  maxWidth: '650px',
};

const subtitleStyle = {
  color: 'var(--primary)',
  fontSize: '1.2rem',
  fontWeight: 500,
  marginBottom: '20px',
};

const titleStyle = {
  fontSize: '4.5rem',
  lineHeight: 1.1,
  marginBottom: '30px',
};

const descriptionStyle = {
  fontSize: '1.1rem',
  opacity: 0.9,
  marginBottom: '40px',
};

const btnGroupStyle = {
  display: 'flex',
  gap: '20px',
  marginBottom: '60px',
};

const statsGroupStyle = {
  display: 'flex',
  gap: '40px',
};

const statItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
};

const iconStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.3)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary)',
  fontSize: '1.2rem',
};

const statTitleStyle = {
  fontWeight: 600,
  fontSize: '0.9rem',
};

const statSubStyle = {
  fontSize: '0.75rem',
  opacity: 0.7,
};

export default Hero;
