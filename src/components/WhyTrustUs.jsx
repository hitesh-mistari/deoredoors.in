import React from 'react';
import { User, Award, DoorOpen, Truck, Phone, Store } from 'lucide-react';

const WhyTrustUs = () => {
  const features = [
    {
      icon: <User size={24} color="#d97706" />,
      title: 'Expert Guidance',
      description: 'Get practical door suggestions from experienced professionals.'
    },
    {
      icon: <Award size={24} color="#d97706" />,
      title: 'Quality You Can See',
      description: 'Visit our showroom and check the quality before you choose.'
    },
    {
      icon: <DoorOpen size={24} color="#d97706" />,
      title: 'Custom Door Solutions',
      description: 'Doors in PVC, Coating, Sagwan & more – made for your space.'
    },
    {
      icon: <Truck size={24} color="#d97706" />,
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
              src="/images/door/why-trust-deore-doors.png"
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
              <div style={dividerStyle}></div>
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div style={featureCardStyle} className="why-trust-feature">
                    <div style={iconContainerStyle}>
                      {feature.icon}
                    </div>
                    <div style={featureContentStyle}>
                      <h3 style={featureTitleStyle}>{feature.title}</h3>
                      <p style={featureDescStyle}>{feature.description}</p>
                    </div>
                  </div>
                  <div style={dividerStyle}></div>
                </React.Fragment>
              ))}
            </div>

            <div style={ctaContainerStyle}>
              <a href="tel:+917350131608" style={callButtonStyle}>
                <span style={buttonIconStyle}><Phone size={20} /></span>
                Call Us Now
              </a>
              <a href="/contact" style={visitButtonStyle}>
                <span style={buttonIconStyle}><Store size={20} /></span>
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
  background: '#ffffff',
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
};

const contentStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
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
};

const dividerStyle = {
  height: '1px',
  backgroundColor: '#e2e8f0',
  width: '100%',
};

const featureCardStyle = {
  display: 'flex',
  gap: '20px',
  padding: '20px 0',
  background: 'transparent',
  alignItems: 'center',
};

const iconContainerStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '2px solid #fef3c7',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
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
  marginTop: '20px',
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
  display: 'flex',
  alignItems: 'center',
};

// Add responsive styles and hover effects
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('why-trust-us-styles');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'why-trust-us-styles';
  style.textContent = `
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
      
      div[style*="display: flex"][style*="gap: 15px"][style*="marginTop: 20px"] {
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
