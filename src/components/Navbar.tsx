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
    if (href.startsWith('/')) {
      window.location.href = href;
      return;
    }
    if (window.location.pathname !== '/') {
      window.location.href = `/${href.replace(/^#/, '')}`;
      return;
    }
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
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
