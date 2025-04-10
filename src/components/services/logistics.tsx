import { Link } from 'react-router-dom';
import { logistic } from '../../lib/services-const';
import { MoveLeft } from 'lucide-react';

export default function Logistics() {

  return (
    <section id={logistic.id} className="scroll-m-16 bg-[#fdfefe] border-b-1 border-gray-900/10 text-gray-600 shadow-lg pt-12">
      <div className="text-center py-10 p-4">
        <h2 className="text-2xl sm:text-5xl font-semibold mt-4">{logistic.title}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-6 md:mx-20">
        {logistic.subServicesTop.map((service, index) => (
          <div key={index} className="w-full h-[50vh] relative">
            <img
              src={service.image}
              className={service.size}
            />
          </div>
        ))}
      </div>
      <p className="text-center text-gray-700 mx-4 lg:mx-20">{logistic.subTitle}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-4 lg:mx-20 p-4 sm:p-10">
        {logistic.subServices.map((service, index) => (
          <div key={index} className="w-full h-80">
            <img
              src={service.image}
              className="object-cover w-full h-full md:px-10"
            />
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
    </section>
  );
}
