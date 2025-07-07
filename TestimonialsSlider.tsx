'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Amira Ben Salem',
      image: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20elegant%20Middle%20Eastern%20woman%20with%20radiant%20skin%2C%20soft%20smile%2C%20natural%20makeup%2C%20wearing%20neutral%20colors%2C%20beautiful%20lighting%2C%20spa%20client%20testimonial%20style%20photo&width=100&height=100&seq=client-001&orientation=squarish',
      rating: 5,
      text: 'Absolutely amazing experience! The facial treatment left my skin glowing for weeks. The staff is so professional and the atmosphere is incredibly relaxing.',
      service: 'Luxury Facial Treatment'
    },
    {
      name: 'Leila Mansouri',
      image: 'https://readdy.ai/api/search-image?query=Portrait%20of%20satisfied%20spa%20client%2C%20Tunisian%20woman%20with%20healthy%20glowing%20skin%2C%20peaceful%20expression%2C%20natural%20beauty%2C%20professional%20headshot%20for%20spa%20testimonials&width=100&height=100&seq=client-002&orientation=squarish',
      rating: 5,
      text: 'The massage therapy here is unmatched. I come monthly now and it has become my essential self-care ritual. Highly recommended!',
      service: 'Deep Tissue Massage'
    },
    {
      name: 'Yasmine Trabelsi',
      image: 'https://readdy.ai/api/search-image?query=Happy%20spa%20client%20portrait%2C%20North%20African%20woman%20with%20clear%20skin%2C%20warm%20smile%2C%20relaxed%20appearance%20after%20spa%20treatment%2C%20professional%20testimonial%20photography&width=100&height=100&seq=client-003&orientation=squarish',
      rating: 5,
      text: 'Sghaira is my go-to spa in Tunisia. The natural products they use are gentle on my sensitive skin, and the results speak for themselves.',
      service: 'Organic Body Treatment'
    },
    {
      name: 'Rim Khelifi',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20Tunisian%20woman%20client%20testimonial%20photo%2C%20natural%20makeup%2C%20confident%20smile%2C%20elegant%20appearance%2C%20spa%20client%20portrait%20with%20soft%20professional%20lighting&width=100&height=100&seq=client-004&orientation=squarish',
      rating: 5,
      text: 'The entire experience was perfect from booking to treatment. Clean, professional, and the results exceeded my expectations.',
      service: 'Full Spa Package'
    },
    {
      name: 'Nour Jemli',
      image: 'https://readdy.ai/api/search-image?query=Satisfied%20spa%20customer%20portrait%2C%20young%20Middle%20Eastern%20woman%20with%20radiant%20complexion%2C%20genuine%20smile%2C%20natural%20beauty%20after%20wellness%20treatment%2C%20testimonial%20style%20photography&width=100&height=100&seq=client-005&orientation=squarish',
      rating: 5,
      text: 'I&apos;ve tried many spas, but Sghaira stands out. The attention to detail and personalized care make all the difference.',
      service: 'Signature Facial'
    },
    {
      name: 'Salma Bouazzi',
      image: 'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20happy%20spa%20client%2C%20Tunisian%20woman%20with%20healthy%20skin%2C%20peaceful%20expression%2C%20natural%20lighting%2C%20client%20testimonial%20portrait%20for%20luxury%20spa&width=100&height=100&seq=client-006&orientation=squarish',
      rating: 5,
      text: 'The waxing service is so professional and comfortable. The staff makes you feel at ease throughout the entire process.',
      service: 'Waxing Services'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i 
        key={i} 
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400 w-4 h-4 flex items-center justify-center`}
      ></i>
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real clients who have discovered the Sghaira difference.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg mx-4">
                    <div className="text-center">
                      {/* Rating */}
                      <div className="flex justify-center mb-6">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-xl text-gray-700 mb-8 italic leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </blockquote>
                      
                      {/* Client Info */}
                      <div className="flex items-center justify-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover object-top mr-4"
                        />
                        <div className="text-left">
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-amber-800 text-sm">{testimonial.service}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl"></i>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl"></i>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                  index === currentSlide ? 'bg-amber-800' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}