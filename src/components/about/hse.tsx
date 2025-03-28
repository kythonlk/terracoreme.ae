import logo1 from '../../assets/about/logo1.webp';
import logo2 from '../../assets/about/logo2.webp';
import logo3 from '../../assets/about/logo3.webp';
import bgServices from '../../assets/about/bg.png';

export default function Hse() {
  return (
    <div className="pt-20 sm:pt-28 min-h-[100vh]">
      <div className="relative py-8 sm:py-12 md:py-16 lg:py-28 2xl:py-32" id="hse-and-quality">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[280px] md:h-[360px]: 2xl:h-[380px] object-cover object-bottom" />
        </div>
        <div className="mx-4 lg:mx-40 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-6">
            <h2 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white text-start leading-tight">
              Health, Safety & Environment
            </h2>
            <div className="flex justify-center sm:justify-between items-top mt-20 sm:mt-16 2xl:mt-20 space-x-4">
              <img src={logo1} alt="logo1" className="w-24 sm:w-32 md:w-36 xl:w-44 2xl:w-48 h-16 sm:h-24 md:h-28 xl:h-28 2xl:h-36 object-contain" />
              <img src={logo2} alt="logo2" className="w-20 sm:w-28 md:w-36 xl:w-52 2xl:w-64 h-16 sm:h-24 md:h-28 xl:h-28 2xl:h-36 object-contain" />
              <img src={logo3} alt="logo3" className="w-20 sm:w-28 md:w-32 xl:w-48 2xl:w-52 h-16 sm:h-20 md:h-24 xl:h-28 2xl:h-36 object-contain" />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12 p-4 sm:px-40">
        <p className="text-base sm:text-xl text-gray-600">
          At TerraCore, we are fully committed to the legislative regulations outlined in ISO EMS 14001:2015, OHSMS 45001:2018, and QMS 9001:2015 standards, maintaining an efficient Health, Safety, and Environmental (HSE) management system. We are dedicated to implementing health, safety, and environmental policies that meet all legal requirements at every level of work, overseen by a team of highly skilled professionals.
        </p>
        <h5 className="text-2xl sm:text-4xl font-bold mb-4 mt-6 text-gray-700">
          Our Commitment
        </h5>
        <p className="text-gray-600 py-4">
          At TerraCore, we uphold the highest HSE standards, ensuring a zero-accident environment while prioritizing employee and client safety. We comply with ISO 14001:2015, implementing sustainable practices to reduce waste and minimize environmental impact.
        </p>
      </div>
    </div>
  );
};
