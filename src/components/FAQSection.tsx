import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../data/translations';

interface FAQSectionProps {
  lang: Language;
}

export function FAQSection({ lang }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Which documents are required for a two-wheeler bike loan?',
      qHi: 'बाइक या स्कूटर लोन के लिए कौन-से डॉक्यूमेंट्स चाहिए?',
      a: 'Only 3 basic documents: 1) Aadhaar Card, 2) PAN Card, and 3) Bank passbook / 3 months bank statement. In most cases, loan approval takes less than 15 minutes at our showroom.',
      aHi: 'केवल 3 बेसिक दस्तावेज: 1) आधार कार्ड, 2) पैन कार्ड, और 3) बैंक पासबुक / 3 महीने का बैंक स्टेटमेंट। हमारे शोरूम पर 15 मिनट में लोन स्वीकृत हो जाता है।',
    },
    {
      q: 'Do you offer same-day delivery for bikes and scooters?',
      qHi: 'क्या उसी दिन (Same Day) गाड़ी की डिलीवरी मिल सकती है?',
      a: 'Yes! For in-stock models like Activa, Splendor, Pulsar, Shine, and Jupiter with full payment or instant digital finance, we can arrange same-day delivery with temporary gate pass and complete accessories.',
      aHi: 'हाँ! एक्टिवा, स्प्लेंडर, पल्सर, शाइन और जुपिटर जैसे रेडी स्टॉक मॉडल्स पर फुल पेमेंट या इंस्टेंट फाइनेंस होने पर उसी दिन डिलीवरी दी जा सकती है।',
    },
    {
      q: 'Can I exchange my old two-wheeler of any brand?',
      qHi: 'क्या मैं किसी भी कंपनी की पुरानी बाइक एक्सचेंज कर सकता हूँ?',
      a: 'Yes, absolutely. We accept old motorcycles and scooters from all brands (Hero, Honda, Bajaj, TVS, Yamaha, Suzuki, Mahindra, etc.). You get genuine market valuation plus an extra dealer exchange bonus deducted directly from your new bike cost.',
      aHi: 'जी बिल्कुल! हम सभी ब्रांड्स की पुरानी मोटरसाइकिल और स्कूटर स्वीकार करते हैं। आपको सही बाजार मूल्य के साथ अतिरिक्त एक्सचेंज बोनस भी मिलता है।',
    },
    {
      q: 'Do you provide official manufacturer warranty and free services?',
      qHi: 'क्या कंपनी की ओर से आधिकारिक वारंटी और फ्री सर्विस मिलती है?',
      a: 'Yes, every new vehicle sold at M.M. Bike Point comes with 100% genuine company warranty book and free service coupons valid across authorized service centers nationwide.',
      aHi: 'हाँ, एम.एम. बाईक पॉइंट से खरीदी गई हर गाड़ी के साथ आधिकारिक कंपनी वारंटी बुकलेट और फ्री सर्विस कूपन मिलते हैं।',
    },
    {
      q: 'Can I take a test ride of multiple bikes before deciding?',
      qHi: 'क्या फैसला लेने से पहले एक से अधिक गाड़ियों की टेस्ट राइड ले सकते हैं?',
      a: 'Yes! That is the biggest benefit of our multi-brand showroom in Dahisar West. You can ride Honda Activa and TVS Jupiter or Splendor and Shine one after another to feel the difference yourself.',
      aHi: 'बिल्कुल! यही हमारे मल्टी-ब्रांड शोरूम का सबसे बड़ा फायदा है। आप एक के बाद एक कई मॉडल्स चलाकर खुद तय कर सकते हैं कि कौन सी गाड़ी आपके लिए सबसे आरामदायक है।',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#161a1e] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-amber-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Everything you need to know about purchasing, financing, and exchanging at M.M. Bike Point.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#1c2227] border border-white/10 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                >
                  <span className="font-heading text-lg sm:text-xl text-white">
                    {lang === 'hi' ? faq.qHi : faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                    {lang === 'hi' ? faq.aHi : faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
