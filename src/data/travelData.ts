import { 
  heroSafari, 
  destDiani, 
  destDubai, 
  sceneResort, 
  sceneMountain 
} from '../assets/images';

export interface PackageInclusionItem {
  title: string;
  description: string;
}

export interface PackageItem {
  id: string;
  title: string;
  category: 'coastal' | 'safari' | 'international' | 'visa-corporate';
  destination: string;
  duration: string;
  validity: string;
  image: string;
  overview: string;
  highlights: string[];
  summaryInclusion: string;
  inclusions: string[];
  exclusions: string[];
  callToAction: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  category: 'kenya' | 'africa' | 'international';
  description: string;
  image: string;
  packageCount: number;
  bestTimeToVisit: string;
}

export interface BrochureItem {
  id: string;
  title: string;
  tagline: string;
  pages: number;
  pdfUrl: string;
  coverImg: string;
  description: string;
  date: string;
}

export const COMPANY_INFO = {
  name: 'PUSH WORLD TRAVEL LTD',
  division: 'Push World Travel Ltd',
  tagline: 'Travel Beyond Ordinary',
  servicesBio: 'Flights | Safaris | Hotels | Visas',
  promiseBio: 'Personalized Travel Service',
  phone: '0725 356 926',
  phoneInternational: '+254725356926',
  whatsapp: '0725 356 926',
  whatsappUrl: 'https://wa.me/254725356926',
  email: 'pushworldtravel@gmail.com',
  address: 'Nairobi, Kenya',
  hours: 'Open 24/7 Concierge & Travel Desk',
};

// Standard dedicated safari package inclusions
export const SAFARI_STANDARD_INCLUSIONS = [
  'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
  'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
  'Accommodation and Meals: Lodge accommodation and meals as specified in the selected itinerary.',
  'Park Fees: National park and reserve entry fees as specified in the package itinerary.',
  'Professional Driver-Guide: Licensed bilingual naturalist driver-guide throughout the safari.',
  'Drinking Water: Complimentary bottled water supplied during all game drives.',
];

export const SAFARI_STANDARD_EXCLUSIONS = [
  'International and domestic flights (available as an add-on service upon request).',
  'Personal expenses, laundry, and discretionary gratuities to guides and lodge staff.',
  'Optional excursions such as hot air balloon safaris or night game drives.',
  'Visa assistance fees (provided under our separate Visa Assistance advisory desk).',
];

export const VISA_ASSISTANCE_DETAILS = {
  title: 'Visa Assistance',
  badge: 'Independent Advisory Service',
  lead: 'We provide specialized administrative guidance to simplify your international travel document preparation.',
  note: 'Visa assistance is a distinct service separate from tour packages unless a specific package explicitly confirms consular coordination.',
  services: [
    {
      title: 'Document Review',
      desc: 'We check your travel documents for completeness, consistency, and alignment with embassy checklists prior to official submission.',
    },
    {
      title: 'Application Support',
      desc: 'We help you understand the official application process, portal navigation, and identify available ways to avoid unnecessary delays.',
    },
    {
      title: 'Flight Reservation Verification',
      desc: 'We verify and issue verifiable flight reservation details and confirmed accommodation itineraries when required for your application.',
    },
  ],
  disclaimer: 'Important Notice: Visa assistance is an advisory service. Push World Travel Ltd does not guarantee visa approvals, embassy decisions, or consular processing timelines. Final decisions and processing durations depend exclusively on the respective embassies, consulates, and immigration authorities.',
};

