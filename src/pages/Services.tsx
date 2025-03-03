import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import Subservices from '../components/services/subservices';

const services = [
  {
    id: 1,
    title: 'Dewatering Works',
    link: '#services-1',
    image: s1
  },
  {
    id: 2,
    title: 'Shoring Works',
    link: '#services-2',
    image: s2
  },
  {
    id: 3,
    title: 'Piling Works',
    link: '#services-3',
    image: s3
  },
  {
    id: 4,
    title: 'NDRC Works',
    link: '#services-4',
    image: s4
  }
];

const dewatering = {
  id: 1,
  title: 'Dewatering Works',
  video: s1,
  subTitle: 'Expertise in dewatering ensures that your project site remains safe, stable, and ready for construction, even in challenging groundwater conditions.',
  subServices: [
    {
      title: 'Well Point',
    },
    {
      title: 'Deep Well',
    },
    {
      title: 'Sump Pump',
    }
  ]
}
const shoring = {
  id: 2,
  title: 'Shoring Works',
  video: s2,
  subTitle: 'Specialize in shoring works, providing safe, reliable, and innovative solutions to support excavation and foundation projects.',
  subServices: [
    {
      title: 'Trench Box',
    },
    {
      title: 'Trench Sheeting with I Beam Support ',
    },
    {
      title: 'Sheet Piling',
    },
    {
      title: 'I beam and precast concrete panels',
    }
  ]
}

const piling = {
  id: 3,
  title: 'Piling Works',
  video: s3,
  subTitle: 'Specializes in piling works, offering advanced and reliable foundation solutions that ensure the stability and strength of your project from the ground up.',
  subServices: [
    {
      title: 'Secant Piling ',
    },
    {
      title: 'Bearing Piles',
    },
  ]
}

const ndrc = {
  id: 4,
  title: 'NDRC Works',
  video: s4,
  subTitle: 'Specialize in Non-Destructive Road Closing services, offering innovative solutions to safely close roads without causing significant disruption or damage.',
  subServices: [
    {
      title: 'Horizontal Directional Drilling (HDD)',
    },
    {
      title: 'Microtunelling',
    },
    {
      title: 'Pipe Jacking',
    },
    {
      title: 'Thrust Boring',
    },

  ]
}

const Services = () => {
  return (
    <>
      <div className="relative" id="services">
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
        <div className="px-4 sm:px-10 lg:px-20 h-[100vh] pt-60 relative z-10 bg-gray-900/10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900  mb-6">
              Our Services
            </h2>
            <p className="text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/5 rounded-2xl backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 ease-out hover:-translate-y-2 shadow-xl hover:shadow-2xl"
              >
                <div className="p-8 pb-0 flex justify-center">
                  <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-4 transform group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="p-8 pt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">
                    {service.title}
                  </h3>
                  <a
                    href={service.link}
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
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Subservices services={dewatering} />
      <Subservices services={shoring} />
      <Subservices services={piling} />
      <Subservices services={ndrc} />
    </>
  );
};

export default Services;
