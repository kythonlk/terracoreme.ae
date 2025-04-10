import { useState } from 'react';
import proc from '../assets/proc.webp';
import sub from '../assets/sub.webp';
import sc from '../assets/images/sc.webp';
import pro from '../assets/images/pro.webp';
import { Helmet } from 'react-helmet-async';

export default function WorkWithUs() {
  const [selectedOpportunity, setSelectedOpportunity] = useState<any>(null);

  const opportunities: any = {
    procurement: {
      title: "Procurement",
      description: "Planning, coordination, communication, cost management, strategic alignment, and supplier relationship management.",
      coverimage: pro,
      form: "pro",
      image: proc
    },
    subcontractor: {
      title: "Sub - Contractor",
      description: "Our supply chain is vital for every project. We screen all suppliers to ensure high-quality services and only work with trusted companies.",
      coverimage: sc,
      form: "sc",
      image: sub
    }
  };

  return (
    <>
      <Helmet>
        <title>Opportunities | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <div className="bg-white min-h-screen">
        <div className="relative h-[60vh] bg-gray-900">
          <div className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: 'url("/home-2.webp")' }}
          />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{selectedOpportunity ? selectedOpportunity.title : 'Opportunities'}</h1>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-20">
          {selectedOpportunity ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center text-gray-700">
              <img src={selectedOpportunity.coverimage} alt={selectedOpportunity.title} className="h-full sm:w-1/2 ml-auto mr-4 rounded-lg shadow-xl" />
              <div className="w-full max-w-xl h-full bg-white p-6 rounded-lg shadow-lg border border-gray-900/10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{selectedOpportunity.title} Application</h2>
                <iframe src={"https://extraco-mailer.vercel.app/terracore/opp/" + selectedOpportunity.form} width="100%" className='w-full h-[500px] sm:h-[440px]' ></iframe>
                <button
                  onClick={() => setSelectedOpportunity(null)}
                  className="mt-4 text-gray-600 underline"
                >
                  Back to Opportunities
                </button>
              </div>
            </div>
          ) : (
            <div className="m-4 sm:m-10 2xl:m-20 flex flex-col sm:flex-row items-center justify-around gap-4">
              {Object.entries(opportunities).map(([key, opp]: any) => (
                <div key={key} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center border border-gray-900/10">
                  <img src={opp.image} alt={opp.title} className="w-20 h-20 object-cover bg-bp rounded-lg" />
                  <h4 className="text-2xl font-semibold text-gray-900 my-4">{opp.title}</h4>
                  <p className="text-gray-700 py-2 text-center">{opp.description}</p>
                  <button
                    onClick={() => setSelectedOpportunity(opp)}
                    className="bg-bp text-white py-2 px-6 rounded-md hover:bg-blue-700 transition min-w-40 text-center"
                  >
                    Click Here
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
