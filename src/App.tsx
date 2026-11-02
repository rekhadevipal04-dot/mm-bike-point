import { useState, useMemo } from 'react';
import { VEHICLES, Vehicle } from './data/vehicles';
import { Language } from './data/translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandBar } from './components/BrandBar';
import { VehicleCatalog } from './components/VehicleCatalog';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { VehicleCompareBar } from './components/VehicleCompareBar';
import { VehicleCompareModal } from './components/VehicleCompareModal';
import { HowToBuy } from './components/HowToBuy';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { TestRideModal } from './components/TestRideModal';
import { Access125Banner } from './components/Access125Banner';
import { Access125ShowcaseModal } from './components/Access125ShowcaseModal';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [activeVehicleForModal, setActiveVehicleForModal] = useState<Vehicle | null>(null);
  const [testRideModalOpen, setTestRideModalOpen] = useState(false);
  const [testRideVehicleName, setTestRideVehicleName] = useState<string | undefined>(undefined);
  const [compareList, setCompareList] = useState<Vehicle[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [access125ModalOpen, setAccess125ModalOpen] = useState(false);

  const brandCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    VEHICLES.forEach((v) => {
      counts[v.brand] = (counts[v.brand] || 0) + 1;
    });
    return counts;
  }, []);

  const handleToggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'hi' : 'en'));
  };

  const handleSelectBrand = (brand: string) => {
    setSelectedBrand(brand);
    // Scroll to vehicles section
    const el = document.getElementById('vehicles');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenTestRide = (vehicleName?: string) => {
    setTestRideVehicleName(vehicleName);
    setTestRideModalOpen(true);
  };

  const handleToggleCompare = (vehicle: Vehicle) => {
    setCompareList((prev) => {
      if (prev.some((v) => v.id === vehicle.id)) {
        return prev.filter((v) => v.id !== vehicle.id);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 vehicles at a time.');
        return prev;
      }
      return [...prev, vehicle];
    });
  };

  const handleRemoveCompare = (vehicleId: string) => {
    setCompareList((prev) => prev.filter((v) => v.id !== vehicleId));
  };

  const handleClearCompare = () => {
    setCompareList([]);
  };

  return (
    <div className="min-h-screen bg-[#111417] text-neutral-100 flex flex-col selection:bg-amber-400 selection:text-neutral-900">
      {/* Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenTestRide={handleOpenTestRide}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenTestRide={() => handleOpenTestRide()}
          onSelectBrand={handleSelectBrand}
        />

        {/* Brands Quick Selector Strip */}
        <BrandBar
          selectedBrand={selectedBrand}
          onSelectBrand={handleSelectBrand}
          brandCounts={brandCounts}
        />

        {/* Special Spotlight Banner for Suzuki Access 125 Bluetooth */}
        <Access125Banner
          onOpenShowcase={() => setAccess125ModalOpen(true)}
          lang={lang}
        />

        {/* Vehicle Catalog with Filters, Specs & WhatsApp Quotes */}
        <VehicleCatalog
          vehicles={VEHICLES}
          lang={lang}
          selectedBrand={selectedBrand}
          onSelectBrand={setSelectedBrand}
          onOpenSpecs={(v) => {
            if (v.id === 'suzuki-access-125') {
              setAccess125ModalOpen(true);
            } else {
              setActiveVehicleForModal(v);
            }
          }}
          onOpenTestRide={handleOpenTestRide}
          compareList={compareList}
          onToggleCompare={handleToggleCompare}
          onOpenAccess125Showcase={() => setAccess125ModalOpen(true)}
        />

        {/* 4-Step Buying Process */}
        <HowToBuy lang={lang} />

        {/* Why Choose Us */}
        <WhyChooseUs lang={lang} />

        {/* Customer Reviews & Testimonials */}
        <CustomerReviews lang={lang} />

        {/* Contact, Test Ride Form & Dahisar Location */}
        <ContactSection lang={lang} />

        {/* FAQ Section */}
        <FAQSection lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Sticky Bottom Actions */}
      <FloatingActions />

      {/* Sticky Compare Tray */}
      <VehicleCompareBar
        compareList={compareList}
        onRemove={handleRemoveCompare}
        onClear={handleClearCompare}
        onOpenCompareModal={() => setCompareModalOpen(true)}
        lang={lang}
      />

      {/* Modals */}
      <VehicleDetailModal
        vehicle={activeVehicleForModal}
        onClose={() => setActiveVehicleForModal(null)}
        lang={lang}
        onBookTestRide={handleOpenTestRide}
      />

      <Access125ShowcaseModal
        isOpen={access125ModalOpen}
        onClose={() => setAccess125ModalOpen(false)}
        lang={lang}
        onBookTestRide={handleOpenTestRide}
      />

      {compareModalOpen && (
        <VehicleCompareModal
          vehicles={compareList}
          onClose={() => setCompareModalOpen(false)}
          lang={lang}
        />
      )}

      <TestRideModal
        isOpen={testRideModalOpen}
        onClose={() => setTestRideModalOpen(false)}
        lang={lang}
        initialVehicle={testRideVehicleName}
      />
    </div>
  );
}
