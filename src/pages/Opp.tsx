export default function Opportunities() {
  return (
    <div className="bg-[#dbd9d6] min-h-screen">
      <div className="relative h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop")'
          }}
        />
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Opportunities</h1>
            <p className="text-xl text-white">
              Join Terracore Piling & Foundation Specialists and be part of a leading engineering team in the UAE.
            </p>
          </div>
        </div>
        <div className="p-20">
          <h2 className="text-4xl font-semibold text-[#005aa6] mb-6">Currently No Content</h2>
        </div>
      </div>
    </div>
  );
}
