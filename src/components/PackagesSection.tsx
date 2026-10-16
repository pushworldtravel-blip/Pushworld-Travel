import { useState } from 'react';
import { PackageItem, COMPANY_INFO } from '../data/travelData';
import { 
  Clock, 
  MapPin, 
  CheckCircle2, 
  MessageSquare, 
  Info, 
  ArrowUpRight,
  Filter,
  Sparkles
} from 'lucide-react';

interface PackagesSectionProps {
  packages: PackageItem[];
  selectedCategory: string;
  searchDestination?: string;
  searchKeyword?: string;
  onSelectCategory: (cat: string) => void;
  onResetAllFilters?: () => void;
  onOpenDetails: (pkg: PackageItem) => void;
  onBookPackage: (pkg: PackageItem) => void;
}

export function PackagesSection({
  packages,
  selectedCategory,
  searchDestination,
  searchKeyword,
  onSelectCategory,
  onResetAllFilters,
  onOpenDetails,
  onBookPackage,
}: PackagesSectionProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All Packages' },
    { id: 'august', label: '☀️ August Holiday Deals' },
    { id: 'safari', label: 'Wildlife Safaris' },
    { id: 'coastal', label: 'Coastal Escapes' },
    { id: 'international', label: 'Dubai & International' },
    { id: 'visa-corporate', label: 'Visas & Corporate' },
  ];

  const handleReset = () => {
    if (onResetAllFilters) {
      onResetAllFilters();
    } else {
      onSelectCategory('all');
    }
  };

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
          <div>
            <div className="text-xs font-bold tracking-wider uppercase text-amber-600 mb-2">
              Featured 2026 Itineraries
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Curated Travel Packages
            </h2>
            <p className="mt-2 text-slate-600 text-sm sm:text-base max-w-xl">
              From local Kenya safaris & coastal beach holidays to Dubai and international destinations with 24/7 concierge guidance.
            </p>
          </div>

          {/* Interactive Filter Tabs (Uncongested, touch-friendly scroll on mobile) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100/90 border border-slate-200/60 rounded-xl overflow-x-auto no-scrollbar max-w-full touch-pan-x scroll-smooth shrink-0">
            <Filter className="w-4 h-4 text-slate-400 ml-2 hidden sm:inline shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                  selectedCategory === cat.id
                    ? 'bg-white text-slate-900 shadow-sm font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Search & Filter Indicator Bar */}
        {(searchDestination || searchKeyword || selectedCategory !== 'all') && (
          <div className="mb-8 p-3 rounded-xl bg-amber-50/80 border border-amber-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex flex-wrap items-center gap-2 text-slate-700">
              <span className="font-semibold text-slate-900">Active Search Filters:</span>
              {searchDestination && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 font-medium text-amber-900 shadow-2xs">
                  <MapPin className="w-3 h-3 text-amber-600" />
                  <span>Destination: {searchDestination}</span>
                </span>
              )}
              {searchKeyword && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 font-medium text-amber-900 shadow-2xs">
                  <span>Keyword: &ldquo;{searchKeyword}&rdquo;</span>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-amber-300 font-medium text-amber-900 shadow-2xs">
                  <span>Category: {categories.find(c => c.id === selectedCategory)?.label || selectedCategory}</span>
                </span>
              )}
              <span className="text-slate-500 font-medium ml-1">
                ({packages.length} {packages.length === 1 ? 'package' : 'packages'} found)
              </span>
            </div>

            <button
              onClick={handleReset}
              className="text-xs font-bold text-amber-700 hover:text-amber-900 underline hover:no-underline transition-colors cursor-pointer"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Packages Grid */}
        {packages.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-2xl mx-auto shadow-xs">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
              <Filter className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No packages found matching your criteria
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              We have comprehensive packages for Dubai, Zanzibar, South Africa, and all local Kenya circuits (Maasai Mara, Diani, Amboseli, Nakuru, Samburu, Tsavo, Ol Pejeta).
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 rounded-xl shadow transition-all cursor-pointer"
              >
                View All Available Packages
              </button>
              <button
                onClick={() => onBookPackage({
                  id: 'custom-inquiry',
                  title: `Custom Itinerary: ${searchDestination || searchKeyword || 'Tailored Holiday'}`,
                  category: 'safari',
                  destination: searchDestination || 'Custom Destination',
                  duration: 'Flexible',
                  validity: '2026',
                  image: '',
                  overview: 'Bespoke holiday or safari package tailored to your specific schedule, accommodation preferences, and group size.',
                  highlights: ['Customized itinerary design', 'Dedicated travel manager', 'Competitive pricing'],
                  summaryInclusion: 'Tailored transport, accommodation, and excursions included',
                  inclusions: [
                    'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
                    'Safari Transport: Travel in a 4x4 Land Cruiser or private transfers as specified.',
                    'Accommodation and Meals: Lodge/hotel accommodation and meals as specified.',
                    'Park Fees / Tours: Entry and excursion fees as specified.',
                  ],
                  exclusions: ['Personal expenses and optional extras'],
                  callToAction: 'Request a Custom Quote',
                })}
                className="px-4 py-2.5 text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 active:scale-95 rounded-xl transition-all cursor-pointer"
              >
                Request a Custom Quote for this Destination
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const whatsappMessage = encodeURIComponent(
                `Hi Push World Travel Ltd! I am inquiring about "${pkg.title}" (${pkg.duration} - ${pkg.destination}). Please share a tailored quote and available departure dates.`
              );

              return (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setHoveredId(pkg.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group bg-white rounded-2xl border border-slate-200/90 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  {/* Card Media Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Destination Marker */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-semibold text-slate-800 flex items-center gap-1 shadow-sm">
                      <MapPin className="w-3 h-3 text-amber-600" />
                      <span>{pkg.destination}</span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-3 left-3 text-white text-xs font-medium flex items-center gap-1.5 drop-shadow">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pkg.duration}</span>
                    </div>

                    {/* Validity indicator */}
                    <div className="absolute bottom-3 right-3 text-[10px] text-slate-200 drop-shadow">
                      {pkg.validity}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors leading-snug">
                        {pkg.title}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {pkg.overview}
                      </p>

                      {/* Brief Inclusion Summary */}
                      <div className="mt-3.5 p-2 bg-slate-50 border border-slate-100 rounded-lg">
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{pkg.summaryInclusion}</span>
                        </div>
                      </div>

                      {/* Highlights preview */}
                      <div className="mt-3 space-y-1.5">
                        {pkg.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & Call to Actions */}
                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                          Pricing
                        </span>
                        <span className="text-xs font-bold text-amber-700">
                          Tailored Quote
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onOpenDetails(pkg)}
                          className="px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors text-xs font-semibold flex items-center gap-1"
                          title="View Full Itinerary & Inclusions"
                        >
                          <Info className="w-3.5 h-3.5" />
                          <span>Details</span>
                        </button>

                        <a
                          href={`${COMPANY_INFO.whatsappUrl}?text=${whatsappMessage}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2 bg-amber-600 hover:bg-amber-700 active:scale-95 text-white font-bold text-xs rounded-lg shadow-sm hover:shadow transition-all flex items-center gap-1.5 whitespace-nowrap"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Enquire</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Custom Tailoring Assistance Box */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Private & Group Journeys</span>
            </div>
            <h4 className="text-base font-bold text-slate-900">
              Need a custom safari itinerary, flight quotation, or corporate retreat?
            </h4>
            <p className="text-xs text-slate-600 mt-1">
              Speak directly with our senior travel advisory desk at <span className="font-semibold text-slate-900">{COMPANY_INFO.phone}</span> or email <span className="font-semibold text-slate-900">{COMPANY_INFO.email}</span>.
            </p>
          </div>
          
          <button
            onClick={() => onBookPackage({
              id: 'custom',
              title: 'Custom Travel Package & Itinerary',
              category: 'safari',
              destination: 'Kenya & International',
              duration: 'Flexible',
              validity: 'Tailored departures',
              image: '',
              overview: 'Bespoke holiday, safari, flight, or corporate travel tailored to your group specifications.',
              highlights: ['Flexible dates', 'Dedicated driver-guide', 'Handpicked accommodations'],
              summaryInclusion: 'Tailored inclusions based on your selected itinerary',
              inclusions: [
                'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
                'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
                'Accommodation and Meals: Lodge accommodation and meals as specified in the selected itinerary.',
                'Park Fees: National park and reserve entry fees as specified in the package itinerary.',
              ],
              exclusions: [
                'Items of personal nature',
                'Optional excursions',
                'Separate visa fees',
              ],
              callToAction: 'Request a Custom Quote',
            })}
            className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shrink-0 flex items-center gap-2"
          >
            <span>Request a Custom Quote</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
