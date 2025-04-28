import { Phone, Mail, MapPin } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function WorkWithUs() {

  return (
    <>
      <Helmet>
        <title>Contact US | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <div className="bg-[#cfd0d0] min-h-screen">
        <div className="py-10 sm:py-20 bg-[#cfd0d0] text-gray-900" id="contact-form">
          <div className="mx-4 sm:mx-20 px-2 sm:px-6 lg:px-8">
            <div className="p-2 sm:p-8 mb-8 flex flex-col items-center justify-center font-bp">
              <h2 className="text-4xl font-bold mb-6">
                Ready to start your Project?
              </h2>
              <h2 className="text-3xl font-bold fi">Get in touch with our experts</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              <div className="mx-2 sm:mx-6 2xl:mx-12 flex flex-col items-center justify-end">
                <iframe src="https://extraco-mailer.vercel.app/terracore/contact" width="100%" className='w-full h-[750px] rounded-lg shadow-lg' ></iframe>
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
                        <a className="font-bp" href='tel:+97145120777' target='_blank'>+971 4 512 0777</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full p-2 mr-4">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <a className="font-bp" href="mailto:info@terracoreme.ae" target='_blank'>info@terracoreme.ae</a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gray-200 rounded-full p-2 mr-4">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold">Address</p>
                        <a className="font-bp" href='https://maps.app.goo.gl/bC9EfmntjH82Eu4w6' target='_blank' >IMPZ, Production City, Galadari Bldg. B-16, 2nd Floor</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.912230385254!2d55.1828602!3d25.0370525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d90eaeda877%3A0x4c62a29f983f549b!2sTerraCore!5e0!3m2!1sen!2sae!4v1743578389213!5m2!1sen!2sae" width="820" height="400" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
