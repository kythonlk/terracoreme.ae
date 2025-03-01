import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="py-20 bg-[#005aa7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Get in touch with our experts for a free consultation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <Phone className="w-8 h-8 text-white mx-auto mb-4" />
            <p className="text-white">+971 4 512 0777</p>
          </div>
          <div className="text-center">
            <Mail className="w-8 h-8 text-white mx-auto mb-4" />
            <p className="text-white">info@terracoreme.ae</p>
          </div>
          <div className="text-center">
            <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
            <p className="text-white">Dubai Production City , Dubai, UAE</p>
          </div>
        </div>

        <form className="max-w-2xl mx-auto bg-white rounded-lg p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Tell us about your project"
            ></textarea>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactCTA;
