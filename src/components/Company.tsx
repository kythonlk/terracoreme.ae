import CompanyImage from '../assets/images/our-company.webp';
import { Link } from "react-router-dom";

export default function Company() {
  return (
    <div className="bg-white pt-20" id="company">
      <div className="py-8 sm:py-20 relative z-1">
        <h2 className="text-3xl sm:text-6xl xl:text-7xl font-bold text-white text-left z-20 absolute top-40 left-20">Our<br /> Company</h2>
        <img src={CompanyImage} alt="bg" className="w-full h-[34em] object-cover object-center z-10" />
        <p className="text-justify text-gray-600 mx-auto p-4 max-w-2xl text-xl sm:text-2xl my-4">
          With 40 years of experience in the construction industry, TerraCore was built on a legacy of reliability and quality. Renowned for our commitment to precision, safety, and excellence, we specialize in soil improvement, piling, shoring, NDM/NDRC, dewatering, and logistics solutions.
        </p>
        <div className="flex justify-center gap-4 md:gap-20">
          <Link to="/about" className="bg-bp text-white py-3 px-8 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
            About Us
          </Link>
          <Link to="/services" className="bg-bp text-white py-3 px-8 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
};

