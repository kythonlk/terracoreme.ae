import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCTA = () => {
  return (
    <>
      <div className="h-20 bg-[#ece8e2]">
      </div>
      <div className="py-10 bg-[#cfd0d0] text-gray-900">
        <div className="mx-4 sm:mx-10 2xl:mx-20 px-2 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="mx-2 md:mx-8 flex flex-col items-start justify-start">
              <form className="space-y-4 bg-white rounded-lg shadow-lg p-4 lg:p-8 md:-mt-20 h-full w-full flex flex-col justify-between">
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
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-3 lg:px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={8}
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 lg:py-3 rounded-md hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div>

              <div className="mb-4 flex flex-col items-center justify-center font-bp">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                  Ready to start your Project?
                </h2>
                <h2 className="text-xl lg:text-2xl fi text-center">Get in touch with our experts</h2>
              </div>
              <div className="space-y-3 lg:space-y-4 py-8">
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

              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.912230385254!2d55.1828602!3d25.0370525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d90eaeda877%3A0x4c62a29f983f549b!2sTerraCore!5e0!3m2!1sen!2sae!4v1743578389213!5m2!1sen!2sae"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCTA;
