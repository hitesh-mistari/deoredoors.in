import { MapPin, Phone, Clock, ArrowRight, Navigation } from 'lucide-react';
import mapImage from '../assets/images/how-to-reach-deoredoors.webp';
import './HowToReach.css';

export default function HowToReach() {
  return (
    <section className="how-to-reach-section">
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
                <Navigation size={18} />
                Get Directions
                <ArrowRight size={18} />
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
      </div>
    </section>
  );
}
