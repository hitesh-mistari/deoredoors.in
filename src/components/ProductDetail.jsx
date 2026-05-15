import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productsData.find(p => p.id === productId);

  const [activeImage, setActiveImage] = useState(0);

  // If product not found, redirect to products page
  if (!product) {
    navigate('/products');
    return null;
  }

  return (
    <div className="product-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        {/* Main Product Info */}
        <div style={mainGridStyle} className="product-detail-grid">
          {/* Left: Gallery */}
          <div style={galleryStyle}>
            <div style={mainImageWrapperStyle}>
              <img src={product.images[activeImage]} alt={product.name} style={mainImageStyle} referrerPolicy="no-referrer" />
            </div>
            <div style={thumbnailWrapperStyle} className="product-thumbnails">
              {product.images.length > 1 && (
                <div style={thumbnailListStyle}>
                  {product.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${product.name} ${idx + 1}`} 
                      style={{...thumbStyle, border: activeImage === idx ? '2px solid var(--primary)' : '1px solid #ddd'}}
                      onClick={() => setActiveImage(idx)}
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: Info */}
          <div style={infoStyle}>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{product.name}</span>
            <h1 style={{ fontSize: '2.5rem', margin: '10px 0 20px' }}>{product.name}</h1>
            <div style={{ height: '2px', width: '50px', background: '#ddd', marginBottom: '20px' }}></div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '30px' }}>
              {product.fullDescription}
            </p>

            <div style={featureIconsStyle} className="product-feature-icons">
              {product.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} style={iconItemStyle}>
                  <span>{feature.icon}</span>
                  <p>{feature.title}</p>
                </div>
              ))}
            </div>

            <div style={{ margin: '30px 0' }}>
              <p style={{ fontWeight: 600, marginBottom: '15px' }}>Available Finishes</p>
              <div style={swatchGroupStyle} className="product-swatches">
                {product.finishes.map(f => (
                  <div key={f.name} style={{...swatchStyle, background: f.color}} title={f.name}></div>
                ))}
              </div>
            </div>

            <div style={btnGroupStyle} className="product-action-btns">
              <Link to="/contact" className="btn btn-primary">Get a Quote →</Link>
              <button className="btn btn-outline" style={{ color: 'var(--secondary)', borderColor: '#ddd' }}>
                Call Now 📞
              </button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="section-padding">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Key Features</h2>
          <div style={featuresGridStyle} className="product-features-grid">
            {product.features.map((f, idx) => (
              <div key={idx} style={featureCardStyle} className="product-feature-card">
                <div style={featureIconStyle}>{f.icon}</div>
                <h4 style={{ margin: '10px 0' }}>{f.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs & Why Choose Us */}
        <div style={bottomGridStyle} className="section-padding product-bottom-grid">
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '20px' }}>Technical Specifications</h3>
            <table style={tableStyle}>
              <tbody>
                {product.specifications.map((s, idx) => (
                  <tr key={idx}>
                    <td style={tdStyle}><strong>{s.label}</strong></td>
                    <td style={tdStyle}>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '10px' }}>*Terms & Conditions Apply</p>
          </div>
          <div style={whyChooseBoxStyle} className="product-why-choose">
            <h3 style={{ marginBottom: '20px', color: 'white' }}>Why Choose Our {product.name}?</h3>
            <ul style={checkListStyle}>
              {product.whyChoose.map((item, idx) => (
                <li key={idx}><span>✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={ctaBannerStyle} className="product-cta-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
            <div style={bannerIconStyle}>🎧</div>
            <div>
              <h3 style={{ margin: 0 }}>Need Help Choosing the Right Door?</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>Our experts are here to help you find the perfect door for your space.</p>
            </div>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ background: '#c27829', padding: '12px 30px' }}>
            Talk to Expert →
          </Link>
        </div>
      </div>
    </div>
  );
};

const mainGridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  alignItems: 'start',
};

const galleryStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const mainImageWrapperStyle = {
  borderRadius: '20px',
  overflow: 'hidden',
  height: '500px',
  boxShadow: 'var(--shadow-md)',
};

const mainImageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const thumbnailWrapperStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const thumbnailListStyle = {
  display: 'flex',
  gap: '10px',
  overflowX: 'auto',
  flex: 1,
};

const thumbStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '10px',
  objectFit: 'cover',
  cursor: 'pointer',
  flexShrink: 0,
};

const infoStyle = {
  paddingTop: '20px',
};

const featureIconsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '15px',
  margin: '20px 0',
};

const iconItemStyle = {
  textAlign: 'center',
  fontSize: '0.75rem',
};

const swatchGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
};

const swatchStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '1px solid #ddd',
  cursor: 'pointer',
  flexShrink: 0,
};

const btnGroupStyle = {
  display: 'flex',
  gap: '20px',
};

const featuresGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '20px',
};

const featureCardStyle = {
  padding: '20px',
  border: '1px solid #eee',
  borderRadius: '16px',
  textAlign: 'center',
};

const featureIconStyle = {
  fontSize: '1.5rem',
  marginBottom: '10px',
};

const bottomGridStyle = {
  display: 'flex',
  gap: '40px',
  flexWrap: 'wrap',
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
};

const tdStyle = {
  padding: '12px 0',
  borderBottom: '1px solid #eee',
  fontSize: '0.9rem',
};

const whyChooseBoxStyle = {
  flex: 1,
  minWidth: '400px',
  background: '#1c140d',
  padding: '40px',
  borderRadius: '20px',
  color: 'white',
};

const checkListStyle = {
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const ctaBannerStyle = {
  background: '#121212',
  color: 'white',
  padding: '30px 40px',
  borderRadius: '20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '40px 0',
};

const bannerIconStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('product-detail-responsive');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'product-detail-responsive';
  style.textContent = `
    @media (max-width: 992px) {
      .product-detail-grid {
        grid-template-columns: 1fr !important;
        gap: 40px !important;
      }
      
      .product-bottom-grid {
        flex-direction: column !important;
      }
      
      .product-why-choose {
        min-width: 100% !important;
      }
    }
    
    @media (max-width: 768px) {
      .product-detail-grid {
        gap: 30px !important;
      }
      
      .product-feature-icons {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      
      .product-features-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 15px !important;
      }
      
      .product-action-btns {
        flex-direction: column !important;
        gap: 10px !important;
      }
      
      .product-action-btns a,
      .product-action-btns button {
        width: 100% !important;
        justify-content: center !important;
      }
      
      .product-cta-banner {
        flex-direction: column !important;
        text-align: center !important;
        gap: 20px !important;
      }
      
      .product-cta-banner > div:first-child {
        flex-direction: column !important;
      }
    }
    
    @media (max-width: 480px) {
      .product-thumbnails {
        display: none !important;
      }
      
      .product-feature-icons {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 10px !important;
      }
      
      .product-features-grid {
        grid-template-columns: 1fr !important;
      }
      
      .product-swatches {
        flex-wrap: wrap !important;
      }
      
      .product-cta-banner h3 {
        font-size: 1.2rem !important;
      }
      
      .product-cta-banner p {
        font-size: 0.85rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default ProductDetail;
