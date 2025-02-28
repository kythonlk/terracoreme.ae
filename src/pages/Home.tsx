import Hero from '../components/Hero';
import ServicesOverview from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsOverview from '../components/Projects';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <ProjectsOverview />
      <ContactCTA />
    </>
  );
};

export default Home;
