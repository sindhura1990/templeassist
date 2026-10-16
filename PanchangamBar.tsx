import React, { useState } from 'react';
import { Sparkles, Clock, Sun, Moon, AlertTriangle, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { getTodayPanchangam } from '../data/panchangam';

export const PanchangamBar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const panchangam = getTodayPanchangam();

  return (
    <div className="bg-gradient-to-r from-amber-50 via-[#FFF9EE] to-amber-50 border-b border-amber-200/80 px-4 py-2.5 transition-all text-xs text-stone-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <div className="flex items-center gap-1.5 font-bold text-amber-900">
            <Sun className="w-4 h-4 text-amber-600" />
            <span>AP Panchangam ({panchangam.date}):</span>
          </div>

          <div className="flex items-center gap-2 text-stone-700">
            <span className="font-semibold text-rose-800">{panchangam.tithi}</span>
            <span className="text-stone-300" aria-hidden="true">·</span>
            <span>{panchangam.nakshatra}</span>
            <span className="hidden sm:inline text-stone-300" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-emerald-800 font-medium">Abhijit: {panchangam.abhijitMuhurtham.split(' ')[0]} {panchangam.abhijitMuhurtham.split(' ')[1]}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-stone-600">
            <Clock className="w-3.5 h-3.5 text-amber-700" />
            <span>Rahu Kalam: <strong className="text-stone-900">{panchangam.rahuKalam}</strong></span>
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-semibold text-amber-800 hover:text-amber-950 underline decoration-amber-400 decoration-1 underline-offset-2 cursor-pointer ml-1"
          >
            <span>{expanded ? 'Less Details' : 'Full Timings'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-amber-200/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-stone-700 text-[11px] animate-fadeIn">
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <p className="text-stone-600 uppercase font-semibold text-[10px]">Samvatsaram & Masam</p>
            <p className="font-semibold text-stone-900 mt-0.5">{panchangam.teluguSamvatsara}</p>
            <p className="text-stone-600">{panchangam.masam}</p>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <p className="text-stone-600 uppercase font-semibold text-[10px]">Ayanam & Rutuvu</p>
            <p className="font-semibold text-stone-900 mt-0.5">{panchangam.ayanam}</p>
            <p className="text-stone-600">{panchangam.rutuvu}</p>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <p className="text-stone-600 uppercase font-semibold text-[10px]">Abhijit Muhurtham</p>
            <p className="font-semibold text-emerald-800 mt-0.5">{panchangam.abhijitMuhurtham}</p>
            <p className="text-stone-600">Most Auspicious Hour</p>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <p className="text-stone-600 uppercase font-semibold text-[10px]">Yamagandam</p>
            <p className="font-semibold text-stone-900 mt-0.5">{panchangam.yamagandam}</p>
            <p className="text-stone-600">Avoid Inception</p>
          </div>
          <div className="bg-white/80 p-2 rounded-lg border border-amber-100">
            <p className="text-stone-600 uppercase font-semibold text-[10px]">Gulika Kalam</p>
            <p className="font-semibold text-stone-900 mt-0.5">{panchangam.gulikaKalam}</p>
            <p className="text-stone-600">Moderate Timings</p>
          </div>
          <div className="bg-amber-100/60 p-2 rounded-lg border border-amber-200">
            <p className="text-amber-900 uppercase font-semibold text-[10px]">Daily Significance</p>
            <p className="font-medium text-amber-950 mt-0.5 text-[10px] leading-tight">{panchangam.specialEvent}</p>
          </div>
        </div>
      )}
    </div>
  );
};
