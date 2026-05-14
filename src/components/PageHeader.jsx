import { ShieldCheck, Wrench, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/bg.webp';

const PageHeader = ({ 
  title, 
  subtitle, 
  description, 
  primaryButton, 
  secondaryButton, 
  features,
  rightImage,
  imageAlt = "Deore Doors",
  height = '60vh',
  minHeight = '500px'
}) => {
  // Default features if none provided
  const defaultFeatures = [
    {
      icon: <ShieldCheck size={18} strokeWidth={1.5} />,
      title: "Premium Quality",
      subtitle: "Materials"
    },
    {
      icon: <Wrench size={18} strokeWidth={1.5} />,
      title: "Expert Craftsmanship",
      subtitle: "You Can Trust"
    },
    {
      icon: <Home size={18} strokeWidth={1.5} />,
      title: "Custom Solutions",
      subtitle: "For Every Need"
    }
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="page-header-section" style={{ ...heroStyle, height, minHeight, background: `url(${bgImage.src || bgImage}) no-repeat center center/cover` }}>
      <div style={overlayStyle}></div>
      <div className="container" style={heroContainerStyle}>
        <div style={heroContentStyle} className="animate-fade-in page-header-left">
          <h1 style={titleStyle} className="page-header-title">
            {title}
          </h1>
          {subtitle && <p style={subtitleTextStyle}>{subtitle}</p>}
          <p style={descriptionStyle} className="page-header-desc">
            {description}
          </p>
          
          {(primaryButton || secondaryButton) && (
            <div style={btnGroupStyle} className="page-header-btns">
              {primaryButton && (
                <Link 
                  to={primaryButton.link} 
                  className="btn btn-primary" 
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link 
                  to={secondaryButton.link} 
                  className="btn btn-outline" 
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  {secondaryButton.text}
                </Link>
              )}
            </div>
          )}
          
          <div style={statsGroupStyle} className="page-header-stats">
            {displayFeatures.map((feature, index) => (
              <div key={index} style={statItemStyle} className="page-header-stat-item">
                <div style={iconWrapperStyle}>
                  {feature.icon}
                </div>
                <div>
                  <p style={statTitleStyle}>{feature.title}</p>
                  <p style={statSubStyle}>{feature.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side image - only show if provided */}
        {rightImage && (
          <div style={heroImageContainerStyle} className="page-header-image">
            <img src={rightImage} alt={imageAlt} style={heroImageStyle} />
          </div>
        )}
      </div>
    </section>
  );
};

const heroStyle = {
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
  zIndex: 0,
};

const heroContainerStyle = {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '40px',
  height: '100%',
};

const heroContentStyle = {
  maxWidth: '650px',
  flex: '1',
};

const subtitleTextStyle = {
  color: 'var(--primary)',
  fontSize: '1rem',
  fontWeight: 500,
  marginBottom: '15px',
};

const titleStyle = {
  fontSize: '3.5rem',
  lineHeight: 1.1,
  marginBottom: '20px',
  fontWeight: 600,
  color: 'white !important',
  position: 'relative',
  zIndex: 3,
};

const descriptionStyle = {
  fontSize: '1rem',
  opacity: 0.9,
  marginBottom: '25px',
  color: 'white',
};

const btnGroupStyle = {
  display: 'flex',
  gap: '15px',
  marginBottom: '35px',
  flexWrap: 'wrap',
};

const statsGroupStyle = {
  display: 'flex',
  gap: '30px',
  flexWrap: 'nowrap',
};

const statItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
};

const iconWrapperStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  border: '1px solid var(--primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary)',
  flexShrink: 0,
};

const statTitleStyle = {
  fontWeight: 600,
  fontSize: '0.9rem',
  whiteSpace: 'nowrap',
  color: 'white',
};

const statSubStyle = {
  fontSize: '0.8rem',
  opacity: 0.8,
  whiteSpace: 'nowrap',
  color: 'white',
};

const heroImageContainerStyle = {
  flex: '1',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  paddingLeft: '50px',
  height: '100%',
};

const heroImageStyle = {
  maxWidth: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'bottom',
  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.5))',
};

// Scoped responsive styles using class-based selectors
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .page-header-title {
      color: white !important;
    }
    
    @media (max-width: 992px) {
      .page-header-image {
        display: none !important;
      }
    }
    
    @media (max-width: 768px) {
      .page-header-section {
        min-height: 450px !important;
        height: auto !important;
        padding: 100px 0 50px !important;
      }
      
      .page-header-title {
        font-size: 2.2rem !important;
        line-height: 1.2 !important;
      }
      
      .page-header-desc {
        font-size: 0.9rem !important;
        line-height: 1.5 !important;
      }
      
      .page-header-stats {
        gap: 15px !important;
        flex-wrap: wrap !important;
      }
      
      .page-header-btns {
        margin-bottom: 25px !important;
      }
    }
    
    @media (max-width: 480px) {
      .page-header-section {
        padding: 90px 0 40px !important;
        min-height: 400px !important;
      }
      
      .page-header-title {
        font-size: 1.8rem !important;
        line-height: 1.2 !important;
      }
      
      .page-header-desc {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
      }
      
      .page-header-btns {
        flex-direction: column;
        width: 100%;
      }
      
      .page-header-btns .btn {
        width: 100%;
        justify-content: center;
        padding: 10px 16px !important;
        font-size: 0.85rem !important;
      }
      
      .page-header-stats {
        flex-direction: column !important;
        gap: 12px !important;
        align-items: flex-start !important;
      }
      
      .page-header-stat-item svg {
        width: 16px !important;
        height: 16px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default PageHeader;
