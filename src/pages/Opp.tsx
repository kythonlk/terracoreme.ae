import proc from '../assets/proc.webp';
import sub from '../assets/sub.webp';

export default function WorkWithUs() {

  return (
    <div className="bg-white min-h-screen">
      <div className="relative h-[60vh] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("/home-2.webp")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Opportunities</h1>
          </div>
        </div>
      </div>
      <div className="p-20">
        <div className="m-4 sm:m-10 2xl:m-20 flex flex-col sm:flex-row items-center justify-around gap-4">
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-gray-900/10">
            <img src={proc} alt="Opportunity" className="w-20 h-20 object-cover bg-bp rounded-lg" />
            <h4 className="text-2xl font-semibold text-gray-900 my-4">Procurement</h4>
            <p className="text-gray-700 py-2 text-center">
              Planning, coordination, communication, cost management, strategic alignment, and supplier relationship management.
            </p>
            <a className="bg-bp text-white py-2 px-6 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
              click here
            </a>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-gray-900/10">
            <img src={sub} alt="Opportunity" className="w-20 h-20 object-cover bg-bp rounded-lg" />
            <h4 className="text-2xl font-semibold text-gray-900 my-4">Subcontractor</h4>
            <p className="text-gray-700 py-2 text-center">
              Our supply chain is vital for every project. We screen all suppliers to ensure high-quality services and only work with trusted companies.
            </p>
            <a className="bg-bp text-white py-2 px-6 rounded-md hover:bg-blue-700 transition min-w-40 text-center">
              click here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
