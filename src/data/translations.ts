export type Language = 'en' | 'hi';

export interface Translations {
  navVehicles: string;
  navEmi: string;
  navExchange: string;
  navHowToBuy: string;
  navWhyUs: string;
  navContact: string;
  navCall: string;
  heroBadge: string;
  heroHeading: string;
  heroHeadingAccent: string;
  heroSub: string;
  btnTestRide: string;
  btnWhatsApp: string;
  btnExploreCatalog: string;
  statsModels: string;
  statsModelsSub: string;
  statsCustomers: string;
  statsCustomersSub: string;
  statsDelivery: string;
  statsDeliverySub: string;
  statsFinancing: string;
  statsFinancingSub: string;
  brandSectionTitle: string;
  brandSectionSub: string;
  catalogTitle: string;
  catalogSub: string;
  filterAll: string;
  filterBikes: string;
  filterScooters: string;
  filterElectric: string;
  searchPlaceholder: string;
  btnEnquire: string;
  btnViewSpecs: string;
  btnCompare: string;
  comparing: string;
  compareMaxNotice: string;
  emiTitle: string;
  emiSub: string;
  vehiclePrice: string;
  downPayment: string;
  loanTenure: string;
  interestRate: string;
  monthlyEmi: string;
  totalInterest: string;
  totalAmountPayable: string;
  applyEmiWhatsApp: string;
  exchangeTitle: string;
  exchangeSub: string;
  currentBrand: string;
  bikeYear: string;
  bikeCondition: string;
  getExchangeQuote: string;
  estimatedExchangeVal: string;
  howToBuyTitle: string;
  howToBuySub: string;
  whyUsTitle: string;
  whyUsSub: string;
  reviewsTitle: string;
  reviewsSub: string;
  contactTitle: string;
  contactSub: string;
  testRideFormTitle: string;
  yourName: string;
  phoneNumber: string;
  selectedVehicle: string;
  preferredDate: string;
  preferredTime: string;
  sendWhatsApp: string;
  visitShowroom: string;
  showroomAddress: string;
  landmarkLabel: string;
  openGoogleMaps: string;
  callDirect: string;
  operatingHours: string;
  allRightsReserved: string;
  footerTagline: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    navVehicles: 'Vehicles',
    navEmi: 'EMI Calculator',
    navExchange: 'Exchange Offer',
    navHowToBuy: 'How to Buy',
    navWhyUs: 'Why Us',
    navContact: 'Contact',
    navCall: 'Call Now',
    heroBadge: 'Multi-Brand Two-Wheeler Showroom • Mandapeshwar, Dahisar West',
    heroHeading: 'Your Next Ride Starts',
    heroHeadingAccent: 'Here.',
    heroSub: 'Hero, Honda, Bajaj, TVS, Suzuki & Yamaha under one roof. Unbeatable on-road deals, zero down-payment schemes, instant loan approvals and same-day delivery.',
    btnTestRide: 'Book Free Test Ride',
    btnWhatsApp: 'Chat on WhatsApp',
    btnExploreCatalog: 'Explore All Models',
    statsModels: '12 Top Models',
    statsModelsSub: 'Verified in showroom stock',
    statsCustomers: '12,500+',
    statsCustomersSub: 'Happy riders in Mumbai',
    statsDelivery: 'Same Day',
    statsDeliverySub: 'RTO & delivery support',
    statsFinancing: 'From 6.99%',
    statsFinancingSub: 'Paperless loan approval',
    brandSectionTitle: 'Authorized Multi-Brand Dealership',
    brandSectionSub: 'Compare all top brands side-by-side without walking shop to shop in Mumbai heat.',
    catalogTitle: 'Explore Bikes & Scooters',
    catalogSub: 'Browse our complete in-stock inventory. Tap Enquire for instant on-road price & discount quotes on WhatsApp.',
    filterAll: 'All Vehicles',
    filterBikes: 'Motorcycles',
    filterScooters: 'Scooters',
    filterElectric: 'Electric EV',
    searchPlaceholder: 'Search model (e.g. Activa, Splendor, Pulsar, R15, Jupiter)...',
    btnEnquire: 'WhatsApp Quote',
    btnViewSpecs: 'Full Specs',
    btnCompare: 'Compare',
    comparing: 'Comparing',
    compareMaxNotice: 'Select up to 3 models to compare specifications.',
    emiTitle: 'Instant Two-Wheeler Loan & EMI Calculator',
    emiSub: 'Estimate your monthly installments with flexible tenures and low down payment options.',
    vehiclePrice: 'Your Target Vehicle Budget',
    downPayment: 'Planned Down Payment',
    loanTenure: 'Loan Tenure',
    interestRate: 'Interest Rate (p.a.)',
    monthlyEmi: 'Estimated Monthly EMI',
    totalInterest: 'Total Interest',
    totalAmountPayable: 'Total Payable Amount',
    applyEmiWhatsApp: 'Get Pre-Approved on WhatsApp',
    exchangeTitle: 'Old Bike Exchange & Valuation',
    exchangeSub: 'Upgrade to a brand new ride. Get the best exchange bonus and instant valuation for your used bike or scooter.',
    currentBrand: 'Your Current Bike / Scooter Brand',
    bikeYear: 'Manufacturing Year',
    bikeCondition: 'Current Vehicle Condition',
    getExchangeQuote: 'Get Instant Exchange Valuation',
    estimatedExchangeVal: 'Estimated Trade-in Value Range',
    howToBuyTitle: 'Simple 4-Step Buying Process',
    howToBuySub: 'From walking into our Dahisar showroom to riding your new bike home.',
    whyUsTitle: 'Why Choose M.M. Bike Point?',
    whyUsSub: 'Trusted by riders across Dahisar, Borivali, Mira Road & Kandivali for over 15 years.',
    reviewsTitle: 'What Dahisar & Mumbai Riders Say',
    reviewsSub: 'Genuine reviews from verified bike and scooter owners.',
    contactTitle: 'Visit Showroom & Book Test Ride',
    contactSub: 'Walk in or send your requirements. We respond within 5 minutes on WhatsApp.',
    testRideFormTitle: 'Book a Test Ride in 30 Seconds',
    yourName: 'Your Full Name',
    phoneNumber: 'Mobile / WhatsApp Number',
    selectedVehicle: 'Vehicle Interested In',
    preferredDate: 'Preferred Date',
    preferredTime: 'Preferred Time Slot',
    sendWhatsApp: 'Confirm & Send to WhatsApp',
    visitShowroom: 'Visit Our Showroom',
    showroomAddress: 'Address',
    landmarkLabel: 'Landmark',
    openGoogleMaps: 'Open in Google Maps',
    callDirect: 'Call Us Directly',
    operatingHours: 'Working Hours',
    allRightsReserved: 'All rights reserved. Authorized multi-brand retail & service partner.',
    footerTagline: 'M.M. Bike Point - The most trusted two-wheeler showroom in Mandapeshwar, Dahisar West, Mumbai.',
  },
  hi: {
    navVehicles: 'गाड़ियाँ',
    navEmi: 'ईएमआई कैलकुलेटर',
    navExchange: 'एक्सचेंज ऑफर',
    navHowToBuy: 'खरीदने की प्रक्रिया',
    navWhyUs: 'हमें क्यों चुनें',
    navContact: 'संपर्क करें',
    navCall: 'कॉल करें',
    heroBadge: 'मल्टी-ब्रांड टू-व्हीलर शोरूम • मंडपेश्वर, दहिसर वेस्ट, मुंबई',
    heroHeading: 'आपकी अगली नई सवारी शुरू होती है',
    heroHeadingAccent: 'यहाँ पर।',
    heroSub: 'हीरो, होंडा, बजाज, टीवीएस, सुजुकी और यामाहा - सब एक ही छत के नीचे! सबसे कम ऑन-रोड कीमत, आसान ईएमआई, पुरानी बाइक का शानदार एक्सचेंज और तुरंत डिलीवरी।',
    btnTestRide: 'फ्री टेस्ट राइड बुक करें',
    btnWhatsApp: 'व्हाट्सएप पर बात करें',
    btnExploreCatalog: 'सभी गाड़ियाँ देखें',
    statsModels: '12 टॉप मॉडल्स',
    statsModelsSub: 'शोरूम में रेडी स्टॉक उपलब्ध',
    statsCustomers: '12,500+',
    statsCustomersSub: 'खुश ग्राहक मुंबई में',
    statsDelivery: 'उसी दिन डिलीवरी',
    statsDeliverySub: 'आर.टी.ओ. और पेपरवर्क सुविधा',
    statsFinancing: '6.99% से शुरू',
    statsFinancingSub: 'आसान और पेपरलेस लोन अप्रूवल',
    brandSectionTitle: 'सभी प्रमुख ब्रांड्स उपलब्ध',
    brandSectionSub: 'दुकान-दुकान भटके बिना सभी टॉप ब्रांड्स की तुलना करें और बेहतरीन डिस्काउंट पाएं।',
    catalogTitle: 'बाइक्स और स्कूटर्स देखें',
    catalogSub: 'अपनी पसंद का मॉडल चुनें और व्हाट्सएप पर ऑन-रोड कीमत व ईएमआई की तुरंत जानकारी पाएं।',
    filterAll: 'सभी गाड़ियाँ',
    filterBikes: 'मोटरसाइकिल',
    filterScooters: 'स्कूटर',
    filterElectric: 'इलेक्ट्रिक (EV)',
    searchPlaceholder: 'मॉडल सर्च करें (उदा. Activa, Splendor, Pulsar, R15, Jupiter)...',
    btnEnquire: 'व्हाट्सएप भाव पूछें',
    btnViewSpecs: 'पूरी जानकारी',
    btnCompare: 'तुलना करें',
    comparing: 'तुलना जारी है',
    compareMaxNotice: 'तुलना के लिए अधिकतम 3 गाड़ियाँ चुनें।',
    emiTitle: 'आसान बाइक लोन व ईएमआई कैलकुलेटर',
    emiSub: 'अपनी मनपसंद बाइक के लिए मासिक किस्त (EMI) और कम डाउनपेमेंट का हिसाब लगाएं।',
    vehiclePrice: 'आपका लक्षित वाहन बजट',
    downPayment: 'प्लान किया गया डाउन पेमेंट',
    loanTenure: 'लोन की अवधि (महीने)',
    interestRate: 'ब्याज दर (प्रति वर्ष)',
    monthlyEmi: 'अनुमानित मासिक ईएमआई',
    totalInterest: 'कुल ब्याज',
    totalAmountPayable: 'कुल देय राशि',
    applyEmiWhatsApp: 'व्हाट्सएप पर लोन अप्रूवल पाएं',
    exchangeTitle: 'पुरानी बाइक एक्सचेंज और सही कीमत',
    exchangeSub: 'अपनी पुरानी बाइक या स्कूटर लाएं और नई गाड़ी पर आकर्षक एक्सचेंज बोनस पाएं।',
    currentBrand: 'आपकी पुरानी बाइक/स्कूटर का ब्रांड',
    bikeYear: 'खरीद का वर्ष',
    bikeCondition: 'गाड़ी की कंडीशन',
    getExchangeQuote: 'तुरंत एक्सचेंज भाव जानें',
    estimatedExchangeVal: 'अनुमानित एक्सचेंज मूल्य',
    howToBuyTitle: 'गाड़ी खरीदने के 4 आसान चरण',
    howToBuySub: 'शोरूम आने से लेकर नई बाइक घर ले जाने तक का आसान सफर।',
    whyUsTitle: 'एम. एम. बाईक पॉईंट क्यों चुनें?',
    whyUsSub: 'दहिसर, बोरिवली, कांदिवली और मीरा रोड के ग्राहकों का 15 वर्षों से अटूट विश्वास।',
    reviewsTitle: 'ग्राहकों का अनुभव और राय',
    reviewsSub: 'दहिसर और मुंबई के संतुष्ट बाइक व स्कूटर मालिकों की वास्तविक समीक्षाएं।',
    contactTitle: 'शोरूम पधारें और टेस्ट राइड लें',
    contactSub: 'कभी भी पधारें या फोन/व्हाट्सएप करें। 5 मिनट में उत्तर पाएं।',
    testRideFormTitle: '30 सेकंड में टेस्ट राइड बुक करें',
    yourName: 'आपका पूरा नाम',
    phoneNumber: 'मोबाइल / व्हाट्सएप नंबर',
    selectedVehicle: 'पसंदीदा बाइक / स्कूटर',
    preferredDate: 'पसंदीदा तारीख',
    preferredTime: 'पसंदीदा समय',
    sendWhatsApp: 'व्हाट्सएप पर भेजें',
    visitShowroom: 'हमारा शोरूम पता',
    showroomAddress: 'पता',
    landmarkLabel: 'लैंडमार्क',
    openGoogleMaps: 'गूगल मैप्स में खोलें',
    callDirect: 'सीधे फोन करें',
    operatingHours: 'खुलने का समय',
    allRightsReserved: 'सर्वाधिकार सुरक्षित। अधिकृत मल्टी-ब्रांड रिटेल व सर्विस पार्टनर।',
    footerTagline: 'एम. एम. बाईक पॉईंट - मंडपेश्वर, दहिसर वेस्ट, मुंबई का सबसे भरोसेमंद टू-व्हीलर शोरूम।',
  },
};
