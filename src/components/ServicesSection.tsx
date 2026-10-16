import { useState } from 'react';
import { MAIN_SERVICES_LIST, ServiceCategoryItem, COMPANY_INFO, VISA_ASSISTANCE_DETAILS } from '../data/travelData';
import { 
  Crown, 
  Compass, 
  Briefcase, 
  ShieldCheck, 
  Car, 
  BookOpen, 
  Palmtree, 
  Home, 
  ArrowRight, 
  MessageSquare, 
  FileCheck, 
  FileSearch, 
  HelpCircle, 
  Ticket, 
  AlertCircle,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const [filterCategory, setFilterCategory] = useState<'all' | 'leisure' | 'corporate' | 'support'>('all');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown':
        return <Crown className="w-5 h-5 text-amber-600" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-amber-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-600" />;
      case 'Car':
        return <Car className="w-5 h-5 text-amber-600" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5 text-indigo-600" />;
      case 'Palmtree':
        return <Palmtree className="w-5 h-5 text-emerald-600" />;
      case 'Home':
        return <Home className="w-5 h-5 text-rose-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600" />;
    }
  };

  const filteredServices = MAIN_SERVICES_LIST.filter((srv) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'leisure') {
      return ['luxury-travel', 'custom-planner', 'holiday-safari-packages', 'destination-guides'].includes(srv.id);
    }
    if (filterCategory === 'corporate') {
      return ['corporate-travel', 'custom-planner'].includes(srv.id);
    }
    if (filterCategory === 'support') {
      return ['travel-insurance', 'airport-transfers', 'hotel-reservations'].includes(srv.id);
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Comprehensive Travel Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Our Travel Services
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Pushworld Travel brings accommodation, transport, personalized itinerary planning, and destination experiences together in one convenient service for local and international journeys.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to consult with an advisor regarding your travel services.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Travel Desk: {COMPANY_INFO.whatsapp}</span>
            </a>
          </div>
        </div>

        {/* Filter Tabs (Uncongested, touch-friendly scroll on phones) */}
        <div className="flex items-center sm:flex-wrap gap-2 mb-8 border-b border-slate-200/80 pb-4 overflow-x-auto no-scrollbar touch-pan-x scroll-smooth">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
              filterCategory === 'all'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All 8 Core Services
          </button>
          <button
            onClick={() => setFilterCategory('leisure')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
              filterCategory === 'leisure'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Safaris & Leisure
          </button>
          <button
            onClick={() => setFilterCategory('corporate')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
              filterCategory === 'corporate'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Corporate & Groups
          </button>
          <button
            onClick={() => setFilterCategory('support')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-all active:scale-95 ${
              filterCategory === 'support'
                ? 'bg-amber-600 text-white shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Stays, Transport & Cover
          </button>
        </div>

        {/* 8 Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((srv: ServiceCategoryItem) => (
            <div
              key={srv.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-amber-400 transition-all duration-200 shadow-sm hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-44 overflow-hidden bg-slate-100">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur shadow flex items-center justify-center">
                    {getServiceIcon(srv.iconName)}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                      {srv.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {srv.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 mb-4 text-[11px] text-slate-500">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-amber-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Insurance Disclaimer if applicable */}
                  {srv.disclaimer && (
                    <div className="p-2.5 rounded-lg bg-amber-50/80 border border-amber-200 text-[10px] text-amber-900 leading-relaxed mb-2">
                      <span className="font-semibold">Important:</span> {srv.disclaimer}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 group-hover:shadow"
                >
                  <span>{srv.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated "Visa Assistance" Section (Customer-Friendly Scope & Clarity) */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-50 text-blue-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <FileCheck className="w-3.5 h-3.5 text-blue-600" />
                <span>{VISA_ASSISTANCE_DETAILS.badge}</span>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">
                Visa Assistance Services
              </h3>
              <p className="mt-1.5 text-sm text-slate-600 max-w-2xl leading-relaxed">
                {VISA_ASSISTANCE_DETAILS.lead} {VISA_ASSISTANCE_DETAILS.note}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={() => onSelectService('Visa Assistance Consultation')}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-2"
              >
                <span>Request Visa Assistance</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 3 Pillars of Visa Support */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <FileSearch className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                Document Review
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We check your travel documents for completeness and correct formatting before submission to avoid unnecessary delays.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <HelpCircle className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                Application Support
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We help you understand the official application process and identify available ways to avoid unnecessary delays during processing.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
              <div className="w-9 h-9 rounded-lg bg-blue-100/80 text-blue-700 flex items-center justify-center mb-3">
                <Ticket className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm mb-1.5">
                Flight Reservation Verification
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We verify and produce flight reservation details and confirmed itineraries when required for your application.
              </p>
            </div>
          </div>

          {/* Visa Disclaimer / Authority Notice */}
          <div className="mt-6 p-4 rounded-xl bg-slate-100/80 border border-slate-200 flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
            <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-800">Important Notice:</strong> Visa assistance is an advisory service. Pushworld Travel does not guarantee visa approval, embassy decisions, or consular processing times. Final decisions and processing timelines depend entirely on the relevant consular and immigration authorities.
            </p>
          </div>
        </div>

        {/* Personalized Travel Service Banner */}
        <div className="mt-12 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-medium mb-3">
              ✨ Personalized Planning
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display">
              Ready to Plan Your Custom Itinerary?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are planning a weekend getaway, a family holiday, a corporate trip, or an international adventure, our team is here to explore your options and organise the details.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to request a tailored quote for an upcoming trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Travel Desk</span>
            </a>

            <button
              onClick={() => onSelectService('Custom Personalized Travel Package')}
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs transition-all"
            >
              Request Custom Quote
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
