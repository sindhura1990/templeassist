import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PanchangamBar } from './components/PanchangamBar';
import { DarshanSection } from './components/DarshanSection';
import { TempleDetailModal } from './components/TempleDetailModal';
import { PrasadamStore } from './components/PrasadamStore';
import { PoojaSection } from './components/PoojaSection';
import { PoojaBookingModal } from './components/PoojaBookingModal';
import { DivineToursSection } from './components/DivineToursSection';
import { TourBookingModal } from './components/TourBookingModal';
import { DarshanSahayakModal } from './components/DarshanSahayakModal';
import { CartDrawer } from './components/CartDrawer';
import { OrderTrackerModal } from './components/OrderTrackerModal';
import { TrustAndCommunity } from './components/TrustAndCommunity';
import { Footer } from './components/Footer';

import { Temple, PrasadamItem, PoojaItem, DivineTour, CartItem, DevoteeOrder, TourBookingRequest } from './types';
import { INITIAL_ORDERS } from './data/sampleOrders';
import { getTodayPanchangam } from './data/panchangam';
import { X, Calendar, Sun, Clock } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'darshan' | 'tours' | 'prasadam' | 'poojas'>('darshan');
  const [searchQuery, setSearchQuery] = useState('');

  // Modals state
  const [selectedTemple, setSelectedTemple] = useState<Temple | null>(null);
  const [selectedTour, setSelectedTour] = useState<DivineTour | null>(null);
  const [selectedPooja, setSelectedPooja] = useState<PoojaItem | null>(null);
  const [isSahayakOpen, setIsSahayakOpen] = useState(false);
  const [sahayakTempleId, setSahayakTempleId] = useState<string | undefined>(undefined);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const [isPanchangamModalOpen, setIsPanchangamModalOpen] = useState(false);

  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('templeassist_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders state
  const [orders, setOrders] = useState<DevoteeOrder[]>(() => {
    try {
      const saved = localStorage.getItem('templeassist_orders');
      return saved ? JSON.parse(saved) : INITIAL_ORDERS;
    } catch {
      return INITIAL_ORDERS;
    }
  });

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('templeassist_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Persist orders
  useEffect(() => {
    try {
      localStorage.setItem('templeassist_orders', JSON.stringify(orders));
    } catch (e) {
      console.error(e);
    }
  }, [orders]);

  // Cart Handlers
  const handleAddToCart = (item: PrasadamItem, quantity: number) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.itemId === item.id && c.type === 'prasadam');
      if (existing) {
        return prev.map((c) =>
          c.id === existing.id ? { ...c, quantity: c.quantity + quantity } : c
        );
      }
      const newCartItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random()}`,
        type: 'prasadam',
        itemId: item.id,
        title: item.name,
        templeName: item.templeName,
        price: item.price,
        quantity,
        image: item.image,
      };
      return [...prev, newCartItem];
    });
  };

  const handleInstantBuy = (item: PrasadamItem) => {
    handleAddToCart(item, 1);
    setIsCartOpen(true);
  };

  const handleConfirmPoojaBooking = (
    pooja: PoojaItem,
    sankalpamDetails: CartItem['sankalpamDetails']
  ) => {
    const newCartItem: CartItem = {
      id: `cart-pooja-${Date.now()}`,
      type: 'pooja',
      itemId: pooja.id,
      title: pooja.title,
      templeName: pooja.templeName,
      price: pooja.price,
      quantity: 1,
      image: pooja.image,
      sankalpamDetails,
    };
    setCart((prev) => [...prev, newCartItem]);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrderPlaced = (newOrder: DevoteeOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
  };

  const handleTourBookingRequest = (request: TourBookingRequest) => {
    // Stored in mock coordinator queue
    console.log('Divine Tour Request:', request);
  };

  const openSahayakForTemple = (templeId?: string) => {
    setSahayakTempleId(templeId);
    setIsSahayakOpen(true);
  };

  const panchangam = getTodayPanchangam();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF9] text-stone-900 selection:bg-amber-200 selection:text-amber-950 font-sans">
      {/* Top Auspicious Panchangam Bar */}
      <PanchangamBar />

      {/* Main Header with Official Logo */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenSahayak={() => openSahayakForTemple()}
        onOpenPanchangamModal={() => setIsPanchangamModalOpen(true)}
      />

      {/* Hero Banner with Search & 4 Value Pillars */}
      <Hero
        onSelectTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onOpenSahayak={() => openSahayakForTemple()}
      />

      {/* Main Feature Views */}
      <main className="flex-1">
        {activeTab === 'darshan' && (
          <DarshanSection
            searchQuery={searchQuery}
            onSelectTemple={(temple) => setSelectedTemple(temple)}
            onOpenSahayakForTemple={openSahayakForTemple}
          />
        )}

        {activeTab === 'tours' && (
          <DivineToursSection
            onSelectTour={(tour) => setSelectedTour(tour)}
            onOpenCustomTour={() => openSahayakForTemple()}
          />
        )}

        {activeTab === 'prasadam' && (
          <PrasadamStore
            onAddToCart={handleAddToCart}
            onInstantBuy={handleInstantBuy}
          />
        )}

        {activeTab === 'poojas' && (
          <PoojaSection
            onSelectPooja={(pooja) => setSelectedPooja(pooja)}
          />
        )}

        {/* Devotee Trust & Community Section */}
        <TrustAndCommunity />
      </main>

      {/* Footer */}
      <Footer
        onSelectTab={setActiveTab}
        onOpenSahayak={() => openSahayakForTemple()}
        onOpenTracker={() => setIsTrackerOpen(true)}
        onOpenPanchangamModal={() => setIsPanchangamModalOpen(true)}
      />

      {/* Modals */}
      <TempleDetailModal
        temple={selectedTemple}
        onClose={() => setSelectedTemple(null)}
        onOpenSahayakForTemple={openSahayakForTemple}
        onSelectPrasadamTab={() => setActiveTab('prasadam')}
        onSelectPoojaTab={() => setActiveTab('poojas')}
      />

      <TourBookingModal
        tour={selectedTour}
        onClose={() => setSelectedTour(null)}
        onSubmitBooking={handleTourBookingRequest}
      />

      <PoojaBookingModal
        pooja={selectedPooja}
        onClose={() => setSelectedPooja(null)}
        onConfirmBooking={handleConfirmPoojaBooking}
      />

      <DarshanSahayakModal
        isOpen={isSahayakOpen}
        onClose={() => setIsSahayakOpen(false)}
        defaultTempleId={sahayakTempleId}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onOrderPlaced={handleOrderPlaced}
      />

      <OrderTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
        orders={orders}
      />

      {/* Full Panchangam Details Modal */}
      {isPanchangamModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative w-full max-w-lg bg-[#FFFDF9] rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 p-6 text-xs text-stone-800 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-200 pb-3">
              <div className="flex items-center gap-2">
                <Sun className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif font-bold text-base text-stone-900">
                  Daily AP Telugu Panchangam
                </h3>
              </div>
              <button
                onClick={() => setIsPanchangamModalOpen(false)}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-500 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Date & Day:</span>
                <span className="font-bold text-stone-900">{panchangam.date} · {panchangam.day}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Samvatsaram:</span>
                <span className="font-medium text-stone-900">{panchangam.teluguSamvatsara}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Masam & Paksham:</span>
                <span className="font-medium text-stone-900">{panchangam.masam} · {panchangam.paksham}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Tithi:</span>
                <span className="font-bold text-rose-800">{panchangam.tithi}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Nakshatram:</span>
                <span className="font-bold text-stone-900">{panchangam.nakshatra}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Abhijit Muhurtham:</span>
                <span className="font-bold text-emerald-800">{panchangam.abhijitMuhurtham}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Rahu Kalam:</span>
                <span className="font-bold text-rose-900">{panchangam.rahuKalam}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Yamagandam:</span>
                <span className="font-medium text-stone-900">{panchangam.yamagandam}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-stone-100">
                <span className="text-stone-500">Gulika Kalam:</span>
                <span className="font-medium text-stone-900">{panchangam.gulikaKalam}</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-[11px] text-amber-950">
              <strong>Spiritual Auspiciousness: </strong>{panchangam.specialEvent}
            </div>

            <button
              onClick={() => setIsPanchangamModalOpen(false)}
              className="w-full py-2 bg-stone-900 text-white font-bold rounded-lg text-xs hover:bg-stone-800 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
