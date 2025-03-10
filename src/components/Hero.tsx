const Hero = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/home-1.png")'
        }}
      >
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-full w-full p-32 bg-gray-900/20 backdrop-blur-sm flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-7xl mb-6 text-center fr">
            Building Trust  <br />
            Strengthening Foundations
          </h1>
          <button className="bg-bp text-white px-8 py-4 rounded-lg transition text-xl">
            Know us more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
