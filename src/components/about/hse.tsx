import logo1 from '../../assets/about/logo1.webp';
import logo2 from '../../assets/about/logo2.webp';
import logo3 from '../../assets/about/logo3.webp';
import bgServices from '../../assets/about/bg.png';

export default function Hse() {
  return (
    <div className="pt-20 sm:pt-28 min-h-[100vh]">
      <div className="relative py-8 pb-8 sm:py-32" id="hse-and-quality">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[380px] object-cover object-bottom" />
        </div>
        <div className="mx-4 lg:mx-40 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
            <h2 className="text-2xl sm:text-5xl font-bold text-white text-start leading-tight">
              Health, Safety & Environment
            </h2>
            <div className="flex justify-center sm:justify-between mt-10 sm:mt-16 space-x-4">
              <img src={logo1} alt="logo1" className="w-24 sm:w-auto h-20 sm:h-28 xl:h-40 object-contain" />
              <img src={logo2} alt="logo2" className="w-24 sm:w-24 xl:w-60 h-20 sm:h-24 xl:h-40 object-contain" />
              <img src={logo3} alt="logo3" className="w-24 sm:w-auto h-20 sm:h-24 xl:h-36 object-contain" />
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
    </div>
  );
};
