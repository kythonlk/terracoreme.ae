import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import dewateringImage from '../assets/images/dewatering.webp';
import shoringImage from '../assets/images/shoring.webp';
import ndrcImage from '../assets/images/ndrc.webp';
import pilingImage from '../assets/images/piling.webp';
import soilImage from '../assets/images/soil.webp';
import Subservices from '../components/services/subservices';
import pi1 from '../assets/services/pi1.webp';
import pi2 from '../assets/services/pi2.jpeg';
import pi3 from '../assets/services/pi3.jpeg';
import pi4 from '../assets/services/pi4.jpeg';
import so1 from '../assets/services/s1.jpeg';
import so2 from '../assets/services/s2.webp';
import so3 from '../assets/services/s3.jpeg';
import so4 from '../assets/services/s4.webp';
import p1 from '../assets/services/p1.jpeg';
import p2 from '../assets/services/p2.jpeg';
import p3 from '../assets/services/p3.webp';
import nd1 from '../assets/services/nd1.webp';
import nd2 from '../assets/services/nd2.jpeg';
import nd3 from '../assets/services/nd3.jpeg';
import nd4 from '../assets/services/nd4.jpeg';
import we1 from '../assets/services/we1.webp';
import we2 from '../assets/services/we2.jpeg';
import we3 from '../assets/services/we3.webp';

const services = [
  {
    id: 1,
    title: 'Piling Works',
    link: '#services-1',
    image: s1
  },
  {
    id: 2,
    title: 'Soil Improvement \nWorks',
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
  }
];

const soil = {
  title: 'SOIL IMPROVEMENT',
  video: soilImage,
  subTitle: 'We provide comprehensive soil improvement services designed to enhance the strength and stability of soil for construction projects. Our techniques ensure that the ground is properly prepared, promoting stability and durability for any type of structure. We focus on optimizing soil behavior, enhancing load-bearing capacity, and extending the lifespan of foundations across diverse construction environments.',
  subServices: [
    {
      title: 'Stone Columns',
      image: so1
    },
    {
      title: 'Dynamic Compaction',
      image: so2
    },
    {
      title: 'Vibro Compaction',
      image: so3
    },
    {
      title: 'Rapid impact Compaction',
      image: so4
    },
  ]
}

const dewatering = {
  title: 'Dewatering Works',
  video: dewateringImage,
  subTitle: 'Expertise in dewatering ensures that your project site remains safe, stable, and ready for construction, even in challenging groundwater conditions.',
  subServices: [
    {
      title: 'Well Point',
      image: we1
    },
    {
      title: 'Deep Well',
      image: we2
    },
    {
      title: 'Sump Pump',
      image: we3
    }
  ]
}
const shoring = {
  title: 'Shoring Works',
  video: shoringImage,
  subTitle: 'Specialize in shoring works, providing safe, reliable, and innovative solutions to support excavation and foundation projects.',
  subServices: [
    {
      title: 'Soldier Pile Walls',
      image: pi1
    },
    {
      title: 'Sheet Piling',
      image: pi2
    },
    {
      title: 'Secant Pile Walls',
      image: pi3
    },
    {
      title: 'Contiguous Pile Walls',
      image: pi4
    }
  ]
}

const piling = {
  title: 'Piling Works',
  video: pilingImage,
  subTitle: 'Specializes in piling works, offering advanced and reliable foundation solutions that ensure the stability and strength of your project from the ground up.',
  subServices: [
    {
      title: 'Bored Piles',
      image: p1
    },
    {
      title: 'Driven Piles',
      image: p2
    },
    {
      title: 'Micropiles',
      image: p3
    },
  ]
}

const ndrc = {
  title: 'NDRC Works',
  video: ndrcImage,
  subTitle: 'Specialize in Non-Destructive Road Closing services, offering innovative solutions to safely close roads without causing significant disruption or damage.',
  subServices: [
    {
      title: 'Horizontal Directional Drilling (HDD)',
      image: nd1
    },
    {
      title: 'Microtunelling',
      image: nd2
    },
    {
      title: 'Pipe Jacking',
      image: nd3
    },
    {
      title: 'Thrust Boring',
      image: nd4
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
        <div className=" h-full sm:h-[90vh] relative z-10 bg-gray-900/10">
          <h2 className="px-2 sm:px-10 lg:px-20 pt-40 text-3xl sm:text-5xl font-bold font-bp py-10 bg-white text-center">
            Our Services
          </h2>
          <div className="text-center mb-16 mt-4 px-2 sm:px-10 lg:px-20">
            <p className="text-xl sm:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
            </p>
          </div>

          <div className="px-2 sm:px-10 lg:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-8 pb-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative rounded-2xl transition-all duration-300 ease-out hover:-translate-y-2"
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Subservices services={piling} />
      <Subservices services={soil} />
      <Subservices services={shoring} />
      <Subservices services={dewatering} />
      <Subservices services={ndrc} />
    </>
  );
};

export default Services;
