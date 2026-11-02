import { X, MessageCircle, Sparkles } from 'lucide-react';
import { Vehicle, BRAND_COLORS, SHOWROOM_CONTACT } from '../data/vehicles';
import { Language, TRANSLATIONS } from '../data/translations';

interface VehicleCompareModalProps {
  vehicles: Vehicle[];
  onClose: () => void;
  lang: Language;
}

export function VehicleCompareModal({ vehicles, onClose, lang }: VehicleCompareModalProps) {
  const t = TRANSLATIONS[lang];

  const rows = [
    { label: 'Category', render: (v: Vehicle) => <span className="capitalize font-semibold">{v.category}</span> },
    { label: 'Engine Capacity', render: (v: Vehicle) => <span className="font-bold text-amber-400">{v.cc}</span> },
    { label: 'Mileage / Efficiency', render: (v: Vehicle) => <span className="font-semibold text-emerald-400">{v.mileage}</span> },
    { label: 'Peak Power', render: (v: Vehicle) => v.power },
    { label: 'Max Torque', render: (v: Vehicle) => <strong className="text-white">{v.torque}</strong> },
    { label: 'Fuel Tank', render: (v: Vehicle) => v.fuelCapacity },
    { label: 'Braking System', render: (v: Vehicle) => v.brakes },
    { label: 'Ideal For', render: (v: Vehicle) => v.bestFor },
    {
      label: 'On-Road Pricing',
      render: (v: Vehicle) => (
        <span className="text-amber-400 font-bold flex items-center gap-1 text-xs">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ask on WhatsApp</span>
        </span>
      ),
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl bg-[#171b1f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in duration-200">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-[#121619]">
          <div>
            <h3 className="font-heading text-2xl sm:text-3xl text-white">
              Side-by-Side Model Comparison
            </h3>
            <p className="text-xs text-neutral-400 mt-0.5">
              Compare engine, mileage, power and features across selected vehicles.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 font-bold text-neutral-400 uppercase w-1/4">Model</th>
                {vehicles.map((v) => (
                  <th key={v.id} className="py-3 px-4 font-bold text-white text-base">
                    <div className="w-full h-24 rounded-lg overflow-hidden mb-2 bg-neutral-900">
                      <img
                        src={v.image}
                        alt={`${v.brand} ${v.name}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span 
                      className="inline-block px-2 py-0.5 rounded text-[11px] uppercase mr-2 text-white"
                      style={{ backgroundColor: BRAND_COLORS[v.brand] }}
                    >
                      {v.brand}
                    </span>
                    <span className="block mt-1 font-heading text-lg sm:text-xl">{v.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white/[0.01]' : 'bg-transparent'}>
                  <td className="py-3.5 px-4 font-medium text-neutral-400">{row.label}</td>
                  {vehicles.map((v) => (
                    <td key={v.id} className="py-3.5 px-4 text-neutral-200 font-sans">
                      {row.render(v)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="py-4 px-4 font-bold text-neutral-400">Best Price Quote</td>
                {vehicles.map((v) => {
                  const msg = encodeURIComponent(
                    `Hi M.M. Bike Point, I am comparing ${v.brand} ${v.name} and want to know today's special on-road price, discount offers and ready delivery in Dahisar West.`
                  );
                  return (
                    <td key={v.id} className="py-4 px-4">
                      <a
                        href={`https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${msg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-700 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp Offer</span>
                      </a>
                    </td>
                  );
                })}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
