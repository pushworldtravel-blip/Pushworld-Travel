import { useState, useEffect, useRef } from 'react';
import { COMPANY_INFO, DESTINATIONS } from '../data/travelData';
import { 
  heroSafari, 
  destDiani, 
  destDubai, 
  sceneMountain, 
  sceneResort 
} from '../assets/images';
import { 
  Search, 
  MapPin, 
  Compass, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  Plane,
  ShieldCheck,
  Headphones,
  Sun,
  Sparkles,
  Calendar,
  ChevronDown,
  X
} from 'lucide-react';

interface HeroProps {
  onSearch: (keyword: string, destination: string, category: string) => void;
  onOpenBooking: () => void;
}

interface CinematicScene {
  id: string;
  name: string;
  categoryTag: string;
  location: string;
  fallbackImg: string;
  videoUrl?: string;
}

const CINEMATIC_SCENES: CinematicScene[] = [
  {
    id: 'safari',
    name: 'Maasai Mara Big Five Expedition',
    categoryTag: 'African Safari & Wildlife',
    location: 'Maasai Mara National Reserve, Kenya',
    fallbackImg: heroSafari,
    videoUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Safari_at_Nairobi_National_Park%2C_Aug_2025.webm',
  },
  {
    id: 'beach',
    name: 'Diani & Watamu Coral Escapes',
    categoryTag: 'Tropical Beaches & Ocean Resorts',
    location: 'Diani Beach & Watamu, Kenya Coast',
    fallbackImg: destDiani,
  },
  {
    id: 'city',
    name: 'Dubai & World Cosmopolitan Cities',
    categoryTag: 'International Skylines & Desert Oasis',
    location: 'Dubai & Abu Dhabi, UAE',
    fallbackImg: destDubai,
  },
  {
    id: 'mountain',
    name: 'Mount Kenya & Highland Peaks',
    categoryTag: 'Scenic Mountain Landscapes',
    location: 'Mount Kenya National Park, Kenya',
    fallbackImg: sceneMountain,
  },
  {
    id: 'resort',
    name: '5-Star Luxury Oceanfront Resorts',
    categoryTag: 'Hotels, Villas & Island Retreats',
    location: 'Zanzibar & Coastline Sanctuaries',
    fallbackImg: sceneResort,
  },
];

interface QuickDestinationChip {
  id: string;
  label: string;
  icon: string;
  dest?: string;
  cat?: string;
  query?: string;
}

const QUICK_DESTINATIONS: QuickDestinationChip[] = [
  { id: 'all-dest', label: 'All Trips', icon: '🌍', dest: '', cat: 'all' },
  { id: 'dubai', label: 'Dubai & UAE', icon: '🏙️', dest: 'Dubai', cat: 'international' },
  { id: 'mara', label: 'Maasai Mara', icon: '🦁', dest: 'Maasai Mara', cat: 'safari' },
  { id: 'diani', label: 'Diani Beach', icon: '🏖️', dest: 'Diani Beach', cat: 'coastal' },
  { id: 'zanzibar', label: 'Zanzibar Island', icon: '🏝️', dest: 'Zanzibar', cat: 'international' },
  { id: 'amboseli', label: 'Amboseli Elephants', icon: '🐘', dest: 'Amboseli', cat: 'safari' },
  { id: 'nakuru', label: 'Nakuru & Naivasha', icon: '🦩', dest: 'Nakuru', cat: 'safari' },
  { id: 'watamu', label: 'Watamu Marine', icon: '🐬', dest: 'Watamu', cat: 'coastal' },
  { id: 'samburu', label: 'Samburu Reserve', icon: '🐆', dest: 'Samburu', cat: 'safari' },
  { id: 'tsavo', label: 'Tsavo East & West', icon: '🐘', dest: 'Tsavo', cat: 'safari' },
  { id: 'ol-pejeta', label: 'Ol Pejeta & Mt Kenya', icon: '🦏', dest: 'Ol Pejeta', cat: 'safari' },
  { id: 'south-africa', label: 'South Africa', icon: '🍷', dest: 'South Africa', cat: 'international' },
  { id: 'mauritius', label: 'Mauritius Island', icon: '🌴', dest: 'Mauritius', cat: 'international' },
  { id: 'egypt', label: 'Egypt Pyramids', icon: '🏛️', dest: 'Egypt', cat: 'international' },
  { id: 'august', label: 'August Holiday Deals', icon: '☀️', dest: '', cat: 'august' },
];

