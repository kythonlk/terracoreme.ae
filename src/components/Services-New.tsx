import { motion } from "framer-motion";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    title: 'Piling Works',
    link: '#services-1',
    image: s1
  },
  {
    id: 2,
    title: 'Soil Improvement Works',
    link: '#services-2',
    image: s2
  },
  {
    id: 3,
    title: 'Shoring Works',
    link: '#services-3',
    image: s3
  },
  {
    id: 4,
    title: 'Dewatering Works',
    link: '#services-4',
    image: s4
  },
  {
    id: 5,
    title: 'NDRC Works',
    link: '#services-5',
    image: s5
  },
  {
    id: 6,
    title: 'Logistics Solutions',
    link: '#services-6',
    image: s6
  }
];


const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="px-2 sm:px-10 lg:px-20 pt-20 text-3xl sm:text-5xl font-bold font-bp py-10 bg-white text-center">
            Our Services
          </h2>
          <div className="text-center mb-16 mt-4 px-2 sm:px-10 lg:px-20">
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
            </p>
          </div>

          <div className="px-2 sm:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-8">
            {services.map((service, index) => (
              <Link
                to={"services" + service.link}
                key={index}
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
