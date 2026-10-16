import { useState } from 'react';
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Compass, Gem } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUsSection } from './components/AboutUsSection';
import { ServicesSection } from './components/ServicesSection';
import { PackagesSection } from './components/PackagesSection';
import { DestinationsSection } from './components/DestinationsSection';
import { BrochuresSection } from './components/BrochuresSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GoogleIntegrationSection } from './components/GoogleIntegrationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { PackageDetailsModal } from './components/PackageDetailsModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PACKAGES, PackageItem } from './data/travelData';

const servicePages: Record<string, { title: string; eyebrow: string; intro: string; benefits: string[]; icon: 'gem' | 'compass' | 'business' }> = {
  '/services/luxury-premium-travel': {
    title: 'Luxury & Premium Travel', eyebrow: 'Travel exceptionally', icon: 'gem',
    intro: 'Thoughtfully planned, high-comfort journeys with handpicked stays, seamless transfers and personal support from the first enquiry to your return.',
    benefits: ['Premium hotels, resorts and private stays', 'Tailored itineraries and special experiences', 'Private transfers and carefully coordinated logistics', 'Dedicated assistance throughout your journey'],
  },
  '/services/custom-trip-planner': {
    title: 'Custom Trip Planner', eyebrow: 'Your trip, your way', icon: 'compass',
    intro: 'Tell us what you love, your travel dates and your budget. We will help shape a trip around your interests instead of fitting you into a one-size-fits-all package.',
    benefits: ['Personalised routes and day-by-day itineraries', 'Flexible destinations, dates and pace', 'Options aligned to your budget and travel style', 'One point of contact for planning and coordination'],
  },
  '/services/corporate-travel': {
    title: 'Corporate Travel', eyebrow: 'Business travel made simpler', icon: 'business',
    intro: 'Reliable travel coordination for teams, executives, meetings and corporate events, with practical planning that keeps your people and schedules moving.',
    benefits: ['Business flights and accommodation coordination', 'Group and conference travel arrangements', 'Transfers and itinerary management', 'Clear communication for changes and special requests'],
  },
};

