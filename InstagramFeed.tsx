'use client';

export default function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://readdy.ai/api/search-image?query=Instagram%20post%20style%20photo%20of%20spa%20facial%20treatment%20setup%2C%20natural%20skincare%20products%20arranged%20aesthetically%2C%20soft%20lighting%2C%20clean%20white%20background%20with%20brown%20accents%2C%20social%20media%20ready&width=300&height=300&seq=insta-001&orientation=squarish',
      likes: '245',
      caption: 'Glowing skin starts here ✨ #SghairaSpa #FacialTreatment'
    },
    {
      id: 2,
      image: 'https://readdy.ai/api/search-image?query=Instagram%20spa%20massage%20stones%20and%20essential%20oils%20flat%20lay%2C%20warm%20earth%20tones%2C%20candles%2C%20natural%20elements%2C%20aesthetic%20social%20media%20spa%20content%20with%20peaceful%20vibes&width=300&height=300&seq=insta-002&orientation=squarish',
      likes: '189',
      caption: 'Ultimate relaxation awaits 🧘‍♀️ #MassageTherapy #Wellness'
    },
    {
      id: 3,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20spa%20treatment%20room%20Instagram%20photo%2C%20elegant%20massage%20bed%20with%20white%20linens%2C%20soft%20ambient%20lighting%2C%20luxury%20spa%20interior%20design%2C%20social%20media%20aesthetic&width=300&height=300&seq=insta-003&orientation=squarish',
      likes: '312',
      caption: 'Your sanctuary of tranquility 🤍 #LuxurySpa #Tunisia'
    },
    {
      id: 4,
      image: 'https://readdy.ai/api/search-image?query=Instagram%20style%20flat%20lay%20of%20natural%20spa%20products%2C%20organic%20skincare%20bottles%2C%20dried%20flowers%2C%20neutral%20colors%2C%20aesthetic%20beauty%20content%20for%20social%20media%20feed&width=300&height=300&seq=insta-004&orientation=squarish',
      likes: '156',
      caption: 'Natural beauty, naturally you 🌿 #OrganicSkincare #Natural'
    },
    {
      id: 5,
      image: 'https://readdy.ai/api/search-image?query=Spa%20client%20selfie%20style%20photo%20showing%20glowing%20skin%20after%20treatment%2C%20happy%20satisfied%20customer%2C%20natural%20makeup%2C%20soft%20lighting%2C%20Instagram%20testimonial%20content&width=300&height=300&seq=insta-005&orientation=squarish',
      likes: '278',
      caption: 'Post-facial glow is real! ✨ #HappyClient #GlowingSkin'
    },
    {
      id: 6,
      image: 'https://readdy.ai/api/search-image?query=Instagram%20spa%20ambiance%20photo%2C%20candles%20and%20flowers%20arrangement%2C%20peaceful%20spa%20atmosphere%2C%20warm%20lighting%2C%20aesthetic%20wellness%20content%20for%20social%20media&width=300&height=300&seq=insta-006&orientation=squarish',
      likes: '203',
      caption: 'Creating moments of peace 🕯️ #SpaLife #Relaxation'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Follow Our Journey</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stay connected with our latest treatments, client transformations, and spa life moments.
          </p>
          
          <a 
            href="#" 
            className="inline-flex items-center text-amber-800 font-semibold hover:text-amber-600 transition-colors cursor-pointer"
          >
            <i className="ri-instagram-line w-5 h-5 flex items-center justify-center mr-2"></i>
            @SghairaBeautySpa
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <i className="ri-heart-fill w-6 h-6 flex items-center justify-center text-red-500 text-xl mb-2 mx-auto"></i>
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-800 hover:text-white transition-colors whitespace-nowrap cursor-pointer">
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}