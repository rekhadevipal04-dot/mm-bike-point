import { Shield, Sparkles, IndianRupee, Clock, RefreshCw, ThumbsUp, MapPin, Award } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface WhyChooseUsProps {
  lang: Language;
}

export function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const t = TRANSLATIONS[lang];

  const features = [
    {
      title: '6 Major Brands Under One Roof',
      titleHi: '6 बड़े ब्रांड्स एक ही छत के नीचे',
      desc: 'Compare Hero, Honda, Bajaj, TVS, Suzuki, and Yamaha side-by-side in our Mandapeshwar showroom without commuting to multiple dealers.',
      descHi: 'अलग-अलग शोरूम के चक्कर काटे बिना हीरो, होंडा, बजाज, टीवीएस, सुजुकी और यामाहा की आमने-सामने तुलना करें।',
      icon: Sparkles,
    },
    {
      title: 'Unbeatable Mumbai On-Road Pricing',
      titleHi: 'मुंबई का सबसे किफायती ऑन-रोड दाम',
      desc: 'Transparent pricing with zero hidden charges. We offer official company discounts, seasonal offers, and competitive road tax handling.',
      descHi: 'बिना किसी छुपे हुए शुल्क के पारदर्शी बिलिंग। कंपनी के आधिकारिक डिस्काउंट और त्यौहारों के विशेष ऑफर्स का लाभ उठाएं।',
      icon: IndianRupee,
    },
    {
      title: 'Instant 15-Minute Loan Approval',
      titleHi: '15 मिनट में पेपरलेस लोन',
      desc: 'Tie-ups with leading national banks & NBFCs with interest rates starting from 6.99% p.a. Minimal paperwork with Aadhaar & PAN.',
      descHi: 'एचडीएफसी, आईडीएफसी, बजाज और एलएंडटी के साथ सीधा टाई-अप। आधार और पैन पर सबसे कम ब्याज दर पर तुरंत अप्रूवल।',
      icon: Shield,
    },
    {
      title: 'High-Value Old Bike Exchange',
      titleHi: 'पुरानी बाइक का बेहतरीन एक्सचेंज',
      desc: 'Get an extra exchange bonus on top of fair market value. We handle ownership transfer so you stay safe from future legal hassles.',
      descHi: 'बाजार भाव से बेहतर कीमत और अतिरिक्त एक्सचेंज बोनस। नाम ट्रांसफर (RC Transfer) की पूरी कानूनी गारंटी।',
      icon: RefreshCw,
    },
    {
      title: 'Same-Day Delivery On Ready Stock',
      titleHi: 'रेडी स्टॉक पर उसी दिन डिलीवरी',
      desc: 'Popular models like Activa, Splendor, Pulsar, and Shine are kept in ready showroom stock for immediate handover with registration.',
      descHi: 'एक्टिवा, शाइन, स्प्लेंडर और पल्सर जैसे लोकप्रिय मॉडल्स का भरपूर स्टॉक ताकि आपको लंबा इंतजार न करना पड़े।',
      icon: Clock,
    },
    {
      title: 'Trusted Dahisar West Landmark',
      titleHi: 'दहिसर वेस्ट का विश्वसनीय संस्थान',
      desc: 'Serving Mandapeshwar, Dahisar, Borivali, and Mira Road families with an impeccable reputation for honesty and friendly service.',
      descHi: 'मंडपेश्वर, दहिसर वेस्ट में हाईराइज बिल्डिंग और एम.एम. मेडिकल के पास स्थित - आसान पहुंच और भरोसेमंद सेवा।',
      icon: MapPin,
    },
  ];

  return (
    <section id="why-us" className="py-14 sm:py-20 bg-[#121619] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-2">
            <Award className="w-4 h-4" />
            <span>The M.M. Bike Point Advantage</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
            {t.whyUsTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            {t.whyUsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#171b1f] border border-white/10 rounded-2xl p-6 hover:border-amber-400/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading text-xl text-white mb-2 leading-snug">
                    {lang === 'hi' ? feat.titleHi : feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {lang === 'hi' ? feat.descHi : feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
