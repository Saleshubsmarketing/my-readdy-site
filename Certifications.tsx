'use client';

export default function Certifications() {
  const certifications = [
    {
      icon: 'ri-shield-check-line',
      title: 'Licensed Beauty Professionals',
      description: 'All our therapists hold valid professional licenses and undergo continuous training to maintain the highest standards.'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Natural & Organic Products',
      description: 'We use only premium, natural skincare products that are gentle on your skin and environmentally responsible.'
    },
    {
      icon: 'ri-hygeine-line',
      title: 'Strict Hygiene Standards',
      description: 'Our facility maintains the highest hygiene and sanitation standards, following international spa safety protocols.'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: 'Client Satisfaction Guarantee',
      description: 'We stand behind our services with a satisfaction guarantee, ensuring every client leaves feeling pampered and refreshed.'
    }
  ];

  const stats = [
    { number: '1000+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Treatment Options' },
    { number: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Quality Standards</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We maintain the highest professional standards to ensure your safety, comfort, and satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm flex items-start space-x-4">
              <div className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-full flex-shrink-0">
                <i className={`${cert.icon} text-xl text-amber-800`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-gray-700 leading-relaxed">{cert.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-black text-white rounded-lg p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Our Achievements</h3>
            <p className="text-gray-300">Numbers that reflect our commitment to excellence</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-amber-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Experience Sghaira?</h3>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied clients who trust us with their beauty and wellness needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
              Book Your Treatment
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors whitespace-nowrap cursor-pointer">
              View Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}