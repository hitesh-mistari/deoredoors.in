import React from 'react';
import shopImage from '../assets/images/deore-door-shop.webp';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container" style={aboutContainerStyle}>
        <div style={aboutContentStyle}>
          <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
            <span>About Us</span>
            <h2>Our Story</h2>
          </div>
          <div style={storyTextStyle}>
            <p>
              Deore Doors was founded by <strong>Mr. Suresh Deore</strong>, a skilled door fitting professional who started his journey in Nashik in 2020. What began as hands-on door fitting work slowly grew into a trusted local business built on quality, honesty, and customer satisfaction.
            </p>
            <p>
              After gaining strong experience in door installation, Mr. Deore decided to start his own venture and open a dedicated door shop. Over the last four years, Deore Doors has proudly served <strong>500+ happy customers</strong> across Nashik, Igatpuri, and nearby areas.
            </p>
            <p>
              From homes and apartments to hotels, villas, and commercial spaces, Deore Doors has delivered and fitted doors for a wide range of projects. The brand has also worked with known locations such as <strong>Sula Vineyards, Hotel Dil Se Desi</strong>, and many other hospitality and residential projects.
            </p>
            <p>
              Today, Deore Doors is known as one of the trusted door shops in Nashik, backed by strong customer reviews, a 5-star reputation on Google, and positive ratings on Justdial. Every project reflects the same promise: strong doors, clean finishing, reliable fitting, and service customers can trust.
            </p>
            <p style={{ fontWeight: 600, color: 'var(--primary)', marginTop: '20px' }}>
              At Deore Doors, we don’t just sell doors — we help people create beautiful, secure, and lasting spaces.
            </p>
          </div>
          
          <div style={statsGridStyle}>
            <div style={statBoxStyle}>
              <div style={statIconStyle}>👥</div>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>500+</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Happy Customers</p>
              </div>
            </div>
            <div style={statBoxStyle}>
              <div style={statIconStyle}>🏗</div>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>1000+</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Doors Fitted</p>
              </div>
            </div>
            <div style={statBoxStyle}>
              <div style={statIconStyle}>🏅</div>
              <div>
                <h3 style={{ color: 'var(--primary)' }}>4+</h3>
                <p style={{ fontSize: '0.8rem', opacity: 0.7 }}>Years Excellence</p>
              </div>
            </div>
          </div>
        </div>
        <div style={aboutImageStyle}>
          <img src={shopImage} alt="Deore Door Showroom" style={imgStyle} />
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

const storyTextStyle = {
  fontSize: '0.95rem',
  lineHeight: '1.8',
  color: '#4a5568',
  marginBottom: '35px',
};

const statsGridStyle = {
  display: 'flex',
  gap: '30px',
  marginTop: '30px',
  flexWrap: 'wrap',
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
  height: 'auto',
};

const imgStyle = {
  width: '100%',
  height: 'auto',
  display: 'block',
  borderRadius: '24px',
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 992px) {
      section[id="about"] > div {
        gap: 40px !important;
      }
      
      section[id="about"] > div > div[style*="flex: 1 1 500px"] {
        flex: 1 1 100% !important;
      }
    }
    
    @media (max-width: 768px) {
      section[id="about"] .section-title {
        text-align: center !important;
      }
      
      section[id="about"] > div {
        gap: 30px !important;
      }
      
      section[id="about"] div[style*="gap: 30px"][style*="marginTop"] {
        justify-content: center !important;
        gap: 20px !important;
      }
      
      section[id="about"] button {
        width: 100%;
      }
    }
    
    @media (max-width: 480px) {
      section[id="about"] div[style*="gap: 30px"][style*="marginTop"],
      section[id="about"] div[style*="gap: 20px"][style*="marginTop"] {
        flex-direction: column;
        align-items: flex-start !important;
        gap: 15px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default About;
