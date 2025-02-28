import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import { Link, useLocation } from "react-router-dom";

const services = [
  {
    link: '/services/#services-1',
    id: '#services-1',
    title: 'Dewatering Works',
    image:  s1
  },
  {
    link: '/services/#services-2',
    id: '#services-2',
    title: 'Shoring Works',
    image: s2
  },
  {
    link: '/services/#services-3',
    id: '#services-3',
    title: 'Piling Works',
    image: s3
  },
  {
    link: '/services/#services-4',
    id: '#services-4',
    title: 'NDRC Works',
    image: s4
  }
];

const Services = () => {
  return (
    <div className="relative mt-20 bg-gray-900/10" id="services">
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
      <div className="px-4 sm:px-10 lg:px-20 relative py-20 z-10 bg-gray-900/10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-100 max-w-3xl mx-auto text-justify">
            We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions. With a focus on precision and safety, our trusted services include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white/40 rounded-lg shadow-lg overflow-hidden">
              <div className="h-52 overflow-hidden flex items-end justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-40 h-40 object-cover bg-[#42b7ed] p-4 rounded-lg"
                />
              </div>
              <div className="p-4 pb-8 flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <Link to={service.link}
                  className="mt-4 text-blue-100 font-semibold hover:text-blue-800 bg-white/20 rounded-full px-8 py-2 shadow-lg">
                  EXPLORE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
