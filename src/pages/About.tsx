import AboutImage from '../assets/about/about.webp';
export default function About() {
  return (
    <div className="pt-20 sm:pt-40">
      <div className="flex flex-col sm:flex-row justify-center gap-4 bg-[#9f9f9f]/70 mb-10 px-4 sm:px-20 md:px-16 lg:px-10 xl:px-8 2xl:px-6">
        <h2 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold text-white mt-10 sm:mt-16  2xl:mt-20 text-center w-full text-nowrap sm:-mr-8 md:-mr-9 lg:-mr-20 xl:-mr-20 2xl:-mr-20 sm:ml-8 md:ml-9 lg:ml-20 xl:ml-20 2xl:ml-20 sm:w-5/12 2xl:w-3/12">
          About Us
        </h2>
        <img src={AboutImage} alt="AboutImage" className="w-full sm:w-7/12 2xl:w-9/12 h-auto sm:h-[28em] 2xl:h-[34em] object-cover object-top -mt-1 sm:-mt-12 md:-mt-14 lg:-mt-16 xl:-mt-16 2xl:-mt-16" />
      </div>
      <p className="text-base sm:text-xl text-gray-900 mx-4 sm:mx-40 mb-4 sm:mb-10">
        At Terracore Piling and Foundation, we have built a legacy of excellence over the past 40 years, laying the groundwork for some of the most successful construction projects in the industry. Founded by Green Oasis General Contracting Co. LLC, we began with a focus on shoring works and have since expanded our expertise to include a wide range of foundation services, including piling, dewatering, and non-destructive testing. Our team is dedicated to providing reliable, safe, and efficient solutions that meet the unique challenges of each project.
      </p>
    </div>
  );
};
