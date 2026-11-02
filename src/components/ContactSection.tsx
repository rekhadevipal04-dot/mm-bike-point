import { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Calendar, Bike, Send, Navigation } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';
import { SHOWROOM_CONTACT, VEHICLES } from '../data/vehicles';

interface ContactSectionProps {
  lang: Language;
  preselectedVehicle?: string;
}

export function ContactSection({ lang, preselectedVehicle }: ContactSectionProps) {
  const t = TRANSLATIONS[lang];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [vehicle, setVehicle] = useState(preselectedVehicle || 'Honda Activa 6G');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Evening (4 PM - 7 PM)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hi M.M. Bike Point, I want to book a test ride / showroom visit:
- Name: ${name}
- Phone: ${phone}
- Vehicle: ${vehicle || 'General Inquiry'}
- Preferred Date: ${date || 'Earliest available'}
- Preferred Time: ${timeSlot}
Please confirm availability at Shop 5 & 6 Mandapeshwar showroom.`;

    const url = `https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-[#121619] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>Showroom Location & Direct Contact</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
            {t.contactTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* Test Ride Booking Form */}
          <div className="lg:col-span-6 bg-[#171b1f] border border-white/10 rounded-2xl p-4 sm:p-8">
            <div className="mb-5 sm:mb-6">
              <h3 className="font-heading text-2xl sm:text-3xl text-white">
                {t.testRideFormTitle}
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Fill details below. Clicking send immediately opens WhatsApp with pre-filled details to book your slot.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  {t.yourName} *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-base sm:text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  {t.phoneNumber} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-base sm:text-sm placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                  {t.selectedVehicle}
                </label>
                <select
                  value={vehicle}
                  onChange={(e) => setVehicle(e.target.value)}
                  className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                >
                  <option value="">-- Select Model --</option>
                  {VEHICLES.map((v) => (
                    <option key={v.id} value={`${v.brand} ${v.name}`}>
                      {v.brand} {v.name} ({v.cc})
                    </option>
                  ))}
                  <option value="Not Decided - Need Recommendation">Not Decided - Need In-Person Guidance</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    {t.preferredDate}
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                    {t.preferredTime}
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#111417] border border-white/10 text-white rounded-lg px-3.5 py-2.5 text-base sm:text-sm focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Morning (10 AM - 1 PM)">Morning (10 AM - 1 PM)</option>
                    <option value="Afternoon (1 PM - 4 PM)">Afternoon (1 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    <option value="Night (7 PM - 9 PM)">Night (7 PM - 9 PM)</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors shadow-lg shadow-red-950/40 cursor-pointer mt-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.sendWhatsApp}</span>
              </button>
            </form>
          </div>

          {/* Showroom Contact Details & Google Maps Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#171b1f] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="font-heading text-2xl sm:text-3xl text-white">
                {t.visitShowroom}
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">{t.showroomAddress}:</strong>
                    <span>{SHOWROOM_CONTACT.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">{t.landmarkLabel}:</strong>
                    <span className="text-amber-400 font-medium">{SHOWROOM_CONTACT.landmark}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">{t.operatingHours}:</strong>
                    <span>{SHOWROOM_CONTACT.hours} (Open All 7 Days)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block mb-0.5">{t.callDirect}:</strong>
                    <a
                      href={`tel:+91${SHOWROOM_CONTACT.phone}`}
                      className="text-amber-400 hover:underline font-bold text-base block"
                    >
                      {SHOWROOM_CONTACT.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${SHOWROOM_CONTACT.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call 9920818074</span>
                </a>

                <a
                  href={SHOWROOM_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors text-xs sm:text-sm"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{t.openGoogleMaps}</span>
                </a>
              </div>
            </div>

            {/* Dahisar Neighborhood Landmarks */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-neutral-400">
              <strong className="text-neutral-200 block mb-1">Easy Connectivity:</strong>
              Just 7 minutes from Dahisar Railway Station (West), 5 minutes from Link Road, and 10 minutes from Borivali West & Western Express Highway.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
