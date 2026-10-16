import React from 'react';
import { Flame, Video, CheckCircle2, Package, ShieldCheck, Sparkles, Calendar, Clock, ArrowRight } from 'lucide-react';
import { PoojaItem } from '../types';
import { POOJA_ITEMS } from '../data/poojas';

interface PoojaSectionProps {
  onSelectPooja: (pooja: PoojaItem) => void;
}

export const PoojaSection: React.FC<PoojaSectionProps> = ({
  onSelectPooja,
}) => {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-rose-800">
            Sacred Vedic Sevas & Rituals
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
            Online Pooja Bookings with Live Sankalpam & Video Proof
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
            Unable to visit the temple in person? Dedicated Vedic priests perform authentic poojas in your Gotra and family names at sacred AP kshetras.
          </p>
        </div>

        <div className="text-xs text-stone-500 font-sans">
          <strong>100% Vedic Compliance</strong> with personalized video evidence
        </div>
      </div>

      {/* How It Works 4-Step Process */}
      <div className="my-8 p-6 bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-2xl border border-amber-200/80 shadow-xs">
        <h3 className="font-serif font-bold text-base text-stone-900 text-center mb-6">
          How Online Pooja at AP Temples Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-rose-800 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
              1
            </div>
            <h4 className="font-bold text-xs text-stone-900">Provide Gotra & Sankalpam</h4>
            <p className="text-[11px] text-stone-600 mt-1">
              Share your family gotram, nakshatra, rashi, and prayer intention for the Vedic invocation.
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-rose-800 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
              2
            </div>
            <h4 className="font-bold text-xs text-stone-900">Vedic Ritual Performed</h4>
            <p className="text-[11px] text-stone-600 mt-1">
              Authorized Devasthanam archakas chant your names and execute full vidhi-vidhanam.
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-rose-800 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
              3
            </div>
            <h4 className="font-bold text-xs text-stone-900">HD Video Proof Sent</h4>
            <p className="text-[11px] text-stone-600 mt-1">
              Receive high-definition video of the priest calling out your sankalpam on WhatsApp and dashboard.
            </p>
          </div>

          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-rose-800 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-xs">
              4
            </div>
            <h4 className="font-bold text-xs text-stone-900">Blessed Prasadam Dispatched</h4>
            <p className="text-[11px] text-stone-600 mt-1">
              Sanctified Vibhuti, Kumkum, Raksha thread, and temple sweets dispatched to your home address.
            </p>
          </div>
        </div>
      </div>

      {/* Poojas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POOJA_ITEMS.map((pooja) => (
          <div
            key={pooja.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between"
          >
            {/* Image Header */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={pooja.image}
                alt={pooja.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent" />

              {pooja.isPopular && (
                <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
                  Most Booked Seva
                </div>
              )}

              <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-amber-200 text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                {pooja.duration}
              </div>

              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-[11px] text-amber-300 font-medium">
                  {pooja.templeName}
                </p>
                <h3 className="text-base font-serif font-bold text-white tracking-tight leading-tight mt-0.5">
                  {pooja.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {pooja.description}
                </p>

                {/* Benefits List */}
                <div className="mt-3 space-y-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-rose-900">
                    Sacred Benefits:
                  </p>
                  {pooja.benefits.slice(0, 3).map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Inclusions summary */}
                <div className="mt-3 pt-3 border-t border-stone-100 space-y-1 text-[11px] text-stone-500 font-sans">
                  <div className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-rose-800" />
                    <span>Includes Sankalpam Video Proof on WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-amber-700" />
                    <span>Consecrated Prasadam & Raksha delivered home</span>
                  </div>
                </div>
              </div>

              {/* Price & Book Button */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-3">
                <div>
                  <span className="text-[11px] text-stone-500 block">Dakshina & Seva Ticket:</span>
                  <span className="text-xl font-bold text-stone-900">₹{pooja.price}</span>
                </div>

                <button
                  onClick={() => onSelectPooja(pooja)}
                  className="px-5 py-2.5 bg-rose-800 hover:bg-rose-900 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                >
                  <Flame className="w-3.5 h-3.5 text-amber-300" />
                  <span>Book Pooja</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
