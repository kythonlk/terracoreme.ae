import bgServices from '../../assets/about/bg.png';

export default function Misson() {
  return (
    <div className="pt-20 sm:pt-28 min-h-[80vh]">
      <div className="relative py-8 pb-16 sm:py-32" id="mission-and-vision">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none transform -translate-y-1">
          <img src={bgServices} alt="bg-services" className="w-full h-[150px] sm:h-[320px] object-cover object-bottom" />
        </div>
        <div className="sm:mx-40 relative z-10 px-4">
          <h2 className="text-2xl sm:text-5xl font-bold text-white text-start mb-6">
            Mission & Vision
          </h2>
        </div>
      </div>
      <div className="py-4 px-4 sm:px-40 text-gray-900 mb-8">
        <p className="text-base sm:text-xl text-gray-600">
          To be the leader in the industry by leveraging our expertise and trusted knowledge to deliver innovative, cost-effective, and environmentally sustainable ground engineering solutions while upholding the highest standards of safety and quality for our clients and partners.
        </p>
        <h5 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-4 mt-6">
          Values
        </h5>
        <ul className="list-disc sm:space-y-2 text-gray-700 p-4">
          <li>INTEGRITY</li>
          <li>SAFETY</li>
          <li>Innovation</li>
          <li>Quality</li>
        </ul>
      </div>

    </div>
  );
};
