import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Amit Sharma",
      rating: 5,
      text: "The quality of the PVC doors is exceptional. They look exactly like real wood but are so much easier to maintain. Highly recommended!",
      time: "2 weeks ago",
      initial: "A"
    },
    {
      id: 2,
      name: "Rahul Verma",
      rating: 5,
      text: "Best showroom in Nashik for doors. The Sagwani wood doors we bought for our main entrance are beautiful and very sturdy.",
      time: "1 month ago",
      initial: "R"
    },
    {
      id: 3,
      name: "Sneha Patil",
      rating: 5,
      text: "Expert craftsmanship! They customized the coating doors exactly as we wanted for our modular kitchen and bedroom. Great service.",
      time: "3 days ago",
      initial: "S"
    },
    {
      id: 4,
      name: "Vijay Kulkarni",
      rating: 4,
      text: "Good experience. The delivery was slightly delayed but the product quality made up for it. The installation team was professional.",
      time: "2 months ago",
      initial: "V"
    },
    {
      id: 5,
      name: "Pooja Deshmukh",
      rating: 5,
      text: "We ordered modular furniture along with the doors. Everything looks premium and fits perfectly in our new home. Thank you Deore Door!",
      time: "1 week ago",
      initial: "P"
    }
  ];

  return (
    <section id="reviews" className="section-padding" style={{ background: '#fcf8f4' }}>
      <div className="container">
        <div style={headerStyle}>
          <div className="section-title" style={{ textAlign: 'left', marginBottom: 0 }}>
            <span>Testimonials</span>
            <h2>What Our Customers Say</h2>
          </div>
          <div style={googleBadgeStyle}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_Logo.svg" alt="Google" style={{ width: '24px' }} />
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>4.9 / 5.0</p>
              <div style={{ color: '#fb8c00', fontSize: '0.8rem' }}>★★★★★</div>
            </div>
          </div>
        </div>

        <div style={sliderContainerStyle}>
          <div style={sliderTrackStyle} className="hide-scrollbar">
            {reviews.map((review) => (
              <div key={review.id} style={reviewCardStyle}>
                <div style={userHeaderStyle}>
                  <div style={avatarStyle}>{review.initial}</div>
                  <div>
                    <h4 style={{ fontSize: '1rem' }}>{review.name}</h4>
                    <p style={{ fontSize: '0.75rem', opacity: 0.6 }}>{review.time}</p>
                  </div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_\"G\"_Logo.svg" alt="Google" style={{ marginLeft: 'auto', width: '16px', opacity: 0.5 }} />
                </div>
                <div style={{ color: '#fb8c00', margin: '10px 0', fontSize: '0.9rem' }}>
                  {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                </div>
                <p style={reviewTextStyle}>"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
        
        <div style={instructionStyle}>
          <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>← Scroll to see more →</span>
        </div>
      </div>
    </section>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  marginBottom: '40px',
  flexWrap: 'wrap',
  gap: '20px'
};

const googleBadgeStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  background: 'white',
  padding: '10px 20px',
  borderRadius: '12px',
  boxShadow: 'var(--shadow-sm)',
};

const sliderContainerStyle = {
  position: 'relative',
  margin: '0 -20px',
  padding: '10px 20px',
};

const sliderTrackStyle = {
  display: 'flex',
  gap: '20px',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  paddingBottom: '20px',
};

const reviewCardStyle = {
  flex: '0 0 350px',
  background: 'white',
  padding: '25px',
  borderRadius: '20px',
  boxShadow: 'var(--shadow-md)',
  scrollSnapAlign: 'start',
  transition: 'var(--transition)',
  border: '1px solid #f0f0f0',
};

const userHeaderStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  marginBottom: '15px',
};

const avatarStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: 'var(--primary)',
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 700,
};

const reviewTextStyle = {
  fontSize: '0.95rem',
  color: 'var(--text-main)',
  lineHeight: 1.5,
  fontStyle: 'italic',
};

const instructionStyle = {
  textAlign: 'center',
  marginTop: '20px',
};

export default Reviews;
