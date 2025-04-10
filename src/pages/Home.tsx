import Hero from '../components/Hero';
import Services from '../components/Services';
import ContactCTA from '../components/ContactCTA';
import Company from '../components/Company';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <Hero />
      <Services />
      <Company />
      <ContactCTA />
    </>
  );
};

export default Home;
