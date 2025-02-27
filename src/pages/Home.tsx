import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServicesOverview from '../components/Services';
import ClientsSection from '../components/Clients';
import WhyChooseUs from '../components/WhyChooseUs';
import ProjectsOverview from '../components/Projects';
import Testimonials from '../components/Testimonials';
import ContactCTA from '../components/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      {/* <Stats /> */}
      <ServicesOverview />
      <ClientsSection />
      <WhyChooseUs />
      <ProjectsOverview />
      <Testimonials />
      <ContactCTA />
    </>
  );
};

export default Home;
