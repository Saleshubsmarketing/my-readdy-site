'use client';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://readdy.ai/api/search-image?query=Luxurious%20spa%20interior%20with%20warm%20lighting%2C%20elegant%20massage%20bed%20with%20white%20linens%2C%20natural%20stone%20walls%2C%20candles%2C%20and%20serene%20atmosphere.%20Modern%20spa%20design%20with%20brown%20and%20earth%20tones%2C%20minimalist%20luxury%20wellness%20center%20with%20soft%20ambient%20lighting%20and%20peaceful%20ambiance&width=1920&height=1080&seq=spa-hero-001&orientation=landscape')`
      }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          <span className="block text-white">Sghaira Beauty & Spa</span>
          <span className="block text-xl md:text-2xl font-normal text-amber-200 mt-4">
            Where Beauty Meets Tranquility
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Luxury wellness treatments in the heart of Tunisia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors whitespace-nowrap cursor-pointer">
            Book Now
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors whitespace-nowrap cursor-pointer">
            Explore Services
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl w-6 h-6 flex items-center justify-center"></i>
      </div>
    </section>
  );
}