export const PACKAGES: PackageItem[] = [
  // --- KENYA COASTAL ESCAPES ---
  {
    id: 'august-holiday-diani',
    title: 'August Holiday Diani & Watamu School Break Deals',
    category: 'coastal',
    destination: 'Diani Beach & Watamu, Kenya',
    duration: '4 Days / 3 Nights',
    validity: 'August School Holidays & Seasonal Departures',
    image: destDiani,
    overview: 'Family-friendly coastal escapes with beachfront resort relaxation, glass-bottom reef boat rides, return SGR train or flight connections, and oceanfront dining.',
    highlights: [
      'Tailored family suites & interconnecting rooms',
      'Kid-friendly swimming pools and beach clubs',
      'Return SGR train transfers from Nairobi or direct flight connections',
      'Daily oceanfront buffet breakfast and dinner',
    ],
    summaryInclusion: 'Resort accommodation, transfers, meals and marine excursions included',
    inclusions: [
      'Accommodation and Meals: 4-Star beachfront resort stay with daily buffet breakfast and dinner.',
      'Ground Transfers: Roundtrip transfers between Mombasa SGR station or Ukunda/Malindi airstrip and your resort.',
      'Excursions: Glass-bottom boat reef cruise and marine park exploration.',
      'Concierge Coordination: 24/7 dedicated travel support from Push World Travel Ltd.',
    ],
    exclusions: [
      'Personal travel insurance (available upon request).',
      'Alcoholic beverages and motorized water sport activities.',
      'Personal expenses, tips, and items of a personal nature.',
      'Visa assistance (available separately for international travelers).',
    ],
    callToAction: 'Enquire About This Package',
  },
  {
    id: 'diani-whitesands',
    title: 'Diani Beachfront Turquoise Escape',
    category: 'coastal',
    destination: 'Diani Beach & South Coast, Kenya',
    duration: '3 Days / 2 Nights',
    validity: 'Year-round tailored departures',
    image: destDiani,
    overview: 'Experience the pristine white sand and crystal turquoise waters of Africas leading beach destination with hand-picked 4-star resort accommodation.',
    highlights: [
      'Oceanfront resort room with private balcony',
      'Flexible return SGR train or flight coordination',
      'Daily buffet breakfast and chef-curated dinner',
      'Glass-bottom boat marine tour with snorkeling gear',
    ],
    summaryInclusion: 'Resort accommodation, transfers, meals and marine excursions included',
    inclusions: [
      'Accommodation and Meals: Selected beachfront resort room with private veranda and specified meal plan.',
      'Ground Transfers: Private roundtrip transfers from Ukunda airstrip or Mombasa SGR terminal.',
      'Marine Excursion: Guided coral reef excursion with snorkeling equipment.',
      'Concierge Support: Personal travel assistance throughout your stay.',
    ],
    exclusions: [
      'Flight or SGR train tickets (quoted separately based on your preferred travel class).',
      'Discretionary tips, spa treatments, and premium beverages.',
      'Personal travel insurance.',
    ],
    callToAction: 'Request a Custom Quote',
  },
  {
    id: 'diani-luxury-retreat',
    title: 'Diani Luxury Villa & Chale Island Marine Retreat',
    category: 'coastal',
    destination: 'Diani Beach & Chale Island, Kenya',
    duration: '5 Days / 4 Nights',
    validity: 'Year-round bespoke departures',
    image: sceneResort,
    overview: 'Indulge in private luxury villas along Diani Beach coupled with an exclusive day excursion to the secluded mangrove sands of Chale Island.',
    highlights: [
      'Private oceanfront villa with plunge pool access',
      'Guided motorized dhow cruise to Kisite-Mpunguti Marine Park and Wasini Island',
      'Fresh seafood lunch feast on Wasini Island',
      'VIP private airport meet-and-greet in Mombasa or Ukunda',
    ],
    summaryInclusion: 'Villa accommodation, private transfers, meals and island excursions included',
    inclusions: [
      'Accommodation and Meals: 5-Star boutique villa with daily gourmet breakfast and dinner.',
      'Private Transfers: Chauffeur-driven luxury SUV transfers to and from Diani.',
      'Marine Safari: Full-day Wasini Island and Kisite marine park dolphin cruise.',
      'Concierge Care: Dedicated holiday planner throughout your stay.',
    ],
    exclusions: [
      'Personal gratuities and premium imported wines.',
      'Optional deep-sea sport fishing charters.',
      'Travel insurance.',
    ],
    callToAction: 'Contact Us for a Tailored Package',
  },
  {
    id: 'watamu-malindi-retreat',
    title: 'Watamu Marine Sanctuary & Malindi Dolphin Cruise',
    category: 'coastal',
    destination: 'Watamu & Malindi, Kenya Coast',
    duration: '4 Days / 3 Nights',
    validity: 'Year-round bespoke departures',
    image: destDiani,
    overview: 'Unwind at tranquil white sand coves, explore historic Gede Ruins, and snorkel among vibrant tropical coral gardens in Watamu Marine National Park.',
    highlights: [
      'Historic Gede Ruins guided heritage tour',
      'Watamu marine reserve boat trip with dolphin spotting',
      'Fresh coastal seafood dining experiences',
      'Pristine uncrowded beaches and tropical gardens',
    ],
    summaryInclusion: 'Resort accommodation, transfers, meals and marine excursions included',
    inclusions: [
      'Accommodation and Meals: Boutique beachfront resort stay on half-board meal plan.',
      'Ground Transfers: Private roundtrip transfers from Malindi airport or SGR Mombasa.',
      'Park Excursions: Marine national park boat excursion and entry fees.',
      'Local Guide: Guided tour of the ancient Gede coastal ruins.',
    ],
    exclusions: [
      'Travel tickets between Nairobi and the coast (booked upon request).',
      'Scuba diving certifications or motorized watersports.',
      'Gratuities and personal items.',
    ],
    callToAction: 'Enquire About This Package',
  },

  // --- KENYA WILDLIFE SAFARIS ---
  {
    id: 'maasai-mara-bigfive',
    title: 'Maasai Mara Big Five 4x4 Safari Experience',
    category: 'safari',
    destination: 'Maasai Mara National Reserve, Kenya',
    duration: '3 Days / 2 Nights',
    validity: 'Daily departures tailored to your schedule',
    image: heroSafari,
    overview: 'Witness legendary wildlife on the boundless savannahs of Maasai Mara with customized 4x4 Land Cruisers, expert naturalist guides, and luxury tented camps.',
    highlights: [
      'Extensive daily morning and afternoon game drives',
      'Big Five predator tracking across prime reserve territories',
      'Sunset bush sundowner viewpoints over the Mara plains',
      'Optional traditional Maasai cultural village visit',
    ],
    summaryInclusion: 'Safari transport, accommodation, meals and park fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Lodge accommodation and meals as specified in the selected itinerary.',
      'Park Fees: National park and reserve entry fees as specified in the package itinerary.',
      'Naturalist Guide: Licensed professional English-speaking driver-guide.',
      'Drinking Water: Unlimited bottled mineral water during game drives.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: "Let's Plan Your Safari",
  },
  {
    id: 'maasai-mara-migration',
    title: 'Maasai Mara Great Migration & Hot Air Balloon Safari',
    category: 'safari',
    destination: 'Maasai Mara National Reserve, Kenya',
    duration: '4 Days / 3 Nights',
    validity: 'July to October peak migration & year-round departures',
    image: heroSafari,
    overview: 'Experience the world-renowned wildebeest migration spectacle along the Mara River, complete with sunrise hot air balloon flight and champagne bush breakfast.',
    highlights: [
      'Sunrise hot air balloon flight over the Mara River plains with champagne breakfast',
      'Mara River crossing lookout points with expert naturalist tracking',
      'Luxury riverside tented camp stay with wildlife viewing decks',
      'Customized pop-up roof 4x4 Land Cruiser with charging ports and optics',
    ],
    summaryInclusion: 'Safari transport, luxury camp, all meals, balloon flight and park fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Luxury tented camp accommodation with full-board gourmet dining.',
      'Park Fees: National reserve entry and conservation fees for all days.',
      'Hot Air Balloon Experience: Scenic sunrise flight and champagne bush breakfast.',
      'Expert Guide: Senior wildlife spotter and naturalist driver.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: 'Request a Custom Quote',
  },
  {
    id: 'amboseli-kilimanjaro',
    title: 'Amboseli Elephants & Kilimanjaro Views',
    category: 'safari',
    destination: 'Amboseli National Park, Kenya',
    duration: '3 Days / 2 Nights',
    validity: 'Custom dates throughout the year',
    image: heroSafari,
    overview: 'Gaze upon Mount Kilimanjaros majestic snow-capped peaks rising above vast herds of free-ranging elephants across the Amboseli basin.',
    highlights: [
      'Iconic Mount Kilimanjaro photography backdrops',
      'Observation Hill panoramic lookout over wetlands',
      'Superb close encounters with famous Amboseli elephant herds',
      'Comfortable safari lodge with swimming pool and viewing deck',
    ],
    summaryInclusion: 'Safari transport, accommodation, meals and park fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Lodge accommodation and meals as specified in the selected itinerary.',
      'Park Fees: National park and reserve entry fees as specified in the package itinerary.',
      'Naturalist Guide: Licensed driver-guide with deep knowledge of elephant ecology.',
      'Drinking Water: Complimentary mineral water on all game drives.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: "Let's Plan Your Safari",
  },
  {
    id: 'nakuru-naivasha-rhinos',
    title: 'Lake Naivasha & Lake Nakuru Flamingo & Rhino Safari',
    category: 'safari',
    destination: 'Lake Nakuru & Naivasha, Kenya',
    duration: '3 Days / 2 Nights',
    validity: 'Daily departures tailored to your schedule',
    image: sceneMountain,
    overview: 'Explore the Great Rift Valley with Lake Naivasha boat rides to Crescent Island, Hell’s Gate volcanic gorges, and Lake Nakuru’s world-renowned rhino sanctuary.',
    highlights: [
      'Boat safari on Lake Naivasha with up-close hippo and fish eagle sightings',
      'Guided walking safari among giraffes and zebras on Crescent Island Game Sanctuary',
      'Lake Nakuru National Park game drives for endangered black and white rhinos and Rothschild giraffes',
      'Spectacular Rift Valley viewpoint photo stops',
    ],
    summaryInclusion: 'Safari transport, lodge accommodation, boat safari and park fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Rift Valley safari lodge accommodation with full-board dining.',
      'Park Fees: Lake Nakuru National Park fees and Crescent Island sanctuary access.',
      'Boat Cruise: Motorized Lake Naivasha scenic excursion with life jackets and guide.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: 'Contact Us for a Tailored Package',
  },
  {
    id: 'samburu-special-five',
    title: 'Samburu Special Five & Ewaso Nyiro River Expedition',
    category: 'safari',
    destination: 'Samburu National Reserve, Kenya',
    duration: '3 Days / 2 Nights',
    validity: 'Year-round bespoke departures',
    image: heroSafari,
    overview: 'Journey north of Mount Kenya into rugged semi-arid wilderness home to Samburus rare endemic wildlife: Grevys zebra, reticulated giraffe, Beisa oryx, Somali ostrich, and gerenuk.',
    highlights: [
      'Search for the Samburu Special Five species found only north of the equator',
      'Game drives along the life-giving Ewaso Nyiro River lined with doum palms',
      'Leopard tracking along riverine forests and dramatic rocky kopjes',
      'Enriching cultural encounter with the Samburu pastoral community',
    ],
    summaryInclusion: 'Safari transport, luxury tented camp, meals and reserve fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Riverside safari camp accommodation with full-board dining.',
      'Park Fees: Samburu National Reserve entry and conservation fees.',
      'Naturalist Guide: Licensed driver-guide with deep expertise in northern wildlife.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: "Let's Plan Your Safari",
  },
  {
    id: 'tsavo-wilderness-safari',
    title: 'Tsavo East & West Red Elephants & Mzima Springs Safari',
    category: 'safari',
    destination: 'Tsavo East & West National Parks, Kenya',
    duration: '4 Days / 3 Nights',
    validity: 'Year-round tailored departures',
    image: heroSafari,
    overview: 'Explore Kenyas largest wilderness theater: legendary red-dust elephants of Tsavo East, volcanic Shetani lava flows, and the crystal-clear underwater hippo chamber at Mzima Springs.',
    highlights: [
      'Famous dust-red elephants bathing at Mudanda Rock and Aruba Dam',
      'Submerged glass observatory viewing hippos and giant tilapia at Mzima Springs',
      'Spectacular views of Mount Kilimanjaro from Tsavo West hills',
      'Ngulia Rhino Sanctuary tracking drives',
    ],
    summaryInclusion: 'Safari transport, safari lodge stays, full board meals and park fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Handpicked safari lodges in Tsavo East and Tsavo West on full board.',
      'Park Fees: Kenya Wildlife Service park admission for both Tsavo East and Tsavo West.',
      'Guide Services: Experienced safari driver-guide throughout the circuit.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: 'Enquire About This Package',
  },
  {
    id: 'ol-pejeta-rhino-safari',
    title: 'Ol Pejeta Chimpanzee & Northern White Rhino Sanctuary',
    category: 'safari',
    destination: 'Ol Pejeta Conservancy & Mount Kenya',
    duration: '3 Days / 2 Nights',
    validity: 'Custom departures throughout the year',
    image: sceneMountain,
    overview: 'Visit the largest black rhino sanctuary in East Africa, meet the worlds last two remaining Northern White Rhinos, and tour the Jane Goodall Sweetwaters Chimpanzee Sanctuary with Mount Kenya views.',
    highlights: [
      'Exclusive encounter at the endangered Northern White Rhino enclosure',
      'Sweetwaters Chimpanzee Sanctuary tour',
      'Highest predator-to-prey density in Kenya with lion and leopard tracking',
      'Equator crossing educational demonstration with Mount Kenya backdrop',
    ],
    summaryInclusion: 'Safari transport, luxury tented camp, meals and conservancy fees included',
    inclusions: [
      'Passenger Insurance: Passenger insurance cover, subject to the applicable policy terms.',
      'Safari Transport: Travel in a 4x4 Land Cruiser equipped with a pop-up roof for better wildlife viewing.',
      'Accommodation and Meals: Sweetwaters Serena Camp or similar luxury tented camp with full board.',
      'Park Fees: Ol Pejeta Conservancy entry and conservation levies.',
      'Chimpanzee & Rhino Sanctuary Admissions: Included guided visits.',
    ],
    exclusions: SAFARI_STANDARD_EXCLUSIONS,
    callToAction: 'Request a Custom Quote',
  },

  // --- DUBAI & INTERNATIONAL DESTINATIONS ---
  {
    id: 'dubai-city-escape',
    title: 'Dubai Futuristic City & Desert Safari',
    category: 'international',
    destination: 'Dubai, United Arab Emirates (UAE)',
    duration: '5 Days / 4 Nights',
    validity: 'Flexible private departures',
    image: destDubai,
    overview: 'Explore iconic modern architecture, scenic Marina evening dinner cruises, desert dune bashing, and world-class shopping in cosmopolitan Dubai.',
    highlights: [
      'Burj Khalifa observation deck admission ticket on the 124th floor',
      'Evening desert safari with dune bashing, camel ride, belly dance show & BBQ dinner',
      'Dubai Marina Dhow dinner cruise with panoramic illuminated skyline views',
      'Dedicated UAE tourist visa administrative guidance and flight coordination',
    ],
    summaryInclusion: 'Hotel accommodation, guided city tours & return airport transfers included',
    inclusions: [
      'Accommodation and Meals: 4-Star centrally located Dubai hotel with daily buffet breakfast.',
      'Guided Tours: 4x4 desert safari with BBQ buffet dinner, and Marina Dhow dinner cruise.',
      'Airport Transfers: Private roundtrip airport meet-and-greet transfers.',
      'Ticketing Support: Pre-booked entrance vouchers for key landmarks.',
    ],
    exclusions: [
      'International return flight tickets (tailored airline booking provided on request).',
      'Statutory visa processing fees payable to UAE immigration authorities.',
      'Tourism Dirham hotel tax payable directly at hotel check-in.',
      'Personal expenses, room service, and optional luxury excursions.',
    ],
    callToAction: 'Contact Us for a Tailored Package',
  },
  {
    id: 'dubai-luxury-marina',
    title: 'Dubai Luxury Marina, Burj Khalifa & Abu Dhabi Tour',
    category: 'international',
    destination: 'Dubai & Abu Dhabi, United Arab Emirates (UAE)',
    duration: '6 Days / 5 Nights',
    validity: 'Year-round bespoke departures',
    image: destDubai,
    overview: 'A premier Arabian Gulf getaway combining 5-star Dubai Marina waterfront luxury, Burj Khalifa SKY views, Miracle Garden, and a full-day VIP excursion to Abu Dhabi and the Sheikh Zayed Grand Mosque.',
    highlights: [
      '5-Star Dubai Marina hotel stay with private balcony views',
      'Full-day Abu Dhabi excursion: Sheikh Zayed Grand Mosque, Louvre Abu Dhabi & Corniche',
      'VIP Dubai Miracle Garden and Global Village seasonal passes',
      'Private luxury desert dune drive with falconry demonstration and Bedouin feast',
    ],
    summaryInclusion: '5-star hotel, private Abu Dhabi tour, desert safari & airport transfers included',
    inclusions: [
      'Accommodation and Meals: 5-Star luxury hotel stay with daily international buffet breakfast.',
      'Private Abu Dhabi Tour: Chauffeur-driven luxury Mercedes van with licensed English guide.',
      'Desert Experience: Premium desert camp with private majlis dining and dune safari.',
      'Transfers: Roundtrip VIP private airport transfers in Dubai.',
    ],
    exclusions: [
      'International airline tickets (issued at preferential agency rates).',
      'Statutory UAE visa fees.',
      'Personal purchases and discretionary hotel extras.',
    ],
    callToAction: 'Request a Custom Quote',
  },
  {
    id: 'zanzibar-spice-nungwi',
    title: 'Zanzibar Island, Stone Town & Nungwi Beach Escape',
    category: 'international',
    destination: 'Zanzibar Island, Tanzania',
    duration: '5 Days / 4 Nights',
    validity: 'Flexible private departures',
    image: sceneResort,
    overview: 'Fly across to the legendary Spice Island for UNESCO Stone Town heritage, fragrant organic spice plantations, Prison Island giant tortoises, and turquoise beach relaxation in Nungwi.',
    highlights: [
      'Guided walking tour through historic Stone Town alleys, House of Wonders & Sultan Palace',
      'Boat cruise to Prison Island with Aldabra giant tortoise sanctuary visit',
      'Aromatic Zanzibar spice farm plantation tour with fresh tropical fruit tasting',
      'Beachfront resort stay in Nungwi / Kendwa known for non-tidal crystal blue swimming',
    ],
    summaryInclusion: 'Resort stay, island tours, spice plantation visit & airport transfers included',
    inclusions: [
      'Accommodation and Meals: 4-Star beachfront resort in Nungwi with half-board dining.',
      'Island Excursions: Stone Town walking tour, Prison Island boat trip, and organic spice tour.',
      'Airport Transfers: Private airport or ferry terminal roundtrip transfers.',
      'Concierge Coordination: 24/7 dedicated support from Push World Travel Ltd.',
    ],
    exclusions: [
      'International / regional flights from Nairobi to Zanzibar (tailored booking available).',
      'Tanzania tourist visa and statutory infrastructure tax.',
      'Water sports and personal travel insurance.',
    ],
    callToAction: 'Enquire About This Package',
  },
  {
    id: 'south-africa-cape-town',
    title: 'South Africa Cape Town & Wine Country',
    category: 'international',
    destination: 'Cape Town & Stellenbosch, South Africa',
    duration: '6 Days / 5 Nights',
    validity: 'Tailored departures year-round',
    image: destDubai,
    overview: 'Table Mountain cableway ascent, Cape Peninsula scenic coastal drive, Boulders Beach African penguins, and historic Cape Dutch vineyard estates.',
    highlights: [
      'Table Mountain cableway summit experience',
      'Boulders Beach penguin colony visit in Simons Town',
      'Cape Point Nature Reserve and Cape of Good Hope landmark',
      'Stellenbosch historic wine estate cellar tour and tasting',
    ],
    summaryInclusion: 'Hotel accommodation, guided city tours & return airport transfers included',
    inclusions: [
      'Accommodation and Meals: 4-Star Victoria & Alfred Waterfront hotel with daily breakfast.',
      'Guided Day Tours: Full-day Cape Peninsula tour and Cape Winelands excursion.',
      'Airport Transfers: Private airport transfers in Cape Town.',
      'Entry Coordination: Table Mountain cableway and nature reserve admissions.',
    ],
    exclusions: [
      'International flights (custom airline routing arranged upon request).',
      'South African visa application fees and courier charges.',
      'Meals not specified in the agreed itinerary.',
      'Personal travel insurance (mandatory for South African entry).',
    ],
    callToAction: 'Contact Our Team for a Personalised Offer',
  },
  {
    id: 'south-africa-kruger-safari',
    title: 'Kruger National Park Big Five Safari & Panorama Route',
    category: 'international',
    destination: 'Kruger National Park, South Africa',
    duration: '5 Days / 4 Nights',
    validity: 'Year-round bespoke departures',
    image: heroSafari,
    overview: 'Combine South Africas premier Big Five game reserve with the breathtaking geological wonders of the Panorama Route including Blyde River Canyon and Gods Window.',
    highlights: [
      'Open-vehicle 4x4 game drives in Greater Kruger private game reserve',
      'Big Five predator tracking: lions, leopards, rhinos, elephants, and cape buffalos',
      'Panorama Route sightseeing: Blyde River Canyon, Bourkes Luck Potholes & Gods Window',
      'Luxury bush lodge accommodation with boma dinner under southern stars',
    ],
    summaryInclusion: 'Safari lodge accommodation, open-vehicle game drives, meals & transfers included',
    inclusions: [
      'Accommodation and Meals: 4-Star Kruger private reserve lodge with full-board dining.',
      'Safari Transport: Open 4x4 safari vehicles with licensed South African field guides.',
      'Reserve Fees: Conservation fees and national park entry charges.',
      'Transfers: Roundtrip transfers between Johannesburg or Nelspruit Airport and the lodge.',
    ],
    exclusions: [
      'International and regional flights to South Africa.',
      'South African visa fees and travel insurance.',
      'Premium beverages and discretionary staff gratuities.',
    ],
    callToAction: 'Request a Custom Quote',
  },
  {
    id: 'mauritius-tropical-paradise',
    title: 'Mauritius All-Inclusive Beach Resort & Coral Reef Escape',
    category: 'international',
    destination: 'Mauritius Island, Indian Ocean',
    duration: '6 Days / 5 Nights',
    validity: 'Year-round tailored departures',
    image: sceneResort,
    overview: 'Indulge in idyllic Indian Ocean turquoise lagoons, sugar-white sand beaches, catamaran cruises to coral islands, and vibrant Creole culinary traditions.',
    highlights: [
      '5-Star all-inclusive beachfront resort with unlimited meals and beverages',
      'Full-day luxury catamaran cruise to Ile aux Cerfs with snorkeling and barbecue lunch',
      'Scenic island discovery tour: Chamarel Seven Coloured Earths and Grand Bassin sacred lake',
      'Complimentary non-motorized watersports: kayaking, paddleboarding & glass-bottom boat',
    ],
    summaryInclusion: 'All-inclusive 5-star resort, catamaran cruise, island tour & private airport transfers included',
    inclusions: [
      'Accommodation and Meals: 5-Star beach resort on all-inclusive plan (breakfast, lunch, dinner & drinks).',
      'Catamaran Excursion: Day cruise with snorkeling gear, barbecue buffet, and drinks.',
      'Private Transfers: Roundtrip airport transfers in air-conditioned executive vehicle.',
      'Island Tour: Guided scenic tour of southwestern Mauritian landmarks.',
    ],
    exclusions: [
      'International flights between Nairobi and Mauritius (arranged upon request).',
      'Optional scuba diving, undersea walks, and spa treatments.',
      'Personal travel insurance.',
    ],
    callToAction: 'Contact Us for a Tailored Package',
  },
  {
    id: 'egypt-pyramids-nile',
    title: 'Egypt Cairo Pyramids & Nile River Cruise',
    category: 'international',
    destination: 'Cairo & Nile Valley, Egypt',
    duration: '7 Days / 6 Nights',
    validity: 'October to April peak & year-round departures',
    image: destDubai,
    overview: 'Journey through 5,000 years of civilization: the Great Pyramids of Giza, the mysterious Sphinx, the Grand Egyptian Museum, and a 5-star luxury cruise on the Nile from Luxor to Aswan.',
    highlights: [
      'Private Egyptologist-guided tour of the Great Pyramids of Giza and the Sphinx',
      'VIP visit to the Grand Egyptian Museum and Khan el-Khalili bazaar',
      '3-Night luxury 5-star Nile River cruise from Luxor to Aswan with all meals',
      'Valley of the Kings, Karnak Temple, and Temple of Philae guided explorations',
    ],
    summaryInclusion: 'Cairo luxury hotel, 5-star Nile cruise, Egyptologist guide & domestic flights included',
    inclusions: [
      'Accommodation and Meals: 5-Star Cairo hotel stay (B&B) and 5-Star full-board Nile cruise ship.',
      'Domestic Egypt Flights: Cairo to Luxor and Aswan to Cairo flight tickets.',
      'Guided Sightseeing: Licensed English-speaking certified Egyptologist guide throughout.',
      'All Sightseeing Transfers: Private air-conditioned coaches and airport pickups.',
      'Site Admissions: Monument and temple entry tickets as per itinerary.',
    ],
    exclusions: [
      'International return flights from Nairobi to Cairo (quoted on request).',
      'Egypt entry visa fees (visa assistance available).',
      'Personal tips to Nile cruise staff and tour drivers.',
    ],
    callToAction: 'Request a Custom Quote',
  },

  // --- CORPORATE & VISA SERVICES ---
  {
    id: 'corporate-flight-visa',
    title: 'Corporate Travel Management & Visa Concierge',
    category: 'visa-corporate',
    destination: 'Global Flights & Nairobi HQ',
    duration: 'Flexible & Annual Account Retainers',
    validity: 'Year-round corporate service',
    image: destDubai,
    overview: 'End-to-end corporate flights, group business visas, conference delegations, negotiated hotel blocks, and executive airport transfers.',
    highlights: [
      'Priority flight reservation changes and corporate airline fares',
      'Pre-vetting of corporate visa dossiers and consular appointment booking',
      '24/7 dedicated travel manager for executives and teams',
      'Consolidated monthly billing and comprehensive travel reporting',
    ],
    summaryInclusion: 'Account management, flight reservations & visa appointment support included',
    inclusions: [
      'Corporate Concierge: Dedicated account specialist managing bookings 24/7.',
      'Administrative Support: Verification of travel paperwork and embassy submissions.',
      'Priority Transfers: VIP executive airport pickups and chauffeured transit.',
      'Flexibility: Tailored booking terms and priority flight date amendments.',
    ],
    exclusions: [
      'Statutory consular fees and embassy visa submission charges.',
      'Airline-imposed fare differences for itinerary re-routings.',
    ],
    callToAction: 'Request a Custom Quote',
  },
];

