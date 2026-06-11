import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Trendsetter Construction Inc</h3>
            <p className="text-slate-300">Quality general contractor services you can trust.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-slate-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-slate-300 hover:text-white">About</a></li>
              <li><a href="/services" className="text-slate-300 hover:text-white">Services</a></li>
              <li><a href="/contact" className="text-slate-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5" />
                <span>(903) 555-0456</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>555 Builder Boulevard, Carthage, TX 75633</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Trendsetter Construction Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
