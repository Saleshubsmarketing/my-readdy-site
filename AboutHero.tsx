'use client';

export default function AboutHero() {
  return (
    <section className="relative h-96 flex items-center justify-center bg-cover bg-center bg-gray-900"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://readdy.ai/api/search-image?query=luxurious%20spa%20interior%20with%20elegant%20treatment%20rooms%2C%20modern%20wellness%20center%20with%20warm%20lighting%2C%20professional%20beauty%20salon%20atmosphere%2C%20clean%20minimalist%20design%20with%20natural%20wood%20accents%20and%20soft%20ambient%20lighting%2C%20high-end%20spa%20facilities&width=1200&height=400&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">About Sghaira</h1>
        <p className="text-xl md:text-2xl font-light">
          Where Beauty Meets Tranquility in the Heart of Tunisia
        </p>
      </div>
    </section>
  );
}