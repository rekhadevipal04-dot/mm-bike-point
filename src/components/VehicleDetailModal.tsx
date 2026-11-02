import { X, Fuel, Gauge, MessageCircle, Bike, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { Vehicle, BRAND_COLORS, SHOWROOM_CONTACT } from '../data/vehicles';
import { Language, TRANSLATIONS } from '../data/translations';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
  lang: Language;
  onBookTestRide: (vehicleName: string) => void;
}

export function VehicleDetailModal({ vehicle, onClose, lang, onBookTestRide }: VehicleDetailModalProps) {
  if (!vehicle) return null;

  const t = TRANSLATIONS[lang];
  const brandColor = BRAND_COLORS[vehicle.brand];

  const whatsappMessage = encodeURIComponent(
    `Hi M.M. Bike Point, I want to inquire about ${vehicle.brand} ${vehicle.name} (${vehicle.cc}). Please share today's on-road price in Dahisar West, best festive discount schemes, and delivery timeline.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-2xl bg-[#171b1f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Image & Header Banner */}
        <div className="relative h-56 sm:h-64 w-full bg-neutral-900 overflow-hidden">
          <img
            src={vehicle.image}
            alt={`${vehicle.brand} ${vehicle.name}`}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#171b1f] via-black/40 to-black/60 pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white/90 hover:text-white transition-colors cursor-pointer z-10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Text Details */}
          <div className="absolute bottom-4 left-6 right-6 z-10 text-white">
            <div className="flex items-center gap-2 mb-1.5">
              <span 
                className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: brandColor }}
              >
                {vehicle.brand}
              </span>
              <span className="text-xs font-semibold text-amber-400 capitalize bg-black/60 px-2.5 py-0.5 rounded border border-white/10">
                {vehicle.category}
              </span>
              <span className="text-xs font-bold text-white bg-black/60 px-2.5 py-0.5 rounded border border-white/10">
                {vehicle.cc}
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl tracking-tight leading-none">
              {vehicle.name}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-lg line-clamp-1">
              {vehicle.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Price Overview Banner (No Fixed Prices) */}
          <div className="p-4 rounded-xl bg-[#111417] border border-white/5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-neutral-400 block">On-Road Pricing & Offers</span>
              <div className="flex items-center gap-2 text-amber-400 font-heading text-xl sm:text-2xl mt-0.5">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Price on Request (Best Showroom Offer)</span>
              </div>
              <span className="text-xs text-neutral-400 block mt-1">
                WhatsApp us for today's RTO, insurance, and seasonal cashback quote
              </span>
            </div>

            <div className="text-left sm:text-right">
              <span className="text-xs text-neutral-400 block">Finance Schemes</span>
              <span className="text-sm font-bold text-emerald-400 block">
                0% Down Payment Options
              </span>
              <span className="text-[11px] text-neutral-400 block">Instant Paperless Approval</span>
            </div>
          </div>

          {/* Full Specifications Grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-heading text-lg text-white flex items-center gap-2">
                <Gauge className="w-4 h-4 text-amber-400" />
                <span>Technical Specifications (BikeDekho Verified)</span>
              </h4>

              {vehicle.bikedekhoUrl && (
                <a
                  href={vehicle.bikedekhoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-blue-400 hover:text-blue-300 underline font-semibold flex items-center gap-1"
                >
                  <span>View on BikeDekho</span>
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-neutral-400 block mb-1">Engine Capacity</span>
                <span className="text-sm font-bold text-white">{vehicle.cc}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-neutral-400 block mb-1">Fuel Economy / Mileage</span>
                <span className="text-sm font-bold text-amber-400">{vehicle.mileage}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-neutral-400 block mb-1">Power Output</span>
                <span className="text-sm font-bold text-white">{vehicle.power}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-neutral-400 block mb-1">Peak Torque</span>
                <span className="text-sm font-bold text-white">{vehicle.torque}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-neutral-400 block mb-1">Fuel Tank Capacity</span>
                <span className="text-sm font-bold text-white">{vehicle.fuelCapacity}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5">
                <span className="text-neutral-400 block mb-1">Braking System</span>
                <span className="text-sm font-bold text-white">{vehicle.brakes}</span>
              </div>
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/5 sm:col-span-3">
                <span className="text-neutral-400 block mb-1">Recommended Rider</span>
                <span className="text-sm font-bold text-white" title={vehicle.bestFor}>
                  {vehicle.bestFor}
                </span>
              </div>
            </div>
          </div>

          {/* Available Colors */}
          <div>
            <h4 className="font-heading text-lg text-white mb-3">Popular Color Options</h4>
            <div className="flex flex-wrap gap-2">
              {vehicle.colors.map((color) => (
                <span
                  key={color}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium flex items-center gap-1.5"
                >
                  <Check className="w-3 h-3 text-amber-400" />
                  <span>{color}</span>
                </span>
              ))}
            </div>
          </div>

          {/* M.M. Bike Point Benefits */}
          <div className="p-4 rounded-xl bg-amber-400/5 border border-amber-400/20">
            <h5 className="font-heading text-sm text-amber-400 mb-2 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>M.M. Bike Point Mandapeshwar Showroom Assurance</span>
            </h5>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
              <li className="flex items-center gap-1.5">✓ Ready stock available with same-day test rides</li>
              <li className="flex items-center gap-1.5">✓ 15-minute quick loan sanction on Aadhaar + PAN</li>
              <li className="flex items-center gap-1.5">✓ Complimentary helmet & accessory kit</li>
              <li className="flex items-center gap-1.5">✓ Best exchange bonus for your old two-wheeler</li>
            </ul>
          </div>
        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-6 bg-[#111417] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onBookTestRide(vehicle.name);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors text-xs sm:text-sm cursor-pointer"
          >
            <Bike className="w-4 h-4" />
            <span>Book Test Ride</span>
          </button>

          <a
            href={`https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-white bg-red-600 hover:bg-red-700 transition-colors text-xs sm:text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get Best Price on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
