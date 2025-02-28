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
      <div className="flex flex-col items-start gap-6 py-4">
        {services.subServices.map((service, index) => (
          <div key={index} className="bg-blue-200/40 rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 pb-8 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

