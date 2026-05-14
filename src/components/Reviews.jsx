import React from 'react';
import googleIcon from '../assets/images/google.webp';

import reviewsData from '../data/reviews.json';

const Reviews = () => {
  // Split reviews into two rows for the sliding effect
  const midpoint = Math.ceil(reviewsData.length / 2);
  const row1 = reviewsData.slice(0, midpoint);
  const row2 = reviewsData.slice(midpoint);

  // Duplicate items for seamless loop
  const seamlessRow1 = [...row1, ...row1];
  const seamlessRow2 = [...row2, ...row2];

  const highlightKeywords = (text) => {
    if (!text) return text;
    const keywords = [
      "quality", "premium", "excellent", "best", "satisfied", 
      "professional", "perfect", "sturdy", "elegant", "recommended", 
      "outstanding", "craftsmanship", "happy", "great", "nice", "value for money"
    ];
    
    // Create a regex to match keywords (case-insensitive)
    const regex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'gi');
    
    const parts = text.split(regex);
    
    return parts.map((part, index) => {
      if (keywords.some(k => k.toLowerCase() === part.toLowerCase())) {
        return <span key={index} style={highlightStyle}>{part}</span>;
      }
      return part;
    });
  };

  const row1Ref = React.useRef(null);
  const row2Ref = React.useRef(null);

  const handleMouseDown = (e, ref) => {
    const slider = ref.current;
    if (!slider) return;
    
    const track = slider.firstChild;
    if (!track) return;

    slider.isDown = true;
    slider.classList.add('active');
    
    // Get current transform value
    const style = window.getComputedStyle(track);
    const matrix = new WebKitCSSMatrix(style.transform);
    slider.currentX = matrix.m41;
    
    slider.startX = e.pageX;
    track.style.animation = 'none';
    track.style.transform = `translateX(${slider.currentX}px)`;
  };

  const handleMouseLeave = (ref) => {
    const slider = ref.current;
    if (!slider || !slider.isDown) return;
    slider.isDown = false;
    slider.classList.remove('active');
    
    // Resume animation (this is tricky with offsets, so we just restart for now)
    // A better way would be to calculate new keyframes, but "fast" means restart.
    const track = slider.firstChild;
    track.style.animation = '';
  };

  const handleMouseUp = (ref) => {
    const slider = ref.current;
    if (!slider || !slider.isDown) return;
    slider.isDown = false;
    slider.classList.remove('active');
    const track = slider.firstChild;
    track.style.animation = '';
  };

  const handleMouseMove = (e, ref) => {
    const slider = ref.current;
    if (!slider || !slider.isDown) return;
    e.preventDefault();
    const track = slider.firstChild;
    const x = e.pageX;
    const walk = (x - slider.startX);
    track.style.transform = `translateX(${slider.currentX + walk}px)`;
  };

  return (
    <section id="reviews" style={sectionStyle}>
      <div className="container">
        <div className="section-title" style={{ marginBottom: '40px' }}>
          <span>Testimonials</span>
          <h2>What Our Customers Say</h2>
        </div>
      </div>

      <div style={sliderWrapperStyle}>
        {/* Row 1: Right to Left */}
        <div 
          style={sliderRowStyle} 
          ref={row1Ref}
          onMouseDown={(e) => handleMouseDown(e, row1Ref)}
          onMouseLeave={() => handleMouseLeave(row1Ref)}
          onMouseUp={() => handleMouseUp(row1Ref)}
          onMouseMove={(e) => handleMouseMove(e, row1Ref)}
          className="draggable-slider"
        >
          <div style={trackLeftStyle}>
            {seamlessRow1.map((review, idx) => (
              <ReviewCard key={`r1-${idx}`} review={review} highlight={highlightKeywords} />
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right */}
        <div 
          style={sliderRowStyle}
          ref={row2Ref}
          onMouseDown={(e) => handleMouseDown(e, row2Ref)}
          onMouseLeave={() => handleMouseLeave(row2Ref)}
          onMouseUp={() => handleMouseUp(row2Ref)}
          onMouseMove={(e) => handleMouseMove(e, row2Ref)}
          className="draggable-slider"
        >
          <div style={trackRightStyle}>
            {seamlessRow2.map((review, idx) => (
              <ReviewCard key={`r2-${idx}`} review={review} highlight={highlightKeywords} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review, highlight }) => {
  const initial = review.name ? review.name.charAt(0).toUpperCase() : '?';
  
  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        <div style={userGroupStyle}>
          {review.avatar_link ? (
            <img 
              src={review.avatar_link} 
              alt={review.name} 
              style={avatarImgStyle} 
              referrerPolicy="no-referrer"
            />
          ) : (
            <div style={avatarStyle}>{initial}</div>
          )}
          <a href={review.reviewer_profile} target="_blank" rel="noopener noreferrer" style={nameLinkStyle}>
            {review.name}
          </a>
        </div>
        <img src={googleIcon} alt="Google" style={googleLogoStyle} />
      </div>
      <p style={textStyle}>{highlight(review.review_text)}</p>


      <div style={cardFooterStyle}>
        <div style={starsStyle}>{"★".repeat(review.rating)}</div>
        <span style={googleReviewTextStyle}>Google review</span>
      </div>
    </div>
  );
};

const sectionStyle = {
  background: '#f0f4f8',
  padding: '80px 0',
  overflow: 'hidden',
};

const sliderWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const sliderRowStyle = {
  width: '100%',
  overflow: 'hidden',
  display: 'flex',
  cursor: 'grab',
  userSelect: 'none',
  WebkitUserSelect: 'none',
};

const trackLeftStyle = {
  display: 'flex',
  gap: '20px',
  animation: 'scrollLeft 120s linear infinite',
  width: 'max-content',
  paddingRight: '20px',
  alignItems: 'flex-start',
};

const trackRightStyle = {
  display: 'flex',
  gap: '20px',
  animation: 'scrollRight 120s linear infinite',
  width: 'max-content',
  paddingRight: '20px',
  alignItems: 'flex-start',
};

const cardStyle = {
  background: 'white',
  width: '350px',
  height: '260px',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  border: '1px solid #e1e8ed',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flexShrink: 0,
};

const cardHeaderStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const userGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const avatarStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  background: '#4a5568',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.2rem',
  fontWeight: 600,
};

const nameLinkStyle = {
  fontWeight: 600,
  fontSize: '0.95rem',
  color: '#2d3748',
  textDecoration: 'none',
};

const avatarImgStyle = {
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover',
};

const googleLogoStyle = {
  width: '18px',
};

const textStyle = {
  fontSize: '0.85rem',
  lineHeight: '1.6',
  color: '#4a5568',
  height: '100px',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  marginBottom: '5px',
};

const cardFooterStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 'auto',
};

const starsStyle = {
  color: '#f6ad55',
  fontSize: '1rem',
};

const googleReviewTextStyle = {
  fontSize: '0.7rem',
  color: '#718096',
  fontWeight: 500,
};

const highlightStyle = {
  backgroundColor: 'rgba(66, 153, 225, 0.15)',
  color: '#2b6cb0',
  padding: '2px 10px',
  borderRadius: '50px',
  fontWeight: 600,
  display: 'inline-block',
  margin: '2px 0',
  fontSize: '0.85rem',
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes scrollLeft {
      0% { transform: translateX(0); }
      100% { transform: translateX(calc(-50% - 10px)); }
    }
    @keyframes scrollRight {
      0% { transform: translateX(calc(-50% - 10px)); }
      100% { transform: translateX(0); }
    }
    .draggable-slider.active {
      cursor: grabbing !important;
      cursor: -webkit-grabbing !important;
    }
    @media (max-width: 768px) {
      section[id="reviews"] {
        padding: 60px 0 !important;
      }
      
      section[id="reviews"] div[style*="width: 350px"] {
        width: 300px !important;
        height: auto !important;
        min-height: 240px !important;
      }
      
      section[id="reviews"] div[style*="height: 100px"] {
        height: auto !important;
        min-height: 80px !important;
      }
    }
    
    @media (max-width: 480px) {
      section[id="reviews"] div[style*="width: 350px"],
      section[id="reviews"] div[style*="width: 300px"] {
        width: 280px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Reviews;
