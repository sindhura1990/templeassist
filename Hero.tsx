import React, { useState } from 'react';
import { Search, Compass, Package, Flame, Users, Sparkles, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface HeroProps {
  onSelectTab: (tab: 'darshan' | 'tours' | 'prasadam' | 'poojas') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  onOpenSahayak: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectTab,
  searchQuery,
  setSearchQuery,
  onOpenSahayak
}) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF4E8] to-[#F5ECE0] border-b border-amber-900/10 pt-8 pb-16">
      {/* Decorative Traditional Indian Mandala / Ray Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#9a3412_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Sacred Header Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-4">
          <p className="text-xs uppercase tracking-widest font-bold text-rose-800">
            Official Divine Companion for Andhra Pradesh Pilgrims
          </p>
          <h1 className="mt-2 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 font-serif leading-tight">
            Sacred Darshans, Guided Tours & <span className="text-rose-800">Prasadam</span> at Your Doorstep
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed font-sans max-w-2xl mx-auto">
            Experience serene darshans at Tirumala, Srisailam, Kanaka Durga, Simhachalam & Ahobilam. 
            We arrange seamless queue guidance, curated pilgrimage tours, Vedic poojas, and deliver authentic sanctified prasadam to homes worldwide.
          </p>
        </div>

        {/* Global Search Bar */}
        <div className="max-w-2xl mx-auto mt-6">
          <div className="relative flex items-center shadow-lg shadow-amber-950/5 rounded-2xl bg-white border-2 border-amber-200/90 focus-within:border-amber-600 transition-colors p-1.5">
            <div className="pl-3 text-amber-700">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search temple, deity, district (e.g. Tirumala, Srisailam, Rahu Ketu, Laddu)..."
              className="w-full px-3 py-2.5 text-stone-900 placeholder:text-stone-600 text-sm focus:outline-hidden bg-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="px-2 text-stone-600 hover:text-stone-700 text-xs font-semibold cursor-pointer"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => onSelectTab('darshan')}
              className="px-5 py-2.5 bg-rose-800 hover:bg-rose-900 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0 shadow-xs"
            >
              Search
            </button>
          </div>

          {/* Quick Keywords */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-stone-600">
            <span className="font-medium text-stone-600">Popular:</span>
            <button
              onClick={() => { setSearchQuery('Tirumala'); onSelectTab('darshan'); }}
              className="hover:text-rose-800 underline decoration-amber-300 underline-offset-2 cursor-pointer"
            >
              Tirumala Balaji
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => { setSearchQuery('Srisailam'); onSelectTab('darshan'); }}
              className="hover:text-rose-800 underline decoration-amber-300 underline-offset-2 cursor-pointer"
            >
              Srisailam Jyotirlinga
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => { setSearchQuery('Laddu'); onSelectTab('prasadam'); }}
              className="hover:text-rose-800 underline decoration-amber-300 underline-offset-2 cursor-pointer"
            >
              Srivari Laddu Prasadam
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => { setSearchQuery('Rahu Ketu'); onSelectTab('poojas'); }}
              className="hover:text-rose-800 underline decoration-amber-300 underline-offset-2 cursor-pointer"
            >
              Rahu Ketu Pooja
            </button>
          </div>
        </div>

        {/* 4 Core Value Pillars (Zero-pill discipline, rich cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {/* Card 1: Temple Darshan Assist */}
          <div
            onClick={() => onSelectTab('darshan')}
            className="group relative bg-white/90 hover:bg-white p-6 rounded-2xl border border-amber-200/80 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-amber-800" />
              </div>
              <h2 className="font-serif font-bold text-lg text-stone-900 group-hover:text-rose-800 transition-colors">
                Temple Darshan Guidance
              </h2>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                Timings, VIP Break rules, dress codes, queue wait-time monitors, and verified Devasthanam procedures for 12+ iconic shrines.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-rose-800">
              <span>Explore Temples</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Divine Pilgrimage Tours */}
          <div
            onClick={() => onSelectTab('tours')}
            className="group relative bg-white/90 hover:bg-white p-6 rounded-2xl border border-amber-200/80 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Compass className="w-6 h-6 text-orange-800" />
              </div>
              <h2 className="font-serif font-bold text-lg text-stone-900 group-hover:text-rose-800 transition-colors">
                Curated Divine Yatras
              </h2>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                Stress-free 3D/4D spiritual tours across Pancharama, Tirupati-Srikalahasti, Ahobilam treks, and Srisailam with AC transport and pure satvik meals.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-rose-800">
              <span>View Itineraries</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Prasadam Home Delivery */}
          <div
            onClick={() => onSelectTab('prasadam')}
            className="group relative bg-white/90 hover:bg-white p-6 rounded-2xl border border-amber-200/80 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Package className="w-6 h-6 text-rose-800" />
              </div>
              <h2 className="font-serif font-bold text-lg text-stone-900 group-hover:text-rose-800 transition-colors">
                Prasadam Home Delivery
              </h2>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                Cannot travel? Receive authentic Tirumala Laddus, Annavaram Rava prasadam, Srisailam Vibhuti and Indrakeeladri Kumkum at your doorstep.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-rose-800">
              <span>Order Sanctified Prasad</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 4: Online Poojas & Sevas */}
          <div
            onClick={() => onSelectTab('poojas')}
            className="group relative bg-white/90 hover:bg-white p-6 rounded-2xl border border-amber-200/80 hover:border-amber-400/80 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-100 text-red-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Flame className="w-6 h-6 text-red-800" />
              </div>
              <h2 className="font-serif font-bold text-lg text-stone-900 group-hover:text-rose-800 transition-colors">
                Online Vedic Poojas & Sevas
              </h2>
              <p className="mt-2 text-xs text-stone-600 leading-relaxed font-sans">
                Book Rahu-Ketu Nivaran, Satyanarayana Vratham, or Rudrabhishekam. Performed with your family Gotra & Nakshatra, accompanied by HD video proof.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-rose-800">
              <span>Book Sankalpam Seva</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Devotee Trust & Guarantee Badges */}
        <div className="mt-10 py-4 px-6 bg-white/70 rounded-xl border border-amber-200/60 flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-stone-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Authentic Devasthanam Sourced</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Food-Grade Vacuum Sealed Packing</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Vedic Certified Temples & Priests</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Doorstep SpeedPost Dispatch across India & Worldwide</span>
          </div>
        </div>
      </div>
    </div>
  );
};
