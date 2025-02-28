const projects = [
  {
    title: 'Dubai Marina Development',
    description: 'Complex foundation system for luxury high-rise buildings',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Abu Dhabi Mall Extension',
    description: 'Deep foundation work for commercial complex',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Sharjah Waterfront',
    description: 'Marine piling and foundation for waterfront development',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Projects = () => {
  return (
    <div className="py-30 bg-white" id="projects">
      <div className="mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our expertise through successful project deliveries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-blue-100 rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
