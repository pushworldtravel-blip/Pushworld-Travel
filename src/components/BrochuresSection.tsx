import { useState } from 'react';
import { BROCHURES, BrochureItem, COMPANY_INFO } from '../data/travelData';
import { 
  BookOpen, 
  Download, 
  Share2, 
  Check, 
  Eye, 
  ChevronLeft, 
  ChevronRight, 
  MessageSquare,
  ShieldCheck,
  Compass,
  FileText
} from 'lucide-react';

export function BrochuresSection() {
  const [activeBrochure, setActiveBrochure] = useState<BrochureItem | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleOpenBrochure = (brochure: BrochureItem) => {
    setActiveBrochure(brochure);
    setCurrentPage(1);
    setDownloadSuccess(false);
  };

  const handleShare = (brochure: BrochureItem) => {
    const text = `Explore the official ${brochure.title} from Push World Travel Ltd: ${window.location.href}`;
    navigator.clipboard.writeText(text);
    setCopiedId(brochure.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="brochures" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              Official Travel Guides
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Featured Publications & Brochures
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              Browse our digital travel guides featuring day-by-day itineraries, packing tips, wildlife migration schedules, and tailored travel planning.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              Updated for 2026 Season
            </span>
          </div>
        </div>

        {/* Brochure Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BROCHURES.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200 hover:border-amber-400 p-4 transition-all duration-300 flex flex-col justify-between hover:shadow-lg"
            >
              <div>
                {/* Visual Cover Preview */}
                <div 
                  onClick={() => handleOpenBrochure(item)}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer bg-slate-200 mb-4"
                >
                  <img
                    src={item.coverImg}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-black/20 to-transparent flex flex-col justify-between p-3.5">
                    <span className="self-end px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px]">
                      {item.pages} Sections
                    </span>

                    <div>
                      <div className="text-[10px] text-amber-300 font-semibold">{item.date}</div>
                      <div className="text-white text-sm font-bold leading-snug drop-shadow line-clamp-2">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-amber-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 rounded-full bg-white text-slate-900 font-bold text-xs shadow-md flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      Read Guide
                    </span>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-amber-700 mb-1">
                  {item.tagline}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {item.description}
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-3 border-t border-slate-200/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenBrochure(item)}
                  className="px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Read Guide</span>
                </button>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleShare(item)}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors"
                    title="Share Guide Link"
                  >
                    {copiedId === item.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Share2 className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Digital Reader Modal */}
        {activeBrochure && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6">
            <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200">
              
              {/* Modal Top Bar */}
              <div className="p-4 bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  <span className="font-bold text-sm sm:text-base truncate">
                    {activeBrochure.title}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">
                    Chapter {currentPage} of {activeBrochure.pages}
                  </span>
                  <button
                    onClick={() => setActiveBrochure(null)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors ml-2"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Reader Body Simulation */}
              <div className="p-5 sm:p-6 overflow-y-auto flex-1 bg-slate-100 flex flex-col items-center justify-center text-center">
                <div className="max-w-xl w-full bg-white rounded-xl shadow-md p-6 sm:p-8 border border-slate-200 min-h-[360px] flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mb-1.5">
                      PUSH WORLD TRAVEL LTD
                    </div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 font-display">
                      {activeBrochure.title}
                    </h3>
                    <div className="text-xs text-slate-500 mt-1 mb-4">
                      {activeBrochure.tagline}
                    </div>

                    <div className="text-left text-xs sm:text-sm text-slate-700 space-y-3 leading-relaxed border-t border-b border-slate-100 py-4 my-2">
                      
                      {/* Chapter 1: Destination Overview */}
                      {currentPage === 1 && (
                        <div className="space-y-2.5">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-700">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Chapter 1: Destination Overview</span>
                          </div>
                          <p>
                            Push World Travel Ltd curates journeys that take you beyond the ordinary. Whether traversing the savannahs of East Africa or relaxing on palm-fringed coastlines, each journey is structured to ensure maximum comfort, safety, and authentic local experiences.
                          </p>
                          <p className="text-slate-600">
                            Our team coordinates your flights, private ground transfers, and hotel reservations with personal attention to every requirement.
                          </p>
                        </div>
                      )}

                      {/* Chapter 2: Day-by-Day Itinerary Highlights */}
                      {currentPage === 2 && (
                        <div className="space-y-2.5">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-700">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Chapter 2: Day-by-Day Itinerary Highlights</span>
                          </div>
                          <div className="space-y-2 text-xs">
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                              <strong className="text-slate-900">Day 1: Arrival & Orientation</strong>
                              <p className="text-slate-600 mt-0.5">Meet and greet by your Push World Travel representative. Transfer in comfort to your lodge or beachfront resort for check-in and evening relaxation.</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                              <strong className="text-slate-900">Day 2: Prime Exploration</strong>
                              <p className="text-slate-600 mt-0.5">Comprehensive morning and afternoon game drives or marine excursions led by experienced local guides.</p>
                            </div>
                            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                              <strong className="text-slate-900">Day 3 & Beyond: Panoramic Trails & Leisure</strong>
                              <p className="text-slate-600 mt-0.5">Sundowners, scenic photography stops, cultural encounters, and smooth departure connections.</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Chapter 3: Dedicated What's Included */}
                      {currentPage === 3 && (
                        <div className="space-y-2.5">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-emerald-700">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span>Chapter 3: What's Included on Safari</span>
                          </div>
                          <p className="text-slate-600 text-xs">
                            Our safari packages are configured with clarity so you know exactly what is covered on your journey:
                          </p>
                          <ul className="space-y-2 text-xs text-slate-700 mt-2">
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-slate-900">• Passenger Insurance:</span>
                              <span>Passenger insurance cover, subject to the applicable policy terms.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-slate-900">• Safari Transport:</span>
                              <span>Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-slate-900">• Accommodation and Meals:</span>
                              <span>Lodge accommodation and meals as specified in the selected itinerary.</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="font-bold text-slate-900">• Park Fees:</span>
                              <span>National park and reserve entry fees as specified in the package itinerary.</span>
                            </li>
                          </ul>
                        </div>
                      )}

                      {/* Chapter 4: Practical Travel & Packing Guidance */}
                      {currentPage === 4 && (
                        <div className="space-y-2.5">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-amber-700">
                            <Compass className="w-3.5 h-3.5" />
                            <span>Chapter 4: Practical Travel & Packing Tips</span>
                          </div>
                          <ul className="space-y-1.5 text-xs text-slate-600">
                            <li><strong className="text-slate-800">Luggage:</strong> Soft-sided duffle bags are strongly recommended for safari vehicle storage.</li>
                            <li><strong className="text-slate-800">Clothing:</strong> Neutral khaki, olive, or beige clothing for game drives; light layers for cool morning breezes.</li>
                            <li><strong className="text-slate-800">Essentials:</strong> High SPF sunscreen, insect repellent, UV sunglasses, and binoculars.</li>
                            <li><strong className="text-slate-800">Health:</strong> Consult your health provider regarding yellow fever vaccination and malaria prophylaxis prior to travel.</li>
                          </ul>
                        </div>
                      )}

                      {/* Chapter 5: Visa Assistance Advisory */}
                      {currentPage >= 5 && (
                        <div className="space-y-2.5">
                          <div className="font-bold text-slate-900 flex items-center gap-1.5 text-xs uppercase tracking-wider text-blue-700">
                            <FileText className="w-3.5 h-3.5" />
                            <span>Chapter 5: Visa Assistance & Custom Planning</span>
                          </div>
                          <p className="text-xs text-slate-600">
                            Visa assistance is provided as a separate administrative advisory service:
                          </p>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            <li><strong className="text-slate-900">Document Review:</strong> We check your travel documents for completeness before submission.</li>
                            <li><strong className="text-slate-900">Application Support:</strong> We help you understand the application process and identify available ways to avoid unnecessary delays.</li>
                            <li><strong className="text-slate-900">Flight Reservation Verification:</strong> We verify flight reservation details when required for your application.</li>
                          </ul>
                          <p className="text-[11px] text-slate-500 pt-1 italic">
                            * Note: Visa approval and processing times depend strictly on the respective embassies and immigration authorities.
                          </p>
                        </div>
                      )}

                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    <span>Document: PWT-{activeBrochure.id.toUpperCase()}</span>
                    <span>Push World Travel Ltd © 2026</span>
                  </div>
                </div>
              </div>

              {/* Reader Controls Footer */}
              <div className="p-4 bg-white border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    disabled={currentPage <= 1}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    Previous
                  </button>

                  <button
                    disabled={currentPage >= activeBrochure.pages}
                    onClick={() => setCurrentPage(p => Math.min(activeBrochure.pages, p + 1))}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hi Push World Travel Ltd! I am reviewing the "${activeBrochure.title}" guide and would like to request a tailored quote.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </a>

                  <button
                    onClick={handleDownload}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
                  >
                    {downloadSuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Guide Saved!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download Guide</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
