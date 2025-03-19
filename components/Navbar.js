'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-white hover:text-black transition-colors">
            Tugas 5 Dila
          </Link>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#1e40af] focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Toggle menu"
          >
            <svg 
              className="h-6 w-6 text-white" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className="text-white hover:text-black transition-colors uppercase tracking-wide font-medium">
              Home
            </Link>
            <Link href="/customers" className="text-white hover:text-black transition-colors uppercase tracking-wide font-medium">
              Customers
            </Link>
            <Link href="/products" className="text-white hover:text-black transition-colors uppercase tracking-wide font-medium">
              Products
            </Link>
            <Link href="/purchases" className="text-white hover:text-black transition-colors uppercase tracking-wide font-medium">
              Purchases
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block text-white hover:text-black transition-colors uppercase tracking-wide font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/customers" 
              className="block text-white hover:text-black transition-colors uppercase tracking-wide font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Customers
            </Link>
            <Link 
              href="/products" 
              className="block text-white hover:text-black transition-colors uppercase tracking-wide font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
            <Link 
              href="/purchases" 
              className="block text-white hover:text-black transition-colors uppercase tracking-wide font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Purchases
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
