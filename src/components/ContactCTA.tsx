import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <div className="py-10 sm:py-20 bg-[#cfd0d0] text-gray-900">
      <div className="mx-4 sm:mx-20 px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="mx-2 md:mx-12 flex flex-col items-start justify-start">
            <div className="mb-8 lg:mb-12 flex flex-col items-start justify-center font-bp">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                Ready to start your Project?
              </h2>
              <h2 className="text-2xl lg:text-3xl font-bold fi">Get in touch with our experts</h2>
            </div>
            <form className="space-y-4 bg-white rounded-lg shadow-lg p-4 lg:p-8 h-full w-full">
              <div className="grid grid-cols-1 gap-4 lg:gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 lg:px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 lg:px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  className="w-full px-3 lg:px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 lg:py-3 rounded-md hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
          <div>
            <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8 mb-6 lg:mb-8">
              <div className="space-y-4 lg:space-y-6">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full p-2 mr-4">
                    <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="font-bp text-sm lg:text-base">+971 4 512 0777</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full p-2 mr-4">
                    <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="font-bp text-sm lg:text-base">info@terracoreme.ae</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full p-2 mr-4">
                    <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="font-bp text-sm lg:text-base">IMPZ, Production City, Galadari Bldg. B-16, 2nd Floor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-60 lg:h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5299.4491367232895!2d55.177313575188435!3d25.03748377660175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dce28555555%3A0x381294290dd0ffc!2sGreen%20Oasis%20General%20Cont.%20Co.%20L.L.C!5e0!3m2!1sen!2sae!4v1740811853817!5m2!1sen!2sae"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;
