import { Vehicle, BRAND_COLORS } from '../data/vehicles';

interface BrandBarProps {
  selectedBrand: string;
  onSelectBrand: (brand: string) => void;
  brandCounts: Record<string, number>;
}

export function BrandBar({ selectedBrand, onSelectBrand, brandCounts }: BrandBarProps) {
  const brands: Vehicle['brand'][] = ['Hero', 'Honda', 'Bajaj', 'TVS', 'Suzuki', 'Yamaha'];

  return (
    <div className="bg-amber-400 text-neutral-950 py-3 shadow-inner overflow-x-auto scrollbar-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-w-max gap-3 sm:gap-6">
          <div className="flex items-center gap-2 pr-4 border-r border-neutral-900/15">
            <span className="font-heading text-xs tracking-wider uppercase text-neutral-900 font-bold">
              Brands Available:
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => onSelectBrand('All')}
              className={`px-3 py-1.5 rounded text-xs font-bold uppercase transition-all tracking-wide cursor-pointer ${
                selectedBrand === 'All'
                  ? 'bg-neutral-950 text-white shadow-sm'
                  : 'text-neutral-900 hover:bg-neutral-950/10'
              }`}
            >
              All Brands
            </button>

            {brands.map((brand) => {
              const isSelected = selectedBrand === brand;
              const count = brandCounts[brand] || 0;
              return (
                <button
                  key={brand}
                  onClick={() => onSelectBrand(brand)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded transition-all cursor-pointer font-heading text-sm sm:text-base tracking-wide uppercase ${
                    isSelected
                      ? 'bg-neutral-950 text-white shadow-md'
                      : 'text-neutral-950 hover:bg-neutral-950/10'
                  }`}
                >
                  <span
                    className="w-2.5 h-2.5 rounded-full inline-block"
                    style={{ backgroundColor: BRAND_COLORS[brand] }}
                  />
                  <span>{brand}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded font-sans font-bold ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-neutral-900/10 text-neutral-800'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
