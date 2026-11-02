import { X, ArrowRight, GitCompare } from 'lucide-react';
import { Vehicle } from '../data/vehicles';
import { Language, TRANSLATIONS } from '../data/translations';

interface VehicleCompareBarProps {
  compareList: Vehicle[];
  onRemove: (vehicleId: string) => void;
  onClear: () => void;
  onOpenCompareModal: () => void;
  lang: Language;
}

export function VehicleCompareBar({
  compareList,
  onRemove,
  onClear,
  onOpenCompareModal,
  lang,
}: VehicleCompareBarProps) {
  if (compareList.length === 0) return null;

  const t = TRANSLATIONS[lang];

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-2xl bg-[#1a2025]/95 backdrop-blur-md border border-amber-400/40 rounded-xl shadow-2xl p-3 sm:p-4 text-white animate-in slide-in-from-bottom-5">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 shrink-0">
            <GitCompare className="w-4 h-4" />
            <span className="hidden sm:inline">{t.comparing} ({compareList.length}/3):</span>
          </div>

          <div className="flex items-center gap-2">
            {compareList.map((item) => (
              <span
                key={item.id}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-xs font-medium text-white border border-white/10 shrink-0"
              >
                <span>{item.brand} {item.name}</span>
                <button
                  onClick={() => onRemove(item.id)}
                  className="hover:text-red-400 p-0.5"
                  aria-label={`Remove ${item.name}`}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClear}
            className="text-xs text-neutral-400 hover:text-white px-2 py-1"
          >
            Clear
          </button>

          <button
            onClick={onOpenCompareModal}
            disabled={compareList.length < 2}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
              compareList.length >= 2
                ? 'bg-amber-400 text-neutral-950 hover:bg-amber-300'
                : 'bg-white/10 text-neutral-500 cursor-not-allowed'
            }`}
          >
            <span>Compare Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
