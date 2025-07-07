'use client';

export default function OurValues() {
  const values = [
    {
      icon: 'ri-heart-3-line',
      title: 'Wellness',
      description: 'We believe true beauty comes from within. Our holistic approach focuses on nurturing your overall well-being, creating harmony between mind, body, and spirit.'
    },
    {
      icon: 'ri-award-line',
      title: 'Expertise',
      description: 'Our team of certified professionals brings years of experience and continuous training to ensure you receive the highest quality treatments available.'
    },
    {
      icon: 'ri-user-heart-line',
      title: 'Client Care',
      description: 'Every client is unique, and we tailor our services to meet your individual needs. Your comfort, satisfaction, and results are our top priorities.'
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These core principles guide everything we do at Sghaira Beauty & Spa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-100 rounded-full mx-auto mb-6">
                <i className={`${value.icon} text-2xl text-amber-800`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}