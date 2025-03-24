import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';
import dewateringImage from '../assets/images/dewatering.webp';
import shoringImage from '../assets/images/shoring.webp';
import ndrcImage from '../assets/images/ndrc.webp';
import pilingImage from '../assets/images/piling.webp';
import soilImage from '../assets/images/soil.webp';
import Subservices from '../components/services/subservices';
import pi1 from '../assets/services/pi1.webp';
import pi2 from '../assets/services/pi2.webp';
import pi3 from '../assets/services/pi3.webp';
import pi4 from '../assets/services/pi4.webp';
import pi5 from '../assets/services/pi5.webp';
import pi6 from '../assets/services/pi6.webp';
import pi7 from '../assets/services/pi7.webp';
import so1 from '../assets/services/s1.webp';
import so2 from '../assets/services/s2.webp';
import so3 from '../assets/services/s3.webp';
import so4 from '../assets/services/s4.webp';
import p1 from '../assets/services/p1.webp';
import p2 from '../assets/services/p2.webp';
import p3 from '../assets/services/p3.webp';
import nd1 from '../assets/services/nd1.webp';
import nd2 from '../assets/services/nd2.webp';
import nd3 from '../assets/services/nd3.webp';
import nd4 from '../assets/services/nd4.webp';
import we1 from '../assets/services/we1.webp';
import we2 from '../assets/services/we2.webp';
import we3 from '../assets/services/we3.webp';
import we4 from '../assets/services/we4.webp';
import we5 from '../assets/services/we5.webp';
import we6 from '../assets/services/we6.webp';
import l1 from '../assets/services/l1.webp';
import l2 from '../assets/services/l2.webp';
import l3 from '../assets/services/l3.webp';
import l4 from '../assets/services/l4.webp';
import l5 from '../assets/services/l5.webp';
import { Link } from 'react-router-dom';

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

const soil = {
  id: "services-2",
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
  id: "services-4",
  title: 'Dewatering Works',
  style: 'grid grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-6 justify-center items-center',
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
    },
    {
      title: 'French Drain Dewatering ',
      image: we4
    },
    {
      title: 'Over Pumping',
      image: we5
    },
    {
      title: 'Ejector Dewatering System',
      image: we6
    }
  ]
}
const shoring = {
  id: "services-3",
  title: 'Shoring Works',
  video: shoringImage,
  style: "flex-wrap",
  subTitle: 'Specialize in shoring works, providing safe, reliable, and innovative solutions to support excavation and foundation projects.',
  subServices: [
    {
      title: 'Soldier Pile Walls',
      image: pi1
    },
    {
      title: 'Sheet Piling',
      image: pi2,

    },
    {
      title: 'Secant Pile Walls',
      image: pi3
    },
    {
      title: 'Contiguous Pile Walls',
      image: pi4
    },
    {
      title: 'Diaphram Walls',
      image: pi5
    },
    {
      title: 'Trench Sheeting',
      image: pi6
    },
    {
      title: 'Trench box',
      image: pi7
    }
  ]
}

const piling = {
  id: "services-1",
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
  id: "services-5",
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

const logistic = {
  id: "services-6",
  title: 'LOGISTICS SOLUTION',
  subTitle: 'TerraCore Logistics is dedicated to delivering the latest equipment and cutting-edge construction technologies. We offer a diverse selection of high-quality, well-maintained rental equipment, along with skilled operators to ensure optimal efficiency and safety on every project.',
  subServicesTop: [
    {
      image: l1,
      size: "w-full h-full object-cover"
    },
    {
      size: "w-full h-full object-cover",
      image: l2
    },
  ],
  subServices: [
    {
      image: l3
    },
    {
      image: l4
    },
    {
      image: l5
    }
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
        <div className="min-h-full 4xl:h-[90vh] relative z-10 bg-gray-900/10">
          <h2 className="px-2 sm:px-10 lg:px-20 pt-40 text-3xl md:text-4xl 2xl:text-5xl font-bold font-bp py-10 bg-white text-center">
            Our Services
          </h2>
          <div className="text-center mb-16 mt-4 px-2 sm:px-10 lg:px-20">
            <p className="text-xl  2xl:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We have perfected our specialization in the industry of shoring works, where our expertise consistently meets the highest expectations for quality foundation solutions.
            </p>
          </div>

          <div className="px-2 sm:px-6 xl:px-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 xl:gap-6 pb-4 mb-20">
            {services.map((service, index) => (
              <Link
                to={service.link}
                key={index}
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
      <Subservices services={piling} />
      <Subservices services={soil} />
      <Subservices services={shoring} />
      <Subservices services={dewatering} />
      <Subservices services={ndrc} />
      <section id={logistic.id} className="scroll-m-16 bg-[#fdfefe] border-b-1 border-gray-900/10 text-gray-600 shadow-lg">
        <div className="text-center py-10 p-4">
          <h2 className="text-2xl sm:text-5xl font-semibold mt-4">{logistic.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6 md:mx-20">
          {logistic.subServicesTop.map((service, index) => (
            <div key={index} className="w-full h-[50vh] relative">
              <img
                src={service.image}
                className={service.size}
              />
            </div>
          ))}
        </div>
        <p className="text-center text-gray-700 mx-4 lg:mx-20">{logistic.subTitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 lg:mx-20 p-4 sm:p-10">
          {logistic.subServices.map((service, index) => (
            <div key={index} className="w-full h-80">
              <img
                src={service.image}
                className="object-cover w-full h-full md:px-10"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
