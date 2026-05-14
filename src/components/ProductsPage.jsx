import React from 'react';
import PageHeader from './PageHeader';
import { Package, Sparkles, Shield } from 'lucide-react';

const ProductsPage = () => {
  const categories = [
    {
      id: 'pvc',
      title: 'PVC Doors',
      image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b0ca3ef?q=80&w=2070',
      desc: '100% Waterproof and termite resistant doors for all weather conditions.',
      link: '#pvc-doors'
    },
    {
      id: 'coating',
      title: 'Coating Doors',
      image: 'https://images.unsplash.com/photo-1513512147376-c29e715f3d5b?q=80&w=2070',
      desc: 'Elegant and durable coating finish doors for premium interiors.',
      link: '#'
    },
    {
      id: 'sagwani',
      title: 'Sagwani Doors',
      image: 'https://images.unsplash.com/photo-1525498128493-380d1990a112?q=80&w=2070',
      desc: 'Traditional high-quality Sagwani wood doors for a classic look.',
      link: '#'
    },
    {
      id: 'modular',
      title: 'Modular Furniture',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
      desc: 'Custom modular furniture solutions for modern homes.',
      link: '#'
    }
  ];

  return (
    <div>
      <PageHeader
        title={
          <>
            Explore Our <br />
            <span style={{ color: 'var(--primary)' }}>Premium Collection</span>
          </>
        }
        description="From PVC and Coating doors to Sagwani wood and modular furniture - discover quality products crafted with precision for your home."
        primaryButton={{
          text: "Get a Quote →",
          link: "/contact"
        }}
        secondaryButton={{
          text: "View Gallery",
          link: "/gallery"
        }}
        features={[
          {
            icon: <Package size={18} strokeWidth={1.5} />,
            title: "Wide Range",
            subtitle: "Of Products"
          },
          {
            icon: <Sparkles size={18} strokeWidth={1.5} />,
            title: "Premium Quality",
            subtitle: "Materials"
          },
          {
            icon: <Shield size={18} strokeWidth={1.5} />,
            title: "Warranty",
            subtitle: "Included"
          }
        ]}
      />

      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={gridStyle}>
            {categories.map(cat => (
              <div key={cat.id} style={cardStyle}>
                <div style={imageWrapperStyle}>
                  <img src={cat.image} alt={cat.title} style={imgStyle} />
                </div>
                <div style={contentStyle}>
                  <h3 style={{ marginBottom: '10px' }}>{cat.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px' }}>{cat.desc}</p>
                  <a href={cat.link} style={linkStyle}>View Details →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '80px' };
const cardStyle = { background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'var(--transition)' };
const imageWrapperStyle = { height: '250px', overflow: 'hidden' };
const imgStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const contentStyle = { padding: '25px' };
const linkStyle = { color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' };

export default ProductsPage;