export const DESTINATIONS: DestinationItem[] = [
  // --- KENYA CIRCUITS ---
  {
    id: 'maasai-mara',
    name: 'Maasai Mara',
    country: 'Kenya',
    category: 'kenya',
    description: 'The world-famous wildlife sanctuary renowned for the Great Migration, dense predator populations, and wide-open golden savannahs.',
    image: heroSafari,
    packageCount: 14,
    bestTimeToVisit: 'July - October (Migration) & Dec - March',
  },
  {
    id: 'diani-beach',
    name: 'Diani Beach & South Coast',
    country: 'Kenya',
    category: 'kenya',
    description: 'Africas premier white-sand coastal retreat bordered by warm turquoise Indian Ocean waters, swaying palms, and luxury beach resorts.',
    image: destDiani,
    packageCount: 18,
    bestTimeToVisit: 'August & November - March',
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    country: 'Kenya',
    category: 'kenya',
    description: 'Vast herds of free-ranging elephants set against the awe-inspiring snow-capped summit of Mount Kilimanjaro.',
    image: heroSafari,
    packageCount: 8,
    bestTimeToVisit: 'June - October & January - February',
  },
  {
    id: 'watamu-malindi',
    name: 'Watamu & Malindi',
    country: 'Kenya',
    category: 'kenya',
    description: 'Marine national parks teeming with coral reefs, sea turtles, historical Gede ruins, and secluded beach coves.',
    image: destDiani,
    packageCount: 12,
    bestTimeToVisit: 'August & December - March',
  },
  {
    id: 'naivasha-nakuru',
    name: 'Lake Nakuru & Naivasha',
    country: 'Kenya',
    category: 'kenya',
    description: 'Freshwater lakes, Hell’s Gate cycling canyons, flamingo-rimmed waters, and a vital sanctuary for endangered black rhinos.',
    image: sceneMountain,
    packageCount: 11,
    bestTimeToVisit: 'Weekend escapes year-round',
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    country: 'Kenya',
    category: 'kenya',
    description: 'Rugged northern wilderness home to unique endemic wildlife including Grevys zebra, reticulated giraffe, and the Ewaso Nyiro River.',
    image: heroSafari,
    packageCount: 6,
    bestTimeToVisit: 'June - October & December - March',
  },
  {
    id: 'tsavo',
    name: 'Tsavo East & West',
    country: 'Kenya',
    category: 'kenya',
    description: 'Vast dramatic wilderness famous for red-dust elephants, Shetani volcanic lava flows, and the crystal underwater hippo chamber at Mzima Springs.',
    image: heroSafari,
    packageCount: 7,
    bestTimeToVisit: 'Year-round wildlife circuits',
  },
  {
    id: 'ol-pejeta',
    name: 'Ol Pejeta & Mount Kenya',
    country: 'Kenya',
    category: 'kenya',
    description: 'Pioneering private conservancy hosting the worlds last Northern White Rhinos, Jane Goodall chimpanzees, and views of Mount Kenya.',
    image: sceneMountain,
    packageCount: 8,
    bestTimeToVisit: 'Year-round conservation safaris',
  },

  // --- DUBAI & INTERNATIONAL CIRCUITS ---
  {
    id: 'dubai',
    name: 'Dubai & Abu Dhabi',
    country: 'United Arab Emirates',
    category: 'international',
    description: 'Iconic skyscrapers, golden desert dunes, luxury shopping festivals, world-class theme parks, and futuristic entertainment.',
    image: destDubai,
    packageCount: 12,
    bestTimeToVisit: 'October - April',
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar Island',
    country: 'Tanzania',
    category: 'international',
    description: 'UNESCO Stone Town heritage, aromatic spice plantations, and the turquoise waters of Nungwi and Kendwa beaches.',
    image: sceneResort,
    packageCount: 9,
    bestTimeToVisit: 'Year-round tropical escapes',
  },
  {
    id: 'south-africa',
    name: 'Cape Town & Kruger',
    country: 'South Africa',
    category: 'africa',
    description: 'From cosmopolitan Cape Town and the dramatic Garden Route to Kruger wildlife expeditions and culinary vineyards.',
    image: destDubai,
    packageCount: 10,
    bestTimeToVisit: 'November - March',
  },
  {
    id: 'mauritius',
    name: 'Mauritius Island',
    country: 'Mauritius',
    category: 'international',
    description: 'Volcanic mountain backdrops, luxury all-inclusive resorts, lagoon water sports, and tranquil tropical island charm.',
    image: sceneResort,
    packageCount: 6,
    bestTimeToVisit: 'May - December',
  },
  {
    id: 'egypt',
    name: 'Cairo & Pyramids',
    country: 'Egypt',
    category: 'international',
    description: 'The ancient Great Pyramids of Giza, the Grand Egyptian Museum, and 5-star Nile River cruise adventures between Luxor and Aswan.',
    image: destDubai,
    packageCount: 5,
    bestTimeToVisit: 'October - April',
  },
];

