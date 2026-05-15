import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { Image, Eye, Star } from 'lucide-react';
import photos from '../data/gallery.json';

const GalleryPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div>
      <PageHeader
        title={
          <>
            Our Work <br />
            <span style={{ color: 'var(--primary)' }}>Speaks for Itself</span>
          </>
        }
        description="Explore our portfolio of completed projects. From residential homes to commercial spaces, see the quality and craftsmanship that defines Deore Doors."
        features={[
          {
            icon: <Image size={18} strokeWidth={1.5} />,
            title: "500+ Projects",
            subtitle: "Completed"
          },
          {
            icon: <Star size={18} strokeWidth={1.5} />,
            title: "5-Star Rated",
            subtitle: "Reviews"
          },
          {
            icon: <Eye size={18} strokeWidth={1.5} />,
            title: "Quality Work",
            subtitle: "Guaranteed"
          }
        ]}
      />

      <div style={{ paddingTop: '80px' }}>
        <div className="container">
          <div style={gridStyle} className="gallery-page-grid">
            {photos.map((photo, idx) => (
              <div 
                key={idx} 
                style={itemStyle} 
                className="gallery-item gallery-page-item"
                onClick={() => setSelectedPhoto(photo)}
              >
                <img 
                  src={photo.url} 
                  alt={`Gallery ${idx}`} 
                  style={imgStyle} 
                  referrerPolicy="no-referrer"
                />
                <div style={overlayStyle} className="gallery-overlay">
                   <span style={overlayTextStyle}>
                     {photo.title ? (photo.title.substring(0, 60) + '...') : 'View Project'}
                   </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div style={modalOverlayStyle} onClick={() => setSelectedPhoto(null)}>
          <div style={modalContentStyle} className="gallery-modal-content" onClick={e => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={() => setSelectedPhoto(null)}>×</button>
            <img 
              src={selectedPhoto.url} 
              alt="Project" 
              style={modalImgStyle} 
              referrerPolicy="no-referrer"
            />
            {selectedPhoto.title && (
              <div style={modalInfoStyle} className="gallery-modal-info">
                <p style={modalTitleStyle} className="gallery-modal-title">{selectedPhoto.title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
  gap: '20px', 
  marginBottom: '80px' 
};

const itemStyle = { 
  height: '300px', 
  borderRadius: '16px', 
  overflow: 'hidden', 
  position: 'relative',
  cursor: 'pointer'
};

const imgStyle = { 
  width: '100%', 
  height: '100%', 
  objectFit: 'cover',
  transition: 'transform 0.5s ease'
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.4)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease'
};

const overlayTextStyle = {
  color: 'white',
  fontWeight: 600,
  fontSize: '0.85rem',
  textAlign: 'center',
  padding: '0 15px',
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0,0,0,0.9)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10000,
  padding: '20px',
  cursor: 'zoom-out',
};

const modalContentStyle = {
  position: 'relative',
  maxWidth: '900px',
  width: '100%',
  maxHeight: '90vh',
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  cursor: 'default',
};

const modalImgStyle = {
  width: '100%',
  height: 'auto',
  maxHeight: '70vh',
  objectFit: 'contain',
  background: '#f8f9fa',
};

const closeButtonStyle = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  background: 'white',
  border: 'none',
  fontSize: '2rem',
  lineHeight: '1',
  cursor: 'pointer',
  zIndex: 10,
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
};

const modalInfoStyle = {
  padding: '25px',
  overflowY: 'auto',
  background: 'white',
};

const modalTitleStyle = {
  fontSize: '1rem',
  lineHeight: '1.6',
  color: '#2d3748',
  margin: 0,
};

// Add responsive styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (max-width: 768px) {
      .gallery-page-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)) !important;
        gap: 15px !important;
      }
      
      .gallery-page-item {
        height: 250px !important;
        border-radius: 12px !important;
      }
    }
    
    @media (max-width: 480px) {
      .gallery-page-grid {
        grid-template-columns: 1fr !important;
        gap: 12px !important;
      }
      
      .gallery-page-item {
        height: 220px !important;
        border-radius: 10px !important;
      }
      
      .gallery-modal-content {
        border-radius: 12px !important;
      }
      
      .gallery-modal-info {
        padding: 15px !important;
      }
      
      .gallery-modal-title {
        font-size: 0.9rem !important;
      }
    }
  `;
  document.head.appendChild(style);
}

export default GalleryPage;
