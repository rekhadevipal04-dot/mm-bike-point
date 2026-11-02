import { useState, useMemo } from 'react';
import { Search, X, MessageCircle, Info, Check, SlidersHorizontal, Fuel, Gauge, Sparkles, ArrowUpDown } from 'lucide-react';
import { Vehicle, BRAND_COLORS, SHOWROOM_CONTACT } from '../data/vehicles';
import { Language, TRANSLATIONS } from '../data/translations';

interface VehicleCatalogProps {
  vehicles: Vehicle[];
  lang: Language;
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  onOpenSpecs: (vehicle: Vehicle) => void;
  onOpenTestRide: (vehicleName: string) => void;
  compareList: Vehicle[];
  onToggleCompare: (vehicle: Vehicle) => void;
  onOpenAccess125Showcase?: () => void;
}

export function VehicleCatalog({
  vehicles,
  lang,
  selectedBrand,
  onSelectBrand,
  onOpenSpecs,
  onOpenTestRide,
  compareList,
  onToggleCompare,
  onOpenAccess125Showcase,
}: VehicleCatalogProps) {
  const t = TRANSLATIONS[lang];
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'motorcycle' | 'scooter'>('all');
  const [ccFilter, setCcFilter] = useState<'all' | 'under115' | '125' | '150plus'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'cc' | 'name'>('popular');

  const filteredVehicles = useMemo(() => {
    return vehicles
      .filter((v) => {
        // Brand filter
        if (selectedBrand !== 'All' && v.brand !== selectedBrand) return false;

        // Category filter
        if (categoryFilter !== 'all' && v.category !== categoryFilter) return false;

        // CC filter
        if (ccFilter === 'under115' && v.ccValue > 115) return false;
        if (ccFilter === '125' && (v.ccValue < 120 || v.ccValue > 130)) return false;
        if (ccFilter === '150plus' && v.ccValue < 145) return false;

        // Search term
        if (searchTerm.trim() !== '') {
          const query = searchTerm.toLowerCase();
          const matchName = v.name.toLowerCase().includes(query);
          const matchBrand = v.brand.toLowerCase().includes(query);
          const matchTagline = v.tagline.toLowerCase().includes(query);
          const matchBest = v.bestFor.toLowerCase().includes(query);
          if (!matchName && !matchBrand && !matchTagline && !matchBest) return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'popular') {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'cc') return b.ccValue - a.ccValue;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [vehicles, selectedBrand, categoryFilter, ccFilter, searchTerm, sortBy]);

  const getWhatsAppMessage = (vehicle: Vehicle) => {
    return encodeURIComponent(
      `Hi M.M. Bike Point, I am interested in ${vehicle.brand} ${vehicle.name} (${vehicle.cc}). Please share today's best on-road price, festive discount offers and EMI schemes in Dahisar West.`
    );
  };

  return (
    <section id="vehicles" className="py-14 sm:py-20 bg-[#121619] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
              {t.brandSectionTitle}
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
              {t.catalogTitle}
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-2 max-w-2xl">
              {t.catalogSub}
            </p>
          </div>

          <div className="text-xs text-neutral-400 flex items-center gap-2">
            <span>Showing <strong className="text-white">{filteredVehicles.length}</strong> of {vehicles.length} available models</span>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-[#181d22] border border-white/10 rounded-xl p-4 sm:p-5 mb-8 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-9 py-2.5 rounded-lg bg-[#111417] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-400 transition-colors"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Buttons */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 md:pb-0">
              <button
                onClick={() => setCategoryFilter('all')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  categoryFilter === 'all'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                }`}
              >
                {t.filterAll}
              </button>
              <button
                onClick={() => setCategoryFilter('motorcycle')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  categoryFilter === 'motorcycle'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                }`}
              >
                {t.filterBikes}
              </button>
              <button
                onClick={() => setCategoryFilter('scooter')}
                className={`px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  categoryFilter === 'scooter'
                    ? 'bg-amber-400 text-neutral-950 font-bold'
                    : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                }`}
              >
                {t.filterScooters}
              </button>
            </div>

            {/* Sort Selector */}
            <div className="md:col-span-3 flex items-center justify-end gap-2">
              <div className="flex items-center gap-1.5 text-xs text-neutral-400">
                <ArrowUpDown className="w-3.5 h-3.5 text-neutral-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-[#111417] border border-white/10 text-neutral-200 text-xs rounded-lg px-2.5 py-2 focus:outline-none focus:border-amber-400 cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="cc">Engine CC (High to Low)</option>
                  <option value="name">Model Name (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Engine CC Subfilters */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-white/5 text-xs">
            <span className="text-neutral-400 flex items-center gap-1">
              <SlidersHorizontal className="w-3 h-3" />
              <span>Engine CC:</span>
            </span>
            <button
              onClick={() => setCcFilter('all')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                ccFilter === 'all' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Capacities
            </button>
            <button
              onClick={() => setCcFilter('under115')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                ccFilter === 'under115' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              100cc - 110cc (Mileage Champions)
            </button>
            <button
              onClick={() => setCcFilter('125')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                ccFilter === '125' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              125cc (Executive & Modern)
            </button>
            <button
              onClick={() => setCcFilter('150plus')}
              className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                ccFilter === '150plus' ? 'bg-white/20 text-white font-bold' : 'text-neutral-400 hover:text-white'
              }`}
            >
              150cc+ (Power & Sports)
            </button>
          </div>
        </div>

        {/* Empty state */}
        {filteredVehicles.length === 0 && (
          <div className="py-16 text-center bg-[#181d22] rounded-xl border border-white/5">
            <div className="text-neutral-400 text-lg mb-2">No vehicles found matching your criteria</div>
            <p className="text-neutral-500 text-sm mb-4">Try clearing filters or search term to view all 28+ available showroom models.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setCategoryFilter('all');
                setCcFilter('all');
                onSelectBrand('All');
              }}
              className="px-4 py-2 bg-amber-400 text-neutral-950 font-bold rounded-md text-sm hover:bg-amber-300 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredVehicles.map((vehicle) => {
            const isComparing = compareList.some((item) => item.id === vehicle.id);
            const brandColor = BRAND_COLORS[vehicle.brand];

            return (
              <div
                key={vehicle.id}
                className="bg-[#171b1f] border border-white/10 hover:border-amber-400/40 rounded-xl overflow-hidden flex flex-col group transition-all duration-200 hover:shadow-2xl hover:shadow-black/60"
              >
                {/* Real High-Resolution Vehicle Photo */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.name}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 group-hover:brightness-100"
                    onError={(e) => {
                      // Fallback gracefully if image network drops
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Gradient shadow overlay for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#171b1f] via-black/20 to-black/50 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span
                      className="px-2.5 py-1 rounded text-[11px] font-bold text-white shadow-md flex items-center gap-1.5"
                      style={{ backgroundColor: brandColor }}
                    >
                      <span>{vehicle.brand}</span>
                    </span>

                    {vehicle.popular && (
                      <span className="bg-amber-400 text-neutral-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Bottom Image Tags */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-white">
                    <span className="capitalize bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded font-medium border border-white/10">
                      {vehicle.category}
                    </span>
                    <span className="bg-black/60 backdrop-blur-xs px-2.5 py-0.5 rounded font-bold text-amber-400 border border-white/10">
                      {vehicle.cc}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 flex-1 flex flex-col justify-between gap-3">
                  <div>
                    <h3 className="font-heading text-xl sm:text-2xl text-white group-hover:text-amber-400 transition-colors leading-tight">
                      {vehicle.name}
                    </h3>

                    {/* Tagline snippet */}
                    <p className="text-neutral-400 text-xs line-clamp-2 mt-1 leading-relaxed">
                      {vehicle.tagline}
                    </p>

                    {/* Key Specs Pills */}
                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-white/5 text-[11px] text-neutral-300">
                      <div className="flex items-center gap-1.5">
                        <Fuel className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{vehicle.mileage}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="truncate">{vehicle.power.split('@')[0]}</span>
                      </div>
                    </div>
                    <div className="mt-1 text-[11px] text-neutral-400 flex items-center justify-between">
                      <span>Torque: <strong className="text-white">{vehicle.torque.split('@')[0]}</strong></span>
                      <span>Tank: <strong className="text-white">{vehicle.fuelCapacity}</strong></span>
                    </div>

                    {/* Price on Request Callout (No Fixed Prices) */}
                    <div className="mt-3.5 pt-3 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-neutral-400 block">Pricing & Offers</span>
                        <span className="text-xs sm:text-sm font-bold text-amber-400 flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-amber-400" />
                          <span>Ask for Today's Price</span>
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[11px] text-neutral-400 block">EMI Scheme</span>
                        <span className="text-xs font-semibold text-emerald-400">
                          Low EMI Available
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex flex-col gap-2">
                    {vehicle.id === 'suzuki-access-125' && onOpenAccess125Showcase && (
                      <button
                        onClick={onOpenAccess125Showcase}
                        className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 border border-blue-400/30 transition-all cursor-pointer shadow-md"
                      >
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                        <span>View 15 Photos &amp; Bluetooth Study</span>
                      </button>
                    )}

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => {
                          if (vehicle.id === 'suzuki-access-125' && onOpenAccess125Showcase) {
                            onOpenAccess125Showcase();
                          } else {
                            onOpenSpecs(vehicle);
                          }
                        }}
                        className="flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>{t.btnViewSpecs}</span>
                      </button>

                      <button
                        onClick={() => onToggleCompare(vehicle)}
                        className={`flex items-center justify-center gap-1 px-3 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                          isComparing
                            ? 'bg-amber-400 text-neutral-950 font-bold'
                            : 'text-neutral-400 hover:text-white bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        {isComparing ? <Check className="w-3.5 h-3.5" /> : null}
                        <span>{isComparing ? 'Added' : t.btnCompare}</span>
                      </button>
                    </div>

                    <a
                      href={`https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${getWhatsAppMessage(vehicle)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.btnEnquire}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note at bottom */}
        <p className="text-xs text-neutral-500 mt-8 text-center">
          * Ready stock available at Shop 5 & 6 Mandapeshwar showroom. Contact M.M. Bike Point on WhatsApp or phone for today's special on-road quote, exchange bonus, and festive discounts.
        </p>
      </div>
    </section>
  );
}
