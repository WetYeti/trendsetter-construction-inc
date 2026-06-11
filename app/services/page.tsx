import Link from 'next/link';
import { ArrowRight, Wrench, Hammer, Zap, PaintBucket } from 'lucide-react';

const servicesList = [
  {
    name: "Core Service",
    description: "Professional general contractor services tailored to your needs.",
    icon: Wrench,
    color: "text-blue-600"
  },
  {
    name: "Additional Service",
    description: "Complete solutions with quality materials and expert installation.",
    icon: Hammer,
    color: "text-orange-600"
  },
  {
    name: "Emergency Service",
    description: "Same-day availability for urgent needs and emergency service.",
    icon: Zap,
    color: "text-yellow-600"
  },
  {
    name: "Free Estimates",
    description: "Free on-site consultations and detailed written estimates.",
    icon: PaintBucket,
    color: "text-green-600"
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Comprehensive solutions for all your general contractor needs
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div key={idx} className="bg-slate-50 p-8 rounded-xl hover:shadow-lg transition">
                  <Icon className={`w-12 h-12 ${service.color} mb-4`} />
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.name}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    <li className="text-slate-600">✓ Professional craftsmanship</li>
                    <li className="text-slate-600">✓ Quality materials guaranteed</li>
                    <li className="text-slate-600">✓ Licensed and insured</li>
                  </ul>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Get a Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Trendsetter Construction Inc?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {["Over X years of experience", "Fully licensed and insured", "Free estimates on all jobs", "Emergency service available", "Quality guarantee on work", "Serving " + 'Carthage' + " area"].map((item, i) => (
              <div key={i} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to discuss your project?</h2>
          <p className="text-xl mb-8">Get in touch today for a free consultation.</p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 text-lg font-semibold rounded-lg hover:bg-slate-100 transition"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
}
