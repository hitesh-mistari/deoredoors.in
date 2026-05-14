import React from 'react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'PVC Doors',
      description: 'Waterproof, durable & stylish PVC doors for modern homes and offices.',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca3ef?q=80&w=2070',
      icon: '🚪'
    },
    {
      id: 2,
      name: 'Coating Doors',
      description: 'Elegant coating finish doors that enhance the beauty of your interiors.',
      image: 'https://images.unsplash.com/photo-1513512147376-c29e715f3d5b?q=80&w=2070',
      icon: '🪵'
    },
    {
      id: 3,
      name: 'Sagwani Doors',
      description: 'Premium Sagwani wood doors for a classic and long-lasting experience.',
      image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=2070',
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
                <a href="#" style={linkStyle}>Learn More →</a>
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

export default Products;
