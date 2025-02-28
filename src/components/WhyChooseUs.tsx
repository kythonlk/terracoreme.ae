import { Users, Shield, Clock, Leaf } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Team & Latest Equipment',
    description: 'Highly skilled professionals using state-of-the-art machinery and technology.'
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'High Safety Standards',
    description: 'Strict adherence to international safety protocols and regulations.'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Timely Project Completion',
    description: 'Consistent track record of delivering projects on schedule.'
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: 'Eco-Friendly Solutions',
    description: 'Sustainable practices and environmentally conscious methodologies.'
  }
];

const WhyChooseUs = () => {
  return (
    <div className="py-32 bg-blue-100">
      <div className="mx-auto px-4 sm:px-10 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience excellence in foundation engineering with our comprehensive solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
