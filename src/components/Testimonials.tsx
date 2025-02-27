import React from 'react';

const testimonials = [
  {
    name: 'Ahmed Al-Mansouri',
    role: 'Project Director, DEWA',
    content: 'TerraCore delivered exceptional foundation work for our power plant project. Their expertise and professionalism were evident throughout the project.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Sarah Thompson',
    role: 'Chief Engineer, SEWA',
    content: 'Working with TerraCore has been a pleasure. Their attention to detail and commitment to safety standards is commendable.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Mohammed Al-Hashimi',
    role: 'Development Manager, FEWA',
    content: 'TerraCores innovative solutions helped us overcome complex geological challenges. Their team is expertise is unmatched.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  }
];

const Testimonials = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with TerraCore
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;