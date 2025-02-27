import React from 'react';
import { Award, Shield, Users } from 'lucide-react';

const leadership = [
  {
    name: 'Ahmed Al Rashid',
    position: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Over 25 years of experience in construction and foundation engineering.'
  },
  {
    name: 'Sarah Williams',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'PhD in Geotechnical Engineering with expertise in complex foundation systems.'
  },
  {
    name: 'Mohammed Hassan',
    position: 'Operations Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
    bio: 'Specializes in project management and operational excellence.'
  }
];

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: <Award className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'ISO 45001:2018',
    description: 'Occupational Health and Safety',
    icon: <Shield className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    icon: <Users className="w-12 h-12 text-blue-600" />
  }
];

const About = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About TerraCore</h1>
            <p className="text-xl text-white">Building Strong Foundations Since 1944</p>
          </div>
        </div>
      </div>

      {/* Company History */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-lg text-gray-600">
              For over 79 years, TerraCore has been at the forefront of foundation engineering in the UAE. 
              What started as a small local contractor has grown into a group of five specialized companies, 
              each contributing to our comprehensive range of geotechnical solutions.
            </p>
          </div>

          {/* Group of Companies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[1, 2, 3, 4, 5].map((company) => (
              <div key={company} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-semibold mb-4">TerraCore {company}</h3>
                <p className="text-gray-600">Specialized division focusing on specific aspects of foundation engineering and construction.</p>
              </div>
            ))}
          </div>

          {/* Leadership Team */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader) => (
                <div key={leader.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={leader.image} alt={leader.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{leader.name}</h3>
                    <p className="text-blue-600 mb-4">{leader.position}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Certifications & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center p-8 bg-white rounded-lg shadow-lg">
                  <div className="flex justify-center mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;