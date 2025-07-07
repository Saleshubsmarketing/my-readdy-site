'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert('Thank you for subscribing! Check your email for your 10% discount code.');
    setEmail('');
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-300 mb-6">Get 10% off your first visit and stay updated with our latest offers</p>
            <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full text-black text-sm"
                required
              />
              <button
                type="submit"
                className="bg-amber-800 text-white px-6 py-3 rounded-full hover:bg-amber-700 transition-colors whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-amber-400" style={{ fontFamily: 'var(--font-pacifico)' }}>
                Sghaira
              </span>
              <span className="ml-2 text-sm text-gray-300">Beauty & Spa</span>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Premium spa and beauty treatments in the heart of Tunisia. Where beauty meets tranquility.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-800 transition-colors cursor-pointer">
                <i className="ri-instagram-line text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-800 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-full hover:bg-amber-800 transition-colors cursor-pointer">
                <i className="ri-tiktok-fill text-sm"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                Home
              </Link>
              <Link href="/services" className="block text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                About Us
              </Link>
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm cursor-pointer">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">Facial Treatments</p>
              <p className="text-gray-300 text-sm">Massage Therapy</p>
              <p className="text-gray-300 text-sm">Body Care</p>
              <p className="text-gray-300 text-sm">Waxing Services</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm flex items-center">
                <i className="ri-map-pin-line w-4 h-4 flex items-center justify-center mr-2"></i>
                Tunis, Tunisia
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <i className="ri-phone-line w-4 h-4 flex items-center justify-center mr-2"></i>
                +216 XX XXX XXX
              </p>
              <p className="text-gray-300 text-sm flex items-center">
                <i className="ri-mail-line w-4 h-4 flex items-center justify-center mr-2"></i>
                info@sghaira.tn
              </p>
              <a href="#" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm cursor-pointer">
                <i className="ri-whatsapp-line w-4 h-4 flex items-center justify-center mr-2"></i>
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Sghaira Beauty & Spa. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors cursor-pointer">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}