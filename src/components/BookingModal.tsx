import { useState, useEffect } from 'react';
import { PackageItem, COMPANY_INFO } from '../data/travelData';
import { X, Send, MessageSquare, CheckCircle, Mail, Phone, AlertCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: PackageItem | null;
}

export function BookingModal({ isOpen, onClose, selectedPackage }: BookingModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDest, setSelectedDest] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState('2 Adults (Couple / Pair)');
  const [notes, setNotes] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitType, setSubmitType] = useState<'whatsapp' | 'email'>('whatsapp');

  useEffect(() => {
    if (selectedPackage) {
      setSelectedDest(selectedPackage.title);
    }
  }, [selectedPackage]);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!phone && !email) {
      setErrorMessage('Please provide a phone number or email so our team can follow up with your quotation.');
      return;
    }

    const message = `*Custom Travel Inquiry - Push World Travel Ltd*\n\n` +
      `• *Name:* ${name || 'Traveler'}\n` +
      `• *Phone:* ${phone || 'Not provided'}\n` +
      `• *Email:* ${email || 'Not provided'}\n` +
      `• *Package/Destination:* ${selectedDest || 'Custom Inquiry'}\n` +
      `• *Travel Date:* ${travelDate || 'Flexible'}\n` +
      `• *Guests:* ${travelers}\n` +
      (notes ? `• *Special Notes:* ${notes}\n` : '') +
      `\n_Please send a tailored proposal and availability._`;

    const url = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsSubmitted(true);
    setSubmitType('whatsapp');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    if (!email && !phone) {
      setErrorMessage('Please provide an email or phone number so we can reach you.');
      return;
    }
    setIsSubmitted(true);
    setSubmitType('email');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 my-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between">
          <div>
            <div className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
              PUSH WORLD TRAVEL LTD
            </div>
            <h3 className="text-base sm:text-lg font-bold">
              {selectedPackage ? `Enquire: ${selectedPackage.title}` : 'Request a Custom Travel Quote'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close form"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body or Success State */}
        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="text-xl font-bold text-slate-900">
              Inquiry Dispatched Successfully!
            </h4>

            <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
              {submitType === 'whatsapp'
                ? `Your travel requirements have been directed to our WhatsApp desk (${COMPANY_INFO.whatsapp}). An advisor will reply promptly with a tailored proposal.`
                : `Thank you! Your quotation request has been sent to our concierge team at ${COMPANY_INFO.email}. We will contact you with custom options.`}
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 text-left space-y-1">
              <div><span className="font-semibold text-slate-800">Direct Phone:</span> {COMPANY_INFO.phone}</div>
              <div><span className="font-semibold text-slate-800">Direct WhatsApp:</span> {COMPANY_INFO.whatsapp}</div>
              <div><span className="font-semibold text-slate-800">Direct Email:</span> {COMPANY_INFO.email}</div>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-lg transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleWhatsAppSend} className="p-5 sm:p-6 space-y-3.5">
            
            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John Kamau"
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none"
              />
            </div>

            {/* Phone & Email Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Phone / WhatsApp *
                </label>
                <div className="relative flex items-center">
                  <Phone className="absolute left-3 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 0725..."
                    className="w-full pl-8 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="absolute left-3 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="yourname@gmail.com"
                    className="w-full pl-8 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Package / Destination */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Destination or Package
              </label>
              <select
                value={selectedDest}
                onChange={(e) => setSelectedDest(e.target.value)}
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none font-medium text-slate-800"
              >
                <option value="">Select Package / Custom Route</option>
                <option value="August Holiday Diani & Watamu School Break Deals">August Holiday Diani & Watamu School Break Deals</option>
                <option value="Diani Beachfront Turquoise Escape">Diani Beachfront Turquoise Escape</option>
                <option value="Maasai Mara Big Five 4x4 Safari Experience">Maasai Mara Big Five 4x4 Safari Experience</option>
                <option value="Dubai Futuristic City & Desert Safari">Dubai Futuristic City & Desert Safari</option>
                <option value="Watamu Marine Sanctuary & Malindi">Watamu Marine Sanctuary & Malindi</option>
                <option value="Amboseli Elephants & Kilimanjaro Views">Amboseli Elephants & Kilimanjaro Views</option>
                <option value="South Africa Cape Town & Wine Country">South Africa Cape Town & Wine Country</option>
                <option value="Visa Assistance Services Consultation">Visa Assistance Services Consultation</option>
                <option value="Custom Group Safari / Corporate Retreat">Custom Group Safari / Corporate Retreat</option>
              </select>
            </div>

            {/* Travel Date & Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Estimated Travel Date
                </label>
                <input
                  type="date"
                  value={travelDate}
                  onChange={(e) => setTravelDate(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none text-slate-700"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Number of Guests
                </label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(e.target.value)}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none font-medium text-slate-800"
                >
                  <option value="1 Adult (Solo Traveler)">1 Adult (Solo)</option>
                  <option value="2 Adults (Couple / Pair)">2 Adults (Couple)</option>
                  <option value="Family (2 Adults + Children)">Family (Adults + Kids)</option>
                  <option value="Group (4 - 8 Travelers)">Group (4 - 8 Travelers)</option>
                  <option value="Corporate / Large Group (10+)">Corporate Group (10+)</option>
                </select>
              </div>
            </div>

            {/* Special Notes */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Special Requests / Requirements
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Tell us about preferred airline, lodge preferences, dietary needs, or specific dates..."
                className="w-full px-3.5 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:border-amber-500 focus:bg-white outline-none"
              />
            </div>

            {/* Dual CTA buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="submit"
                className="flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs rounded-lg shadow transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp ({COMPANY_INFO.whatsapp})</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="py-3 px-4 bg-slate-900 hover:bg-slate-800 active:scale-95 text-white font-semibold text-xs rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Email Concierge</span>
              </button>
            </div>

            <p className="text-[11px] text-slate-400 text-center pt-1">
              Guaranteed privacy · No spam · Instant reply from our Nairobi concierge team
            </p>

          </form>
        )}

      </div>
    </div>
  );
}
