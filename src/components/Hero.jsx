import PageHeader from './PageHeader';
import sureshDeore from '../assets/images/suresh-deore.png';

const Hero = () => {
  return (
    <div id="home">
      <PageHeader
        title={
          <>
            Doors That <br />
            <span style={{ color: 'var(--primary)' }}>Define Your</span>
          </>
        }
        description={
          <>
            Premium PVC doors, Coating doors, and Sagwani doors <br />
            crafted with precision and trusted by families across Nashik.
          </>
        }
        primaryButton={{
          text: "Explore Products →",
          link: "/products"
        }}
        secondaryButton={{
          text: "Contact Us",
          link: "/contact"
        }}
        rightImage={sureshDeore}
        imageAlt="Suresh Deore - Founder of Deore Doors"
      />
    </div>
  );
};



export default Hero;
