import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const Products = () => {
  return (
    <section id="products" className="section-padding products-section">
      <div className="container">
        <div className="section-title">
          <span>Our Products</span>
          <h2>Crafted for Style. Built for Durability.</h2>
        </div>
        <div className="products-grid">
          {productsData.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-icon-badge">{product.icon}</div>
              </div>
              <div className="product-card-body">
                <h3>{product.name}</h3>
                <p className="product-desc">{product.shortDescription}</p>
                <Link to={`/product/${product.id}`} className="product-link">Learn More →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Add styles
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('products-responsive-styles');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'products-responsive-styles';
  style.textContent = `
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 30px;
    }
    
    .product-card {
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: var(--transition);
      cursor: pointer;
      display: flex;
      flex-direction: column;
    }
    
    .product-image-container {
      height: 350px;
      position: relative;
      overflow: hidden;
    }
    
    .product-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition);
    }
    
    .product-icon-badge {
      position: absolute;
      bottom: 20px;
      left: 20px;
      width: 50px;
      height: 50px;
      background: var(--primary);
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: white;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    
    .product-card-body {
      padding: 25px;
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    .product-card-body h3 {
      margin-bottom: 10px;
    }
    
    .product-desc {
      color: var(--text-muted);
      font-size: 0.9rem;
      margin-bottom: 20px;
      flex: 1;
    }
    
    .product-link {
      color: var(--primary);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
    }
    
    .product-card:hover .product-image {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      .products-grid {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 20px;
        padding: 10px 5px 30px 5px;
        margin: 0 -20px;
        padding-left: 20px;
        padding-right: 20px;
        scrollbar-width: none; /* Hide scrollbar for Firefox */
        -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
      }
      
      .products-grid::-webkit-scrollbar {
        display: none; /* Hide scrollbar for Chrome/Safari */
      }
      
      .product-card {
        min-width: 280px;
        max-width: 280px;
        scroll-snap-align: center;
      }
      
      .product-image-container {
        height: 250px;
      }
    }
    
    @media (max-width: 480px) {
      .product-card {
        min-width: 260px;
        max-width: 260px;
      }
      
      .section-title h2 {
        font-size: 1.75rem;
      }
    }
  `;
  document.head.appendChild(style);
}

export default Products;
