import iso1 from '../../assets/about/iso-1.webp';
import iso2 from '../../assets/about/iso-2.webp';
import iso3 from '../../assets/about/iso-3.webp';
import bgServices from '../../assets/about/bg.png';

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

export default function Iso() {
  return (
    <div className="pt-20 sm:pt-28 min-h-[100vh]">
      <div className="relative  py-8 pb-8 sm:py-32" id="certification">
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
