import { motion } from "framer-motion";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import { Link } from "react-router-dom";

const services = [
  {
    link: "/services/#services-1",
    id: "#services-1",
    title: "Dewatering Works",
    image: s1,
  },
  {
    link: "/services/#services-2",
    id: "#services-2",
    title: "Shoring Works",
    image: s2,
  },
  {
    link: "/services/#services-3",
    id: "#services-3",
    title: "Piling Works",
    image: s3,
  },
  {
    link: "/services/#services-4",
    id: "#services-4",
    title: "NDRC Works",
    image: s4,
  },
];

// Framer Motion Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Services = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
            We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 ease-out hover:-translate-y-2 shadow-xl hover:shadow-2xl"
            >
              <div className="p-2 sm:p-8 pb-0 flex justify-center">
                <div className="relative w-40 h-40 rounded-xl bg-[#42b7ed] p-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="p-8 pt-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-4">
                  {service.title}
                </h3>
                <Link
                  to={service.link}
                  className="inline-flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200"
                >
                  <span>Explore Service</span>
                  <svg
                    className="w-4 h-4 -translate-x-1 group-hover:translate-x-0 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
