import { Star, CheckCircle, Quote } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface CustomerReviewsProps {
  lang: Language;
}

export function CustomerReviews({ lang }: CustomerReviewsProps) {
  const t = TRANSLATIONS[lang];

  const reviews = [
    {
      name: 'Rohan Deshmukh',
      location: 'Dahisar West, Mumbai',
      bike: 'Honda Activa 6G Smart',
      stars: 5,
      date: '2 weeks ago',
      quote:
        'Purchased Activa 6G from M.M. Bike Point. Excellent support by staff! Got delivery in just 2 days with all RTO papers and accessories. Better price than local authorized dealer.',
      quoteHi:
        'एम.एम. बाईक पॉइंट से एक्टिवा 6G खरीदी। स्टाफ का व्यवहार बहुत मददगार था। सिर्फ 2 दिन में आरटीओ पेपरवर्क और एक्सेसरीज के साथ गाड़ी मिल गई। ऑथराइज्ड डीलर से बेहतर कीमत मिली।',
    },
    {
      name: 'Vikram Rajput',
      location: 'Borivali West, Mumbai',
      bike: 'Bajaj Pulsar N160 (Dual ABS)',
      stars: 5,
      date: '1 month ago',
      quote:
        'Exchanged my 7-year-old Discover for a brand new Pulsar N160. Got ₹28,000 exchange value plus ₹3,000 exchange bonus. Very smooth loan approval through IDFC First Bank.',
      quoteHi:
        'मेरी 7 साल पुरानी डिस्कवर को नई पल्सर N160 से एक्सचेंज किया। ₹28,000 वैल्यू और साथ में ₹3,000 का बोनस मिला। 15 मिनट में आईडीएफसी बैंक से लोन अप्रूव हो गया।',
    },
    {
      name: 'Pooja Sawant',
      location: 'Mandapeshwar, Dahisar',
      bike: 'TVS Jupiter 110',
      stars: 5,
      date: '3 weeks ago',
      quote:
        'Very convenient location near Highrise Building. Took a test ride of Jupiter and Access back-to-back in 10 minutes. Helped me decide easily without any sales pressure.',
      quoteHi:
        'हाईराइज बिल्डिंग के पास बहुत सुविधाजनक लोकेशन है। 10 मिनट में जुपिटर और एक्सेस दोनों की बैक-टू-बैक टेस्ट राइड ली। बिना किसी दबाव के सही फैसला लेने में मदद की।',
    },
    {
      name: 'Ashwin Nair',
      location: 'Mira Road, Thane/Mumbai',
      bike: 'Yamaha FZ-S FI V4',
      stars: 5,
      date: '1 month ago',
      quote:
        'Got the exact Racing Blue color I wanted when other dealers asked for 2 weeks waiting. Handed over with polished tank, free branded helmet and tool kit. 10/10 service!',
      quoteHi:
        'मुझे जो रेसिंग ब्लू कलर चाहिए था, वो अन्य डीलर्स के पास 2 हफ्ते वेटिंग पर था, लेकिन यहाँ तुरंत रेडी स्टॉक मिल गया। फ्री हेलमेट और टूल किट भी दिया। शानदार सर्विस!',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#161a1e] border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Quote className="w-4 h-4" />
            <span>Verified Customer Stories</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
            {t.reviewsTitle}
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            {t.reviewsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-[#1c2227] border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {Array.from({ length: rev.stars }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs text-neutral-400 ml-2">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 italic">
                  "{lang === 'hi' ? rev.quoteHi : rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-white flex items-center gap-1.5">
                      <span>{rev.name}</span>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </h4>
                    <span className="text-[11px] text-neutral-400 block">{rev.location}</span>
                  </div>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded inline-block">
                  Bought: {rev.bike}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
