import { ABOUT_US_DATA, COMPANY_INFO } from '../data/travelData';
import { destDiani, sceneResort } from '../assets/images';
import { 
  CheckCircle2, 
  Target, 
  Eye, 
  MessageSquare, 
  PhoneCall, 
  Globe2, 
  ShieldCheck, 
  Sparkles,
  Compass,
  HeartHandshake
} from 'lucide-react';

interface AboutUsSectionProps {
  onOpenBooking: (pkgTitle?: string) => void;
}

export function AboutUsSection({ onOpenBooking }: AboutUsSectionProps) {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading Tag */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/80">
            <Globe2 className="w-3.5 h-3.5 text-amber-600" />
            <span>Discover Our Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display">
            {ABOUT_US_DATA.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {ABOUT_US_DATA.tagline}
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: Rich Storytelling Images */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100 group">
              <img
                src={destDiani}
                alt="Pushworld Travel Experiences"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white">
                <div className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Local & International Journeys</span>
                </div>
                <p className="text-xs text-slate-200 mt-1 leading-relaxed">
                  Personalised planning, clear communication, and genuine customer care for every traveler.
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-44 rounded-xl overflow-hidden shadow-2xl border-2 border-white aspect-square bg-slate-800">
              <img
                src={sceneResort}
                alt="Luxury Accommodation Support"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right: Narrative Description */}
          <div className="lg:col-span-7 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {ABOUT_US_DATA.intro.map((paragraph, index) => (
              <p key={index} className="text-slate-600">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenBooking('Custom Travel Consultation')}
                className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm shadow transition-all active:scale-95 flex items-center gap-2"
              >
                <Compass className="w-4 h-4" />
                <span>Plan Your Journey With Us</span>
              </button>

              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to learn more about your travel planning services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Mission and Vision Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="p-8 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-sm relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center mb-5 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-3">
              {ABOUT_US_DATA.mission.title}
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {ABOUT_US_DATA.mission.text}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-8 rounded-2xl bg-slate-900 text-white shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center mb-5 shadow-sm">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display mb-3">
              {ABOUT_US_DATA.vision.title}
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {ABOUT_US_DATA.vision.text}
            </p>
          </div>
        </div>

        {/* Why Choose Pushworld Travel? Section */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 sm:p-10">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200/80 text-slate-800 text-[11px] font-bold uppercase tracking-wider mb-2">
              <HeartHandshake className="w-3.5 h-3.5 text-amber-600" />
              <span>Core Values & Client Commitment</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
              Why Choose Pushworld Travel?
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We focus on thoughtful travel planning, transparent communication, and genuine care across every journey we support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {ABOUT_US_DATA.whyChoosePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200/90 hover:border-amber-400 transition-all shadow-sm hover:shadow-md flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Direct Desk Contact */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Personalised quotations prepared individually based on each client&apos;s needs.</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-amber-600 transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-600" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
