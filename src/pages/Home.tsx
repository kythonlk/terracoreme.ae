import Hero from '../components/Hero';
import ContactCTA from '../components/ContactCTA';
import Company, { Values } from '../components/Company';
import Gallery from '../components/Gallery';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <Hero />
      <Values />
      <Company />
      <section className="confidence-section"><div className="container"><span className="quote-mark">“</span><h2>We don’t just execute<br/>we engineer confidence<br/>into every foundation.</h2><p>Every project is planned, monitored, documented, and<br/>delivered with the highest standards of accuracy and care.</p></div></section>
      <Gallery />
      <ContactCTA />
    </>
  );
};

export default Home;
