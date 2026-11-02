import { Phone, MessageCircle } from 'lucide-react';
import { SHOWROOM_CONTACT } from '../data/vehicles';

export function FloatingActions() {
  const whatsappUrl = `https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${encodeURIComponent(
    'Hi M.M. Bike Point, I am on your website and want to ask about bike availability and prices.'
  )}`;

  return (
    <div className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Call Button */}
      <a
        href={`tel:+91${SHOWROOM_CONTACT.phone}`}
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white flex items-center justify-center shadow-xl shadow-red-950/50 transition-all border-2 border-white/20 group relative"
        aria-label="Call M.M. Bike Point"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:group-hover:block absolute right-full mr-3 px-2.5 py-1 rounded-md bg-neutral-900 text-white text-xs font-semibold whitespace-nowrap shadow-md">
          Call Showroom
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25a244] hover:bg-[#208a3a] active:scale-95 text-white flex items-center justify-center shadow-xl shadow-emerald-950/50 transition-all border-2 border-white/20 group relative"
        aria-label="Chat on WhatsApp with M.M. Bike Point"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
        <span className="hidden sm:group-hover:block absolute right-full mr-3 px-2.5 py-1 rounded-md bg-neutral-900 text-white text-xs font-semibold whitespace-nowrap shadow-md">
          WhatsApp Instant Reply
        </span>
      </a>
    </div>
  );
}
