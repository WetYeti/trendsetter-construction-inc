import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll reach out at " + formData.email + " shortly.");
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Get in touch for a free estimate or to schedule service
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:9035550456" className="text-2xl font-bold text-slate-900">
                (903) 555-0456
              </a>
              <p className="text-slate-600 mt-2">Available Mon-Sat</p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <Mail className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@example.com" className="text-xl font-semibold text-slate-900">
                info@example.com
              </a>
              <p className="text-slate-600 mt-2">We respond within 24 hours</p>
            </div>
            
            <div className="text-center p-8 bg-slate-50 rounded-xl">
              <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-slate-900 font-semibold">Trendsetter Construction Inc</p>
              <p className="text-slate-600">555 Builder Boulevard, Carthage, TX 75633</p>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  How Can We Help? *
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg transition"
              >
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </button>
              
              <p className="text-center text-sm text-slate-500 mt-4">
                We respect your privacy. Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
