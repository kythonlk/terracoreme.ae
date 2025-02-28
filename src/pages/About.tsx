import { Award, Shield, Users } from 'lucide-react';
import AboutImage from '../assets/about.webp';

const certifications = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management System',
    icon: <Award className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'ISO 45001:2018',
    description: 'Occupational Health and Safety',
    icon: <Shield className="w-12 h-12 text-blue-600" />
  },
  {
    name: 'ISO 14001:2015',
    description: 'Environmental Management',
    icon: <Users className="w-12 h-12 text-blue-600" />
  }
];

const groupOfCompanies = [
  {
    name: 'Green Oasis General Contracting Co. LLC',
    description: 'Green Oasis General Contracting Co. L.L.C. (GOC), is dedicated and committed to providing the society at large with quality infrastructure in its field expertise which currently includes engineering, execution/construction of infrastructure projects, integrated water transmission & distribution projects, reservoirs, commercial & residential complexes.',
    year: 2004
  },
  {
    name: 'Fixperts',
    description: 'Fixperts is a leading provider for building maintenance, repair and refurbishing services in the United Arab Emirates. Fixperts serves both residential as well...',
    year: 2014
  },
  {
    name: 'Fixperts Shop',
    description: 'Fixperts Shop is the newest venture under Fixperts group that targets high-end, in-shop repair and instant services for electronics, watches, keys, shoes and miscellaneous items.',
    year: 2021
  },
  {
    name: 'Fixperts Fresh Living',
    description: 'Fixperts Fresh Living provides a range of comprehensive professional cleaning services and disinfection treatment from commercial to residential clients.',
    year: 2022
  }
];

const About = () => {
  return (
    <div className="pt-40 bg-[#dbd9d6]">
      <div className="flex justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-amber-950 pb-10">About Us</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-[#44b6ef]/70 mb-40 sm:px-20 lg:px-40">
        <div className="flex flex-col gap-4 p-4">
          <h2 className="text-4xl font-bold text-amber-950 mb-6">“In Depth”</h2>
          <p className="text-xl text-gray-900">
            At Terracore Piling and Foundation, we have built a legacy of excellence over the past 40 years, laying the groundwork for some of the most successful construction projects in the industry. Founded by Green Oasis General Contracting Co. LLC, we began with a focus on shoring works and have since expanded our expertise to include a wide range of foundation services, including piling, dewatering, and non-destructive testing. Our team is dedicated to providing reliable, safe, and efficient solutions that meet the unique challenges of each project.
          </p>
        </div>
        <div className="flex flex-col gap-4 p-4 -mb-40">
          <img src={AboutImage} alt="AboutImage" className="w-full" />
        </div>
      </div>
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
            <p className="text-lg text-gray-600">
              For over 40 years, TerraCore has been at the forefront of foundation engineering in the UAE.
              What started as a small local contractor has grown into a group of five specialized companies,
              each contributing to our comprehensive range of geotechnical solutions.
            </p>
          </div>

          {/* Group of Companies */}
          <div className="flex flex-col gap-8 mb-20 px-4">
            {groupOfCompanies.map((company) => (
              <div key={company.name} className="bg-[#44b6ef]/70 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-950">{company.name} -  {company.year}</h3>
                <p className="text-gray-600">{company.description}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Certifications & Standards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {certifications.map((cert) => (
                <div key={cert.name} className="text-center p-8 bg-[#44b6ef]/50 rounded-lg shadow-lg">
                  <div className="flex justify-center mb-4">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
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
