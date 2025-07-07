'use client';

export default function OurStory() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in the heart of Tunisia, Sghaira Beauty & Spa was born from a passion for creating 
                a sanctuary where beauty and wellness converge. Our journey began with a simple vision: 
                to provide exceptional spa experiences that rejuvenate both body and soul.
              </p>
              <p>
                What started as a small beauty salon has evolved into Tunisia's premier destination for 
                luxury wellness treatments. We've carefully crafted every aspect of our spa to create 
                an oasis of tranquility where our clients can escape the stresses of daily life.
              </p>
              <p>
                Today, Sghaira Beauty & Spa stands as a testament to our commitment to excellence, 
                combining traditional wellness practices with modern techniques to deliver unparalleled 
                results. We've helped over 1,000 clients discover their inner and outer beauty.
              </p>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://readdy.ai/api/search-image?query=elegant%20spa%20treatment%20room%20with%20natural%20lighting%2C%20serene%20wellness%20environment%20with%20comfortable%20treatment%20bed%2C%20luxury%20spa%20interior%20design%20with%20warm%20earth%20tones%2C%20peaceful%20atmosphere%20with%20plants%20and%20soft%20textures%2C%20high-end%20beauty%20salon%20aesthetic&width=600&height=500&seq=our-story&orientation=portrait"
              alt="Sghaira Beauty & Spa Interior"
              className="rounded-lg shadow-lg w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}