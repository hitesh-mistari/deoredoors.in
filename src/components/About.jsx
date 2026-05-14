import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container" style={aboutContainerStyle}>
        <div style={aboutContentStyle}>
          <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
            <span>About Us</span>
            <h2>Building Trust, One Door at a Time.</h2>
          </div>
          <p style={{ marginBottom: '25px', color: 'var(--text-muted)' }}>
            Deore Door And Modular Furniture is a trusted name in Nashik for high-quality doors and modular furniture. With years of experience and a commitment to excellence, we deliver products that combine strength, style, and sophistication.
          </p>
          <div style={statsGridStyle}>
            <div style={statBoxStyle}>
              <div style={statIconStyle}>👥</div>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>100+</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Happy Customers</p>
              </div>
            </div>
            <div style={statBoxStyle}>
              <div style={statIconStyle}>🏗</div>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>50+</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Projects Completed</p>
              </div>
            </div>
            <div style={statBoxStyle}>
              <div style={statIconStyle}>🏅</div>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>10+</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Years of Experience</p>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" style={{ marginTop: '40px' }}>Know More About Us →</button>
        </div>
        <div style={aboutImageStyle}>
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070" alt="Our Showroom" style={imgStyle} />
          <div style={imageOverlayStyle}>
             <p style={{ fontWeight: 700, letterSpacing: '2px' }}>DEORE DOOR <span style={{ opacity: 0.6 }}>& MODULAR FURNITURE</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

const aboutContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '60px',
  flexWrap: 'wrap',
};

const aboutContentStyle = {
  flex: '1 1 500px',
};

const statsGridStyle = {
  display: 'flex',
  gap: '30px',
  marginTop: '30px',
};

const statBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const statIconStyle = {
  fontSize: '1.5rem',
  color: 'var(--primary)',
};

const aboutImageStyle = {
  flex: '1 1 500px',
  position: 'relative',
  borderRadius: '24px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-lg)',
  height: '450px',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const imageOverlayStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(0,0,0,0.7)',
  color: 'white',
  padding: '10px 30px',
  borderRadius: '50px',
  fontSize: '0.8rem',
  whiteSpace: 'nowrap',
  border: '1px solid var(--primary)',
};

export default About;
