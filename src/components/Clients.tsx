import React from 'react';

const Clients = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-lg text-gray-600">
            We work with the most respected organizations in the UAE
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {/* Replace these divs with actual client logos */}
          <div className="h-20 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">DEWA</span>
          </div>
          <div className="h-20 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">SEWA</span>
          </div>
          <div className="h-20 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">FEWA</span>
          </div>
          <div className="h-20 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-400">ADNOC</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;