export const BROCHURES: BrochureItem[] = [
  {
    id: 'brochure-august-holiday',
    title: 'August Travel Deals & School Holiday Getaways',
    tagline: 'Coastal Escapes · Maasai Mara · Dubai · Family Packages',
    pages: 5,
    pdfUrl: '#download-august-deals-brochure',
    coverImg: destDiani,
    description: 'August school holiday getaways and family travel itineraries, from local coastal retreats to international city breaks with tailored quotes.',
    date: 'August 2026 Special Edition',
  },
  {
    id: 'brochure-safari-2026',
    title: '2026 Safari & Big Five Expeditions',
    tagline: 'Maasai Mara · Amboseli · Samburu · Tsavo',
    pages: 5,
    pdfUrl: '#download-safari-brochure',
    coverImg: heroSafari,
    description: 'Detailed day-by-day wildlife itineraries, seasonal migration calendars, 4x4 Land Cruiser specifications, and lodge guidance.',
    date: '2026 Official Edition',
  },
  {
    id: 'brochure-coastal-escapes',
    title: 'Coastal Escapes & Island Getaways',
    tagline: 'Diani Beach · Watamu · Malindi · Mombasa SGR',
    pages: 5,
    pdfUrl: '#download-coastal-brochure',
    coverImg: sceneResort,
    description: 'Beachfront resort profiles, all-inclusive meal arrangements, honeymoon retreats, and direct SGR train/flight connections.',
    date: '2026 Summer & Holiday Edition',
  },
  {
    id: 'brochure-global-visa',
    title: 'Global Travel & Visa Advisory Catalogue',
    tagline: 'Dubai · South Africa · Europe · Mauritius · Malaysia',
    pages: 5,
    pdfUrl: '#download-global-brochure',
    coverImg: destDubai,
    description: 'Document requirements, application support guidelines, international holiday itineraries, and flight booking assistance.',
    date: '2026 Global Edition',
  },
];

