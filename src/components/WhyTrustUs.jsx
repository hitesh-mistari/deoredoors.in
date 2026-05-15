import React from 'react';
import { User, Award, DoorOpen, Truck, Phone, Store } from 'lucide-react';

const WhyTrustUs = () => {
  const features = [
    {
      icon: <User size={24} color="#d97706" />,
      title: 'Expert Guidance',
      description: 'Get practical door suggestions from experienced professionals.'
    },
    {
      icon: <Award size={24} color="#d97706" />,
      title: 'Quality You Can See',
      description: 'Visit our showroom and check the quality before you choose.'
    },
    {
      icon: <DoorOpen size={24} color="#d97706" />,
      title: 'Custom Door Solutions',
      description: 'Doors in PVC, Coating, Sagwan & more – made for your space.'
    },
    {
      icon: <Truck size={24} color="#d97706" />,
      title: 'Fast Local Delivery',
      description: 'Quick delivery across Nashik, right when you need it.'
    }
  ];

  return (
    <section className="why-trust-section">
      <div className="container why-trust-container">
        <div className="why-trust-wrapper">
          {/* Left Side - Image */}
          <div className="why-trust-image-container">
            <img 
              src="/images/door/why-trust-deore-doors.png"
              alt="Why Trust Deore Doors" 
              className="why-trust-image"
            />
          </div>

          {/* Right Side - Content */}
          <div className="why-trust-content">
            <div className="why-trust-header">
              <span className="why-trust-subtitle">WHY TRUST US</span>
              <h2 className="why-trust-title">
                Why Trust <span className="why-trust-brand">Deore Doors?</span>
              </h2>
            </div>

            <div className="why-trust-features-grid">
              <div className="why-trust-divider"></div>
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div className="why-trust-feature-item">
                    <div className="why-trust-icon-box">
                      {feature.icon}
                    </div>
                    <div className="why-trust-feature-content">
                      <h3 className="why-trust-feature-title">{feature.title}</h3>
                      <p className="why-trust-feature-desc">{feature.description}</p>
                    </div>
                  </div>
                  <div className="why-trust-divider"></div>
                </React.Fragment>
              ))}
            </div>

            <div className="why-trust-cta">
              <a href="tel:+917350131608" className="why-trust-btn-call">
                <span className="why-trust-btn-icon"><Phone size={20} /></span>
                Call Us Now
              </a>
              <a href="/contact" className="why-trust-btn-visit">
                <span className="why-trust-btn-icon"><Store size={20} /></span>
                Visit Showroom
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add responsive styles and hover effects
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('why-trust-us-styles-v3');
  if (existingStyle) existingStyle.remove();

  const style = document.createElement('style');
  style.id = 'why-trust-us-styles-v3';
  style.textContent = `
    .why-trust-section {
      padding: 80px 0;
      background: #ffffff;
      position: relative;
      overflow: hidden;
    }
    
    .why-trust-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .why-trust-wrapper {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 60px;
      align-items: center;
    }
    
    .why-trust-image-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    
    .why-trust-image {
      width: 100%;
      height: auto;
      max-width: 500px;
      border-radius: 20px;
      object-fit: contain;
    }
    
    .why-trust-content {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
    }
    
    .why-trust-subtitle {
      font-size: 0.9rem;
      font-weight: 600;
      color: #d97706;
      letter-spacing: 2px;
      margin-bottom: 10px;
      display: block;
    }
    
    .why-trust-title {
      font-size: 2.8rem;
      font-weight: 700;
      color: #1a202c;
      line-height: 1.1;
      margin-bottom: 0;
    }
    
    .why-trust-brand {
      color: #d97706;
    }
    
    .why-trust-features-grid {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    
    .why-trust-divider {
      height: 1px;
      background-color: #e2e8f0;
      width: 100%;
    }
    
    .why-trust-feature-item {
      display: flex;
      gap: 20px;
      padding: 20px 0;
      background: transparent;
      align-items: center;
    }
    
    .why-trust-icon-box {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 2px solid #fef3c7;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    
    .why-trust-feature-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #1a202c;
      margin-bottom: 5px;
    }
    
    .why-trust-feature-desc {
      font-size: 0.9rem;
      color: #718096;
      line-height: 1.5;
      margin: 0;
    }
    
    .why-trust-cta {
      display: flex;
      gap: 15px;
      margin-top: 10px;
    }
    
    .why-trust-btn-call {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      background: #d97706;
      color: white;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.2);
    }
    
    .why-trust-btn-visit {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 28px;
      background: white;
      color: #d97706;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: all 0.3s ease;
      border: 2px solid #d97706;
    }
    
    .why-trust-btn-icon {
      display: flex;
      align-items: center;
    }
    
    .why-trust-btn-call:hover {
      background: #b45309;
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(217, 119, 6, 0.3);
    }
    
    .why-trust-btn-visit:hover {
      background: #fffbeb;
      transform: translateY(-2px);
    }
    
    /* Responsive styles */
    @media (max-width: 1024px) {
      .why-trust-title {
        font-size: 2.4rem;
      }
      .why-trust-wrapper {
        gap: 40px;
      }
    }
    
    @media (max-width: 968px) {
      .why-trust-section {
        padding: 60px 0;
      }
      .why-trust-wrapper {
        grid-template-columns: 1fr;
        gap: 40px;
      }
      .why-trust-image-container {
        order: 2;
      }
      .why-trust-content {
        order: 1;
        text-align: center;
        align-items: center;
      }
      .why-trust-feature-item {
        text-align: left;
      }
      .why-trust-cta {
        justify-content: center;
      }
      .why-trust-image {
        max-width: 450px;
      }
    }
    
    @media (max-width: 640px) {
      .why-trust-title {
        font-size: 1.85rem;
      }
      .why-trust-cta {
        flex-direction: column;
        width: 100%;
        gap: 12px;
      }
      .why-trust-btn-call, .why-trust-btn-visit {
        width: 100%;
        justify-content: center;
      }
      .why-trust-feature-item {
        gap: 15px;
        padding: 15px 0;
      }
      .why-trust-icon-box {
        width: 40px;
        height: 40px;
      }
      .why-trust-image {
        max-width: 100%;
        border-radius: 12px;
      }
    }
  `;
  document.head.appendChild(style);
}

export default WhyTrustUs;
