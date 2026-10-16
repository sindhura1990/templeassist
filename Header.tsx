import React from 'react';
import { ShoppingBag, Search, Phone, MapPin, Calendar, Compass, ShieldCheck, HeartHandshake, Mail } from 'lucide-react';
import { CartItem } from '../types';
import { TempleAssistLogo } from './TempleAssistLogo';

interface HeaderProps {
  activeTab: 'darshan' | 'tours' | 'prasadam' | 'poojas';
  setActiveTab: (tab: 'darshan' | 'tours' | 'prasadam' | 'poojas') => void;
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenTracker: () => void;
  onOpenSahayak: () => void;
  onOpenPanchangamModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  cart,
  onOpenCart,
  onOpenTracker,
  onOpenSahayak,
  onOpenPanchangamModal
}) => {
  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-amber-900/10 shadow-xs">
      {/* Top Auspicious Notification Bar */}
      <div className="bg-[#781816] text-amber-100 px-4 py-1.5 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-amber-300 font-semibold tracking-wide">|| సర్వేజనాః సుఖినోభవంతు ||</span>
            <span className="hidden sm:inline text-amber-200/60" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-amber-100/90">
              Devasthanams of Andhra Pradesh — Tirumala · Srisailam · Vijayawada · Simhachalam · Ahobilam
            </span>
          </div>

          <div className="flex items-center gap-4 text-amber-200">
            <button
              onClick={onOpenPanchangamModal}
              className="flex items-center gap-1.5 hover:text-amber-100 transition-colors cursor-pointer"
              title="View Today's AP Panchangam"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Today's Panchangam: Shravana Ekadashi</span>
            </button>
            <span className="text-amber-400/40" aria-hidden="true">|</span>
            <a
              href="tel:+919440190402"
              className="flex items-center gap-1.5 hover:text-amber-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden md:inline">Helpline:</span>
              <span className="font-semibold text-amber-200">+91 94401 90402</span>
            </a>
            <span className="hidden sm:inline text-amber-400/40" aria-hidden="true">|</span>
            <a
              href="mailto:contact@templeassist.com"
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-100 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span className="font-semibold text-amber-200">contact@templeassist.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand matching user's official crest */}
          <div
            onClick={() => setActiveTab('darshan')}
            className="cursor-pointer group py-1"
          >
            <TempleAssistLogo size="md" showDomain={true} />
          </div>

          {/* Navigation Links - Functional Segmented Tabs */}
          <nav className="hidden lg:flex items-center space-x-1 p-1 bg-amber-900/5 rounded-xl border border-amber-900/10">
            <button
              onClick={() => setActiveTab('darshan')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'darshan'
                  ? 'bg-white text-rose-800 shadow-xs border border-amber-200/60'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Temple Darshans
            </button>
            <button
              onClick={() => setActiveTab('tours')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'tours'
                  ? 'bg-white text-rose-800 shadow-xs border border-amber-200/60'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Divine Tours
            </button>
            <button
              onClick={() => setActiveTab('prasadam')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'prasadam'
                  ? 'bg-white text-rose-800 shadow-xs border border-amber-200/60'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Prasadam Home Delivery
            </button>
            <button
              onClick={() => setActiveTab('poojas')}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeTab === 'poojas'
                  ? 'bg-white text-rose-800 shadow-xs border border-amber-200/60'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-white/50'
              }`}
            >
              Online Poojas & Sevas
            </button>
          </nav>

          {/* Action Buttons: Sahayak Request, Track, Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenTracker}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-700 hover:text-rose-800 hover:bg-amber-100/50 rounded-lg transition-colors cursor-pointer"
              title="Track your Prasadam or Pooja order"
            >
              <Compass className="w-4 h-4 text-rose-700" />
              <span>Track Order</span>
            </button>

            <button
              onClick={onOpenSahayak}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-amber-900 bg-amber-100/80 hover:bg-amber-200/80 border border-amber-300/80 rounded-lg transition-all cursor-pointer shadow-xs"
            >
              <HeartHandshake className="w-4 h-4 text-amber-800" />
              <span className="hidden md:inline">Darshan Sahayak</span>
              <span className="md:hidden">Sahayak</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-stone-800 hover:text-rose-800 bg-white border border-stone-200 rounded-lg hover:border-amber-300 shadow-xs transition-colors cursor-pointer"
              aria-label="View divine basket"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-700 text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-xs">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Tabs */}
        <div className="lg:hidden flex items-center justify-between overflow-x-auto py-2.5 border-t border-stone-200/70 gap-2 text-xs scrollbar-none">
          <button
            onClick={() => setActiveTab('darshan')}
            className={`px-3 py-1.5 font-semibold rounded-md whitespace-nowrap cursor-pointer ${
              activeTab === 'darshan' ? 'bg-rose-800 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            Temples & Darshan
          </button>
          <button
            onClick={() => setActiveTab('tours')}
            className={`px-3 py-1.5 font-semibold rounded-md whitespace-nowrap cursor-pointer ${
              activeTab === 'tours' ? 'bg-rose-800 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            Divine Tours
          </button>
          <button
            onClick={() => setActiveTab('prasadam')}
            className={`px-3 py-1.5 font-semibold rounded-md whitespace-nowrap cursor-pointer ${
              activeTab === 'prasadam' ? 'bg-rose-800 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            Prasadam Delivery
          </button>
          <button
            onClick={() => setActiveTab('poojas')}
            className={`px-3 py-1.5 font-semibold rounded-md whitespace-nowrap cursor-pointer ${
              activeTab === 'poojas' ? 'bg-rose-800 text-white' : 'text-stone-700 bg-stone-100'
            }`}
          >
            Book Poojas
          </button>
          <button
            onClick={onOpenTracker}
            className="px-3 py-1.5 font-semibold rounded-md whitespace-nowrap text-stone-700 bg-amber-50 border border-amber-200 cursor-pointer"
          >
            Track Order
          </button>
        </div>
      </div>
    </header>
  );
};