export const TESTIMONIALS = [
  {
    quote: 'Push World Travel Ltd arranged our Maasai Mara family safari flawlessly. From the 4x4 Land Cruiser with pop-up roof to the luxury camp overlooking the river, every detail was spot-on. WhatsApp responses from their team were instant!',
    author: 'Captain David Kimani',
    role: 'Corporate Executive',
    location: 'Nairobi, Kenya',
    trip: 'Maasai Mara 3-Day Safari',
  },
  {
    quote: 'Our Diani Beach holiday was the smoothest trip we have ever taken. Flight bookings, hotel check-in at the resort, and marine excursions were coordinated without a single hitch. Highly recommended.',
    author: 'Wanjiku M. & Family',
    role: 'Business Consultant',
    location: 'Kiambu / Mombasa',
    trip: 'Diani White Sands Getaway',
  },
  {
    quote: 'Push World Travel Ltd provided clear visa guidance and put together our complete Dubai holiday package quickly. Personalized service, clear communication with no surprises, and exceptional customer care throughout our stay.',
    author: 'Emmanuel Ochieng',
    role: 'Tech Entrepreneur',
    location: 'Nairobi',
    trip: 'Dubai City & Desert Safari',
  },
];

export interface ServiceCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  image: string;
  iconName: string;
  disclaimer?: string;
  features: string[];
}

