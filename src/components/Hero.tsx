const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/cover.webp")'
        }}
      >
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:p-6 md:p-8 text-white bg-sky-400/70 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Your Trusted Core Builder <br />for Strong Foundations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Terracore Piling and Foundation, founded by Green Oasis General Contracting Co. LLC, brings 40 years of industry expertise to every project. With a solid reputation for delivering reliable, high-quality services, we are committed to precision, safety, and excellence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
