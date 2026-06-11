'use client';
import Link from 'next/link';
import { Phone, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-slate-800">Trendsetter Construction Inc</Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-600 hover:text-blue-600 transition">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-blue-600 transition">About</Link>
            <Link href="/services" className="text-slate-600 hover:text-blue-600 transition">Services</Link>
            <Link href="/contact" className="text-slate-600 hover:text-blue-600 transition">Contact</Link>
          </div>
          
          <a 
            href="tel:9035550456"
            className="hidden md:flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Phone className="w-4 h-4" />
            <span>(903) 555-0456</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6 text-slate-600" />
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded">Home</Link>
              <Link href="/about" className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded">About</Link>
              <Link href="/services" className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded">Services</Link>
              <Link href="/contact" className="px-3 py-2 text-slate-600 hover:bg-slate-100 rounded">Contact</Link>
              <a href="tel:9035550456" className="px-3 py-2 bg-blue-600 text-white text-center rounded">Call</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
