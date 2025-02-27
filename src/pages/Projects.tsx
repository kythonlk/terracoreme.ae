import React, { useState } from 'react';
import { Building2, MapPin, Calendar, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Dubai Marina Development',
    category: 'Commercial',
    location: 'Dubai Marina, UAE',
    duration: '18 months',
    client: 'Emaar Properties',
    description: 'Complex foundation system for luxury high-rise buildings',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Abu Dhabi Mall Extension',
    category: 'Retail',
    location: 'Abu Dhabi, UAE',
    duration: '12 months',
    client: 'Al Futtaim Group',
    description: 'Deep foundation work for commercial complex',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sharjah Waterfront',
    category: 'Residential',
    location: 'Sharjah, UAE',
    duration: '24 months',
    client: 'Sharjah Holding',
    description: 'Marine piling and foundation for waterfront development',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    beforeImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const categories = ['All', 'Commercial', 'Residential', 'Retail', 'Industrial'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
            <p className="text-xl text-white">Showcasing Our Excellence in Foundation Engineering</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm text-blue-600">{project.category}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <img
                  src={selectedProject.beforeImage}
                  alt="Before"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <img
                  src={selectedProject.afterImage}
                  alt="After"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Client: {selectedProject.client}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Location: {selectedProject.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                  <span>Duration: {selectedProject.duration}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{selectedProject.description}</p>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition flex items-center">
                View Full Case Study
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;