import CropedLogo from '../assets/logo-c.webp';

export default function Landing({ landing }: { landing: any }) {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 1 }}
      >
        <source src="/bg1.mp4" type="video/mp4" />
      </video>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-3 h-screen z-100">
          <img src={CropedLogo} className="h-40 sm:h-52" alt="TerraCore Logo" />
          <h1 className="text-3xl sm:text-5xl font-bold text-center">
            TerraCore
          </h1>
          <p className="text-center">
            PILING & FOUNDATION SPECIALISTS
          </p>
          <button
            className="bg-white/30 backdrop-blur hover:bg-blue-100 text-blue-900 font-bold h-16 w-28 sm:h-20 sm:w-40 rounded-full text-base sm:text-xl mt-2"
            onClick={() => landing(false)}
          >
            Enter Site
          </button>
        </div>
      </div>
    </div>
  );
};

