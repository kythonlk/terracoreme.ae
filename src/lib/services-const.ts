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

export const services = [
  {
    id: 2,
    title: 'Piling Works',
    link: '/services/piling',
    image: s1
  },
  {
    id: 1,
    title: 'Soil Improvement Works',
    link: '/services/soil',
    image: s2
  },
  {
    id: 3,
    title: 'Shoring Works',
    link: '/services/shoring',
    image: s3
  },
  {
    id: 5,
    title: 'Dewatering Works',
    link: '/services/dewatering',
    image: s4
  },
  {
    id: 4,
    title: 'NDRC Works',
    link: '/services/ndrc',
    image: s5
  },
  {
    id: 6,
    title: 'Logistics Solutions',
    link: '/services/logistics',
    image: s6
  }
];

export const soil = {
  id: "services-2",
  title: 'Soil Improvement',
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

export const dewatering = {
  id: "services-4",
  title: 'Dewatering Works',
  style: 'grid grid-cols-2 sm:grid-col-2 lg:grid-cols-3 gap-4 xl:gap-6 justify-center items-center',
  video: dewateringImage,
  subTitle: 'We specialize in providing advanced dewatering solutions to control groundwater levels and maintain dry excavation sites. Our expertise ensures safe, efficient water management, enhancing construction progress and site stability.',
  subServices: [
    {
      title: 'Well Point System',
      image: we1
    },
    {
      title: 'Deep Well System',
      image: we2
    },
    {
      title: 'Sump Pumping',
      image: we3
    },
    {
      title: 'French Drain Dewatering',
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
export const shoring = {
  id: "services-3",
  title: 'Shoring Works',
  video: shoringImage,
  style: "flex-wrap",
  subTitle: 'Our shoring systems are designed to support and stabilize excavations of various depths and soil conditions. We deliver solutions that ensure structural integrity and prevent ground displacement in high-demand construction environments.',
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

export const piling = {
  id: "services-1",
  title: 'Piling Works',
  video: pilingImage,
  subTitle: 'We offer comprehensive piling services that strengthen foundations and provide long-lasting stability. Our expertise covers deep foundation systems, ensuring efficient load transfer for large-scale structures.',
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

export const ndrc = {
  id: "services-5",
  title: 'NDRC Works',
  video: ndrcImage,
  subTitle: 'We offer a broad range of Non-Destructive Methods (NDM) for underground construction and diagnostics. Our NDM services ensure minimal surface disruption and maximum precision, combining advanced techniques for safe and efficient subsurface investigations, utility installations, and structural assessments. This approach enhances project efficiency while protecting surrounding infrastructure and the environment',
  subServices: [
    {
      title: 'Horizontal Directional Drilling (HDD)',
      image: nd1
    },
    {
      title: 'Thrust Boring',
      image: nd2
    },
    {
      title: 'Micro Tunnelling',
      image: nd3
    },
    {
      title: 'Pipe Jacking',
      image: nd4
    },

  ]
}

export const logistic = {
  id: "services-6",
  title: 'Logistics Solution',
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