export const MAIN_SERVICES_LIST: ServiceCategoryItem[] = [
  {
    id: 'luxury-travel',
    title: 'Luxury and Premium Travel',
    subtitle: 'Tailored High-End Escapes',
    description: 'Tailored luxury holidays, premium boutique accommodation, exclusive safari experiences, private chartered flights, beach escapes, and personalised travel arrangements with dedicated 24/7 concierge support.',
    ctaText: 'Explore Premium Travel',
    image: sceneResort,
    iconName: 'Crown',
    features: ['Exclusive 5-star lodges & villas', 'Private 4x4 Land Cruisers', 'Charter flights & VIP transfers', 'Bespoke culinary experiences'],
  },
  {
    id: 'custom-planner',
    title: 'Custom Trip Planner',
    subtitle: 'Bespoke Itinerary Design',
    description: 'Help customers create personalised itineraries based on their chosen destinations, travel dates, personal interests, group size, preferred accommodation style, and budget considerations.',
    ctaText: 'Plan Your Trip',
    image: heroSafari,
    iconName: 'Compass',
    features: ['One-on-one travel consultation', 'Tailored daily itineraries', 'Flexible scheduling & pacing', 'Personalised itemised quotes'],
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Travel and Team Building',
    subtitle: 'Business & Group Solutions',
    description: 'Support businesses and organisations with business travel arrangements, group flights, corporate retreats, team-building activities, conference travel, delegate logistics, and accommodation planning.',
    ctaText: 'Plan Corporate Travel',
    image: sceneMountain,
    iconName: 'Briefcase',
    features: ['Corporate retreats & offsites', 'Team-building coordination', 'Conference & delegate logistics', 'Consolidated billing & reporting'],
  },
  {
    id: 'travel-insurance',
    title: 'Travel Insurance and Travel Cover',
    subtitle: 'Protection Assistance',
    description: 'Help customers explore suitable travel insurance options for medical emergencies, trip interruptions, lost luggage, and other covered travel risks, depending on the selected policy.',
    ctaText: 'Enquire About Travel Cover',
    image: destDubai,
    iconName: 'ShieldCheck',
    disclaimer: 'Notice: Pushworld Travel assists clients in exploring travel cover options from licensed insurance providers. We do not underwrite or provide insurance policies directly.',
    features: ['Medical emergency cover options', 'Trip cancellation protection', 'Lost luggage & baggage delay', 'Policy comparison assistance'],
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers and Transport',
    subtitle: 'Seamless Ground Travel',
    description: 'Reliable airport pickup and drop-off arrangements, private chauffeur transfers, group shuttle transportation, and ground transport for safaris, coastal holidays, and corporate business travel.',
    ctaText: 'Arrange Transport',
    image: heroSafari,
    iconName: 'Car',
    features: ['JKIA & Wilson airport pickups', 'SGR train station connections', 'Private 4x4 Land Cruisers', 'Spacious executive vans'],
  },
  {
    id: 'destination-guides',
    title: 'Destination Guides',
    subtitle: 'Local Insights & Tips',
    description: 'Practical destination guidance, seasonal wildlife migration calendars, packing advice, local customs, and curated itinerary ideas for iconic destinations in Kenya and internationally.',
    ctaText: 'Explore Destination Guides',
    image: destDiani,
    iconName: 'BookOpen',
    features: ['Seasonal migration schedules', 'Best times to visit by park', 'Essential packing & health tips', 'Cultural and local advice'],
  },
  {
    id: 'holiday-safari-packages',
    title: 'Holiday & Safari Packages',
    subtitle: 'Local & Global Adventures',
    description: 'Wildlife safaris in Maasai Mara, Amboseli, and Serengeti, relaxing white sand beach holidays in Diani, Watamu, Zanzibar, and Mombasa, plus international getaways to Dubai and beyond.',
    ctaText: 'Explore Packages',
    image: heroSafari,
    iconName: 'Palmtree',
    features: ['Big Five wildlife safaris', 'Coastal white sand retreats', 'Family-friendly holiday deals', 'International city & beach breaks'],
  },
  {
    id: 'hotel-reservations',
    title: 'Hotels, Vacation Homes & B&Bs',
    subtitle: 'Comfortable Stays Anywhere',
    description: 'Booking support for curated hotels, private vacation homes, oceanfront luxury villas, cozy countryside cottages, and bed & breakfast stays across Kenya and around the world.',
    ctaText: 'Find Accommodations',
    image: sceneResort,
    iconName: 'Home',
    features: ['Vetted hotels & boutique lodges', 'Private beachfront villas', 'Serviced vacation apartments', 'Cozy countryside B&Bs'],
  },
];

