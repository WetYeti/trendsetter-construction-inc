import Link from 'next/link';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Trendsetter Construction Inc</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Professional general contractor in Carthage
            </p>
            <p className="text-lg text-slate-400 mb-10">
              Quality workmanship. Trusted results. Serving our community with pride.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="tel:9035550456"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition"
              >
                <Phone className="mr-2 w-5 h-5" />
                (903) 555-0456
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-slate-600">Quality service, transparent pricing, satisfied customers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Licensed & Insured</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Competitive Pricing</h3>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Quality Workmanship</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">About Trendsetter Construction Inc</h2>
              <p className="text-lg text-slate-600 mb-6">
                We are dedicated to providing exceptional general contractor services to homeowners and businesses in Carthage and surrounding areas.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Our team brings together years of experience, attention to detail, and commitment to customer satisfaction.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="bg-slate-200 h-80 rounded-xl flex items-center justify-center">
              <p className="text-slate-500">Serving Carthage with Pride</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Customers Say</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex mb-4 text-yellow-400">★★★★★</div>
                <p className="text-slate-600 mb-6">
                  "Excellent service! Highly recommend Trendsetter Construction Inc for quality general contractor work."
                </p>
                <p className="font-semibold text-slate-900">- Satisfied Customer</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free estimate on your next project.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-slate-100 transition"
            >
              Request Quote
            </Link>
            <a 
              href="tel:9035550456"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition"
            >
              <Phone className="mr-2 w-5 h-5" />
              (903) 555-0456
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
