import React, { useState, useMemo } from 'react';
import { MapPin, Clock, Shirt, ArrowRight, ShieldCheck, HeartHandshake, Navigation, Sparkles } from 'lucide-react';
import { Temple } from '../types';
import { TEMPLES } from '../data/temples';

interface DarshanSectionProps {
  searchQuery: string;
  onSelectTemple: (temple: Temple) => void;
  onOpenSahayakForTemple: (templeId: string) => void;
}

export const DarshanSection: React.FC<DarshanSectionProps> = ({
  searchQuery,
  onSelectTemple,
  onOpenSahayakForTemple,
}) => {
  const [districtFilter, setDistrictFilter] = useState<string>('all');
  const [deityFilter, setDeityFilter] = useState<string>('all');

  // Filtered temples
  const filteredTemples = useMemo(() => {
    return TEMPLES.filter((temple) => {
      // Search matching
      const matchesSearch =
        !searchQuery ||
        temple.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.teluguName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.deity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
        temple.location.toLowerCase().includes(searchQuery.toLowerCase());

      // District filter
      let matchesDistrict = true;
      if (districtFilter === 'tirupati') {
        matchesDistrict = temple.district.includes('Tirupati') || temple.district.includes('Chittoor');
      } else if (districtFilter === 'nandyal') {
        matchesDistrict = temple.district.includes('Nandyal') || temple.district.includes('Kurnool');
      } else if (districtFilter === 'coastal') {
        matchesDistrict = temple.district.includes('NTR') || temple.district.includes('Krishna') || temple.district.includes('Guntur') || temple.district.includes('Kakinada') || temple.district.includes('Eluru') || temple.district.includes('Konaseema');
      } else if (districtFilter === 'north-coast') {
        matchesDistrict = temple.district.includes('Visakhapatnam');
      } else if (districtFilter === 'rayalaseema') {
        matchesDistrict = temple.district.includes('Sri Sathya Sai') || temple.district.includes('Anantapur') || temple.district.includes('Kadapa');
      }

      // Deity filter
      let matchesDeity = true;
      if (deityFilter === 'venkateswara') {
        matchesDeity = temple.deity.toLowerCase().includes('venkateswara') || temple.deity.toLowerCase().includes('balaji');
      } else if (deityFilter === 'shiva') {
        matchesDeity = temple.deity.toLowerCase().includes('shiva') || temple.deity.toLowerCase().includes('mallikarjuna') || temple.deity.toLowerCase().includes('linga');
      } else if (deityFilter === 'devi') {
        matchesDeity = temple.deity.toLowerCase().includes('durga') || temple.deity.toLowerCase().includes('devi') || temple.deity.toLowerCase().includes('bhramaramba');
      } else if (deityFilter === 'narasimha') {
        matchesDeity = temple.deity.toLowerCase().includes('narasimha');
      }

      return matchesSearch && matchesDistrict && matchesDeity;
    });
  }, [searchQuery, districtFilter, deityFilter]);

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-rose-800">
            Sacred Kshetras of Andhra Pradesh
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
            Temple Darshan Guide & Live Queue Status
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
            Comprehensive darshan timings, dress code requirements, queue wait times, and sahayak support across AP.
          </p>
        </div>

        {/* Total Count */}
        <div className="text-xs text-stone-500 font-sans">
          Showing <strong className="text-stone-900">{filteredTemples.length}</strong> of {TEMPLES.length} Sacred Shrines
        </div>
      </div>

      {/* Filter Controls (Buttons / Segmented Tabs with zero-pill discipline) */}
      <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        {/* District Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100/90 rounded-xl border border-stone-200/80 text-xs">
          <button
            onClick={() => setDistrictFilter('all')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
              districtFilter === 'all'
                ? 'bg-white text-rose-900 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            All Regions
          </button>
          <button
            onClick={() => setDistrictFilter('tirupati')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
              districtFilter === 'tirupati'
                ? 'bg-white text-rose-900 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Tirupati / Chittoor
          </button>
          <button
            onClick={() => setDistrictFilter('nandyal')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
              districtFilter === 'nandyal'
                ? 'bg-white text-rose-900 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Srisailam & Ahobilam
          </button>
          <button
            onClick={() => setDistrictFilter('coastal')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
              districtFilter === 'coastal'
                ? 'bg-white text-rose-900 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Vijayawada & Godavari
          </button>
          <button
            onClick={() => setDistrictFilter('north-coast')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
              districtFilter === 'north-coast'
                ? 'bg-white text-rose-900 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Visakhapatnam
          </button>
          <button
            onClick={() => setDistrictFilter('rayalaseema')}
            className={`px-3 py-1.5 font-medium rounded-lg transition-colors cursor-pointer ${
              districtFilter === 'rayalaseema'
                ? 'bg-white text-rose-900 font-bold shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Rayalaseema / Lepakshi
          </button>
        </div>

        {/* Deity Filter Dropdown or Quick Buttons */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500 font-medium">Deity:</span>
          <select
            value={deityFilter}
            onChange={(e) => setDeityFilter(e.target.value)}
            className="px-3 py-1.5 bg-white border border-stone-300 rounded-lg text-stone-800 text-xs font-medium focus:outline-hidden focus:border-amber-600 cursor-pointer shadow-xs"
          >
            <option value="all">All Deities</option>
            <option value="venkateswara">Lord Venkateswara (Balaji)</option>
            <option value="shiva">Lord Shiva & Jyotirlinga</option>
            <option value="devi">Goddess Kanaka Durga & Shakti</option>
            <option value="narasimha">Lord Narasimha Swamy</option>
          </select>
        </div>
      </div>

      {/* Temples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredTemples.map((temple) => (
          <div
            key={temple.id}
            className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-300 transition-all flex flex-col justify-between group"
          >
            {/* Image Header with Live Crowd Status */}
            <div className="relative h-48 w-full overflow-hidden">
              <img
                src={temple.image}
                alt={temple.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />

              {/* District text on top left */}
              <div className="absolute top-3 left-3 bg-stone-900/70 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                {temple.district}
              </div>

              {/* Crowd status top right */}
              <div className="absolute top-3 right-3 bg-amber-950/80 backdrop-blur-xs text-amber-200 text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 border border-amber-400/30">
                <span className={`w-2 h-2 rounded-full ${
                  temple.waitTimes.crowdLevel === 'Very High' ? 'bg-red-500' :
                  temple.waitTimes.crowdLevel === 'Heavy' ? 'bg-orange-500' :
                  temple.waitTimes.crowdLevel === 'Moderate' ? 'bg-amber-400' : 'bg-emerald-400'
                }`} />
                <span>Crowd: {temple.waitTimes.crowdLevel}</span>
              </div>

              {/* Deity label bottom */}
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <p className="text-[11px] text-amber-300 font-medium">
                  {temple.teluguName.split(',')[0]}
                </p>
                <h3 className="text-lg font-serif font-bold text-white tracking-tight leading-tight mt-0.5 line-clamp-1">
                  {temple.name}
                </h3>
              </div>
            </div>

            {/* Card Details */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              {/* Unboxed Metadata with Typographic Separators */}
              <div className="flex items-center gap-2 text-xs text-stone-500 font-sans">
                <span className="text-stone-700 font-medium">{temple.deity.split('(')[0]}</span>
                <span aria-hidden="true">·</span>
                <span>{temple.district.replace(' District', '')}</span>
              </div>

              {/* Wait Times Row */}
              <div className="bg-stone-50 p-3 rounded-xl border border-stone-200/80 space-y-1.5 text-xs font-sans">
                <div className="flex items-center justify-between text-stone-600">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Free Queue (Sarva Darshan):</span>
                  </span>
                  <span className="font-bold text-stone-900">{temple.waitTimes.sarvaDarshan}</span>
                </div>
                <div className="flex items-center justify-between text-stone-600">
                  <span className="flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Special Entry (Rs. 100-300):</span>
                  </span>
                  <span className="font-bold text-emerald-800">{temple.waitTimes.specialEntry}</span>
                </div>
              </div>

              {/* Brief Dress Code & Feature summary */}
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                {temple.significance}
              </p>

              {/* Key Features Inline */}
              <div className="flex flex-wrap gap-1.5 text-[11px] text-stone-600">
                <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded-md font-medium border border-amber-200/60">
                  {temple.specialFeatures[0]}
                </span>
                <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded-md font-medium">
                  {temple.specialFeatures[1]}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectTemple(temple)}
                  className="flex-1 py-2 px-3 text-xs font-bold text-stone-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 rounded-lg transition-colors cursor-pointer text-center"
                >
                  Darshan Guide & Rules
                </button>
                <button
                  onClick={() => onOpenSahayakForTemple(temple.id)}
                  className="py-2 px-3 text-xs font-bold text-white bg-rose-800 hover:bg-rose-900 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Book companion sahayak for elder escort or queue assistance"
                >
                  <HeartHandshake className="w-3.5 h-3.5 text-amber-200" />
                  <span>Sahayak</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredTemples.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 mt-6">
          <p className="text-stone-500 text-sm font-medium">
            No temples matched your search "{searchQuery}".
          </p>
          <button
            onClick={() => {
              setDistrictFilter('all');
              setDeityFilter('all');
            }}
            className="mt-3 text-xs font-semibold text-rose-800 hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