export const ABOUT_US_DATA = {
  title: 'About Pushworld Travel',
  tagline: 'Personalised Local & International Travel Services',
  intro: [
    'At Pushworld Travel, we believe every journey should be memorable, comfortable, and well planned. We help individuals, families, groups, and businesses discover new destinations through personalised travel experiences and reliable travel services.',
    'From wildlife safaris and relaxing beach holidays to luxury escapes, international adventures, corporate trips, and team-building experiences, we help our clients plan journeys that suit their interests, schedules, and budgets.',
    'Our services include holiday and safari packages, hotel bookings, vacation homes, B&Bs, flight arrangements, airport transfers, ground transportation, travel insurance options, and destination guides. Whether you are planning a weekend getaway, a family holiday, a business trip, or an international adventure, our team can help you explore your options and organise the details.',
    'We offer both local and international travel services, with an emphasis on personalised planning, clear communication, and customer care.',
  ],
  mission: {
    title: 'Our Mission',
    text: 'To make travel more accessible and enjoyable by helping our clients plan meaningful journeys with convenience, confidence, and personalised support.',
  },
  vision: {
    title: 'Our Vision',
    text: 'To become a trusted travel partner connecting people to remarkable destinations, memorable experiences, and convenient travel solutions in Kenya and around the world.',
  },
  whyChoosePoints: [
    { title: 'Local and International Planning', desc: 'Comprehensive travel planning across Kenya, East Africa, and global destinations.' },
    { title: 'Personalised Holiday & Safari Packages', desc: 'Custom itineraries aligned with your schedule, group size, and personal preferences.' },
    { title: 'Accommodation & Flight Bookings', desc: 'Assistance with hotels, vacation homes, B&Bs, and domestic/international flights.' },
    { title: 'Luxury, Premium & Family Options', desc: 'Thoughtfully curated travel tiers for couples, families, and luxury seekers.' },
    { title: 'Corporate Travel & Team Building', desc: 'Complete corporate retreat planning, delegate logistics, and team events.' },
    { title: 'Airport Transfers & Ground Transport', desc: 'Reliable private pickups, 4x4 Land Cruisers, and group shuttles.' },
    { title: 'Travel Insurance Assistance', desc: 'Guidance in exploring travel cover options from licensed insurance providers.' },
    { title: 'Helpful Destination Information', desc: 'Practical guidance, migration calendars, and packing insights.' },
    { title: 'Personalised Quotations', desc: 'Individual quotes tailored to each client’s specific travel requirements.' },
  ],
};

