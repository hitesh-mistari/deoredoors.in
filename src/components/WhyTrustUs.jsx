import React from 'react';
import whyTrustImage from '../../public/images/door/why-trust-deore-doors.png';

const WhyTrustUs = () => {
  const features = [
    {
      icon: '👤',
      title: 'Expert Guidance',
      description: 'Get practical door suggestions from experienced professionals.'
    },
    {
      icon: '🏆',
      title: 'Quality You Can See',
      description: 'Visit our showroom and check the quality before you choose.'
    },
    {
      icon: '🚪',
      title: 'Custom Door Solutions',
      description: 'Doors in PVC, Coating, Sagwan & more – made for your space.'
    },
    {
      icon: '🚚',
      title: 'Fast Local Delivery',
      description: 'Quick delivery across Nashik, right when you need it.'
    }
  ];

  return (
    <section style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <div style={contentWrapperStyle}>
          {/* Left Side - Image */}
          <div style={imageContainerStyle}>
            <img 
              src={whyTrustImage} 
              alt="Why Trust Deore Doors" 
              style={imageStyle}
            />
          </div>

          {/* Right Side - Content */}
          <div style={contentStyle}>
            <div style={headerStyle}>
              <span style={subtitleStyle}>WHY TRUST US</span>
              <h2 style={titleStyle}>
                Why Trust <span style={brandStyle}>Deore Doors?</span>
              </h2>
            </div>

            <div style={featuresGridStyle}>
              {features.map((feature, index) => (
                <div key={index} style={featureCardStyle}>
                  <div style={iconContainerStyle}>
                    <span style={iconStyle}>{feature.icon}</span>
                  </div>
                  <div style={featureContentStyle}>
                    <h3 style={featureTitleStyle}>{feature.title}</h3>
                    <p style={featureDescStyle}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={ctaContainerStyle}>
              <a href="tel:+917350131608" style={callButtonStyle}>
                <span style={buttonIconStyle}>📞</span>
                Call Us Now
              </a>
              <a href="/contact" style={visitButtonStyle}>
                <span style={buttonIconStyle}>🏪</span>
                Visit Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '80px 0',
  background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
  position: 'relative',
  overflow: 'hidden',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentWrapperStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'center',
};

const imageContainerStyle = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const imageStyle = {
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  borderRadius: '20px',
  boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
};

const headerStyle = {
  marginBottom: '10px',
};

const subtitleStyle = {
  fontSize: '0.9rem',
  fontWeight: 600,
  color: '#d97706',
  letterSpacing: '2px',
  marginBottom: '10px',
  display: 'block',
};

const titleStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  color: '#1a202c',
  lineHeight: '1.2',
  marginBottom: '0',
};

const brandStyle = {
  color: '#d97706',
  display: 'block',
};

const featuresGridStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const featureCardStyle = {
  display: 'flex',
  gap: '15px',
  padding: '20px',
  background: 'white',
  borderRadius: '12px',
  boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

const iconContainerStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '12px',
  background: 'linear-gradient(135deg, #fff5e6 0%, #ffe4b3 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const iconStyle = {
  fontSize: '1.8rem',
};

const featureContentStyle = {
  flex: 1,
};

const featureTitleStyle = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#1a202c',
  marginBottom: '5px',
};

const featureDescStyle = {
  fontSize: '0.9rem',
  color: '#718096',
  lineHeight: '1.6',
  margin: 0,
};

const ctaContainerStyle = {
  display: 'flex',
  gap: '15px',
  marginTop: '10px',
};

const callButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '15px 30px',
  background: '#d97706',
  color: 'white',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(217, 119, 6, 0.3)',
  border: 'none',
  cursor: 'pointer',
};

const visitButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '15px 30px',
  background: 'white',
  color: '#d97706',
  borderRadius: '8px',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  border: '2px solid #d97706',
  cursor: 'pointer',
};

const buttonIconStyle = {
  fontSize: '1.2rem',
};

// Add responsive styles and hover effects
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('why-trust-us-styles');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'why-trust-us-styles';
  style.textContent = `
    /* Hover effects */
    .why-trust-feature:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.1) !important;
    }
    
    a[href="tel:+917350131608"]:hover {
      background: #b45309 !important;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(217, 119, 6, 0.4) !important;
    }
    
    a[href="/contact"]:hover {
      background: #d97706 !important;
      color: white !important;
      transform: translateY(-2px);
    }
    
    /* Responsive styles */
    @media (max-width: 968px) {
      section[style*="padding: 80px 0"] {
        padding: 60px 0 !important;
      }
      
      div[style*="gridTemplateColumns: 1fr 1fr"] {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      
      h2[style*="fontSize: 2.5rem"] {
        font-size: 2rem !important;
      }
    }
    
    @media (max-width: 640px) {
      h2[style*="fontSize: 2.5rem"],
      h2[style*="fontSize: 2rem"] {
        font-size: 1.75rem !important;
      }
      
      div[style*="display: flex"][style*="gap: 15px"][style*="marginTop: 10px"] {
        flex-direction: column !important;
      }
      
      a[href="tel:+917350131608"],
      a[href="/contact"] {
        width: 100%;
        justify-content: center;
      }
    }
  `;
  document.head.appendChild(style);
}

export default WhyTrustUs;
