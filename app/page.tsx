import Link from 'next/link';
import { ArrowRight, Phone, HardHat, MapPin, Clock } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero Section - Industrial colors */}
      <section className="relative bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-800 text-white min-h-[80vh] flex items-center">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-500 rounded-full p-6 shadow-lg animate-pulse">
                <HardHat className="w-16 h-16 text-black" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">TRENDSETTER CONSTRUCTION</h1>
            <p className="text-xl md:text-2xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Family-Owned Heavy Construction & Site Development Experts in Carthage, TX
            </p>
            <p className="text-lg text-emerald-200 mb-10">
              Oilfield infrastructure, commercial site prep, excavation, and wood waste recycling services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a 
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold rounded-lg transition transform hover:scale-105 shadow-lg"
              >
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="tel:9036900049"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-emerald-900 transition shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (903) 690-0049
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-emerald-100">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                182 County Road 202, Carthage, TX
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Mon-Fri: 8am - 5pm
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus Bar */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-600 text-black py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="font-bold text-lg">Oilfield Ready</p>
              <p className="text-sm">Pipeline & Facility Construction</p>
            </div>
            <div>
              <p className="font-bold text-lg">Heavy Excavation</p>
              <p className="text-sm">Site Prep Specialists</p>
            </div>
            <div>
              <p className="font-bold text-lg">Family Owned</p>
              <p className="text-sm">Serving East Texas Since 1985</p>
            </div>
            <div>
              <p className="font-bold text-lg">Environmental</p>
              <p className="text-sm">Wood Waste Recycling</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industrial-Scale Construction Solutions</h2>
            <p className="text-xl text-slate-600">From well pads to commercial foundations—we build the groundwork</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Oilfield Construction */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🛢️</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Oilfield Construction</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Pipeline construction & repair</li>
                <li>✓ Well pad development</li>
                <li>✓ Oil & gas facility building</li>
                <li>✓ Production site installation</li>
                <li>✓ Tank battery setup</li>
                <li>✓ Piping & plumbing systems</li>
              </ul>
            </div>

            {/* Site Work */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-emerald-500">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🚜</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Commercial Site Work</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Land clearing & grading</li>
                <li>✓ Site preparation</li>
                <li>✓ Excavation services</li>
                <li>✓ Foundation prep work</li>
                <li>✓ Utility trenching</li>
                <li>✓ Earthmoving & hauling</li>
              </ul>
            </div>

            {/* Residential Prep */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-500">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🏠</span>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Residential Site Prep</h3>
              <ul className="space-y-2 text-slate-600">
                <li>✓ New home foundation work</li>
                <li>✓ Driveway & road construction</li>
                <li>✓ Septic system installation</li>
                <li>✓ Well pad preparation</li>
                <li>✓ Drainage solutions</li>
                <li>✓ Percolation testing support</li>
              </ul>
            </div>
            
            {/* Wood Waste Recycling */}
            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-600 md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">♻️</span>
                <h3 className="text-2xl font-bold text-slate-900">Wood Waste Recycling Services</h3>
              </div>
              <p className="text-slate-600 mb-4">
                Environmentally responsible disposal and recycling of construction debris, clean lumber, and vegetative materials. We help you meet environmental compliance while reducing disposal costs.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-green-50 p-3 rounded text-center">Clean C&D Debris</div>
                <div className="bg-green-50 p-3 rounded text-center">Lumber Processing</div>
                <div className="bg-green-50 p-3 rounded text-center">Biomass Fuel</div>
                <div className="bg-green-50 p-3 rounded text-center">Mulch Production</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-yellow-100 to-orange-100 h-80 rounded-xl flex items-center justify-center">
                <div className="text-center p-6">
                  <p className="text-5xl mb-2">⚙️🏗️</p>
                  <p className="text-slate-800 font-semibold text-lg">Built for Big Jobs</p>
                  <p className="text-slate-600 text-sm mt-2">When light contractors can&apos;t cut it</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Family-Owned Industrial Expertise</h2>
              <p className="text-lg text-slate-600 mb-6">
                Trendsetter Construction isn&apos;t your typical residential contractor. We specialize in heavy-duty construction work that requires real equipment, real experience, and real commitment to safety. Energy companies trust us with their most critical infrastructure projects because we know what&apos;s at stake.
              </p>
              <p className="text-lg text-slate-600 mb-6">
                From pipeline construction supporting regional energy production to commercial site preparation that sets the foundation for success, our family-owned business has been serving Panola County and beyond for decades.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <HardHat className="w-6 h-6 text-yellow-500 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Industry Compliant</strong> — OSHA-trained crews, proper insurance coverage</span>
                </li>
                <li className="flex items-start">
                  <HardHat className="w-6 h-6 text-yellow-500 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Heavy Equipment Fleet</strong> — Everything needed on-site, ready to roll</span>
                </li>
                <li className="flex items-start">
                  <HardHat className="w-6 h-6 text-yellow-500 mr-3 mt-0.5" />
                  <span className="text-slate-700"><strong>Energy Sector Partnerships</strong> — Trusted by major operators</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Trusted by Energy Professionals</h2>
            <p className="text-xl text-slate-600">BBB accredited, industry verified, community respected</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Reliable site prep work on multiple well pads. They understand energy sector timelines.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Regional Operator</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Professional crew, good communication, and they finished ahead of schedule.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Commercial Developer</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex mb-4 text-yellow-400 text-xl">★★★★★</div>
              <p className="text-slate-700 mb-6 italic">
                &quot;Their wood waste recycling helped us stay compliant and save on disposal fees.&quot;
              </p>
              <p className="font-semibold text-slate-900">- Construction Manager</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Break Ground?</h2>
          <p className="text-xl mb-8">Whether it&apos;s industrial or residential, we have the equipment and expertise</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 text-black text-lg font-semibold rounded-lg hover:bg-yellow-600 transition shadow-lg"
            >
              Explore Services
            </a>
            <a 
              href="tel:9036900049"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white text-lg font-semibold rounded-lg hover:bg-white hover:text-emerald-800 transition shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (903) 690-0049
            </a>
          </div>
          <div className="mt-8 flex justify-center items-center text-emerald-200">
            <Clock className="w-5 h-5 mr-2" />
            Mon-Fri: 8am - 5pm | Sat-Sun: Closed
          </div>
        </div>
      </section>
    </div>
  );
}
