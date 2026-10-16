import { TESTIMONIALS, COMPANY_INFO } from '../data/travelData';
import { Star, Quote, MessageSquare } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
            Verified Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            What Our Travelers Say
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From seamless SGR coast transfers to thrilling Maasai Mara safari game drives, discover real stories from our valued travelers.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-amber-200 mb-2" />

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-slate-500">{t.role} · {t.location}</div>
                </div>

                <div className="text-[10px] font-semibold px-2 py-1 bg-amber-50 text-amber-800 rounded">
                  {t.trip}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Strip */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500">
            Have questions about planning your next holiday? Speak directly with our lead travel consultant.
          </p>
          <div className="mt-3 inline-flex items-center gap-2">
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like to review customized options for our holiday.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 underline decoration-emerald-300"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp ({COMPANY_INFO.whatsapp})</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
