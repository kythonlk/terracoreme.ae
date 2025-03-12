import { Phone, Mail, MapPin, Upload } from 'lucide-react';

export default function WorkWithUs() {

  return (
    <div className="bg-[#cfd0d0] min-h-screen">
      <div className="relative h-[100vh] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: 'url("/home-2.webp")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-full w-full p-32 bg-gray-900/20 backdrop-blur-sm">
            <h1 className="text-5xl font-bold text-white mb-8">Let us do the work for you</h1>
            <button className="bg-[#005aa6] text-white px-8 py-4 rounded-lg transition">
              Consult with us
            </button>
          </div>
        </div>
      </div>
      <div className="py-20 bg-[#cfd0d0] text-gray-900">
        <div className="mx-20 px-4 sm:px-6 lg:px-8">

          <div className="p-8 mb-8 flex flex-col items-center justify-center font-bp">
            <h2 className="text-4xl font-bold mb-6">
              Ready to start your Project?
            </h2>
            <h2 className="text-3xl font-bold fi">Get in touch with our experts</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="mx-12 flex flex-col items-center justify-end">
              <form className="space-y-6 bg-white rounded-lg shadow-lg p-8 ">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-2 mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="font-bp">+971 4 512 0777</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-2 mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="font-bp">info@terracoreme.ae</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gray-200 rounded-full p-2 mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="font-bp">IMPZ, Production City, Galadari Bldg. B-16, 2nd Floor</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5299.4491367232895!2d55.177313575188435!3d25.03748377660175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dce28555555%3A0x381294290dd0ffc!2sGreen%20Oasis%20General%20Cont.%20Co.%20L.L.C!5e0!3m2!1sen!2sae!4v1740811853817!5m2!1sen!2sae" width="820" height="400" loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
