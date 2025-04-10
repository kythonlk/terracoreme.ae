import { Link } from 'react-router-dom';
import { services } from '../lib/services-const';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <div className="relative -mb-18" id="services">
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
        <div className="min-h-full 4xl:h-[90vh] relative z-10 bg-gray-900/10">
          <h2 className="px-2 sm:px-10 lg:px-20 pt-40 text-3xl md:text-4xl 2xl:text-5xl font-bold text-white py-10 text-center">
            Our Services
          </h2>
          <div className="text-center mb-16 mt-4 px-2 sm:px-10 lg:px-20">
            <p className="text-xl  2xl:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
            </p>
          </div>

          <div className="px-2 sm:px-6 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 xl:gap-6 pb-4 mb-20">
            {services.sort((a, b) => a.id - b.id).map((service) => (
              <Link
                to={service.link}
                key={service.id}
                className="group relative rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2"
              >
                <div className="p-2 xl:p-5 2xl-p-8 pb-0 flex justify-center">
                  <div className="relative w-40 h-40 rounded-xl bg-[#42b7ed] p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="p-2 2xl:p-8 2xl:pt-6 text-center">
                  <h3 className="text-base 2xl:text-2xl font-bold text-gray-100 mb-4">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
