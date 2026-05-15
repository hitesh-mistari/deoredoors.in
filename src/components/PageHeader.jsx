import { ShieldCheck, Wrench, Home, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import bgImage from '../assets/images/bg.webp';

const PageHeader = ({ 
  title, 
  tagline,
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
      <div className="container page-header-container" style={heroContainerStyle}>
        <div style={heroContentStyle} className="animate-fade-in page-header-left">
          {tagline && (
            <p className="page-header-tagline" style={taglineStyle}>{tagline}</p>
          )}
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
                  className="btn btn-primary hero-btn-primary" 
                >
                  {primaryButton.text}
                </Link>
              )}
              {secondaryButton && (
                <Link 
                  to={secondaryButton.link} 
                  className="btn btn-outline hero-btn-secondary" 
                >
                  {secondaryButton.icon === 'phone' && <Phone size={16} strokeWidth={2} />}
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

        {/* Right side image - visible on all screen sizes */}
        {rightImage && (
          <div style={heroImageContainerStyle} className="page-header-image">
            <img src={rightImage} alt={imageAlt} style={heroImageStyle} />
          </div>
        )}
      </div>
    </section>
  );
};

const taglineStyle = {
  fontStyle: 'italic',
  fontSize: '0.95rem',
  color: 'rgba(255,255,255,0.9)',
  marginBottom: '12px',
  fontWeight: 400,
  letterSpacing: '0.3px',
};

const heroStyle = {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  overflow: 'hidden',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, rgba(15,10,5,0.92) 0%, rgba(25,18,10,0.85) 40%, rgba(30,20,10,0.6) 70%, rgba(20,15,8,0.4) 100%)',
  zIndex: 0,
};

const heroContainerStyle = {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  gap: '20px',
  height: '100%',
};

const heroContentStyle = {
  maxWidth: '600px',
  flex: '1 1 auto',
  position: 'relative',
  zIndex: 3,
};

const subtitleTextStyle = {
  color: 'var(--primary)',
  fontSize: '1rem',
  fontWeight: 500,
  marginBottom: '15px',
};

const titleStyle = {
  fontSize: '3rem',
  lineHeight: 1.1,
  marginBottom: '20px',
  fontWeight: 600,
  color: 'white',
  position: 'relative',
  zIndex: 3,
};

const descriptionStyle = {
  fontSize: '1rem',
  opacity: 0.85,
  marginBottom: '30px',
  color: 'rgba(255,255,255,0.9)',
  lineHeight: 1.7,
  maxWidth: '420px',
};

const btnGroupStyle = {
  display: 'flex',
  gap: '12px',
  marginBottom: '40px',
  flexWrap: 'wrap',
};

const statsGroupStyle = {
  display: 'flex',
  gap: '25px',
  flexWrap: 'nowrap',
};

const statItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const iconWrapperStyle = {
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: '1.5px solid var(--primary)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'var(--primary)',
  flexShrink: 0,
};

const statTitleStyle = {
  fontWeight: 600,
  fontSize: '0.85rem',
  whiteSpace: 'nowrap',
  color: 'white',
};

const statSubStyle = {
  fontSize: '0.75rem',
  opacity: 0.75,
  whiteSpace: 'nowrap',
  color: 'white',
};

const heroImageContainerStyle = {
  flex: '0 0 auto',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  height: '100%',
  position: 'relative',
  zIndex: 2,
};

const heroImageStyle = {
  maxWidth: '100%',
  height: '100%',
  objectFit: 'contain',
  objectPosition: 'bottom',
  filter: 'drop-shadow(0 10px 40px rgba(0,0,0,0.6))',
};

