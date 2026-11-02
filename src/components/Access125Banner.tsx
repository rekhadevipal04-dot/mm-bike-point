import { Sparkles, Smartphone, Eye, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Language } from '../data/translations';

interface Access125BannerProps {
  onOpenShowcase: () => void;
  lang: Language;
}

export function Access125Banner({ onOpenShowcase, lang }: Access125BannerProps) {
  return (
    <section className="py-8 bg-gradient-to-r from-blue-950 via-[#161f28] to-[#12161a] border-y border-blue-500/20 relative overflow-hidden">
      {/* Background Watermark */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none opacity-[0.03] font-heading text-[14rem] text-white leading-none z-0"
        aria-hidden="true"
      >
        ACCESS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Special Model Feature • Studied from BikeDekho</span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl text-white tracking-tight leading-tight">
              Suzuki Access 125 Ride Connect Bluetooth Edition
            </h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Explore 15 real photos, all 5 official colors, turn-by-turn Bluetooth navigation, WhatsApp &amp; call alerts, front USB charging, and class-leading 24.4L boot space. Available in ready showroom stock at M.M. Bike Point Dahisar West!
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-300 pt-1">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>15 High-Res Photos</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>Bluetooth GPS Navigation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Message &amp; Call Alert</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>48-52 kmpl Mileage</span>
              </span>
            </div>
          </div>

          {/* Right Action Thumbnail Showcase */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
            <div className="relative w-48 sm:w-56 h-32 rounded-xl overflow-hidden border-2 border-blue-400/40 bg-neutral-900 shadow-xl group">
              <img
                src="https://s3.ap-south-1.amazonaws.com/suzuki-website-s3/public-live/uploads/product-gallery-images/original/30/370-01-2025-Suzuki-Access-Website_Absolute-Side_620x428pix-01.png"
                alt="Suzuki Access 125 Bluetooth Edition"
                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute bottom-1.5 right-1.5 bg-black/80 text-[10px] text-amber-400 font-bold px-1.5 py-0.5 rounded">
                15 Photos
              </span>
            </div>

            <button
              onClick={onOpenShowcase}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all text-sm cursor-pointer shadow-lg shadow-amber-400/20"
            >
              <Eye className="w-4 h-4" />
              <span>View Access 125 Deep Dive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
