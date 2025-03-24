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
        TerraCore is a full-service engineering contractor based in the UAE, specializing in comprehensive ground engineering solutions such as piling, soil improvement, shoring, dewatering, and Non-Disruptive Methods (NDM) With a team of highly experienced professionals and state-of-the-art equipment, we provide innovative, tailored solutions that meet the speciﬁc requirements of each project while ensuring safety, quality, and eﬃciency. By leveraging advanced technologies and industry best practices, TerraCore adopts a client-centric approach to deliver cost-eﬀective and sustainable solutions.
      </p>
    </div>
  );
};
