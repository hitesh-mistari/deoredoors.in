import { MapPin, Phone, Clock } from 'lucide-react';
import mapImage from '../assets/images/how-to-reach-deoredoors.webp';
import coatingDoorBg from '../../public/images/door/coating-door.webp';

export default function HowToReach() {
  return (
    <section className="how-to-reach-section" style={{ backgroundImage: `url(${coatingDoorBg})` }}>
      <div className="container">
        {/* Main Content */}
        <div className="how-to-reach-content">
          {/* Left Side - Information */}
          <div className="reach-info">
            <p className="section-label">VISIT OUR STORE</p>
            <h2 className="section-title">
              How to Reach<br />
              Deore Doors
            </h2>
            <div className="title-underline"></div>
            
            <p className="reach-description">
              Visit our showroom near Ambad Link Road, Nashik.<br />
              We are easily accessible from Trimurti Chowk, Mumbai Naka,<br />
              Pathardi Phata and Ambad MIDC.
            </p>

            {/* Contact Cards */}
            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h4>Our Location</h4>
                  <p>Ambad Link Road, Nashik</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <p>73501 31608</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Clock size={24} />
                </div>
                <div className="contact-details">
                  <h4>Store Timing</h4>
                  <p>Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="reach-actions">
              <a 
                href="https://maps.google.com/?q=Deore+Doors+Ambad+Link+Road+Nashik" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary btn-directions"
              >
                <MapPin size={20} />
                Get Directions
              </a>
              <a 
                href="tel:7350131608" 
                className="btn-secondary btn-call"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="reach-map">
            <img 
              src={mapImage} 
              alt="Map showing how to reach Deore Doors showroom at Ambad Link Road, Nashik" 
              loading="lazy"
            />
          </div>
        </div>

        {/* Help Banner */}
        <div className="help-banner">
          <div className="help-content">
            <div className="help-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="24" cy="24" r="22" stroke="currentColor" strokeWidth="2"/>
                <circle cx="24" cy="18" r="4" fill="currentColor"/>
                <path d="M16 32c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="help-text">
              <h3>Need Help Finding Us?</h3>
              <p>Our team is happy to help you reach our showroom easily.</p>
            </div>
          </div>
          <a href="/contact" className="btn-help">
            Talk to Our Expert
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