// Scoped responsive styles using class-based selectors
if (typeof document !== 'undefined') {
  // Remove old page-header styles if already appended
  const existingStyle = document.getElementById('page-header-responsive');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'page-header-responsive';
  style.textContent = `
    .page-header-title {
      color: white !important;
    }

    .hero-btn-primary {
      padding: 14px 28px !important;
      font-size: 1rem !important;
      font-weight: 600 !important;
      border-radius: 8px !important;
      letter-spacing: 0.3px;
    }

    .hero-btn-secondary {
      padding: 14px 28px !important;
      font-size: 1rem !important;
      font-weight: 600 !important;
      border-radius: 8px !important;
      border: 1.5px solid var(--primary) !important;
      color: white !important;
      gap: 10px !important;
    }

    .hero-btn-secondary:hover {
      background: rgba(194, 120, 41, 0.15) !important;
    }
    
    /* Desktop - image visible */
    @media (min-width: 993px) {
      .page-header-image {
        max-width: 550px;
      }
    }

    /* Tablet */
    @media (max-width: 992px) {
      .page-header-container {
        position: relative !important;
      }
      
      .page-header-image {
        position: absolute !important;
        right: -20px !important;
        bottom: 0 !important;
        top: auto !important;
        height: 75% !important;
        max-width: 380px !important;
        pointer-events: none !important;
      }
      
      .page-header-left {
        max-width: 100% !important;
        width: 100% !important;
      }
    }
    
    /* Mobile - show image behind text with overlay */
    @media (max-width: 768px) {
      .page-header-section {
        min-height: auto !important;
        height: auto !important;
        padding: 80px 0 30px !important;
      }
      
      .page-header-container {
        flex-direction: row !important;
        align-items: flex-end !important;
        position: relative !important;
      }
      
      .page-header-image {
        position: absolute !important;
        right: -5px !important;
        bottom: 0 !important;
        height: 85% !important;
        max-width: 380px !important;
        pointer-events: none !important;
      }
      
      .page-header-image img {
        mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%) !important;
        -webkit-mask-image: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%) !important;
      }
      
      .page-header-left {
        position: relative !important;
        z-index: 3 !important;
        max-width: 100% !important;
      }
      
      .page-header-title {
        font-size: 2rem !important;
        line-height: 1.15 !important;
      }
      
      .page-header-tagline {
        font-size: '0.8rem' !important;
      }
      
      .page-header-desc {
        font-size: 0.8rem !important;
        line-height: 1.5 !important;
        max-width: 60% !important;
        margin-bottom: 20px !important;
      }
      
      .page-header-btns {
        flex-direction: column !important;
        gap: 8px !important;
        max-width: 200px !important;
        margin-bottom: 20px !important;
      }
      
      .hero-btn-primary,
      .hero-btn-secondary {
        padding: 10px 20px !important;
        font-size: 0.8rem !important;
        width: 100% !important;
        justify-content: center !important;
      }
      
      .page-header-stats {
        gap: 12px !important;
        flex-wrap: wrap !important;
      }
      
      .page-header-stat-item {
        gap: 6px !important;
      }
      
      .page-header-stat-item > div:first-child {
        width: 32px !important;
        height: 32px !important;
      }
      
      .page-header-stat-item > div:first-child svg {
        width: 14px !important;
        height: 14px !important;
      }
      
      .page-header-stat-item > div:last-child p:first-child {
        font-size: 0.7rem !important;
      }
      
      .page-header-stat-item > div:last-child p:last-child {
        font-size: 0.6rem !important;
      }
    }
    
    /* Small mobile */
    @media (max-width: 480px) {
      .page-header-section {
        padding: 70px 0 25px !important;
      }
      
      .page-header-title {
        font-size: 1.6rem !important;
        line-height: 1.15 !important;
        margin-bottom: 12px !important;
      }
      
      .page-header-tagline {
        font-size: 0.75rem !important;
        margin-bottom: 6px !important;
      }
      
      .page-header-desc {
        font-size: 0.75rem !important;
        line-height: 1.5 !important;
        margin-bottom: 18px !important;
        max-width: 55% !important;
      }
      
      .page-header-image {
        height: 80% !important;
        max-width: 320px !important;
        right: -8px !important;
      }
      
      .page-header-btns {
        margin-bottom: 18px !important;
        max-width: 180px !important;
        gap: 6px !important;
      }
      
      .hero-btn-primary,
      .hero-btn-secondary {
        padding: 8px 16px !important;
        font-size: 0.75rem !important;
      }
      
      .page-header-stats {
        flex-direction: row !important;
        flex-wrap: wrap !important;
        gap: 10px !important;
      }
      
      .page-header-stat-item {
        flex: 0 0 auto !important;
      }
      
      .page-header-stat-item > div:first-child {
        width: 28px !important;
        height: 28px !important;
      }
      
      .page-header-stat-item > div:first-child svg {
        width: 12px !important;
        height: 12px !important;
      }
      
      .page-header-stat-item > div:last-child p:first-child {
        font-size: 0.65rem !important;
      }
      
      .page-header-stat-item > div:last-child p:last-child {
        font-size: 0.55rem !important;
      }
    }

    /* Very small screens */
    @media (max-width: 380px) {
      .page-header-title {
        font-size: 1.7rem !important;
      }
      
      .page-header-image {
        max-width: 260px !important;
      }
      
      .page-header-stats {
        gap: 10px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default PageHeader;
