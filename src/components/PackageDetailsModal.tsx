import { PackageItem, COMPANY_INFO, VISA_ASSISTANCE_DETAILS } from '../data/travelData';
import { 
  X, 
  CheckCircle2, 
  XCircle,
  Clock, 
  MapPin, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  HelpCircle,
  FileText
} from 'lucide-react';

interface PackageDetailsModalProps {
  pkg: PackageItem | null;
  onClose: () => void;
  onBookNow: (pkg: PackageItem) => void;
}

export function PackageDetailsModal({ pkg, onClose, onBookNow }: PackageDetailsModalProps) {
  if (!pkg) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Push World Travel Ltd! I am inquiring about the "${pkg.title}" (${pkg.duration} - ${pkg.destination}). Please share a tailored proposal and availability.`
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-100 my-6 animate-in zoom-in-95 duration-200 flex flex-col max-h-[92vh]">
        
        {/* Media Banner */}
        <div className="relative aspect-[16/8] sm:aspect-[16/7] bg-slate-900 shrink-0">
          {pkg.image ? (
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400">
              Push World Travel Ltd
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="flex items-center gap-2 text-xs text-amber-300 font-medium mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{pkg.destination}</span>
              <span>·</span>
              <Clock className="w-3.5 h-3.5" />
              <span>{pkg.duration}</span>
              <span>·</span>
              <span className="text-slate-300">{pkg.validity}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display leading-tight">
              {pkg.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-700 text-sm">
          
          {/* Overview */}
          <div>
            <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2 text-sm uppercase tracking-wider text-amber-700">
              <span>Trip Overview</span>
            </h4>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              {pkg.overview}
            </p>
          </div>

          {/* Key Experience Highlights */}
          <div>
            <h4 className="font-bold text-slate-900 mb-2.5 text-xs sm:text-sm uppercase tracking-wider text-slate-500">
              Key Highlights & Experience
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {pkg.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dedicated "What's Included" Section */}
          <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100/90">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <h4 className="font-bold text-emerald-950 text-sm">
                What's Included in This Package
              </h4>
            </div>

            <div className="space-y-2">
              {pkg.inclusions.map((inc, i) => {
                // If contains colon, highlight the key title
                const parts = inc.split(':');
                if (parts.length > 1) {
                  return (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900 font-semibold">{parts[0]}:</strong>
                        <span className="text-slate-600 ml-1">{parts.slice(1).join(':')}</span>
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Exclusions & Package Conditions */}
          {pkg.exclusions && pkg.exclusions.length > 0 && (
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="flex items-center gap-2 mb-2.5">
                <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                  What's Excluded & Optional Extras
                </h4>
              </div>
              <ul className="space-y-1.5">
                {pkg.exclusions.map((exc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Visa Services Notice */}
          <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl text-xs text-blue-900 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-blue-950">
              <FileText className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Visa Assistance Advisory</span>
            </div>
            <p className="text-blue-800/90 leading-relaxed text-[11px]">
              Visa assistance is provided as a separate administrative advisory service (covering document review, application support, and flight reservation verifications) unless this itinerary explicitly notes inclusion. Consular decisions and processing timelines rest solely with the relevant authorities.
            </p>
          </div>

          {/* Personalized Quotation Card (No public pricing displayed) */}
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider">
                Tailored Pricing & Booking
              </div>
              <div className="text-slate-900 font-bold text-base mt-0.5">
                Personalised Custom Quote
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-md">
                Every quote is customized according to your travel dates, group size, room preference, and flight requirements. Discuss your preferences directly with our advisors to receive an itemized proposal.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold bg-white px-3 py-1.5 rounded-lg border border-amber-200 shadow-2xs shrink-0">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Tailored To Your Dates</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-white border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
          >
            Back to Packages
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                onClose();
                onBookNow(pkg);
              }}
              className="px-4 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Custom Quote</span>
            </button>

            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
