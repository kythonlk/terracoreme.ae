import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { MoveLeft } from 'lucide-react';

type Services = {
  id: string;
  title: string;
  video: any;
  style?: string;
  subTitle: string;
  subServices: {
    title?: string;
    image?: any;
  }[];
}

export default function Services({ services }: { services: Services }) {
  return (
    <>
      <Helmet>
        <title>{services.title} | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <div className="scroll-m-16 bg-[#fdfefe] border-b-1 border-gray-900/10 text-gray-600 shadow-lg pt-8" id={services.id}>
        <div className="text-center py-10 p-4">
          <h2 className="text-2xl sm:text-5xl font-semibold sm:mb-6 py-10">{services.title}</h2>
          <img src={services.video} alt={services.title} className="w-full h-[60vh] object-cover rounded-2xl" />
          <p className="text-xl max-w-5xl mx-auto mt-6 text-justify">
            {services.subTitle}
          </p>
        </div>
        <div className={`${services.style} flex flex-col md:flex-row justify-around items-center gap-4 mx-4 lg:mx-10 xl:mx-20 p-4 sm:p-10`}>
          {services.subServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <img src={service.image} alt={service.title} className="w-52 h-52 2xl:w-72 2xl:h-72 object-cover object-center rounded-full" />
              <h3 className="text-base md:text-xl text-gray-600 text-center my-8">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="py-8 flex justify-center">
          <Link to={"/services"}>
            <button className="bg-[#005aa6] text-white px-6 py-2 flex gap-2 rounded-lg hover:bg-[#005aa6] transition">
              <MoveLeft size={24} /> Go Back to Services
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
