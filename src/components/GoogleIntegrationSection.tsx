import { useState } from 'react';
import { GOOGLE_DATA, COMPANY_INFO } from '../data/travelData';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  CheckCircle2, 
  MessageSquare,
  ThumbsUp,
  ShieldCheck,
  Headphones
} from 'lucide-react';

export function GoogleIntegrationSection() {
  const [filterRating, setFilterRating] = useState<'all' | '5star'>('all');

  const filteredReviews = filterRating === '5star' 
    ? GOOGLE_DATA.reviews.filter(r => r.rating === 5)
    : GOOGLE_DATA.reviews;

  return (
    <section id="location-reviews" className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Google Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold mb-3">
              <span className="flex items-center gap-1">
                <span className="text-blue-400 font-bold">G</span>
                <span className="text-red-400 font-bold">o</span>
                <span className="text-amber-400 font-bold">o</span>
                <span className="text-blue-400 font-bold">g</span>
                <span className="text-emerald-400 font-bold">l</span>
                <span className="text-red-400 font-bold">e</span>
              </span>
              <span>· Verified Business Profile</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Find Us in Nairobi or Call Our Office
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              Find us in Nairobi or call our office via the number provided. Our concierge and travel desk are on standby 24/7 to assist with your bookings, safari packages, flights, and holiday arrangements.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shrink-0 shadow-xl backdrop-blur-md">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-extrabold text-xl">
              {GOOGLE_DATA.rating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                Excellent on Google
              </div>
              <div className="text-[11px] text-slate-400">
                Based on {GOOGLE_DATA.reviewsCount}+ verified client reviews
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Direct Office Calling & Verified Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Call & Office Contact Bento */}
          <div className="lg:col-span-5 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    Pushworld Travel Office
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct access to our Nairobi travel concierge
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Headphones className="w-5 h-5" />
                </div>
              </div>

              {/* Prominent Direct Phone Card */}
              <div className="mb-6 p-4 rounded-xl bg-gradient-to-br from-amber-500/15 via-slate-800 to-slate-800/90 border border-amber-500/30">
                <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" /> Direct Office Number
                </div>
                <a 
                  href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} 
                  className="text-2xl sm:text-3xl font-extrabold text-white hover:text-amber-400 transition-colors tracking-tight font-display block"
                >
                  {COMPANY_INFO.phone}
                </a>
                <div className="text-xs text-slate-400 mt-1">
                  International line: <span className="text-slate-300 font-medium">{COMPANY_INFO.phoneInternational}</span>
                </div>
              </div>

              {/* Office Details List */}
              <ul className="space-y-4 text-xs sm:text-sm">
                <li className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Location</div>
                    <div className="text-slate-400 mt-0.5">Nairobi, Kenya</div>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-300">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Operating Hours</div>
                    <div className="text-slate-400 mt-0.5">{COMPANY_INFO.hours}</div>
                  </div>
                </li>

                <li className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Official Email</div>
                    <div className="text-slate-400 mt-0.5">
                      <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-400 transition-colors">
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact CTAs */}
            <div className="mt-8 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
                className="flex-1 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Office Now</span>
              </a>

              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Pushworld Travel, I would like to speak with an agent about planning my travel.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Assurance Note */}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Prompt telephone assistance & instant quotations</span>
            </div>
          </div>

          {/* Right Column: Verified Google Reviews & Client Feedback */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <h3 className="text-lg font-bold text-white font-display">
                    Verified Google Traveler Reviews
                  </h3>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setFilterRating('all')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      filterRating === 'all'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    All Reviews
                  </button>
                  <button
                    onClick={() => setFilterRating('5star')}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      filterRating === '5star'
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    5-Star Only
                  </button>
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {filteredReviews.map((rev, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700/80 shadow-md flex flex-col justify-between hover:border-slate-600 transition-colors"
                  >
                    <div>
                      {/* Review Header with Google Avatar & Stars */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 font-bold flex items-center justify-center text-xs">
                            {rev.author.charAt(0)}
                          </div>
                          <div>
                            <div className="font-bold text-white text-xs flex items-center gap-1">
                              <span>{rev.author}</span>
                              <CheckCircle2 className="w-3 h-3 text-blue-400" />
                            </div>
                            <div className="text-[10px] text-slate-400">{rev.badge}</div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="flex items-center gap-0.5 text-amber-400">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{rev.date}</div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed italic">
                        &ldquo;{rev.text}&rdquo;
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-medium">
                        <ThumbsUp className="w-3 h-3" /> Verified Client
                      </span>
                      <span className="text-slate-500">Google Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Reviews Callout Banner */}
            <div className="p-5 rounded-2xl bg-slate-800/70 border border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Traveled with Pushworld Travel recently?</div>
                  <div className="text-[11px] text-slate-400">Share your experience on our Google Business Profile to help fellow travelers.</div>
                </div>
              </div>

              <a
                href={GOOGLE_DATA.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs transition-all flex items-center gap-2 whitespace-nowrap shrink-0 border border-slate-600 hover:border-slate-500"
              >
                <span>Write a Google Review</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
