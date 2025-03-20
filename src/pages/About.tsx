import AboutImage from '../assets/about/about.webp';
import iso1 from '../assets/about/iso-1.webp';
import iso2 from '../assets/about/iso-2.webp';
import iso3 from '../assets/about/iso-3.webp';
import logo1 from '../assets/about/logo1.webp';
import logo2 from '../assets/about/logo2.webp';
import logo3 from '../assets/about/logo3.webp';
import bgServices from '../assets/about/bg.png';

const certifications = [
  {
    name: 'DUBAI BRANCH',
    description: 'Quality Management System Standard',
    image: iso1,
  },
  {
    name: 'DUBAI BRANCH',
    description: 'Environmental Management System Standard',
    image: iso2,
  },
  {
    name: 'DUBAI BRANCH',
    description: 'Occupational Health and Safety Management System Standard',
    image: iso3,
  }
];

export default function About() {
  return (
    <div className="pt-20 sm:pt-40">
      <div className="flex flex-col sm:flex-row justify-center gap-4 bg-[#9f9f9f]/70 mb-10 px-4 sm:px-20 lg:px-10">
        <h2 className="text-3xl sm:text-5xl md:text-9xl font-bold text-white mt-10 sm:mt-20 text-center sm:text-end w-full text-nowrap sm:-mr-20 sm:ml-20 sm:w-3/12">
          About Us
        </h2>
        <img src={AboutImage} alt="AboutImage" className="w-full sm:w-9/12 h-auto md:h-[34em] object-cover object-top -mt-1 sm:-mt-20" />
      </div>
      <p className="text-base sm:text-xl text-gray-900 mx-4 sm:mx-40 mb-4 sm:mb-10">
        At Terracore Piling and Foundation, we have built a legacy of excellence over the past 40 years, laying the groundwork for some of the most successful construction projects in the industry. Founded by Green Oasis General Contracting Co. LLC, we began with a focus on shoring works and have since expanded our expertise to include a wide range of foundation services, including piling, dewatering, and non-destructive testing. Our team is dedicated to providing reliable, safe, and efficient solutions that meet the unique challenges of each project.
      </p>

      <div className="relative py-8 pb-16 sm:py-32">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[320px] object-cover object-bottom" />
        </div>
        <div className="sm:mx-40 relative z-10 px-4">
          <h2 className="text-2xl sm:text-5xl font-bold text-white text-start mb-6">
            Mission & Vision
          </h2>
        </div>
      </div>
      <div className="py-4 px-4 sm:px-40 text-gray-900 mb-8">
        <p className="text-base sm:text-xl text-gray-600">
          To be the leader in the industry by leveraging our expertise and trusted knowledge to deliver innovative, cost-effective, and environmentally sustainable ground engineering solutions while upholding the highest standards of safety and quality for our clients and partners.
        </p>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6">
          Values
        </h5>
        <ul className="list-disc sm:space-y-2 text-gray-700 p-4">
          <li>INTEGRITY</li>
          <li>SAFETY</li>
          <li>Innovation</li>
          <li>Quality</li>
        </ul>
      </div>

      <div className="relative py-8 pb-8 sm:py-32">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[380px] object-cover object-bottom" />
        </div>
        <div className="mx-4 sm:mx-40 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <h2 className="text-2xl sm:text-5xl font-bold text-white text-start leading-tight">
              Health, Safety & Environment
            </h2>
            <div className="flex justify-center sm:justify-between mt-10 sm:mt-16 space-x-4">
              <img src={logo1} alt="logo1" className="w-24 sm:w-auto h-20 sm:h-40 object-contain" />
              <img src={logo2} alt="logo2" className="w-24 sm:w-60 h-20 sm:h-40 object-contain" />
              <img src={logo3} alt="logo3" className="w-24 sm:w-auto h-20 sm:h-36 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 p-4 sm:px-40">
        <p className="text-base sm:text-xl text-gray-600">
          At TerraCore, we are fully committed to the legislative regulations outlined in ISO 45001:2018 and OHSAS 18001:2007 standards, maintaining an efficient Health, Safety, and Environmental (HSE) management system.
        </p>
        <h5 className="text-2xl sm:text-4xl font-bold mb-4 mt-6 text-gray-900">
          Our Commitment
        </h5>
        <ul className="list-disc space-y-2 text-gray-600 p-4">
          <li>Strict Adherence to HSE Standards: For every project, we strictly follow HSE regulations, ensuring uncompromised safety and compliance.
          </li>
          <li>Zero Accident - Zero Incident Goal: We are committed to achieving a risk-free environment, with zero accidents and zero incidents.
          </li>
          <li>
            Employee and Client Safety: The health and safety of our employees and clients is always our top priority.
          </li>
          <li>
            Compliance with Environmental Regulations: We fully adhere to ISO 14001:2015 and other environmental standards to minimize ecological impact.
          </li>
          <li>
            Sustainable Practices: We actively reduce waste, conserve resources, and implement eco-friendly solutions.
          </li>
          <li>
            Environmental Protection: We continuously assess and mitigate environmental risks in all our operations.
          </li>
        </ul>
      </div>

      <div className="relative  py-8 pb-8 sm:py-32">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[300px] object-cover object-bottom" />
        </div>
        <div className="sm:mx-40 relative z-10 px-4">
          <h2 className="text-2xl sm:text-5xl font-bold text-white text-start mb-6">
            ISO CERTIFICATES
          </h2>
        </div>
      </div>

      <div className="py-10 px-4 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="text-center p-4 px-10 bg-[#9f9f9f] rounded-lg shadow-lg flex flex-col justify-center items-center mx-auto max-w-96">
              <img src={cert.image} alt={cert.name} className="w-full h-auto object-contain" />
              <h3 className="text-lg sm:text-xl font-semibold my-2">{cert.name}</h3>
              <p className="text-white">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
