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
            Doors That <br />
            <span style={{ color: 'var(--primary)' }}>Define Your</span><br />
            <span style={{ color: 'var(--primary)' }}>Space</span>
          </>
        }
        description={
          <>
            Premium PVC doors, Coating doors, and Sagwani doors
            crafted with precision and trusted by families across Nashik.
          </>
        }
        primaryButton={{
          text: "Explore Products  →",
          link: "/products"
        }}
        secondaryButton={{
          text: "Contact Us",
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
