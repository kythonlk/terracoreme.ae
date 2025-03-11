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
    <div className="relative py-10 scroll-m-16 bg-gray-900/10" id={`services-${services.id}`}>
      <div className="text-center py-10 bg-blue-200">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">{services.title}</h2>
        <p className="text-lg text-gray-900 max-w-2xl mx-auto mb-4 text-justify">
          {services.subTitle}
        </p>
        <img src={services.video} alt={services.title} className="w-full h-[40vh] object-cover" />
      </div>

      <div className="flex flex-col  px-10 md:px-40 py-10 bg-[#dbd9d6]">
        {services.subServices.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start bg-white px-6 md:px-12 py-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-8 overflow-hidden group"
          >
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-blue-500 to-blue-400"></div>
            <div className="w-full flex flex-col md:flex-row gap-8">
              <div className="flex items-start gap-6 md:w-1/3">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  {service.title}
                </h3>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-600 text-xl leading-relaxed pl-2 border-l-4 border-blue-300">
                  {service.dec}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
