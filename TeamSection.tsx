'use client';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Amira Sghaira',
      role: 'Founder & Master Esthetician',
      bio: 'With over 15 years of experience in the beauty industry, Amira founded Sghaira Beauty & Spa with a vision to bring world-class wellness treatments to Tunisia. She specializes in advanced facial treatments and holistic skincare.',
      image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20woman%20spa%20owner%20in%20elegant%20white%20uniform%2C%20confident%20beauty%20expert%20with%20warm%20smile%2C%20luxury%20salon%20owner%20portrait%20with%20natural%20lighting%2C%20sophisticated%20aesthetician%20in%20modern%20spa%20setting&width=300&height=400&seq=team-amira&orientation=portrait'
    },
    {
      name: 'Yasmine Ben Ali',
      role: 'Senior Massage Therapist',
      bio: 'Yasmine brings 10 years of expertise in therapeutic massage and body treatments. She is certified in Swedish, deep tissue, and hot stone massage techniques, helping clients achieve deep relaxation and pain relief.',
      image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20massage%20therapist%20woman%20in%20spa%20uniform%2C%20experienced%20wellness%20practitioner%20with%20gentle%20expression%2C%20certified%20massage%20therapist%20in%20luxury%20spa%20environment%2C%20skilled%20beauty%20professional%20portrait&width=300&height=400&seq=team-yasmine&orientation=portrait'
    },
    {
      name: 'Leila Mahmoud',
      role: 'Skincare Specialist',
      bio: 'Leila is our expert in advanced skincare treatments and anti-aging solutions. With certifications in chemical peels and microdermabrasion, she helps clients achieve radiant, youthful skin through personalized treatment plans.',
      image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20skincare%20specialist%20woman%20in%20white%20lab%20coat%2C%20beauty%20expert%20with%20modern%20spa%20background%2C%20certified%20aesthetician%20with%20professional%20appearance%2C%20dermatology%20specialist%20in%20luxury%20clinic%20setting&width=300&height=400&seq=team-leila&orientation=portrait'
    },
    {
      name: 'Nadia Rezgui',
      role: 'Wellness Coordinator',
      bio: 'Nadia ensures every client receives exceptional service from the moment they arrive. She coordinates treatments, manages client relationships, and maintains our high standards of hospitality and care.',
      image: 'https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20spa%20coordinator%20woman%20in%20elegant%20business%20attire%2C%20friendly%20wellness%20center%20manager%20with%20welcoming%20smile%2C%20luxury%20spa%20reception%20professional%2C%20client%20service%20specialist%20in%20modern%20spa%20lobby&width=300&height=400&seq=team-nadia&orientation=portrait'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certified professionals are dedicated to providing you with exceptional care and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-6">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover object-top rounded-lg shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-amber-800 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}