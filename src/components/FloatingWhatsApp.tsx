import { useState } from 'react';
import { COMPANY_INFO } from '../data/travelData';
import { MessageSquare, X, Send, Phone } from 'lucide-react';
import { Logo } from './Logo';

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userQuery, setUserQuery] = useState('');

  const handleStartChat = (e: React.FormEvent) => {
    e.preventDefault();
    const query = userQuery || 'Hello Push World Travel Ltd! I would like to inquire about your travel packages.';
    const url = `${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank');
    setUserQuery('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Expanded Popup Chat Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo variant="emblem-only" size="sm" />
              <div>
                <div className="font-bold text-sm leading-tight">Push World Travel Ltd</div>
                <div className="text-[10px] text-emerald-100 flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online · Typically replies in seconds</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Bubble Area */}
          <div className="p-4 bg-emerald-50/50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-xs border border-slate-100 text-slate-800 space-y-1">
              <p className="font-semibold text-slate-900">
                Hi 👋, welcome to Push World Travel Ltd!
              </p>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                🌍 {COMPANY_INFO.tagline}
                <br />
                ✈️ {COMPANY_INFO.servicesBio}
                <br />
                ✨ {COMPANY_INFO.promiseBio}
              </p>
              <p className="text-slate-600 pt-1">
                How can our travel advisors assist you today?
              </p>
            </div>

            {/* Quick action buttons */}
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => {
                  window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Push World Travel Ltd! I would like to book a Maasai Mara safari.')}`, '_blank');
                  setIsOpen(false);
                }}
                className="w-full text-left p-2 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-[11px] font-medium text-slate-700 transition-colors flex items-center justify-between"
              >
                <span>🦁 Inquire about Kenya Safaris</span>
                <Send className="w-3 h-3 text-emerald-600" />
              </button>

              <button
                onClick={() => {
                  window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Push World Travel Ltd! I would like to book a Diani Beach holiday.')}`, '_blank');
                  setIsOpen(false);
                }}
                className="w-full text-left p-2 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-[11px] font-medium text-slate-700 transition-colors flex items-center justify-between"
              >
                <span>🏖️ Inquire about Beach Packages</span>
                <Send className="w-3 h-3 text-emerald-600" />
              </button>

              <button
                onClick={() => {
                  window.open(`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hello Push World Travel Ltd! I need assistance with Flight and Visa bookings.')}`, '_blank');
                  setIsOpen(false);
                }}
                className="w-full text-left p-2 bg-white hover:bg-emerald-50 border border-slate-200 rounded-lg text-[11px] font-medium text-slate-700 transition-colors flex items-center justify-between"
              >
                <span>✈️ Flights & Visa Consultation</span>
                <Send className="w-3 h-3 text-emerald-600" />
              </button>
            </div>
          </div>

          {/* Input Box */}
          <form onSubmit={handleStartChat} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              value={userQuery}
              onChange={(e) => setUserQuery(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 font-medium"
            />
            <button
              type="submit"
              className="p-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shrink-0"
              title="Send to WhatsApp"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          {/* Direct call option in footer */}
          <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
            <span>Or call us directly:</span>
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-slate-800 hover:text-emerald-700 flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Badge Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl hover:shadow-emerald-600/30 active:scale-95 transition-all duration-200 border-2 border-white focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Open WhatsApp live chat"
      >
        <MessageSquare className="w-5 h-5 fill-white/20" />
        <div className="text-left text-xs font-bold leading-none hidden sm:block">
          <div>Chat with us</div>
          <div className="text-[10px] text-emerald-100 font-normal mt-0.5">WhatsApp · {COMPANY_INFO.whatsapp}</div>
        </div>
      </button>
    </div>
  );
}
