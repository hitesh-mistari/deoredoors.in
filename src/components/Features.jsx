import React from 'react';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Premium Materials',
      desc: 'We use the finest materials for long-lasting strength and beauty.',
      icon: '🏆'
    },
    {
      id: 2,
      title: 'Expert Craftsmanship',
      desc: 'Skilled professionals ensuring perfection in every detail.',
      icon: '🛠'
    },
    {
      id: 3,
      title: 'Custom Designs',
      desc: 'Tailored designs to match your style, space, and requirements.',
      icon: '🎨'
    },
    {
      id: 4,
      title: 'Same Day Delivery',
      desc: 'Get your premium doors delivered to your site within 24 hours.',
      icon: '🚚'
    }
  ];

  return (
    <section id="why-us" style={featuresSectionStyle}>
      <div className="container">
        <div style={featuresGridStyle}>
          {features.map((feature, index) => (
            <div key={feature.id} style={featureItemStyle}>
              <div style={iconCircleStyle}>{feature.icon}</div>
              <div style={textContainerStyle}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '5px' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.8 }}>{feature.desc}</p>
              </div>
              {index < features.length - 1 && <div style={dividerStyle}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const featuresSectionStyle = {
  background: '#1c140d',
  color: 'white',
  padding: '60px 0',
};

const featuresGridStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '30px',
  flexWrap: 'wrap',
};

const featureItemStyle = {
  flex: '1 1 200px',
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  position: 'relative',
};

const iconCircleStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  border: '1px solid var(--primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  flexShrink: 0,
};

const textContainerStyle = {
  maxWidth: '200px',
};

const dividerStyle = {
  position: 'absolute',
  right: '-15px',
  top: '20%',
  height: '60%',
  width: '1px',
  background: 'rgba(255,255,255,0.1)',
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 992px) {
      section[id="why-us"] > div > div[style*="flexWrap"] {
        justify-content: center !important;
      }
      
      section[id="why-us"] div[style*="position: absolute"][style*="right: -15px"] {
        display: none !important;
      }
    }
    
    @media (max-width: 768px) {
      section[id="why-us"] {
        padding: 50px 0 !important;
      }
      
      section[id="why-us"] > div > div[style*="flexWrap"] {
        gap: 25px !important;
      }
      
      section[id="why-us"] div[style*="flex: 1 1 200px"] {
        flex: 1 1 100% !important;
        justify-content: flex-start !important;
      }
    }
    
    @media (max-width: 480px) {
      section[id="why-us"] div[style*="maxWidth: 200px"] {
        max-width: 100% !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Features;
