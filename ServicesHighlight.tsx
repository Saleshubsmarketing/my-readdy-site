'use client';

export default function ServicesHighlight() {
  const services = [
    {
      icon: 'ri-heart-3-line',
      title: 'Facial Treatments',
      description: 'Rejuvenating facials with premium natural products for glowing, healthy skin.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20facial%20treatment%20at%20luxury%20spa%2C%20woman%20receiving%20gentle%20skincare%20therapy%20with%20natural%20organic%20products%2C%20clean%20white%20treatment%20room%20with%20soft%20lighting%20and%20elegant%20spa%20equipment&width=400&height=300&seq=facial-001&orientation=landscape'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Massage Therapy',
      description: 'Relaxing therapeutic massages to relieve stress and restore your body harmony.',
      image: 'https://readdy.ai/api/search-image?query=Relaxing%20massage%20therapy%20session%20in%20elegant%20spa%20room%2C%20professional%20therapist%20providing%20therapeutic%20treatment%2C%20warm%20earth%20tones%2C%20candles%2C%20peaceful%20atmosphere%20with%20natural%20elements%20and%20soft%20lighting&width=400&height=300&seq=massage-001&orientation=landscape'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Body Care',
      description: 'Complete body treatments using natural ingredients for ultimate skin nourishment.',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20spa%20body%20treatment%20setup%20with%20natural%20organic%20products%2C%20essential%20oils%2C%20soft%20towels%2C%20elegant%20treatment%20room%20with%20earth%20tones%20and%20calming%20ambiance%20for%20premium%20wellness%20experience&width=400&height=300&seq=bodycare-001&orientation=landscape'
    },
    {
      icon: 'ri-scissors-line',
      title: 'Waxing Services',
      description: 'Professional waxing services in a comfortable, hygienic environment.',
      image: 'https://readdy.ai/api/search-image?query=Clean%20professional%20waxing%20treatment%20room%20in%20luxury%20spa%2C%20modern%20equipment%2C%20white%20and%20brown%20color%20scheme%2C%20hygienic%20environment%20with%20soft%20lighting%20and%20comfortable%20treatment%20bed&width=400&height=300&seq=waxing-001&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Signature Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of beauty and wellness treatments, 
            designed to rejuvenate your body, mind, and spirit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full mb-4">
                  <i className={`${service.icon} text-amber-800 text-xl`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <button className="text-amber-800 font-semibold hover:text-amber-600 transition-colors flex items-center whitespace-nowrap cursor-pointer">
                  Learn More 
                  <i className="ri-arrow-right-line ml-2 w-4 h-4 flex items-center justify-center"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
}