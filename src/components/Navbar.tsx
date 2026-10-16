import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/travelData';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronDown, 
  Compass, 
  Palmtree, 
  Plane, 
  FileCheck,
  Send
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-slate-950 text-slate-200 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Bio Tagline & Services */}
          <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar text-[11px] sm:text-xs">
            <span className="font-semibold text-amber-400">🌍 {COMPANY_INFO.tagline}</span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="text-slate-300 hidden md:inline">✈️ {COMPANY_INFO.servicesBio}</span>
            <span className="text-slate-600 hidden lg:inline" aria-hidden="true">·</span>
            <span className="text-amber-300/90 hidden lg:inline">✨ {COMPANY_INFO.promiseBio}</span>
          </div>

          {/* Right: Direct Phone & Email info from image & prompt */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs shrink-0">
            <a 
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Push World Travel Ltd"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>

            <a 
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like to inquire about your travel packages.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors text-emerald-400 font-medium"
              title="WhatsApp Push World Travel Ltd"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              title="Email Push World Travel Ltd"
            >
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full bg-white/95 backdrop-blur-md transition-shadow duration-200 ${
        isScrolled ? 'shadow-md border-b border-slate-200/80' : 'border-b border-slate-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Zone 1: Brand Wordmark & Official Emblem */}
          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <Logo variant="full" />
          </a>

          {/* Zone 2: Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            
            {/* Destinations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('destinations')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavClick('#destinations')}
                className="flex items-center gap-1 py-2 hover:text-amber-600 transition-colors whitespace-nowrap focus:outline-none"
              >
                <span>Destinations</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'destinations' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-4 py-1 text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                    Popular Circuits
                  </div>
                  <button 
                    onClick={() => handleNavClick('#destinations')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-700 flex items-center gap-2.5 text-sm"
                  >
                    <Compass className="w-4 h-4 text-amber-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Maasai Mara & Amboseli</div>
                      <div className="text-xs text-slate-500">World-famous Kenya Wildlife Safaris</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNavClick('#destinations')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-700 flex items-center gap-2.5 text-sm"
                  >
                    <Palmtree className="w-4 h-4 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Diani & Watamu Coast</div>
                      <div className="text-xs text-slate-500">Pristine white sand beach getaways</div>
                    </div>
                  </button>
                  <button 
                    onClick={() => handleNavClick('#destinations')}
                    className="w-full text-left px-4 py-2 hover:bg-amber-50 hover:text-amber-700 flex items-center gap-2.5 text-sm"
                  >
                    <Plane className="w-4 h-4 text-blue-600" />
                    <div>
                      <div className="font-semibold text-slate-900">Dubai & International</div>
                      <div className="text-xs text-slate-500">City breaks, Mauritius & South Africa</div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* About Us */}
            <button 
              onClick={() => handleNavClick('#about')} 
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-2"
            >
              About Us
            </button>

            {/* Services */}
            <button 
              onClick={() => handleNavClick('#services')} 
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-2"
            >
              Services
            </button>

            {/* Tours & Packages */}
            <button 
              onClick={() => handleNavClick('#packages')} 
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-2"
            >
              Packages
            </button>

            {/* Featured Publications / Brochures */}
            <button 
              onClick={() => handleNavClick('#brochures')} 
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-2"
            >
              Brochures
            </button>

            {/* Why Choose Us */}
            <button 
              onClick={() => handleNavClick('#why-us')} 
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-2"
            >
              Why Us
            </button>

            {/* Google Reviews & Location */}
            <button 
              onClick={() => handleNavClick('#location-reviews')} 
              className="hover:text-amber-600 transition-colors whitespace-nowrap py-2 flex items-center gap-1"
            >
              <span>Reviews & Map</span>
            </button>
          </div>

          {/* Zone 3: Direct Actions (Call & Plan Trip CTA) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like personalized travel advice for an upcoming trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all rounded-lg shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-5 py-6 space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <button 
              onClick={() => handleNavClick('#about')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>About Us</span>
            </button>
            <button 
              onClick={() => handleNavClick('#services')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>Services (8 Categories)</span>
              <FileCheck className="w-4 h-4 text-amber-500" />
            </button>
            <button 
              onClick={() => handleNavClick('#destinations')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>Destinations</span>
              <Compass className="w-4 h-4 text-amber-500" />
            </button>
            <button 
              onClick={() => handleNavClick('#packages')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>Tours & Packages</span>
              <Palmtree className="w-4 h-4 text-emerald-500" />
            </button>
            <button 
              onClick={() => handleNavClick('#brochures')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              Digital Brochures
            </button>
            <button 
              onClick={() => handleNavClick('#why-us')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              Why Choose Pushworld Travel
            </button>
            <button 
              onClick={() => handleNavClick('#location-reviews')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              Nairobi Office Map & Google Reviews
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Travel Quote</span>
            </button>

            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like to plan a trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2 text-xs font-medium text-slate-600 text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Call Direct: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
