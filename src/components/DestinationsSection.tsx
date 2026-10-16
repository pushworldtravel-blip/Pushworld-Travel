import { useState } from 'react';
import { DESTINATIONS, DestinationItem, COMPANY_INFO } from '../data/travelData';
import { MapPin, Calendar, ArrowRight, MessageSquare, Compass } from 'lucide-react';

interface DestinationsSectionProps {
  onSelectDestination: (destName: string) => void;
}

export function DestinationsSection({ onSelectDestination }: DestinationsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'kenya' | 'africa' | 'international'>('all');
  const [activeModalDest, setActiveModalDest] = useState<DestinationItem | null>(null);

  const filteredDestinations = DESTINATIONS.filter(d => {
    if (filter === 'all') return true;
    return d.category === filter;
  });

  return (
    <section id="destinations" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              Inspiring Journeys
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Popular Destinations
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              From the iconic savannahs of Maasai Mara to turquoise coastal waters in Diani and the futuristic dunes of Dubai.
            </p>
          </div>

          {/* Region Tabs (Smooth scroll on phones, clean row on desktop) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-xs overflow-x-auto no-scrollbar max-w-full touch-pan-x shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                filter === 'all'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All Regions
            </button>
            <button
              onClick={() => setFilter('kenya')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                filter === 'kenya'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Kenya Circuits
            </button>
            <button
              onClick={() => setFilter('africa')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                filter === 'africa'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Africa Safaris
            </button>
            <button
              onClick={() => setFilter('international')}
              className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                filter === 'international'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              International Escapes
            </button>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((dest) => (
            <div
              key={dest.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                <div className="absolute bottom-3 left-3 text-white">
                  <div className="text-xs font-medium text-amber-300">{dest.country}</div>
                  <div className="text-lg font-bold leading-tight drop-shadow">{dest.name}</div>
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-slate-800">
                  {dest.packageCount} Packages
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {dest.description}
                  </p>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                    <Calendar className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Best Time: {dest.bestTimeToVisit}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectDestination(dest.name)}
                    className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View Deals</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveModalDest(dest)}
                    className="text-xs text-slate-500 hover:text-slate-800 font-medium"
                  >
                    Quick Guide
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Destination Guide Modal */}
        {activeModalDest && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
              <div className="relative aspect-video">
                <img
                  src={activeModalDest.image}
                  alt={activeModalDest.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={() => setActiveModalDest(null)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                >
                  ✕
                </button>
                <div className="absolute bottom-3 left-4 text-white">
                  <h3 className="text-2xl font-bold font-display">{activeModalDest.name}</h3>
                  <div className="text-xs text-amber-300 font-medium">{activeModalDest.country}</div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {activeModalDest.description}
                </p>

                <div className="mt-4 p-3 bg-amber-50/70 border border-amber-200/60 rounded-xl text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-bold text-amber-800">Best Season:</span>
                    <span>{activeModalDest.bestTimeToVisit}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <span className="font-bold text-amber-800">Available Packages:</span>
                    <span>{activeModalDest.packageCount}+ Curated Itineraries</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setActiveModalDest(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      const name = activeModalDest.name;
                      setActiveModalDest(null);
                      onSelectDestination(name);
                    }}
                    className="px-5 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Explore Packages for {activeModalDest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
