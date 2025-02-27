import React from 'react';
import { Drill, Building2, Mountain, Shield } from 'lucide-react';

const services = [
  {
    title: 'Piling & Foundation Services',
    description: 'Comprehensive deep foundation solutions for all types of structures.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: [
      'Bored Piles',
      'Driven Piles',
      'CFA Piles',
      'Micro Piles',
      'Pile Load Testing'
    ]
  },
  {
    title: 'Shoring & Excavation Works',
    description: 'Advanced shoring systems and deep excavation solutions.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: [
      'Diaphragm Walls',
      'Secant Pile Walls',
      'Sheet Piling',
      'Soldier Pile Walls',
      'Deep Excavation'
    ]
  },
  {
    title: 'Soil Investigation & Improvement',
    description: 'Comprehensive ground engineering and soil enhancement solutions.',
    image: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: [
      'Soil Investigation',
      'Ground Improvement',
      'Soil Stabilization',
      'Dynamic Compaction',
      'Vibro Compaction'
    ]
  },
  {
    title: 'Deep Foundations & Retaining Walls',
    description: 'Specialized solutions for complex foundation requirements.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    details: [
      'Anchored Walls',
      'Reinforced Earth Walls',
      'Gabion Walls',
      'MSE Walls',
      'Cantilever Walls'
    ]
  }
];

const ServiceDetails = ({ service }: { service: typeof services[0] }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="h-64 overflow-hidden">
      <img 
        src={service.image} 
        alt={service.title}
        className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
      <p className="text-gray-600 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.details.map((detail, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <Shield className="w-5 h-5 text-blue-600 mr-2" />
            {detail}
          </li>
        ))}
      </ul>
      <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
        Request Quote
      </button>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white">Comprehensive Foundation Solutions for Every Challenge</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ServiceDetails key={index} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Case Studies Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((study) => (
              <div key={study} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${study === 1 ? '1590674899484-d5640e854abe' : study === 2 ? '1541888946425-d81bb19240f5' : '1584467541268-b040f83be3fd'}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Case Study ${study}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Case Study {study}</h3>
                  <p className="text-gray-600 mb-4">Innovative solution for complex foundation challenges.</p>
                  <button className="text-blue-600 font-semibold hover:text-blue-800">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;