import { Bike, MessageCircle, ShieldCheck, Zap, Award, Sparkles, MapPin } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SHOWROOM_CONTACT } from '../data/vehicles';

interface HeroProps {
  lang: Language;
  onOpenTestRide: () => void;
  onSelectBrand?: (brand: string) => void;
}

export function Hero({ lang, onOpenTestRide }: HeroProps) {
  const t = TRANSLATIONS[lang];

  const whatsappHeroUrl = `https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${encodeURIComponent(
    'Hi M.M. Bike Point, I am looking to buy a new bike/scooter. Please share your current offers and quotation.'
  )}`;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#181d21] via-[#14181b] to-[#101315] pt-10 pb-16 sm:pt-16 sm:pb-20 border-b border-white/5">
      {/* Background Graphic watermark */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-heading text-[18rem] md:text-[28rem] text-white leading-none z-0"
        aria-hidden="true"
      >
        M.M.
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Location & Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-3.5 h-3.5" />
            <span>{t.heroBadge}</span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl sm:text-7xl lg:text-8xl tracking-tight text-white leading-[0.95] mb-6">
            {t.heroHeading} <br />
            <span className="text-amber-400 underline decoration-red-600 decoration-4 sm:decoration-8 underline-offset-8">
              {t.heroHeadingAccent}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-8">
            {t.heroSub}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-3.5 mb-12">
            <button
              onClick={onOpenTestRide}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 shadow-lg shadow-red-950/40 transition-all cursor-pointer text-sm sm:text-base"
            >
              <Bike className="w-5 h-5" />
              <span>{t.btnTestRide}</span>
            </button>

            <a
              href={whatsappHeroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white bg-[#25a244] hover:bg-[#208a3a] transition-all shadow-md text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t.btnWhatsApp}</span>
            </a>

            <a
              href="#vehicles"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg font-semibold text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm sm:text-base"
            >
              <span>{t.btnExploreCatalog}</span>
            </a>
          </div>

          {/* Highlight Value Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
            <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 text-amber-400 font-heading text-2xl sm:text-3xl">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t.statsModels}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{t.statsModelsSub}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 text-amber-400 font-heading text-2xl sm:text-3xl">
                <Award className="w-4 h-4 text-amber-400" />
                <span>{t.statsCustomers}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{t.statsCustomersSub}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 text-amber-400 font-heading text-2xl sm:text-3xl">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>{t.statsDelivery}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{t.statsDeliverySub}</p>
            </div>

            <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/5">
              <div className="flex items-center gap-1.5 text-amber-400 font-heading text-2xl sm:text-3xl">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>{t.statsFinancing}</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">{t.statsFinancingSub}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
