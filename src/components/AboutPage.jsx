import React from 'react';
import PageHeader from './PageHeader';
import { Award, Users, TrendingUp } from 'lucide-react';
import shopImage from '../assets/images/deore-door-shop.webp';

const AboutPage = () => {
  return (
    <div>
      <PageHeader
        title={
          <>
            Building Trust, <br />
            <span style={{ color: 'var(--primary)' }}>One Door at a Time</span>
          </>
        }
        description="Deore Doors was founded by Mr. Suresh Deore in 2020. From hands-on door fitting to a trusted local business, we've proudly served 500+ happy customers across Nashik."
        primaryButton={{
          text: "View Our Work →",
          link: "/gallery"
        }}
        secondaryButton={{
          text: "Contact Us",
          link: "/contact"
        }}
        features={[
          {
            icon: <Award size={18} strokeWidth={1.5} />,
            title: "4+ Years",
            subtitle: "Excellence"
          },
          {
            icon: <Users size={18} strokeWidth={1.5} />,
            title: "500+ Customers",
            subtitle: "Served"
          },
          {
            icon: <TrendingUp size={18} strokeWidth={1.5} />,
            title: "5-Star Rated",
            subtitle: "On Google"
          }
        ]}
      />
      
      <div style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="container">
          <div style={gridStyle}>
          <div style={contentStyle}>
            <h3 style={{ color: 'var(--secondary)', marginBottom: '10px' }}>Building Trust, One Door at a Time</h3>
            <p style={pStyle}>
              Deore Doors was founded by <strong>Mr. Suresh Deore</strong>, a skilled door fitting professional who started his journey in Nashik in 2020. What began as hands-on door fitting work slowly grew into a trusted local business built on quality, honesty, and customer satisfaction.
            </p>
            <p style={pStyle}>
              After gaining strong experience in door installation, Mr. Deore decided to start his own venture and open a dedicated door shop. Over the last four years, Deore Doors has proudly served <strong>500+ happy customers</strong> across Nashik, Igatpuri, and nearby areas.
            </p>
            <p style={pStyle}>
              From homes and apartments to hotels, villas, and commercial spaces, Deore Doors has delivered and fitted doors for a wide range of projects. The brand has also worked with known locations such as <strong>Sula Vineyards, Hotel Dil Se Desi</strong>, and many other hospitality and residential projects.
            </p>
            <p style={pStyle}>
              Today, Deore Doors is known as one of the trusted door shops in Nashik, backed by strong customer reviews, a 5-star reputation on Google, and positive ratings on Justdial. Every project reflects the same promise: strong doors, clean finishing, reliable fitting, and service customers can trust.
            </p>
            <p style={{ ...pStyle, fontWeight: 600, color: 'var(--primary)', marginTop: '20px' }}>
              At Deore Doors, we don’t just sell doors — we help people create beautiful, secure, and lasting spaces.
            </p>
          </div>
          <div style={imageWrapperStyle}>
            <img src={shopImage} alt="Deore Door Showroom" style={imgStyle} />
          </div>
        </div>

        <div style={statsContainerStyle}>
          <div style={statBoxStyle}>
            <h2 style={{color: 'var(--primary)', fontSize: '2.5rem'}}>500+</h2>
            <p style={{fontWeight: 500}}>Happy Customers</p>
          </div>
          <div style={statBoxStyle}>
            <h2 style={{color: 'var(--primary)', fontSize: '2.5rem'}}>1000+</h2>
            <p style={{fontWeight: 500}}>Doors Fitted</p>
          </div>
          <div style={statBoxStyle}>
            <h2 style={{color: 'var(--primary)', fontSize: '2.5rem'}}>4+</h2>
            <p style={{fontWeight: 500}}>Years Excellence</p>
          </div>
        </div>

        <div className="section-padding">
          <h3 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Our Core Values</h3>
          <div style={valuesGridStyle}>
            <ValueCard icon="⭐" title="Quality First" desc="We never compromise on the materials or methods used in our products." />
            <ValueCard icon="🤝" title="Customer Trust" desc="Building long-term relationships through transparency and reliability." />
            <ValueCard icon="🎨" title="Innovation" desc="Constantly updating our designs to stay ahead of modern interior trends." />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div style={valueCardStyle}>
    <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{icon}</div>
    <h4 style={{ marginBottom: '15px', fontSize: '1.2rem' }}>{title}</h4>
    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{desc}</p>
  </div>
);

const gridStyle = { 
  display: 'grid', 
  gridTemplateColumns: '1.2fr 0.8fr', 
  gap: '60px', 
  alignItems: 'start',
  marginBottom: '80px'
};

const contentStyle = { display: 'flex', flexDirection: 'column', gap: '15px' };
const pStyle = { lineHeight: '1.8', color: 'var(--text-muted)', fontSize: '1rem' };

const statsContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  padding: '60px',
  background: '#f8fafc',
  borderRadius: '30px',
  marginBottom: '60px',
  textAlign: 'center',
  flexWrap: 'wrap',
  gap: '40px'
};

const statBoxStyle = {
  flex: '1 1 200px'
};

const imageWrapperStyle = { 
  borderRadius: '24px', 
  overflow: 'hidden', 
  height: '500px', 
  boxShadow: 'var(--shadow-lg)',
  position: 'sticky',
  top: '120px'
};

const imgStyle = { width: '100%', height: '100%', objectFit: 'cover' };
const valuesGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' };
const valueCardStyle = { 
  padding: '40px 30px', 
  background: 'white', 
  borderRadius: '24px', 
  textAlign: 'center', 
  boxShadow: 'var(--shadow-md)',
  border: '1px solid #f1f5f9',
  transition: 'transform 0.3s ease'
};

export default AboutPage;
