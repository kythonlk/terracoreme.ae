import { Helmet } from "react-helmet-async";

export default function WorkWithUs() {

  const jobs: any = [
    // {
    //   title: 'Civil Engineer',
    //   description: 'We are looking for an experienced civil engineer specializing in foundation works.',
    //   apply: 'Apply Now'
    // },
    // {
    //   title: 'Structural Engineer',
    //   description: 'We are looking for an experienced structural engineer specializing in foundation works.',
    //   apply: 'Apply Now'
    // },
    // {
    //   title: 'Project Manager',
    //   description: 'We are looking for an experienced project manager specializing in foundation works.',
    //   apply: 'Apply Now'
    // },
    // {
    //   title: 'Project Coordinator',
    //   description: 'We are looking for an experienced project coordinator specializing in foundation works.',
    //   apply: 'Apply Now'
    // }
  ];
  return (
    <>
      <Helmet>
        <title>Work With Us | TerraCore Ground Engineering Solutions</title>
        <meta name="description" content="Terracore is a ground engineering company that provides engineering solutions for the construction industry. We offer a wide range of services, including site surveys, soil testing, and foundation design. Our team of experienced engineers is dedicated to providing high-quality work that meets the needs of our clients." />
      </Helmet>
      <div className="bg-[#dbd9d6] min-h-screen">
        <div className="relative h-[60vh] bg-gray-900">
          <div className="absolute inset-0 bg-cover bg-center opacity-40"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2069&auto=format&fit=crop")'
            }}
          />
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Work With Us</h1>
              <p className="text-xl text-white">
                Join Terracore Piling & Foundation Specialists and be part of a leading engineering team in the UAE.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-20">
          <div className="mb-16">
            <h2 className="text-2xl font-semibold text-[#005aa6] mb-6">Current Openings</h2>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {jobs.length > 0 ? (jobs.map((job: any) => (
                <div key={job.title} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#005aa6]">{job.title}</h3>
                  <p className="text-gray-700 mt-2">{job.description}</p>
                  <button className="mt-4 bg-[#44b6ec] text-white px-6 py-2 rounded-lg hover:bg-[#005aa6] transition">
                    Apply Now
                  </button>
                </div>
              ))) : (
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[#005aa6]">No Openings Currently</h3>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-[#005aa6] mb-6">Apply Now</h2>
            <iframe src="https://extraco-mailer.vercel.app/terracore/cv" width="100%" className='w-full h-[580px]' ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
