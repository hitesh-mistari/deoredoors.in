import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'PVC Doors',
      description: 'Waterproof, durable & stylish PVC doors for modern homes and offices.',
      image: '/images/door/pvc-door-by-deore-doors.webp',
      icon: '🚪'
    },
    {
      id: 2,
      name: 'Coating Doors',
      description: 'Elegant coating finish doors that enhance the beauty of your interiors.',
      image: '/images/door/coating-door.webp',
      icon: '🪵'
    },
    {
      id: 3,
      name: 'Sagwani Doors',
      description: 'Premium Sagwani wood doors for a classic and long-lasting experience.',
      image: '/images/door/sagwani-door-by-deore-doors.webp',
      icon: '✨'
    }
  ];

  return (
    <section id="products" className="section-padding">
      <div className="container">
        <div className="section-title">
          <span>Our Products</span>
          <h2>Crafted for Style. Built for Durability.</h2>
        </div>
        <div style={gridStyle}>
          {products.map(product => (
            <div key={product.id} style={cardStyle}>
              <div style={imageContainerStyle}>
                <img src={product.image} alt={product.name} style={imageStyle} />
                <div style={iconBadgeStyle}>{product.icon}</div>
              </div>
              <div style={cardBodyStyle}>
                <h3 style={{ marginBottom: '10px' }}>{product.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{product.description}</p>
                <Link to={`/product/${product.id}`} style={linkStyle}>Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '30px',
};

const cardStyle = {
  background: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: 'var(--shadow-md)',
  transition: 'var(--transition)',
  cursor: 'pointer',
};

const imageContainerStyle = {
  height: '350px',
  position: 'relative',
  overflow: 'hidden',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'var(--transition)',
};

const iconBadgeStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '20px',
  width: '50px',
  height: '50px',
  background: 'var(--primary)',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: 'white',
  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
};

const cardBodyStyle = {
  padding: '25px',
};

const linkStyle = {
  color: 'var(--primary)',
  fontWeight: 600,
  fontSize: '0.9rem',
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      section[id="products"] > div > div[style*="grid"] {
        grid-template-columns: 1fr !important;
        gap: 20px !important;
      }
    }
    
    @media (max-width: 480px) {
      section[id="products"] div[style*="height: 350px"] {
        height: 250px !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Products;
