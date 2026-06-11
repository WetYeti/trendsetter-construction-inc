import Link from 'next/link';
import { ArrowRight, Award, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Trendsetter Construction Inc</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Dedicated to excellence in general contractor since day one
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
          <p className="text-lg text-slate-600 mb-6">
            Trendsetter Construction Inc was founded on the principle that quality workmanship and honest communication should be standard.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            We understand that inviting contractors into your home or business is a big decision. That's why we prioritize clear communication, fair pricing, and meticulous attention to detail on every project.
          </p>
          <p className="text-lg text-slate-600">
            Today, we continue to serve the Carthage community with the same dedication and integrity that started our journey.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality First</h3>
              <p className="text-slate-600">We never cut corners. Every job receives our full attention to detail.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Customer Focused</h3>
              <p className="text-slate-600">Your satisfaction is our priority from start to finish.</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">On Time & On Budget</h3>
              <p className="text-slate-600">Respect for your time and budget is fundamental.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Want to learn more about what we offer?</h2>
          <Link 
            href="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
          >
            View Our Services
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
