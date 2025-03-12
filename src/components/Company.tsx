import CompanyImage from '../assets/images/company.webp';

export default function Company() {
  return (
    <div className="bg-white" id="company">
      <div className="py-8 sm:py-20">
        <h2 className="text-3xl sm:text-5xl font-bold font-bp mb-4 sm:mb-8 text-center">Our Company</h2>
        <img src={CompanyImage} alt="bg" className="w-full h-96 object-cover" />
        <p className="text-justify text-gray-600 mx-auto p-4 max-w-2xl text-xl sm:text-2xl my-4">
          With 40 years of experience in the construction industry, TerraCore was founded on a legacy of reliability and quality. Known for our commitment to precision, safety, and excellence, we specialize in shoring and foundation solutions...
        </p>
        <div className="flex justify-center gap-4 md:gap-20">
          <a href="/about" className="bg-bp text-white py-3 px-8 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
            About Us
          </a>
          <a href="/services" className="bg-bp text-white py-3 px-8 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
            Our Services
          </a>
        </div>
      </div>
    </div>
  );
};

