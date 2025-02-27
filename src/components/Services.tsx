import React from 'react';

const services = [
  {
    title: 'Piling & Foundations',
    description: 'Expert solutions for deep foundations and structural support systems.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Shoring & Retaining Structures',
    description: 'Advanced techniques for soil retention and excavation support.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Soil Improvement',
    description: 'Comprehensive ground engineering and soil stabilization solutions.',
    image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Specialized Piling',
    description: 'Bored Piles, CFA Piles, and Micro Piles for various applications.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Services = () => {
  return (
    <div className="relative py-20" id="services">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 1 }}
      >
        <source src="/bg2.mp4" type="video/mp4" />
      </video>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-justify">
            We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions. With a focus on precision and safety, our trusted services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
