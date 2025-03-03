import Hero from '../components/Hero';
import Services from '../components/Services-New';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsOverview from '../components/Projects';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <ProjectsOverview />
      <ContactCTA />
    </>
  );
};

export default Home;
