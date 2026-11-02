import { Phone, MessageCircle, MapPin, Mail, ChevronRight } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SHOWROOM_CONTACT } from '../data/vehicles';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = TRANSLATIONS[lang];

  return (
    <footer className="bg-[#0e1113] border-t border-white/10 text-neutral-400 text-xs pt-14 pb-28 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-600 border-2 border-amber-400 flex items-center justify-center font-heading text-amber-400 text-lg font-bold">
                MM
              </div>
              <div>
                <span className="font-heading text-xl text-white block leading-none">
                  M.M. BIKE POINT
                </span>
                <span className="text-amber-400 text-[11px] font-semibold">
                  {SHOWROOM_CONTACT.devanagariName}
                </span>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {t.footerTagline}
            </p>

            <div className="pt-2 text-neutral-300 space-y-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                <span className="text-neutral-300 font-medium">Showroom Open Today: 9:30 AM - 9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#vehicles" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.navVehicles}</span>
                </a>
              </li>
              <li>
                <a href="#how-to-buy" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.navHowToBuy}</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.navWhyUs}</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.navContact}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Brands Represented */}
          <div>
            <h4 className="font-heading text-sm text-white uppercase tracking-wider mb-4">
              Brands Under One Roof
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="p-2 rounded bg-white/[0.03] text-neutral-300 font-semibold">Hero MotoCorp</span>
              <span className="p-2 rounded bg-white/[0.03] text-neutral-300 font-semibold">Honda 2-Wheelers</span>
              <span className="p-2 rounded bg-white/[0.03] text-neutral-300 font-semibold">Bajaj Auto</span>
              <span className="p-2 rounded bg-white/[0.03] text-neutral-300 font-semibold">TVS Motor</span>
              <span className="p-2 rounded bg-white/[0.03] text-neutral-300 font-semibold">Suzuki Motorcycle</span>
              <span className="p-2 rounded bg-white/[0.03] text-neutral-300 font-semibold">Yamaha Motor</span>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading text-sm text-white uppercase tracking-wider mb-4">
              Showroom Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{SHOWROOM_CONTACT.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:+91${SHOWROOM_CONTACT.phone}`} className="hover:text-white font-bold text-amber-400">
                  {SHOWROOM_CONTACT.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${SHOWROOM_CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-semibold text-emerald-400"
                >
                  WhatsApp: 9920818074
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} M.M. Bike Point, Dahisar West, Mumbai. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#vehicles" className="hover:text-neutral-300">Vehicles</a>
            <span>·</span>
            <a href="#how-to-buy" className="hover:text-neutral-300">How to Buy</a>
            <span>·</span>
            <a href="#contact" className="hover:text-neutral-300">Directions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