export function Hero({ onSearch, onOpenBooking }: HeroProps) {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Search state
  const [keyword, setKeyword] = useState('');
  const [destination, setDestination] = useState('');
  const [category, setCategory] = useState('all');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Quick suggestions for live autocomplete matching available site itineraries
  const quickSuggestions = [
    { title: 'Dubai Futuristic City & Desert Safari', type: 'Dubai & UAE' },
    { title: 'Dubai Luxury Marina, Burj Khalifa & Abu Dhabi', type: 'Dubai & UAE' },
    { title: 'Maasai Mara Big Five 4x4 Safari', type: 'Kenya Safari' },
    { title: 'Maasai Mara Great Migration & Balloon Safari', type: 'Kenya Safari' },
    { title: 'Diani Beachfront Turquoise Escape', type: 'Kenya Coast' },
    { title: 'Diani Luxury Villa & Chale Island Retreat', type: 'Kenya Coast' },
    { title: 'August Holiday Diani & Watamu Deals', type: 'August Special' },
    { title: 'Zanzibar Island, Stone Town & Nungwi Escape', type: 'Zanzibar' },
    { title: 'Amboseli Elephants & Kilimanjaro Views', type: 'Kenya Safari' },
    { title: 'Lake Naivasha & Lake Nakuru Rhino Safari', type: 'Rift Valley' },
    { title: 'Samburu Special Five & Ewaso Nyiro Safari', type: 'Northern Kenya' },
    { title: 'Tsavo East & West Red Elephants Safari', type: 'Kenya Safari' },
    { title: 'Ol Pejeta Chimpanzee & White Rhino Safari', type: 'Mt Kenya' },
    { title: 'Watamu Marine Sanctuary & Dolphin Cruise', type: 'Kenya Coast' },
    { title: 'South Africa Cape Town & Wine Country', type: 'South Africa' },
    { title: 'Kruger National Park Big Five Safari', type: 'South Africa' },
    { title: 'Mauritius All-Inclusive Resort & Catamaran', type: 'Mauritius' },
    { title: 'Egypt Cairo Pyramids & Nile River Cruise', type: 'Egypt' },
    { title: 'Corporate Flights & Visa Concierge', type: 'Corporate' },
  ].filter(item => !keyword || item.title.toLowerCase().includes(keyword.toLowerCase()));

  // Auto-advance scenes with smooth cinematic timing (7 seconds per scene)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSceneIndex((idx) => (idx + 1) % CINEMATIC_SCENES.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  // Reset video error on scene change
  useEffect(() => {
    setVideoError(false);
  }, [currentSceneIndex]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    onSearch(keyword, destination, category);

    // Smooth scroll to packages section
    const target = document.querySelector('#packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] flex items-center justify-center bg-slate-950 overflow-hidden">
      
      {/* =========================================================================
          CINEMATIC MULTI-DESTINATION VIDEO BACKGROUND SECTION
          (Crossfades automatically between Safaris, Beaches, World Skylines, Mountains, & Luxury Resorts)
         ========================================================================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        
        {/* Render crossfading background scenes */}
        {CINEMATIC_SCENES.map((scene, idx) => {
          const isActive = idx === currentSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* If active scene has a video URL and no error, render video element */}
              {isActive && scene.videoUrl && !videoError ? (
                <video
                  ref={videoRef}
                  src={scene.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onError={() => setVideoError(true)}
                  className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-10000 ease-out"
                />
              ) : (
                /* High-resolution fallback & static cinematic frame with subtle Ken Burns zoom */
                <img
                  src={scene.fallbackImg}
                  alt={scene.name}
                  className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          );
        })}

        {/* Cinematic multi-tier contrast scrims to guarantee WCAG AA text legibility */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/65 to-slate-900/50" />
        <div className="absolute inset-0 z-20 bg-radial-at-c from-transparent via-slate-950/35 to-slate-950/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center text-white flex flex-col items-center">
        
        {/* August Holiday Deals & Corporate Trust Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5">
          {/* August Holiday Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/40 text-xs text-amber-300 font-bold shadow-sm">
            <Sun className="w-3.5 h-3.5 text-amber-400 animate-spin-slow" />
            <span>August Holiday & Seasonal Getaways 2026</span>
          </div>

          {/* Corporate Identity */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-slate-200 font-medium">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>PUSH WORLD TRAVEL LTD</span>
          </div>
        </div>

        {/* PRIMARY TRAVEL BRAND DESCRIPTION:
            🌍 Travel Beyond Ordinary
            With the strongest visual hierarchy and elegant typography */}
        <div className="space-y-3 max-w-4xl">
          <div className="text-xs uppercase tracking-widest font-bold text-amber-400 flex items-center justify-center gap-2">
            <span>🌍</span>
            <span>Worldwide Luxury Journeys</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display leading-[1.08] text-balance drop-shadow-md">
            Travel Beyond <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400">Ordinary</span>
          </h1>

          {/* Prominent Services Line: ✈️ Flights | Safaris | Hotels | Visas */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-base sm:text-lg font-bold text-slate-100 drop-shadow">
            <span className="flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-amber-400" />
              <span>Flights</span>
            </span>
            <span className="text-amber-500 font-extrabold" aria-hidden="true">|</span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>Safaris</span>
            </span>
            <span className="text-amber-500 font-extrabold" aria-hidden="true">|</span>
            <span className="flex items-center gap-1.5">
              <Sun className="w-4 h-4 text-amber-400" />
              <span>Hotels</span>
            </span>
            <span className="text-amber-500 font-extrabold" aria-hidden="true">|</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Visas</span>
            </span>
          </div>

          {/* Promise Line: ✨ Personalized Travel Service */}
          <div className="pt-1 flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-amber-300 drop-shadow">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Personalized Travel Service for Families, Couples & Corporate Travelers</span>
          </div>
        </div>

        {/* Subtitle & Value Proposition */}
        <p className="mt-4 max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed text-balance">
          Explore iconic African wildlife safaris, pristine Indian Ocean beach resorts in Diani and Watamu, and global flights to Dubai, Mauritius, and beyond with 24/7 dedicated travel support.
        </p>

        {/* Call to Actions & Direct WhatsApp Connection */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm">
          <a
            href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Push World Travel Ltd! I am planning an August Holiday / upcoming vacation.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-lg hover:shadow-emerald-600/30 transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp: {COMPANY_INFO.whatsapp}</span>
          </a>

          <button
            onClick={() => onOpenBooking()}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/15 hover:bg-white/25 text-white font-bold backdrop-blur-md border border-white/25 transition-all active:scale-95"
          >
            <span>Request Custom Itinerary</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Interactive Search & Destinations Bar - Uncongested & Seamless on Mobile */}
        <div className="w-full mt-8 sm:mt-10 max-w-4xl bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-slate-200/90 transition-all">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-3.5 sm:gap-4 items-end">
            
            {/* Search Input */}
            <div className="relative md:col-span-4 text-left">
              <label htmlFor="hero-keyword" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-amber-600" />
                <span>Search Experiences</span>
              </label>
              <div className="relative flex items-center">
                <input
                  id="hero-keyword"
                  type="text"
                  value={keyword}
                  onChange={(e) => {
                    setKeyword(e.target.value);
                    setShowSuggestions(true);
                  }}
                  onFocus={() => setShowSuggestions(true)}
                  placeholder="e.g. Maasai Mara, Diani, Dubai..."
                  className="w-full h-11 sm:h-12 pl-3.5 pr-8 text-base sm:text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-amber-500 rounded-xl outline-none transition-all placeholder:text-slate-400 font-medium text-slate-800 shadow-xs"
                />
                {keyword && (
                  <button
                    type="button"
                    onClick={() => {
                      setKeyword('');
                      setShowSuggestions(false);
                    }}
                    className="absolute right-2.5 text-slate-400 hover:text-slate-600 p-1"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Autocomplete Dropdown */}
              {showSuggestions && quickSuggestions.length > 0 && (
                <div 
                  className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl z-30 py-2 max-h-56 overflow-y-auto"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <div className="px-3 py-1 text-[10px] uppercase font-bold text-slate-400">
                    Suggested Itineraries
                  </div>
                  {quickSuggestions.map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setKeyword(item.title);
                        setShowSuggestions(false);
                        onSearch(item.title, destination, category);
                        const target = document.querySelector('#packages');
                        if (target) target.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-amber-50 flex items-center justify-between transition-colors"
                    >
                      <span className="font-medium text-slate-800">{item.title}</span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                        {item.type}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div className="md:col-span-3 text-left">
              <label htmlFor="hero-dest" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Destinations</span>
              </label>
              <div className="relative flex items-center">
                <select
                  id="hero-dest"
                  value={destination}
                  onChange={(e) => {
                    const val = e.target.value;
                    setDestination(val);
                    if (val) {
                      const found = DESTINATIONS.find(d => d.name === val);
                      if (found && (found.category === 'international' || found.category === 'africa')) {
                        if (category === 'safari' || category === 'coastal') {
                          setCategory('international');
                        }
                      }
                    }
                  }}
                  className="w-full h-11 sm:h-12 pl-3.5 pr-8 text-base sm:text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-amber-500 rounded-xl outline-none transition-all font-medium appearance-none cursor-pointer text-slate-800 shadow-xs"
                >
                  <option value="">All Destinations</option>
                  <optgroup label="Local Kenya Circuits">
                    {DESTINATIONS.filter(d => d.category === 'kenya').map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name} ({dest.country})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Dubai & International Escapes">
                    {DESTINATIONS.filter(d => d.category !== 'kenya').map((dest) => (
                      <option key={dest.id} value={dest.name}>
                        {dest.name} ({dest.country})
                      </option>
                    ))}
                  </optgroup>
                </select>
                <ChevronDown className="absolute right-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Category / Experience Selector */}
            <div className="md:col-span-3 text-left">
              <label htmlFor="hero-cat" className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Experience Type</span>
              </label>
              <div className="relative flex items-center">
                <select
                  id="hero-cat"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full h-11 sm:h-12 pl-3.5 pr-8 text-base sm:text-sm bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 focus:border-amber-500 rounded-xl outline-none transition-all font-medium appearance-none cursor-pointer text-slate-800 shadow-xs"
                >
                  <option value="all">All Experiences</option>
                  <option value="safari">Wildlife Safaris</option>
                  <option value="coastal">Coastal Beach Holidays</option>
                  <option value="international">International City Breaks</option>
                  <option value="august">☀️ August Holiday Deals</option>
                  <option value="visa-corporate">Visas & Flights</option>
                </select>
                <ChevronDown className="absolute right-3 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            {/* Search Submit CTA */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full h-11 sm:h-12 bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Find Trips</span>
              </button>
            </div>
          </form>

          {/* Quick Destination Picks Bar (Seamless horizontal swipe on phones, no congestion) */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <span>Popular Destinations:</span>
              </span>
              <span className="text-[11px] text-slate-400 hidden sm:inline">
                Tap to explore top itineraries
              </span>
            </div>

            {/* Uncongested Touch-friendly Destination Chips */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth touch-pan-x -mx-1 px-1">
              {QUICK_DESTINATIONS.map((chip) => {
                const isActive = (chip.dest && destination === chip.dest) || 
                                 (!chip.dest && chip.cat === 'all' && destination === '' && category === 'all') ||
                                 (chip.cat && category === chip.cat && !destination);

                return (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => {
                      const newDest = chip.dest || '';
                      const newCat = chip.cat || 'all';
                      setDestination(newDest);
                      setCategory(newCat);
                      setKeyword('');
                      onSearch('', newDest, newCat);
                      const target = document.querySelector('#packages');
                      if (target) target.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 active:scale-95 ${
                      isActive
                        ? 'bg-amber-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-amber-50 text-slate-700 hover:text-amber-800 border border-slate-200/80 hover:border-amber-300'
                    }`}
                  >
                    <span>{chip.icon}</span>
                    <span>{chip.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Clear, Uncongested Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2.5 pt-1.5 text-[11px] text-slate-500 font-medium">
              <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                Personalised Custom Quotations
              </span>
              <span className="inline-flex items-center gap-1 text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                <Calendar className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                August & 2026 Departure Dates
              </span>
              <span className="inline-flex items-center gap-1 text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-100">
                <Compass className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                Kenya & Worldwide Travel
              </span>
            </div>
          </div>
        </div>

        {/* 3 Quick Value Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 w-full max-w-4xl text-left">
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <Plane className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Domestic & Global Flights</div>
              <div className="text-[11px] text-slate-400">Preferred airline partner fares & group tickets</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <Compass className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Curated Safaris & Beaches</div>
              <div className="text-[11px] text-slate-400">Maasai Mara, Amboseli, Diani & Watamu</div>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-950/40 border border-white/10 backdrop-blur-md flex items-center gap-3">
            <Headphones className="w-6 h-6 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">24/7 Dedicated Concierge</div>
              <div className="text-[11px] text-slate-400">Direct WhatsApp support: {COMPANY_INFO.whatsapp}</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