function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="bg-slate-950 text-white py-16 sm:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-amber-400">{eyebrow}</p><h1 className="max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">{description}</p></div></section>;
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const initialQuery = new URLSearchParams(window.location.search);
  const [selectedCategory, setSelectedCategory] = useState(initialQuery.get('category') || 'all');
  const [searchKeyword, setSearchKeyword] = useState(initialQuery.get('keyword') || '');
  const [searchDestination, setSearchDestination] = useState(initialQuery.get('destination') || '');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingPkg, setSelectedBookingPkg] = useState<PackageItem | null>(null);
  const [detailModalPkg, setDetailModalPkg] = useState<PackageItem | null>(null);

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (selectedCategory === 'august') {
      if (!(pkg.id.includes('august') || pkg.title.toLowerCase().includes('august') || pkg.validity.toLowerCase().includes('august'))) return false;
    } else if (selectedCategory !== 'all' && pkg.category !== selectedCategory && !searchDestination) return false;
    if (searchDestination) {
      const q = searchDestination.toLowerCase().trim();
      const fields = `${pkg.destination} ${pkg.title} ${pkg.overview}`.toLowerCase();
      const tokens = q.split(/[\s,&\/]+/).filter((t) => t.length > 2 && !['and','the','national','park','reserve','island','beach','coast','kenya','circuits'].includes(t));
      if (!fields.includes(q) && !tokens.some((t) => fields.includes(t))) return false;
    }
    if (searchKeyword) {
      const tokens = searchKeyword.toLowerCase().trim().split(/\s+/).filter((t) => t.length > 1);
      const searchable = `${pkg.title} ${pkg.destination} ${pkg.overview} ${pkg.highlights.join(' ')} ${pkg.summaryInclusion}`.toLowerCase();
      if (!tokens.some((t) => searchable.includes(t))) return false;
    }
    return true;
  });

  const handleOpenBooking = (customTitle?: string) => {
    if (customTitle) {
      setSelectedBookingPkg({ id: 'custom', title: customTitle, category: 'safari', destination: 'Custom Selection', duration: 'Flexible', validity: '2026', image: '', overview: 'Customized itinerary tailored to your travel specifications.', highlights: ['Personalized consultation', 'Flexible scheduling', 'Dedicated travel manager'], summaryInclusion: 'Tailored package inclusions', inclusions: ['Passenger insurance subject to policy terms', 'Transport as specified in the itinerary', 'Accommodation and meals as specified', 'Entry fees as specified in the itinerary'], exclusions: ['Personal expenses and optional extras'], callToAction: 'Request a Custom Quote' });
    } else setSelectedBookingPkg(null);
    setIsBookingOpen(true);
  };
  const handleSelectDestination = (destination: string) => {
    window.location.href = `/packages?destination=${encodeURIComponent(destination)}`;
  };
  const home = pathname === '/';
  const serviceDetail = servicePages[pathname];
  const serviceIndex = pathname === '/services';
  const packagesPage = pathname === '/packages';
  const brochuresPage = pathname === '/brochures';
  const aboutPage = pathname === '/about';
  const whyPage = pathname === '/why-us';
  const reviewsPage = pathname === '/reviews';

  return <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
    <Navbar onOpenBooking={() => handleOpenBooking()} />
    <main className="flex-grow">
      {home && <>
        <Hero onSearch={(keyword, destination, category) => { window.location.href = `/packages?keyword=${encodeURIComponent(keyword)}&destination=${encodeURIComponent(destination)}&category=${encodeURIComponent(category)}`; }} onOpenBooking={() => handleOpenBooking()} />
        <AboutUsSection onOpenBooking={handleOpenBooking} />
        <section className="bg-white py-16"><div className="mx-auto max-w-7xl px-5 sm:px-8"><p className="text-sm font-bold uppercase tracking-widest text-amber-600">Explore Pushworld Travel</p><h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Where would you like to go next?</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{[{title:'Travel services',description:'Explore luxury travel, custom trip planning, corporate travel and more.',href:'/services',label:'Explore services'},{title:'Tours & packages',description:'Browse our travel packages and compare ideas for your next journey.',href:'/packages',label:'View packages'},{title:'Brochures & guides',description:'Open our digital travel brochures for destination inspiration.',href:'/brochures',label:'View brochures'}].map((item) => <a key={item.href} href={item.href} className="rounded-2xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 min-h-12 leading-6 text-slate-600">{item.description}</p><span className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-700">{item.label}<ArrowRight size={17}/></span></a>)}</div></div></section>
        <DestinationsSection onSelectDestination={handleSelectDestination} />
        <WhyChooseUs /><TestimonialsSection />
      </>}
      {serviceIndex && <><PageIntro eyebrow="Explore what we do" title="Travel services for every kind of journey" description="From premium holidays to tailored itineraries and business travel, choose the service that fits your plans."/><div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8"><ServicesSection onSelectService={handleOpenBooking}/><div className="mt-10 grid gap-5 md:grid-cols-3">{Object.entries(servicePages).map(([path, item]) => <a key={path} href={path} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"><span className="mb-4 inline-flex rounded-xl bg-amber-100 p-3 text-amber-700">{item.icon === 'gem' ? <Gem/> : item.icon === 'compass' ? <Compass/> : <BriefcaseBusiness/>}</span><h2 className="text-xl font-bold">{item.title}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{item.intro}</p><span className="mt-5 inline-flex items-center gap-2 font-semibold text-amber-700">Explore service <ArrowRight size={16}/></span></a>)}</div></div></>}
      {serviceDetail && <><PageIntro eyebrow={serviceDetail.eyebrow} title={serviceDetail.title} description={serviceDetail.intro}/><section className="py-14 sm:py-20"><div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-2"><div><h2 className="font-display text-3xl font-bold">What you can expect</h2><p className="mt-4 leading-7 text-slate-600">We coordinate the details around your priorities, helping you make confident choices and enjoy a smoother journey.</p><ul className="mt-7 space-y-4">{serviceDetail.benefits.map((benefit) => <li key={benefit} className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600"/><span className="text-slate-700">{benefit}</span></li>)}</ul><button onClick={() => handleOpenBooking(serviceDetail.title)} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-bold text-slate-950 hover:bg-amber-400">Enquire about this service <ArrowRight size={18}/></button></div><div className="rounded-3xl bg-slate-100 p-8 sm:p-10"><p className="text-sm font-bold uppercase tracking-widest text-amber-700">Let's plan it together</p><h3 className="mt-3 font-display text-2xl font-bold">A journey designed around you.</h3><p className="mt-4 leading-7 text-slate-600">Share your dates, destination ideas, group size and budget. Our team will follow up to discuss suitable options and next steps.</p><button onClick={() => handleOpenBooking(serviceDetail.title)} className="mt-6 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold hover:border-amber-500">Request a consultation</button></div></div></section></>}
      {packagesPage && <><PageIntro eyebrow="Explore and compare" title="Tours & travel packages" description="Browse travel ideas, explore destinations and find a package that suits your dates, interests and budget."/><PackagesSection packages={filteredPackages} selectedCategory={selectedCategory} searchDestination={searchDestination} searchKeyword={searchKeyword} onSelectCategory={setSelectedCategory} onResetAllFilters={() => {setSelectedCategory('all');setSearchDestination('');setSearchKeyword('');}} onOpenDetails={setDetailModalPkg} onBookPackage={(pkg) => {setSelectedBookingPkg(pkg);setIsBookingOpen(true);}}/><DestinationsSection onSelectDestination={handleSelectDestination}/></>}
      {brochuresPage && <><PageIntro eyebrow="Travel inspiration" title="Brochures & travel guides" description="Explore our digital brochures for destination inspiration, trip ideas and information to help plan your next holiday."/><BrochuresSection/></>}
      {aboutPage && <><PageIntro eyebrow="Get to know us" title="About Pushworld Travel" description="We help travellers turn ideas into well-organised journeys, with thoughtful planning and personal support."/><AboutUsSection onOpenBooking={handleOpenBooking}/><WhyChooseUs/></>}
      {whyPage && <><PageIntro eyebrow="Travel with confidence" title="Why choose Pushworld Travel" description="Personal service, considered planning and practical support for every step of your journey."/><WhyChooseUs/><TestimonialsSection/></>}
      {reviewsPage && <><PageIntro eyebrow="Hear from travellers" title="Reviews & our location" description="Learn more about our travel team and find our location and review information."/><GoogleIntegrationSection/><TestimonialsSection/></>}
      {!home && !serviceIndex && !serviceDetail && !packagesPage && !brochuresPage && !aboutPage && !whyPage && !reviewsPage && <><PageIntro eyebrow="Welcome" title="Let's plan your next journey" description="The page you are looking for could not be found. Explore our services or travel packages."/><div className="mx-auto flex max-w-7xl gap-4 px-5 py-12"><a href="/services" className="rounded-xl bg-amber-500 px-5 py-3 font-bold">Explore services</a><a href="/packages" className="rounded-xl border border-slate-300 px-5 py-3 font-bold">View packages</a></div></>}
    </main>
    <Footer onOpenBooking={() => handleOpenBooking()} />
    <BookingModal isOpen={isBookingOpen} onClose={() => {setIsBookingOpen(false);setSelectedBookingPkg(null);}} selectedPackage={selectedBookingPkg}/>
    <PackageDetailsModal pkg={detailModalPkg} onClose={() => setDetailModalPkg(null)} onBookNow={(pkg) => {setDetailModalPkg(null);setSelectedBookingPkg(pkg);setIsBookingOpen(true);}}/>
    <FloatingWhatsApp/>
  </div>;
}
