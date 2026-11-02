import { useState, useEffect } from 'react';
import { X, Bike, Calendar, Clock, Send, CheckCircle2 } from 'lucide-react';
import { VEHICLES, SHOWROOM_CONTACT } from '../data/vehicles';
import { Language, TRANSLATIONS } from '../data/translations';

interface TestRideModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  initialVehicle?: string;
}

export function TestRideModal({ isOpen, onClose, lang, initialVehicle }: TestRideModalProps) {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState(initialVehicle || 'Honda Activa 6G');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Evening (4 PM - 7 PM)');

  useEffect(() => {
    if (initialVehicle) {
      setVehicle(initialVehicle);
    }
  }, [initialVehicle]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hi M.M. Bike Point, I want to book a Test Ride:
- Name: ${name}
- Phone: ${phone}
- Model: ${vehicle}
- Date: ${date || 'Any day this week'}
- Time: ${timeSlot}
Please confirm my test ride slot at Mandapeshwar, Dahisar West showroom.`;

    const url = `https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${encodeURIComponent(formatted)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-lg bg-[#171b1f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-5 bg-gradient-to-r from-red-900/60 to-[#171b1f] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-red-600 flex items-center justify-center text-white">
              <Bike className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl text-white">
                Book a Free Test Ride
              </h3>
              <p className="text-[11px] text-neutral-300">
                Experience the ride at M.M. Bike Point, Dahisar West
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              {t.yourName} *
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Anand Kulkarni"
              className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              {t.phoneNumber} *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 9820123456"
              className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-1">
              {t.selectedVehicle}
            </label>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-400"
            >
              {VEHICLES.map((v) => (
                <option key={v.id} value={`${v.brand} ${v.name}`}>
                  {v.brand} {v.name} ({v.cc})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                {t.preferredDate}
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-neutral-300 mb-1">
                {t.preferredTime}
              </label>
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3 py-2 text-xs sm:text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                <option value="Night (7 PM - 9 PM)">Night (7 PM - 9 PM)</option>
              </select>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-amber-400/5 border border-amber-400/20 text-xs text-neutral-300 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Zero obligation, 100% free test ride</span>
            </div>
            <p className="text-[11px] text-neutral-400">
              Valid driving license required at time of riding. Helmet provided by showroom.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition-colors shadow-lg shadow-red-950/40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
