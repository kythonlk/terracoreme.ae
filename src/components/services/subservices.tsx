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
    <div className="scroll-m-16 bg-[#fdfefe] border-b-1 border-gray-900/10 text-gray-600 shadow-lg" id={services.id}>
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
            <img src={service.image} alt={service.title} className="w-52 h-52 2xl:w-72 2xl:h-72 object-cover rounded-full" />
            <h3 className="text-base md:text-xl text-gray-600 text-center my-8">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
