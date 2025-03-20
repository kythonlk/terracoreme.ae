type Services = {
  title: string;
  video: any;
  subTitle: string;
  subServices: {
    title: string;
    image?: any;
  }[];
}

export default function Services({ services }: { services: Services }) {
  return (
    <div className="scroll-m-16 bg-[#fdfefe] border-b-1 border-gray-900/10 text-gray-600 shadow-lg">
      <div className="text-center py-10 p-4 sm:px-20">
        <h2 className="text-2xl sm:text-5xl font-semibold sm:mb-6 mt-4">{services.title}</h2>
        <img src={services.video} alt={services.title} className="w-full h-[50vh] object-cover rounded-2xl" />
        <p className="text-xl max-w-5xl mx-auto mt-6 text-justify">
          {services.subTitle}
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center gap-4 mx-20 p-4 sm:p-10">
        {services.subServices.map((service, index) => (
          <div
            key={index}
          >
            <img src={service.image} alt={service.title} className="w-72 h-72 object-cover rounded-full" />
            <h3 className="text-xl text-gray-600 text-center my-8">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
