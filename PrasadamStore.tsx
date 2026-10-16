import React, { useState } from 'react';
import { Package, ShieldCheck, Check, Truck, Clock, Sparkles, Plus, Minus, ShoppingBag } from 'lucide-react';
import { PrasadamItem } from '../types';
import { PRASADAM_ITEMS } from '../data/prasadam';

interface PrasadamStoreProps {
  onAddToCart: (item: PrasadamItem, quantity: number) => void;
  onInstantBuy: (item: PrasadamItem) => void;
}

export const PrasadamStore: React.FC<PrasadamStoreProps> = ({
  onAddToCart,
  onInstantBuy,
}) => {
  const [selectedTemple, setSelectedTemple] = useState<string>('all');
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [addedItemNotification, setAddedItemNotification] = useState<string | null>(null);

  const getQuantity = (id: string) => quantities[id] || 1;

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[id] || 1;
      const next = Math.max(1, Math.min(10, current + delta));
      return { ...prev, [id]: next };
    });
  };

  const handleAdd = (item: PrasadamItem) => {
    const qty = getQuantity(item.id);
    onAddToCart(item, qty);
    setAddedItemNotification(item.name);
    setTimeout(() => {
      setAddedItemNotification(null);
    }, 3000);
  };

  const filteredPrasadam = selectedTemple === 'all'
    ? PRASADAM_ITEMS
    : PRASADAM_ITEMS.filter((p) => p.templeId === selectedTemple || p.templeId === 'all-ap');

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Toast notification */}
      {addedItemNotification && (
        <div className="fixed bottom-6 right-6 z-50 bg-stone-900 text-amber-200 px-4 py-3 rounded-xl shadow-2xl border border-amber-500/30 flex items-center gap-3 text-xs animate-in slide-in-from-bottom duration-200">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Added <strong>{addedItemNotification}</strong> to Divine Basket!</span>
        </div>
      )}

      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-rose-800">
            Consecrated Prasadam Delivered Home
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
            Authentic Temple Prasadams & Sanctified Offerings
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
            Unable to travel to the temple? Receive fresh, vacuum-sealed holy prasadam directly from Devasthanam counters with purity guarantee.
          </p>
        </div>

        {/* Sacred Handling Guarantee Banner */}
        <div className="flex items-center gap-2 px-3 py-2 bg-amber-50 border border-amber-300/80 rounded-xl text-xs text-amber-900">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span className="font-semibold">Madi (Pure Ritual Cleanliness) Handling</span>
        </div>
      </div>

      {/* Trust Highlights Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs">
          <Truck className="w-5 h-5 text-rose-800 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-bold text-stone-900">Express SpeedPost Dispatch</p>
            <p className="text-stone-500 mt-0.5">Dispatched within 24-48 hours of consecration with tracking number.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs">
          <Package className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-bold text-stone-900">Food-Grade Vacuum Sealing</p>
            <p className="text-stone-500 mt-0.5">Retains authentic temple kitchen aroma, freshness, and ghee richness.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-stone-200 shadow-xs">
          <Sparkles className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
          <div className="text-xs">
            <p className="font-bold text-stone-900">100% Devasthanam Sourced</p>
            <p className="text-stone-500 mt-0.5">Directly procured from authorized Potu counters after Naivedyam.</p>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Temple */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
        <button
          onClick={() => setSelectedTemple('all')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'all'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          All Sacred Prasadams
        </button>
        <button
          onClick={() => setSelectedTemple('tirumala-tirupati')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'tirumala-tirupati'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Tirumala Balaji
        </button>
        <button
          onClick={() => setSelectedTemple('srisailam-mallikarjuna')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'srisailam-mallikarjuna'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Srisailam Jyotirlinga
        </button>
        <button
          onClick={() => setSelectedTemple('annavaram-satyanarayana')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'annavaram-satyanarayana'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Annavaram Satyanarayana
        </button>
        <button
          onClick={() => setSelectedTemple('vijayawada-kanaka-durga')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'vijayawada-kanaka-durga'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Vijayawada Kanaka Durga
        </button>
        <button
          onClick={() => setSelectedTemple('simhachalam-narasimha')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'simhachalam-narasimha'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Simhachalam Appam
        </button>
        <button
          onClick={() => setSelectedTemple('srikalahasti')}
          className={`px-3 py-1.5 font-medium rounded-lg cursor-pointer whitespace-nowrap ${
            selectedTemple === 'srikalahasti'
              ? 'bg-rose-800 text-white font-bold'
              : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
          }`}
        >
          Srikalahasti Rahu-Ketu
        </button>
      </div>

      {/* Prasadam Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {filteredPrasadam.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            {/* Card Image */}
            <div className="relative h-48 w-full overflow-hidden bg-stone-100">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {item.badge && (
                <div className="absolute top-3 left-3 bg-rose-800 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                  {item.badge}
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-[11px] font-semibold px-2 py-0.5 rounded-md">
                {item.weight}
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                {/* Temple Origin */}
                <p className="text-[11px] text-amber-800 font-medium">
                  {item.templeName}
                </p>
                <h3 className="font-serif font-bold text-stone-900 text-sm mt-0.5 leading-snug">
                  {item.name}
                </h3>
                <p className="text-[11px] text-stone-500 font-sans mt-0.5">
                  {item.teluguName}
                </p>

                <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Shelf Life & Consecration Note */}
              <div className="space-y-1.5 text-[11px] text-stone-600 border-t border-stone-100 pt-2 font-sans">
                <div className="flex items-center gap-1.5 text-stone-700">
                  <Clock className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Shelf Life: <strong>{item.shelfLife}</strong></span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-700">
                  <Sparkles className="w-3.5 h-3.5 text-rose-700 shrink-0" />
                  <span className="line-clamp-1">{item.consecrationMethod}</span>
                </div>
              </div>

              {/* Price & Quantity & Actions */}
              <div className="pt-3 border-t border-stone-100">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs text-stone-500">Price:</span>
                    <span className="text-lg font-bold text-stone-900 ml-1.5">
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-stone-50 text-xs">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-stone-200 text-stone-600 cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 font-bold text-stone-800">
                      {getQuantity(item.id)}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-stone-200 text-stone-600 cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleAdd(item)}
                    className="py-2 px-3 text-xs font-bold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg transition-colors cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => {
                      handleAdd(item);
                      onInstantBuy(item);
                    }}
                    className="py-2 px-3 text-xs font-bold text-white bg-rose-800 hover:bg-rose-900 rounded-lg transition-colors cursor-pointer text-center shadow-xs"
                  >
                    Direct Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
