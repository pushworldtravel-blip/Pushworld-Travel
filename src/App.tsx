import { useState } from 'react';
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

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchDestination, setSearchDestination] = useState<string>('');

  // Modals state
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingPkg, setSelectedBookingPkg] = useState<PackageItem | null>(null);
  const [detailModalPkg, setDetailModalPkg] = useState<PackageItem | null>(null);

  // Filter packages based on active category, search keyword, and destination
  const filteredPackages = PACKAGES.filter((pkg) => {
    // Category filter
    if (selectedCategory === 'august') {
      const isAugust = pkg.id.includes('august') || pkg.title.toLowerCase().includes('august') || pkg.validity.toLowerCase().includes('august');
      if (!isAugust) return false;
    } else if (selectedCategory !== 'all') {
      // If a specific destination was chosen that naturally belongs to another category,
      // allow it if searchDestination specifically matches this package, otherwise enforce category
      if (pkg.category !== selectedCategory && !searchDestination) {
        return false;
      }
    }

    // Destination filter (smart token & substring matching)
    if (searchDestination) {
      const destQuery = searchDestination.toLowerCase().trim();
      const pkgDest = pkg.destination.toLowerCase();
      const pkgTitle = pkg.title.toLowerCase();
      const pkgOverview = pkg.overview.toLowerCase();

      // Direct bidirectional substring match
      const directMatch = pkgDest.includes(destQuery) || destQuery.includes(pkgDest);

      // Tokenize destination terms (ignoring common stopwords)
      const stopWords = new Set(['and', '&', 'the', 'national', 'park', 'reserve', 'island', 'beach', 'coast', 'kenya', 'circuits']);
      const tokens = destQuery
        .split(/[\s,&/]+/)
        .map(t => t.trim())
        .filter(t => t.length > 2 && !stopWords.has(t));

      const tokenMatch = tokens.length > 0 && tokens.some(token => 
        pkgDest.includes(token) || pkgTitle.includes(token) || pkgOverview.includes(token)
      );

      if (!directMatch && !tokenMatch) {
        return false;
      }
    }

    // Keyword filter (multi-field search across title, destination, overview, highlights, inclusions)
    if (searchKeyword) {
      const query = searchKeyword.toLowerCase().trim();
      const tokens = query.split(/\s+/).filter(t => t.length > 1);
      const pkgSearchable = `${pkg.title} ${pkg.destination} ${pkg.overview} ${pkg.highlights.join(' ')} ${pkg.summaryInclusion}`.toLowerCase();

      const matched = tokens.length > 0 && tokens.some(token => pkgSearchable.includes(token));
      if (!matched) {
        return false;
      }
    }

    return true;
  });

  const handleSearch = (keyword: string, destination: string, category: string) => {
    setSearchKeyword(keyword);
    setSearchDestination(destination);
    setSelectedCategory(category);
  };

  const handleResetFilters = () => {
    setSearchKeyword('');
    setSearchDestination('');
    setSelectedCategory('all');
  };

  const handleOpenBooking = (customTitle?: string) => {
    if (customTitle) {
      setSelectedBookingPkg({
        id: 'custom',
        title: customTitle,
        category: 'safari',
        destination: 'Custom Selection',
        duration: 'Flexible',
        validity: '2026',
        image: '',
        overview: 'Customized itinerary tailored to your travel specifications.',
        highlights: ['Personalized consultation', 'Flexible scheduling', 'Dedicated travel manager'],
        summaryInclusion: 'Tailored package inclusions',
        inclusions: [
          'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
          'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
          'Accommodation and Meals: Lodge accommodation and meals as specified in the selected itinerary.',
          'Park Fees: National park and reserve entry fees as specified in the package itinerary.',
        ],
        exclusions: ['Personal expenses and optional extras'],
        callToAction: 'Request a Custom Quote',
      });
    } else {
      setSelectedBookingPkg(null);
    }
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    handleOpenBooking(serviceTitle);
  };

  const handleSelectDestination = (destName: string) => {
    setSearchDestination(destName);
    setSelectedCategory('all');
    const target = document.querySelector('#packages');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookFromCard = (pkg: PackageItem) => {
    setSelectedBookingPkg(pkg);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-grow">
        {/* Hero with Maasai Mara imagery & smart search bar */}
        <Hero
          onSearch={handleSearch}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Dedicated About Us Section */}
        <AboutUsSection onOpenBooking={handleOpenBooking} />

        {/* 8 Main Travel Services & Dedicated Visa Assistance */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Featured Packages with Custom Quote Inquiries */}
        <PackagesSection
          packages={filteredPackages}
          selectedCategory={selectedCategory}
          searchDestination={searchDestination}
          searchKeyword={searchKeyword}
          onSelectCategory={(cat) => setSelectedCategory(cat)}
          onResetAllFilters={handleResetFilters}
          onOpenDetails={(pkg) => setDetailModalPkg(pkg)}
          onBookPackage={handleBookFromCard}
        />

        {/* Popular Destinations */}
        <DestinationsSection onSelectDestination={handleSelectDestination} />

        {/* Digital Publications & Brochures with Flipbook Reader */}
        <BrochuresSection />

        {/* Why Choose Us & Service Pillars */}
        <WhyChooseUs />

        {/* Google Integration: Interactive Map & Verified Google Reviews */}
        <GoogleIntegrationSection />

        {/* Client Testimonials */}
        <TestimonialsSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking & Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => {
          setIsBookingOpen(false);
          setSelectedBookingPkg(null);
        }}
        selectedPackage={selectedBookingPkg}
      />

      {/* Detailed Package Information Modal */}
      <PackageDetailsModal
        pkg={detailModalPkg}
        onClose={() => setDetailModalPkg(null)}
        onBookNow={(pkg) => {
          setDetailModalPkg(null);
          handleBookFromCard(pkg);
        }}
      />

      {/* Floating WhatsApp Quick Connect Button */}
      <FloatingWhatsApp />
    </div>
  );
}
