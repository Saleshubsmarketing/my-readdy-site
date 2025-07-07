'use client';

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'ri-award-line',
      title: 'Certified Therapists',
      description: 'Our professional team holds international certifications and years of experience in wellness treatments.',
      stat: '15+ Years'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Natural Products',
      description: 'We use only premium, organic, and natural products that are gentle on your skin and environment.',
      stat: '100% Natural'
    },
    {
      icon: 'ri-heart-3-line',
      title: '1000+ Happy Clients',
      description: 'Join thousands of satisfied clients who trust us with their beauty and wellness journey.',
      stat: '1000+'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Standards',
      description: 'We maintain the highest hygiene and safety standards, ensuring your comfort and well-being.',
      stat: '5-Star Rating'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Sghaira?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our commitment to excellence, 
            natural beauty treatments, and personalized care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <i className={`${feature.icon} text-amber-800 text-3xl`}></i>
              </div>
              
              <div className="text-3xl font-bold text-amber-800 mb-2">{feature.stat}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Luxury?</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your appointment today and discover why Sghaira Beauty & Spa is Tunisia&apos;s premier wellness destination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
              Book Appointment
            </button>
            <button className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              Call Us Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}