export const GOOGLE_DATA = {
  placeName: 'Pushworld Travel - Push World Travel Ltd',
  rating: 4.9,
  reviewsCount: 87,
  address: 'Nairobi, Kenya',
  phone: '0725 356 926',
  internationalPhone: '+254 725 356 926',
  email: 'pushworldtravel@gmail.com',
  hours: 'Open 24/7 Concierge & Travel Desk',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Nairobi+Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed',
  googleMapsUrl: 'https://maps.google.com/?q=Nairobi+Kenya',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4', // standard fallback link
  reviews: [
    {
      author: 'David Mwangi',
      rating: 5,
      date: '2 weeks ago',
      text: 'Pushworld Travel planned our Maasai Mara safari seamlessly. The 4x4 Land Cruiser was top-notch with pop-up roof for viewing. Great communication on WhatsApp throughout our trip.',
      badge: 'Local Guide · 42 reviews',
    },
    {
      author: 'Sarah Jenkins',
      rating: 5,
      date: '1 month ago',
      text: 'Booked a luxury beachfront resort in Diani through Pushworld Travel. Outstanding customer care, smooth airport transfers from Mombasa, and zero hassle. Will definitely book again!',
      badge: 'Verified Traveler',
    },
    {
      author: 'George O. Anyango',
      rating: 5,
      date: '2 months ago',
      text: 'Their corporate team-building arrangement in Naivasha was organized with total precision. From bus transport to resort accommodation and activities, everything was well coordinated.',
      badge: 'Corporate Client',
    },
    {
      author: 'Amina Kassim',
      rating: 5,
      date: '3 months ago',
      text: 'Exceptional travel planning for our family vacation to Dubai. Helpful visa guidance, verified flight bookings, and prompt answers to every question. Highly recommend Pushworld Travel!',
      badge: 'Family Traveler',
    },
  ],
};

// Maintained for backward compatibility
export const CORE_SERVICES = MAIN_SERVICES_LIST.slice(0, 4).map((s) => ({
  icon: s.iconName,
  title: s.title,
  subtitle: s.subtitle,
  description: s.description,
}));

