import React from 'react';
import { Phone, Mail, MapPin, Upload } from 'lucide-react';

const ContactMarker = ({ text }: { text: string }) => (
  <div className="flex items-center">
    <MapPin className="w-8 h-8 text-blue-600" />
    <span className="ml-2 text-sm font-semibold bg-white px-2 py-1 rounded shadow">
      {text}
    </span>
  </div>
);

const Contact = () => {
  const defaultProps = {
    center: {
      lat: 25.2048,
      lng: 55.2708
    },
    zoom: 11
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-white">Get in Touch for Expert Foundation Solutions</p>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Attachments</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 text-center">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Drop files here or click to upload</p>
                    <p className="text-sm text-gray-500">Support for RFQs, tenders, and project documents</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600">+971 4 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@terracore.ae</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">Business Bay, Dubai, UAE</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
