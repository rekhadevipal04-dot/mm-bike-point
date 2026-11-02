import { Bike, PhoneCall, ShieldCheck, KeyRound, Sparkles } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HowToBuyProps {
  lang: Language;
}

export function HowToBuy({ lang }: HowToBuyProps) {
  const t = TRANSLATIONS[lang];

  const steps = [
    {
      num: '01',
      title: 'Choose Your Vehicle',
      titleHi: 'अपनी पसंद का वाहन चुनें',
      desc: 'Browse 28+ bikes and scooters on our website or visit our Dahisar showroom to match your budget and commute requirements.',
      descHi: 'हमारी वेबसाइट पर 28+ मॉडल्स देखें या हमारे दहिसर शोरूम आकर अपने बजट के अनुसार सर्वश्रेष्ठ मॉडल चुनें।',
      icon: Bike,
    },
    {
      num: '02',
      title: 'Visit or Connect',
      titleHi: 'शोरूम पधारें या संपर्क करें',
      desc: 'Call 9920818074 or chat on WhatsApp. Get transparent on-road breakdown with insurance, RTO, and seasonal discounts.',
      descHi: '9920818074 पर कॉल करें या व्हाट्सएप करें। आरटीओ, बीमा और डिस्काउंट के साथ वास्तविक ऑन-रोड कीमत समझें।',
      icon: PhoneCall,
    },
    {
      num: '03',
      title: 'Free Test Ride',
      titleHi: 'मुफ्त टेस्ट राइड लें',
      desc: 'Experience the engine smoothness, suspension comfort, pickup, and braking before making your final choice.',
      descHi: 'फैसले से पहले खुद चलाकर देखें - इंजन का पिकअप, आरामदायक सीटिंग और ब्रेकिंग का व्यक्तिगत अनुभव लें।',
      icon: Sparkles,
    },
    {
      num: '04',
      title: 'Instant Finance & Ride Home',
      titleHi: 'तुरंत लोन व डिलीवरी',
      desc: 'Quick 15-minute loan approval with minimal KYC paperwork. Take delivery on the same day with keys and registration support!',
      descHi: 'सिर्फ आधार व पैन कार्ड पर 15 मिनट में आसान लोन मंजूरी। चाबी पाएं और शान से उसी दिन नई बाइक घर ले जाएं!',
      icon: KeyRound,
    },
  ];

  return (
    <section id="how-to-buy" className="py-14 sm:py-20 bg-[#161a1e] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2">
            Seamless Buying Journey
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
            {t.howToBuyTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            {t.howToBuySub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#1c2227] border border-white/10 rounded-2xl p-6 relative flex flex-col justify-between group hover:border-amber-400/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading text-3xl sm:text-4xl text-amber-400 font-bold">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl text-white mb-2 leading-snug">
                    {lang === 'hi' ? step.titleHi : step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {lang === 'hi' ? step.descHi : step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                  <span>Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
