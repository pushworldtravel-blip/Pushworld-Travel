import { useState } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/travelData';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export function Footer({ onOpenBooking }: FooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand Lockup & Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Pushworld Travel (Push World Travel Ltd). Personalised local and international travel planning, wildlife safaris, coastal holidays, flights, accommodation, and airport transfers.
            </p>

            <div className="pt-2 text-xs text-amber-400 font-semibold space-y-1">
              <div>🌍 {COMPANY_INFO.tagline}</div>
              <div>✈️ {COMPANY_INFO.servicesBio}</div>
              <div>✨ {COMPANY_INFO.promiseBio}</div>
            </div>

            <div className="pt-3 space-y-2 text-xs text-slate-300">
              <a 
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
                <span className="text-[11px] text-slate-400">(Call & WhatsApp)</span>
              </a>

              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Nairobi, Kenya</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{COMPANY_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Pushworld Travel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Our 8 Travel Services
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-amber-400 transition-colors">
                  Holiday & Safari Packages
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-amber-400 transition-colors">
                  Destinations & Circuits
                </a>
              </li>
              <li>
                <a href="#brochures" className="hover:text-amber-400 transition-colors">
                  Digital Travel Brochures
                </a>
              </li>
              <li>
                <a href="#location-reviews" className="hover:text-amber-400 transition-colors">
                  Nairobi Map & Google Reviews
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Services & Travel Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Travel Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Luxury & Premium Travel
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Custom Trip Planner
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Corporate Travel & Offsites
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Travel Insurance Options
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Airport Pickup & Ground Transport
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Hotels, Villas & B&B Stays
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">
                  Visa Assistance Advisory
                </a>
              </li>
              <li>
                <button onClick={onOpenBooking} className="text-amber-400 hover:underline">
                  Request Custom Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter & Fast WhatsApp */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Travel Updates
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              Receive seasonal travel ideas, destination guides, and holiday inspiration straight to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/80 border border-emerald-700/80 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Thank you! We will share seasonal travel insights with you.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}

            <div className="mt-5 pt-4 border-t border-slate-800">
              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to consult with an advisor.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Pushworld Travel · Push World Travel Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">
              About Us
            </a>
            <span>·</span>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Travel Services
            </a>
            <span>·</span>
            <a href="#packages" className="hover:text-amber-400 transition-colors">
              Safari & Holiday Packages
            </a>
            <span>·</span>
            <a href="#location-reviews" className="hover:text-amber-400 transition-colors">
              Google Reviews
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
