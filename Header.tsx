'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-amber-900" style={{ fontFamily: 'var(--font-pacifico)' }}>
              Sghaira
            </span>
            <span className="ml-2 text-sm text-gray-600">Beauty & Spa</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-amber-900 transition-colors whitespace-nowrap cursor-pointer">
              Home
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-amber-900 transition-colors whitespace-nowrap cursor-pointer">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-amber-900 transition-colors whitespace-nowrap cursor-pointer">
              About Us
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-amber-900 transition-colors whitespace-nowrap cursor-pointer">
              Contact
            </Link>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap cursor-pointer">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-amber-900 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-amber-900 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-amber-900 transition-colors cursor-pointer">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-amber-900 transition-colors cursor-pointer">
                Contact
              </Link>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors w-fit whitespace-nowrap cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}