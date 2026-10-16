target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat Now</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 active:scale-95 transition-all rounded-lg shadow-sm hover:shadow flex items-center gap-2 whitespace-nowrap"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Request Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-amber-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-5 py-6 space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-2 text-base font-semibold text-slate-800">
            <button 
              onClick={() => handleNavClick('/about')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>About Us</span>
            </button>
            <button 
              onClick={() => handleNavClick('/services')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>Services</span>
              <FileCheck className="w-4 h-4 text-amber-500" />
            </button>
            <div className="ml-4 border-l-2 border-amber-200 pl-3 flex flex-col gap-1 text-sm font-medium">
              <button onClick={() => handleNavClick('/services/luxury-premium-travel')} className="text-left py-2">Luxury &amp; Premium Travel</button>
              <button onClick={() => handleNavClick('/services/custom-trip-planner')} className="text-left py-2">Custom Trip Planner</button>
              <button onClick={() => handleNavClick('/services/corporate-travel')} className="text-left py-2">Corporate Travel</button>
            </div>
            <button 
              onClick={() => handleNavClick('/packages')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>Destinations</span>
              <Compass className="w-4 h-4 text-amber-500" />
            </button>
            <button 
              onClick={() => handleNavClick('/packages')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors flex items-center justify-between"
            >
              <span>Tours & Packages</span>
              <Palmtree className="w-4 h-4 text-emerald-500" />
            </button>
            <button 
              onClick={() => handleNavClick('/brochures')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              Digital Brochures
            </button>
            <button 
              onClick={() => handleNavClick('/why-us')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              Why Choose Pushworld Travel
            </button>
            <button 
              onClick={() => handleNavClick('/reviews')}
              className="text-left py-2 px-3 rounded-lg hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              Nairobi Office Map & Google Reviews
            </button>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
              className="w-full py-3 text-sm font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-lg shadow text-center flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Request Custom Travel Quote</span>
            </button>

            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi Push World Travel Ltd! I would like to plan a trip.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {COMPANY_INFO.whatsapp}</span>
            </a>

            <a
              href={`tel:${COMPANY_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full py-2 text-xs font-medium text-slate-600 text-center flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>Call Direct: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
