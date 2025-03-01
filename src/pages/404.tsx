import logo from '../assets/logo-c.webp';

export default function NotFound() {
  return (
    <div className="bg-[#dbd9d6]">
      <div className="relative h-[66vh] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("/cover.webp")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <img src={logo} alt="logo" className="w-40 h-40 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">404</h1>
            <p className="text-xl text-white">
              Oops! Page Not Found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
