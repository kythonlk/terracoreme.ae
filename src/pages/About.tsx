import { Award, Shield, Users } from 'lucide-react';
import AboutImage from '../assets/about.webp';
import a1 from '../assets/a1.webp';
import a2 from '../assets/a2.webp';
import a3 from '../assets/a3.webp';
import a4 from '../assets/a4.webp';
import iso1 from '../assets/iso-1.webp';
import iso2 from '../assets/iso-2.webp';
import iso3 from '../assets/iso-3.webp';

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

const groupOfCompanies = [
  {
    name: 'Green Oasis General Contracting Co. LLC',
    description: 'Green Oasis General Contracting Co. L.L.C. (GOC), is dedicated and committed to providing the society at large with quality infrastructure in its field expertise which currently includes engineering, execution/construction of infrastructure projects, integrated water transmission & distribution projects, reservoirs, commercial & residential complexes.',
    image: a1,
    size: 52,
    year: 2004
  },
  {
    name: 'Fixperts',
    description: 'Fixperts is a leading provider for building maintenance, repair and refurbishing services in the United Arab Emirates. Fixperts serves both residential as well...',
    image: a2,
    size: 64,
    year: 2014
  },
  {
    name: 'Fixperts Shop',
    description: 'Fixperts Shop is the newest venture under Fixperts group that targets high-end, in-shop repair and instant services for electronics, watches, keys, shoes and miscellaneous items.',
    image: a3,
    size: 64,
    year: 2021
  },
  {
    name: 'Fixperts Fresh Living',
    description: 'Fixperts Fresh Living provides a range of comprehensive professional cleaning services and disinfection treatment from commercial to residential clients.',
    image: a4,
    size: 64,
    year: 2022
  }
];

const About = () => {
  return (
    <div className="pt-40 bg-[#d1d1d1]">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-[#9f9f9f]/70 mb-10 sm:px-20 lg:px-20">
        <h2 className=" text-3xl sm:text-5xl md:text-7xl md:w-3/12 font-bold text-white my-10 text-center sm:text-end">About Us</h2>
        <img src={AboutImage} alt="AboutImage" className="w-9/12 md:h-[34em] object-cover object-top" />
      </div>
      <p className="text-base sm:text-xl text-white m-4 sm:mx-20 sm:mb-10">
        At Terracore Piling and Foundation, we have built a legacy of excellence over the past 40 years, laying the groundwork for some of the most successful construction projects in the industry. Founded by Green Oasis General Contracting Co. LLC, we began with a focus on shoring works and have since expanded our expertise to include a wide range of foundation services, including piling, dewatering, and non-destructive testing. Our team is dedicated to providing reliable, safe, and efficient solutions that meet the unique challenges of each project.
      </p>
      <div className="py-10">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-amber-950 mb-10 text-center">Group of Companies</h2>
          <div className="flex flex-col gap-8 mb-20 px-4 md:px-10">
            {groupOfCompanies.map((company) => (
              <div
                key={company.name}
                className="relative flex flex-col md:grid md:grid-cols-2 items-center mb-10 bg-[#44b6ef]/70 rounded-lg shadow-xl min-h-60"
              >
                <div className="relative flex-1 p-6 sm:p-10 text-gray-900 flex flex-col justify-center items-center">
                  <span className="absolute text-[120px] sm:text-[220px] text-gray-100 font-bold opacity-20 z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {company.year}
                  </span>
                  <p className="relative text-lg font-medium text-justify">{company.description}</p>
                </div>
                <div className="flex justify-center items-center border-t-4 md:border-l-4 md:border-t-0 border-blue-900/80 w-full md:w-auto py-4 md:py-0">
                  <img
                    src={company.image}
                    alt={company.name}
                    className={`max-w-auto md:max-w-full w-${company.size} h-${company.size}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-center font-bp mb-12">ISO CERTIFICATES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 mx-4 sm:mx-20">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center p-4 bg-[#6895bb] rounded-lg shadow-lg flex flex-col justify-center items-center">
                  <img src={cert.image} alt={cert.name} className="w-full max-w-60 h-full object-contain" />
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-white text-center">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
