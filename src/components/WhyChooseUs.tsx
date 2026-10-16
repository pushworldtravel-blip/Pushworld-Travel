import { COMPANY_INFO } from '../data/travelData';
import { destDiani } from '../assets/images';
import { 
  ShieldCheck, 
  Clock, 
  Compass, 
  MapPin, 
  Sparkles, 
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  Globe2,
  Car
} from 'lucide-react';

export function WhyChooseUs() {
  const servicePillars = [
    { label: 'Local & Global Itineraries', value: 'Local & Global', icon: Globe2, desc: 'East African safaris, coastal getaways, and international trips.' },
    { label: 'Personalized Travel Plans', value: 'Tailored', icon: Compass, desc: 'Itineraries crafted around your preferred dates and interests.' },
    { label: 'Dedicated Concierge', value: '24/7 Support', icon: Clock, desc: 'Responsive travel desk assistance via phone and WhatsApp.' },
    { label: 'Safari Transport Equipment', value: '4x4 Cruiser', icon: Car, desc: 'Fitted with pop-up roof for optimal wildlife viewing.' },
    { label: 'Itemized Quotations', value: 'Personalized', icon: ShieldCheck, desc: 'Clear offers tailored to each client’s specific needs.' },
    { label: 'Accommodation Support', value: 'Vetted Stays', icon: CheckCircle2, desc: 'Hotels, beachfront villas, cottages, and B&B options.' },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 2-Column Split: Visual Storytelling & Corporate Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Visual Showcase Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl aspect-[4/3] bg-slate-800">
              <img
                src={destDiani}
                alt="Pushworld Travel Client Experience"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs">
                <div className="font-bold text-amber-400 text-sm">🌍 {COMPANY_INFO.tagline}</div>
                <div className="text-slate-300 mt-1">
                  Helping individuals, families, groups, and businesses organise memorable journeys with convenience and confidence.
                </div>
              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 font-extrabold text-[11px] px-3.5 py-1 rounded-full shadow-lg border border-amber-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>Personalised Service</span>
            </div>
          </div>

          {/* Right Column: Narrative & Promise */}
          <div className="lg:col-span-7">
            <div className="text-xs font-bold tracking-wider uppercase text-amber-400 mb-2">
              Our Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
              Why Plan Your Journey With Pushworld Travel
            </h2>
            <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              At Pushworld Travel, we believe every journey should be memorable, comfortable, and well planned. We help our clients plan journeys that suit their interests, schedules, and budgets—with an emphasis on personalised planning, clear communication, and customer care.
            </p>
            <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
              From wildlife safaris and relaxing beach holidays to luxury escapes, international adventures, corporate trips, and team-building experiences, our team coordinates the logistics so you can travel with complete peace of mind.
            </p>

            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-wrap items-center gap-4">
              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to consult with an advisor about an upcoming travel plan.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs shadow flex items-center gap-2 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat via WhatsApp: {COMPANY_INFO.whatsapp}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 flex items-center gap-2 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quantified Features Grid - No Unsupported Claims */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicePillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/60 hover:border-amber-400/50 transition-colors flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    {pillar.label}
                  </div>
                  <div className="text-xs text-amber-400 font-semibold mt-0.5">
                    {pillar.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {pillar.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
