import { useState } from 'react';
import {
  X,
  Smartphone,
  Navigation,
  Shield,
  Fuel,
  Gauge,
  MessageCircle,
  Bike,
  Sparkles,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Radio,
  BatteryCharging,
  Zap
} from 'lucide-react';
import { ACCESS_125_GALLERY, ACCESS_125_FULL_SPECS, Access125GalleryImage } from '../data/access125Data';
import { SHOWROOM_CONTACT } from '../data/vehicles';
import { Language } from '../data/translations';

interface Access125ShowcaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onBookTestRide: (vehicleName: string) => void;
}

export function Access125ShowcaseModal({
  isOpen,
  onClose,
  lang,
  onBookTestRide,
}: Access125ShowcaseModalProps) {
  if (!isOpen) return null;

  const [activeTab, setActiveTab] = useState<'all' | 'color' | 'bluetooth' | 'feature'>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredGallery = ACCESS_125_GALLERY.filter((item) =>
    activeTab === 'all' ? true : item.category === activeTab
  );

  const activeImage: Access125GalleryImage = filteredGallery[selectedImageIndex] || filteredGallery[0];

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % filteredGallery.length);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi M.M. Bike Point, I am checking the Suzuki Access 125 Ride Connect Bluetooth Edition on your website. Please share today's on-road price in Dahisar West, available colors, and ready stock delivery details.`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div 
        className="relative w-full max-w-5xl bg-[#15191d] border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Bar */}
        <div className="px-5 py-4 bg-gradient-to-r from-blue-950 via-[#171c21] to-[#121619] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 border border-blue-400 flex items-center justify-center text-white font-heading text-lg font-bold">
              125
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  Suzuki Ride Connect Bluetooth
                </span>
                <span className="text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
                  15 Photos Gallery
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl text-white tracking-tight leading-none mt-1">
                {lang === 'hi' ? ACCESS_125_FULL_SPECS.modelNameHi : ACCESS_125_FULL_SPECS.modelName}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto space-y-8">
          {/* 1. PHOTO GALLERY (15 High-Resolution Images) */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-heading text-xl sm:text-2xl text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-400" />
                  <span>Official Photo Gallery (15 Angles & Details)</span>
                </h3>
                <p className="text-xs text-neutral-400">
                  Studied from BikeDekho & Suzuki Motorcycle India • Colors, Bluetooth console & features
                </p>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-1 sm:pb-0">
                <button
                  onClick={() => {
                    setActiveTab('all');
                    setSelectedImageIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  All 15 Photos
                </button>
                <button
                  onClick={() => {
                    setActiveTab('color');
                    setSelectedImageIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'color'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  5 Colors
                </button>
                <button
                  onClick={() => {
                    setActiveTab('bluetooth');
                    setSelectedImageIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'bluetooth'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  Bluetooth Screens
                </button>
                <button
                  onClick={() => {
                    setActiveTab('feature');
                    setSelectedImageIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === 'feature'
                      ? 'bg-blue-600 text-white font-bold'
                      : 'bg-white/5 text-neutral-300 hover:bg-white/10'
                  }`}
                >
                  Key Hardware
                </button>
              </div>
            </div>

            {/* Main Stage Image Viewer */}
            <div className="relative w-full h-60 sm:h-96 bg-neutral-950 rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center group">
              <img
                src={activeImage.imageUrl}
                alt={activeImage.title}
                className="max-h-full max-w-full object-contain p-2 transition-transform duration-300"
              />

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/10 transition-all cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white border border-white/10 transition-all cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Image Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-4 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-amber-400 uppercase tracking-wide">
                      Photo {selectedImageIndex + 1} of {filteredGallery.length}
                    </span>
                    <h4 className="font-heading text-base sm:text-xl leading-tight">
                      {lang === 'hi' ? activeImage.titleHi : activeImage.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-neutral-300 line-clamp-1 mt-0.5">
                      {lang === 'hi' ? activeImage.descriptionHi : activeImage.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip (All 15 Photos Scrollable) */}
            <div className="flex items-center gap-2 overflow-x-auto p-1 scrollbar-none">
              {filteredGallery.map((item, idx) => {
                const isSelected = selectedImageIndex === idx;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-16 sm:w-24 sm:h-18 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer bg-neutral-900 ${
                      isSelected
                        ? 'border-amber-400 scale-105 shadow-md shadow-amber-400/20'
                        : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-black/80 text-[10px] px-1 rounded text-white font-mono">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. BLUETOOTH RIDE CONNECT FEATURES SPOTLIGHT */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-[#182028] to-[#121619] border border-blue-500/30 space-y-4">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2 text-blue-400">
                <Radio className="w-5 h-5 animate-pulse" />
                <h4 className="font-heading text-xl sm:text-2xl text-white">
                  Suzuki Ride Connect Bluetooth Smart System
                </h4>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                Android &amp; iOS App Compatible
              </span>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Connect your smartphone via Bluetooth using the <strong>Suzuki Ride Connect App</strong>. All key navigation prompts, incoming caller ID, WhatsApp alerts, and phone stats sync seamlessly directly onto the scooter display screen without having to pull your phone out while riding in Mumbai traffic.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                  <Navigation className="w-4 h-4" />
                  <span>Turn-by-Turn GPS</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Visual arrows and distance countdown with Estimated Time of Arrival (ETA).
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Notifications</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Instant WhatsApp call alerts and message sender notifications on cluster.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                  <Smartphone className="w-4 h-4" />
                  <span>Caller ID &amp; Reject</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Caller name display with one-touch call accept or reject option.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-1">
                <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                  <BatteryCharging className="w-4 h-4" />
                  <span>Battery &amp; Speed Alert</span>
                </div>
                <p className="text-neutral-400 text-[11px]">
                  Real-time phone battery level bar and customizable over-speed alerts.
                </p>
              </div>
            </div>
          </div>

          {/* 3. COMPLETE SPECIFICATIONS TABLE (BikeDekho Reference) */}
          <div className="space-y-4">
            <h4 className="font-heading text-xl text-white flex items-center gap-2">
              <Gauge className="w-5 h-5 text-amber-400" />
              <span>Full Specifications &amp; Engineering Data</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Engine & Performance */}
              <div className="p-4 rounded-xl bg-[#1a1f24] border border-white/5 space-y-3">
                <h5 className="font-heading text-sm text-amber-400 uppercase tracking-wider">
                  Engine &amp; Performance
                </h5>
                <div className="space-y-2 text-neutral-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Displacement:</span>
                    <strong className="text-white">{ACCESS_125_FULL_SPECS.displacement}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Max Power:</span>
                    <strong className="text-white">{ACCESS_125_FULL_SPECS.maxPower}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Max Torque:</span>
                    <strong className="text-white">{ACCESS_125_FULL_SPECS.maxTorque}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Engine Architecture:</span>
                    <span className="text-white text-right max-w-[200px]">SEP Fi (Suzuki Eco Performance)</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Tested Mileage:</span>
                    <strong className="text-emerald-400">{ACCESS_125_FULL_SPECS.mileage}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Transmission:</span>
                    <span className="text-white">{ACCESS_125_FULL_SPECS.transmission}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Emission Standard:</span>
                    <span className="text-white">OBD-2B &amp; E20 Fuel Ready</span>
                  </div>
                </div>
              </div>

              {/* Practical Dimensions & Brakes */}
              <div className="p-4 rounded-xl bg-[#1a1f24] border border-white/5 space-y-3">
                <h5 className="font-heading text-sm text-amber-400 uppercase tracking-wider">
                  Dimensions, Storage &amp; Safety
                </h5>
                <div className="space-y-2 text-neutral-300">
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Under-Seat Storage:</span>
                    <strong className="text-amber-400">{ACCESS_125_FULL_SPECS.bootSpace} (Largest in Class)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Fuel Tank Capacity:</span>
                    <strong className="text-white">{ACCESS_125_FULL_SPECS.fuelTankCapacity}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Kerb Weight:</span>
                    <strong className="text-white">{ACCESS_125_FULL_SPECS.kerbWeight}</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Seat Length:</span>
                    <span className="text-white">{ACCESS_125_FULL_SPECS.seatLength}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Ground Clearance:</span>
                    <span className="text-white">{ACCESS_125_FULL_SPECS.groundClearance}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5">
                    <span className="text-neutral-400">Front Brakes:</span>
                    <strong className="text-white">{ACCESS_125_FULL_SPECS.frontBrake}</strong>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-neutral-400">Wheels &amp; Tyres:</span>
                    <span className="text-white">Alloy Wheels • Tubeless</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. SHOWROOM READY PERKS */}
          <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="space-y-1">
              <span className="font-heading text-sm text-amber-400 uppercase tracking-wide block">
                M.M. Bike Point Dahisar Showroom Status
              </span>
              <p className="text-neutral-300">
                Ready stock available in all 5 colors • 0% Downpayment loan options • Same-day RTO documentation &amp; handover.
              </p>
            </div>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Official Suzuki Warranty Booklet Included</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Fixed CTA Buttons */}
        <div className="p-4 sm:p-5 bg-[#121619] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-400 hidden sm:block">
            <span>Shop No. 5 &amp; 6, Mandapeshwar, Dahisar West</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookTestRide('Suzuki Access 125 Bluetooth Edition');
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 transition-colors text-xs sm:text-sm cursor-pointer shadow-md"
            >
              <Bike className="w-4 h-4" />
              <span>Book Access 125 Test Ride</span>
            </button>

            <a
              href={`https://wa.me/${SHOWROOM_CONTACT.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-red-600 hover:bg-red-700 transition-colors text-xs sm:text-sm shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Best Offer on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
