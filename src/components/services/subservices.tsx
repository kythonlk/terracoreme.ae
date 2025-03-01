type Services = {
  id: number;
  title: string;
  video: any;
  subTitle: string;
  subServices: {
    title: string;
  }[];
}

export default function Services({ services }: { services: Services }) {
  return (
    <div className="relative py-10 scroll-m-16" id={`services-${services.id}`}>
      <div className="text-center py-10 bg-blue-200">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{services.title}</h2>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto text-justify">
          {services.subTitle}
        </p>
      </div>
      <div className="relative flex flex-col items-start px-10 md:px-40 py-10 bg-[#dbd9d6]">

        {services.subServices.map((service, index) => (
          <div key={index} className="relative flex items-center gap-4 px-16 py-10">
            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
            <h3 className="text-xl font-bold text-gray-900 relative z-10 w-60">{service.title}</h3>
          </div>
        ))}
        <div className="absolute left-[30%] top-0 h-full w-1 bg-blue-700"></div>
      </div>
    </div>
  );
}
