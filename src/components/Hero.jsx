import PageHeader from './PageHeader';
import sureshDeore from '../assets/images/suresh-deore.png';

const Hero = () => {
  return (
    <div id="home">
      <PageHeader
        height="81vh"
        minHeight="700px"
        tagline="Quality Doors. Lasting Impressions."
        title={
          <>
            Nashik's Trusted<br />
            <span style={{ color: 'var(--primary)' }}>Door Brand</span>
          </>
        }
        description={
          <>
            Quality doors for homes, offices, and projects with reliable service and fast local delivery.
          </>
        }
        primaryButton={{
          text: "See Available Doors",
          link: "/products"
        }}
        secondaryButton={{
          text: "Call for Recommendation",
          link: "/contact",
          icon: "phone"
        }}
        rightImage={sureshDeore}
        imageAlt="Suresh Deore - Founder of Deore Doors"
      />
    </div>
  );
};



export default Hero;
