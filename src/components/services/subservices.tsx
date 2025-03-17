type Services = {
  id: number;
  title: string;
  video: any;
  subTitle: string;
  subServices: {
    title: string;
    dec: string;
  }[];
}

export default function Services({ services }: { services: Services }) {
  return (
    <div className="scroll-m-16 bg-[#dbd9d6]" id={`services-${services.id}`}>
      <div className="text-center py-10 bg-blue-200 p-4 sm:px-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">{services.title}</h2>
        <img src={services.video} alt={services.title} className="w-full h-[50vh] object-cover rounded-2xl" />
        <p className="text-lg text-gray-900 max-w-2xl mx-auto mt-4 text-justify">
          {services.subTitle}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mx-auto p-4 sm:p-10">
        {services.subServices.map((service, index) => (
          <div
            key={index}
            className="flex justify-center bg-bl p-6 max-w-80 w-80 h-full rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8"
          >
            <h3 className="text-xl font-bold text-gray-100 text-center">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
