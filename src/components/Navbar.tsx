import { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Bike, Globe } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SHOWROOM_CONTACT } from '../data/vehicles';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenTestRide: (vehicleName?: string) => void;
}

export function Navbar({ lang, onToggleLang, onOpenTestRide }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { label: t.navVehicles, href: '#vehicles' },
    { label: t.navHowToBuy, href: '#how-to-buy' },
    { label: t.navWhyUs, href: '#why-us' },
    { label: t.navContact, href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const whatsappLink = `https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${encodeURIComponent(
    'Hi M.M. Bike Point, I am visiting your website and would like information about bikes and scooters.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#121619]/95 backdrop-blur-md border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-0.5 sm:p-1">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-red-600 border-2 border-amber-400 flex items-center justify-center font-heading text-amber-400 text-lg sm:text-xl font-bold tracking-tight shadow-md group-hover:scale-105 transition-transform shrink-0">
              MM
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-heading text-lg sm:text-2xl text-white font-normal tracking-wide leading-none truncate">
                M.M. BIKE POINT
              </span>
              <span className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-wider flex items-center gap-1 mt-0.5">
                <span>{SHOWROOM_CONTACT.devanagariName}</span>
                <span className="text-white/40">·</span>
                <span className="text-neutral-400">Dahisar W</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-amber-400 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2 py-1.5 text-xs font-semibold text-neutral-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md transition-all cursor-pointer"
              title="Toggle English / हिंदी"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="text-[11px] sm:text-xs">{lang === 'en' ? 'हिन्दी' : 'ENG'}</span>
            </button>

            {/* Direct Call Button (Compact icon on mobile, full on desktop) */}
            <a
              href={`tel:+91${SHOWROOM_CONTACT.phone}`}
              className="inline-flex items-center justify-center gap-1.5 p-2 sm:px-3 sm:py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-md transition-colors shadow-sm"
              aria-label="Call Showroom"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{SHOWROOM_CONTACT.phoneFormatted}</span>
            </a>

            {/* WhatsApp Quick Chat */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Test Ride Button */}
            <button
              onClick={() => onOpenTestRide()}
              className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
            >
              <Bike className="w-4 h-4" />
              <span>{t.btnTestRide}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg bg-white/5 text-neutral-300 hover:text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161a1d] border-b border-white/10 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-white/10">
            <a
              href={`tel:+91${SHOWROOM_CONTACT.phone}`}
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-white bg-red-600 rounded-lg active:scale-95 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span>{t.navCall}</span>
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-3 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-lg active:scale-95 transition-transform"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 text-base font-medium text-neutral-200 hover:text-amber-400 hover:bg-white/5 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenTestRide();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors mt-2"
          >
            <Bike className="w-4 h-4" />
            <span>{t.btnTestRide}</span>
          </button>
        </div>
      )}
    </header>
  );
}
