import React, { useState } from 'react';

const ProductDetail = () => {
  const [activeImage, setActiveImage] = useState(0);
  
  const images = [
    'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca3ef?q=80&w=2070',
    'https://images.unsplash.com/photo-1513512147376-c29e715f3d5b?q=80&w=2070',
    'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=2070',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070'
  ];

  const finishes = [
    { name: 'Cream', color: '#f5f5dc' },
    { name: 'Light Oak', color: '#d2b48c' },
    { name: 'Walnut', color: '#6b4423' },
    { name: 'Dark Wenge', color: '#2a1b0a' },
    { name: 'Slate Grey', color: '#708090' },
    { name: 'Charcoal', color: '#36454f' }
  ];

  const specs = [
    { label: 'Material', value: 'High Quality PVC' },
    { label: 'Thickness', value: '25mm / 30mm' },
    { label: 'Door Frame', value: 'PVC / WPC Frame' },
    { label: 'Water Resistance', value: '100% Waterproof' },
    { label: 'Termite Resistance', value: 'Yes' },
    { label: 'Suitable For', value: 'Bathroom, Kitchen, Balcony, Interior' },
    { label: 'Warranty', value: 'Up to 10 Years*' }
  ];

  return (
    <div className="product-page" style={{ paddingTop: '100px' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <nav style={breadcrumbStyle}>
          <a href="#home">Home</a> <span>›</span> <a href="#products">Our Products</a> <span>›</span> <strong>PVC Doors</strong>
        </nav>

        {/* Main Product Info */}
        <div style={mainGridStyle}>
          {/* Left: Gallery */}
          <div style={galleryStyle}>
            <div style={mainImageWrapperStyle}>
              <img src={images[activeImage]} alt="Product" style={mainImageStyle} />
            </div>
            <div style={thumbnailWrapperStyle}>
              <button style={navBtnStyle}>‹</button>
              <div style={thumbnailListStyle}>
                {images.map((img, idx) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt={`Thumb ${idx}`} 
                    style={{...thumbStyle, border: activeImage === idx ? '2px solid var(--primary)' : '1px solid #ddd'}}
                    onClick={() => setActiveImage(idx)}
                  />
                ))}
              </div>
              <button style={navBtnStyle}>›</button>
            </div>
          </div>

          {/* Right: Info */}
          <div style={infoStyle}>
            <span style={{ color: 'var(--primary)', fontWeight: 600 }}>PVC Doors</span>
            <h1 style={{ fontSize: '2.5rem', margin: '10px 0 20px' }}>Premium PVC Doors</h1>
            <div style={{ height: '2px', width: '50px', background: '#ddd', marginBottom: '20px' }}></div>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '30px' }}>
              Our PVC doors are waterproof, durable, and stylish – perfect for modern homes and offices. Designed to resist moisture, termites, and daily wear, they offer long-lasting performance with minimal maintenance.
            </p>

            <div style={featureIconsStyle}>
              <div style={iconItemStyle}><span>💧</span><p>Waterproof</p></div>
              <div style={iconItemStyle}><span>🐜</span><p>Termite Resistant</p></div>
              <div style={iconItemStyle}><span>🛡️</span><p>Durable & Long Lasting</p></div>
              <div style={iconItemStyle}><span>✨</span><p>Easy to Maintain</p></div>
            </div>

            <div style={{ margin: '30px 0' }}>
              <p style={{ fontWeight: 600, marginBottom: '15px' }}>Available Finishes</p>
              <div style={swatchGroupStyle}>
                {finishes.map(f => (
                  <div key={f.name} style={{...swatchStyle, background: f.color}} title={f.name}></div>
                ))}
                <button style={moreBtnStyle}>+ More</button>
              </div>
            </div>

            <div style={btnGroupStyle}>
              <button className="btn btn-primary">Get a Quote →</button>
              <button className="btn btn-outline" style={{ color: 'var(--secondary)', borderColor: '#ddd' }}>Download Brochure 📥</button>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="section-padding">
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Key Features</h2>
          <div style={featuresGridStyle}>
            {[
              { icon: '💧', title: '100% Waterproof', desc: 'Ideal for bathrooms, kitchens, and all weather conditions.' },
              { icon: '🛡️', title: 'Termite & Pest Proof', desc: 'Built to resist termites and pests for a worry-free life.' },
              { icon: '🏗️', title: 'High Durability', desc: 'Strong and reliable structure for long-term performance.' },
              { icon: '🧹', title: 'Low Maintenance', desc: 'Easy to clean and requires minimal maintenance.' },
              { icon: '🎨', title: 'Stylish Designs', desc: 'Modern and elegant finishes to match every interior.' }
            ].map(f => (
              <div key={f.title} style={featureCardStyle}>
                <div style={featureIconStyle}>{f.icon}</div>
                <h4 style={{ margin: '10px 0' }}>{f.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specs & Why Choose Us */}
        <div style={bottomGridStyle} className="section-padding">
          <div style={{ flex: 1 }}>
            <h3 style={{ marginBottom: '20px' }}>Technical Specifications</h3>
            <table style={tableStyle}>
              <tbody>
                {specs.map(s => (
                  <tr key={s.label}>
                    <td style={tdStyle}><strong>{s.label}</strong></td>
                    <td style={tdStyle}>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: '0.7rem', opacity: 0.5, marginTop: '10px' }}>*Terms & Conditions Apply</p>
          </div>
          <div style={whyChooseBoxStyle}>
            <h3 style={{ marginBottom: '20px', color: 'white' }}>Why Choose Our PVC Doors?</h3>
            <ul style={checkListStyle}>
              <li><span>✓</span> Advanced technology and premium quality material</li>
              <li><span>✓</span> Perfect finish with strong and elegant look</li>
              <li><span>✓</span> Wide range of designs and colors</li>
              <li><span>✓</span> Custom sizes available as per requirement</li>
              <li><span>✓</span> Trusted by hundreds of happy customers in Nashik</li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div style={ctaBannerStyle}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={bannerIconStyle}>🎧</div>
            <div>
              <h3 style={{ margin: 0 }}>Need Help Choosing the Right Door?</h3>
              <p style={{ margin: 0, opacity: 0.8 }}>Our experts are here to help you find the perfect door for your space.</p>
            </div>
          </div>
          <button className="btn btn-primary" style={{ background: '#c27829', padding: '12px 30px' }}>Talk to Expert →</button>
        </div>
      </div>
    </div>
  );
};

const breadcrumbStyle = {
  fontSize: '0.85rem',
  color: '#888',
  marginBottom: '30px',
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
};

const thumbStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '10px',
  objectFit: 'cover',
  cursor: 'pointer',
};

const navBtnStyle = {
  background: '#333',
  color: 'white',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  fontSize: '1.2rem',
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
};

const swatchStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  border: '1px solid #ddd',
};

const moreBtnStyle = {
  fontSize: '0.8rem',
  background: 'none',
  color: '#888',
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

export default ProductDetail;
