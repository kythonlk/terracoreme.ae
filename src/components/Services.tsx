import { useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { services } from '../lib/services-const';


const Services = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section: any = sectionRef.current;
    if (section) {
      section.style.opacity = '0';
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transition = 'opacity 1.2s ease';
      }, 100);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
      id="services"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/30" />
      </div>
      <div className="relative z-10 -mt-10 3xl:-mt-32">
        <div
          ref={contentRef}
          className="text-center opacity-0"
          style={{ transition: 'opacity 0.8s ease, transform 0.8s ease' }}
        >
          <h2 className="px-2 sm:px-10 lg:px-20 pt-20 text-3xl sm:text-5xl font-bold text-gray-600 py-10 bg-white text-center">
            Our Services
          </h2>
          <div className="text-center mb-16 mt-4 px-2 sm:px-10 lg:px-20">
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
            </p>
          </div>
          <div className="px-2 sm:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-8">
            {services.sort((a, b) => a.id - b.id).map((service) => (
              <Link
                to={"services" + service.link}
                key={service.id}
                className="group relative rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2"
              >
                <div className="p-2 sm:p-6 pb-0 flex justify-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-xl bg-[#42b7ed] p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-100 mb-4">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
