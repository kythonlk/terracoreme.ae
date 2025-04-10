import { Helmet } from 'react-helmet-async';
import AboutImage from '../assets/images/company.webp';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <div className="bg-white">
        <div className="relative z-1">
          <h2 className="text-3xl md:text-5xl lg:text-7xl 2xl:text-9xl font-bold text-white text-left z-20 absolute top-40 left-20">
            About Us
          </h2>
          <img src={AboutImage} alt="bg" className="w-full h-[36em] object-cover object-top z-10 -scale-x-100" />
          <p className="text-base sm:text-xl text-gray-900 mx-4 sm:mx-40 mb-4 sm:mb-10 pt-4 sm-pt-10 2xl:pt-16">
            TerraCore is a full-service engineering contractor based in the UAE, specializing in comprehensive ground engineering solutions such as piling, soil improvement, shoring, dewatering, and Non-Disruptive Methods (NDM) With a team of highly experienced professionals and state-of-the-art equipment, we provide innovative, tailored solutions that meet the speciﬁc requirements of each project while ensuring safety, quality, and eﬃciency. By leveraging advanced technologies and industry best practices, TerraCore adopts a client-centric approach to deliver cost-eﬀective and sustainable solutions.
          </p>
        </div>
      </div>
    </>
  );
};
