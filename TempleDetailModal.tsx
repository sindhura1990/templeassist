import React from 'react';
import { X, Clock, Shirt, ShieldCheck, MapPin, Sparkles, Navigation, HeartHandshake, Package, Flame, Check } from 'lucide-react';
import { Temple } from '../types';

interface TempleDetailModalProps {
  temple: Temple | null;
  onClose: () => void;
  onOpenSahayakForTemple: (templeId: string) => void;
  onSelectPrasadamTab: () => void;
  onSelectPoojaTab: () => void;
}

export const TempleDetailModal: React.FC<TempleDetailModalProps> = ({
  temple,
  onClose,
  onOpenSahayakForTemple,
  onSelectPrasadamTab,
  onSelectPoojaTab,
}) => {
  if (!temple) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-4xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6">
        {/* Header with Background Image & Sacred Gradient */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden">
          <img
            src={temple.image}
            alt={temple.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917] via-[#1C1917]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-stone-900/60 hover:bg-stone-900 text-stone-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Temple Title & Deity */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <p className="text-amber-300 text-xs sm:text-sm font-semibold tracking-wide">
              {temple.teluguName}
            </p>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-tight mt-1">
              {temple.name}
            </h2>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-stone-300 mt-2 font-sans">
              <span className="text-amber-200 font-medium">{temple.deity}</span>
              <span aria-hidden="true">·</span>
              <span>{temple.district}</span>
              <span aria-hidden="true">·</span>
              <span>{temple.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
          {/* Significance */}
          <div className="bg-amber-50/70 p-4 rounded-xl border border-amber-200/80">
            <h3 className="font-serif font-bold text-amber-950 text-base flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              Sacred Kshetra Mahatyam & Significance
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              {temple.significance}
            </p>
          </div>

          {/* Darshan Timings & Live Wait Time Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-xs">
              <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-rose-800" />
                Devasthanam Darshan Timings
              </h4>
              <div className="mt-3 space-y-2 text-xs text-stone-700 font-sans">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="font-medium text-stone-600">Morning Slot:</span>
                  <span className="font-semibold text-stone-900">{temple.darshanTimings.morning}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="font-medium text-stone-600">Evening Slot:</span>
                  <span className="font-semibold text-stone-900">{temple.darshanTimings.evening}</span>
                </div>
                {temple.darshanTimings.specialTimings && (
                  <div className="flex justify-between py-1">
                    <span className="font-medium text-stone-600">Special Seva / Break:</span>
                    <span className="font-semibold text-amber-800">{temple.darshanTimings.specialTimings}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Live Queue Wait Times */}
            <div className="bg-white p-4 rounded-xl border border-stone-200/90 shadow-xs">
              <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-amber-700" />
                  Estimated Queue Wait Times
                </span>
                <span className="text-[11px] font-sans font-medium text-stone-500">
                  Crowd: <strong className="text-amber-900">{temple.waitTimes.crowdLevel}</strong>
                </span>
              </h4>
              <div className="mt-3 space-y-2 text-xs text-stone-700 font-sans">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Sarva Darshan (Free Queue):</span>
                  <span className="font-bold text-rose-900">{temple.waitTimes.sarvaDarshan}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-600">Special Entry (Token / Rs. 300):</span>
                  <span className="font-bold text-emerald-800">{temple.waitTimes.specialEntry}</span>
                </div>
                {temple.waitTimes.vipBreak && (
                  <div className="flex justify-between py-1">
                    <span className="text-stone-600">VIP / Protocol Break:</span>
                    <span className="font-bold text-amber-800">{temple.waitTimes.vipBreak}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Strict Traditional Dress Code Guide */}
          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200">
            <h4 className="font-serif font-bold text-stone-900 text-sm flex items-center gap-2">
              <Shirt className="w-4 h-4 text-stone-700" />
              Mandatory Devasthanam Dress Code & Regulations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3 text-xs text-stone-700 font-sans">
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <p className="font-bold text-stone-900 mb-1">For Male Pilgrims:</p>
                <p>{temple.dressCode.men}</p>
              </div>
              <div className="p-3 bg-white rounded-lg border border-stone-200">
                <p className="font-bold text-stone-900 mb-1">For Female Pilgrims:</p>
                <p>{temple.dressCode.women}</p>
              </div>
            </div>
            <p className="mt-2.5 text-[11px] text-amber-900 font-medium">
              Note: {temple.dressCode.notes}
            </p>
          </div>

          {/* Special Features & Devotee Services */}
          <div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mb-3">
              On-Ground Temple Facilities & Pilgrim Support
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 font-sans">
              {temple.specialFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded-lg border border-stone-200">
                  <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Major Daily Rituals & Sevas */}
          <div>
            <h4 className="font-serif font-bold text-stone-900 text-sm mb-3">
              Major Daily Sevas & Consecrated Rituals
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {temple.rituals.map((ritual, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-amber-50 text-amber-950 border border-amber-200 rounded-md font-medium"
                >
                  {ritual}
                </span>
              ))}
            </div>
          </div>

          {/* Nearest Transit Connectivity */}
          <div className="flex items-start gap-2.5 p-3 bg-stone-100 rounded-lg text-xs text-stone-700 font-sans">
            <MapPin className="w-4 h-4 text-rose-800 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-stone-900">Nearest Connectivity: </span>
              <span>{temple.nearestStation}</span>
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-6 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onSelectPrasadamTab();
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Package className="w-3.5 h-3.5 text-amber-700" />
              <span>Order Temple Prasadam</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectPoojaTab();
              }}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-stone-800 bg-white border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors cursor-pointer"
            >
              <Flame className="w-3.5 h-3.5 text-rose-800" />
              <span>Book Online Pooja</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenSahayakForTemple(temple.id);
            }}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-white bg-rose-800 hover:bg-rose-900 rounded-lg transition-colors cursor-pointer shadow-xs"
          >
            <HeartHandshake className="w-4 h-4 text-amber-200" />
            <span>Request Darshan Sahayak / Guide</span>
          </button>
        </div>
      </div>
    </div>
  );
};
