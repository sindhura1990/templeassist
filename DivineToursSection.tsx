import React, { useState } from 'react';
import { Compass, Calendar, Clock, MapPin, Check, ChevronDown, ChevronUp, Users, ShieldCheck, ArrowRight } from 'lucide-react';
import { DivineTour } from '../types';
import { DIVINE_TOURS } from '../data/tours';

interface DivineToursSectionProps {
  onSelectTour: (tour: DivineTour) => void;
  onOpenCustomTour: () => void;
}

export const DivineToursSection: React.FC<DivineToursSectionProps> = ({
  onSelectTour,
  onOpenCustomTour,
}) => {
  const [expandedTourId, setExpandedTourId] = useState<string | null>(null);

  const toggleItinerary = (id: string) => {
    setExpandedTourId(expandedTourId === id ? null : id);
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <p className="text-xs uppercase tracking-widest font-bold text-rose-800">
            Guided Spiritual Pilgrimages
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
            Divine Tours & Yatras Across Andhra Pradesh
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
            Completely organized sacred yatras with AC transport, pure satvik food, comfortable hotel stays, and verified temple Sahayak guides.
          </p>
        </div>

        <button
          onClick={onOpenCustomTour}
          className="px-4 py-2.5 bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs rounded-xl border border-amber-300 transition-colors cursor-pointer shrink-0 shadow-xs flex items-center gap-2"
        >
          <Compass className="w-4 h-4 text-amber-800" />
          <span>Customize Your Own Tour</span>
        </button>
      </div>

      {/* Tours List */}
      <div className="space-y-8 mt-8">
        {DIVINE_TOURS.map((tour) => {
          const isExpanded = expandedTourId === tour.id;

          return (
            <div
              key={tour.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:border-amber-300 transition-all flex flex-col lg:flex-row"
            >
              {/* Tour Image & Badges */}
              <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-full overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone-950/30" />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-xs text-amber-300 text-xs font-bold px-3 py-1 rounded-md shadow-xs">
                  {tour.duration}
                </div>

                {/* Price Badge on Mobile */}
                <div className="absolute bottom-4 left-4 lg:hidden text-white">
                  <span className="text-[11px] text-stone-300 block">Starting from</span>
                  <span className="text-xl font-bold text-amber-300">₹{tour.pricePerPerson}</span>
                  <span className="text-xs text-stone-300"> / person</span>
                </div>
              </div>

              {/* Tour Details */}
              <div className="p-6 lg:w-3/5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500 font-sans mb-1">
                    <span className="text-amber-800 font-semibold">{tour.district}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-stone-600">{tour.teluguSubtitle}</span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-stone-900 leading-snug">
                    {tour.title}
                  </h3>

                  {/* Route */}
                  <div className="flex items-center gap-2 mt-2 text-xs text-rose-900 font-medium bg-rose-50/70 p-2 rounded-lg border border-rose-100">
                    <MapPin className="w-3.5 h-3.5 shrink-0" />
                    <span>{tour.route}</span>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-1.5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      Pilgrimage Highlights:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-stone-700 font-sans">
                      {tour.highlights.slice(0, 4).map((h, i) => (
                        <div key={i} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Inclusions Strip */}
                  <div className="mt-4 pt-3 border-t border-stone-100 flex flex-wrap gap-2 text-[11px] text-stone-600 font-sans">
                    <span className="bg-stone-100 px-2.5 py-1 rounded-md">
                      Hotel Accommodations Included
                    </span>
                    <span className="bg-stone-100 px-2.5 py-1 rounded-md">
                      AC Private Vehicle & Fuel
                    </span>
                    <span className="bg-stone-100 px-2.5 py-1 rounded-md">
                      Satvik Meals
                    </span>
                    <span className="bg-stone-100 px-2.5 py-1 rounded-md">
                      Devasthanam Sahayak Escort
                    </span>
                  </div>
                </div>

                {/* Itinerary Accordion View */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-stone-200 space-y-4 animate-in fade-in duration-200">
                    <h4 className="font-serif font-bold text-sm text-stone-900">
                      Detailed Day-by-Day Yatra Itinerary
                    </h4>
                    <div className="space-y-3">
                      {tour.itinerary.map((day) => (
                        <div key={day.day} className="p-3 bg-amber-50/50 rounded-xl border border-amber-200/60">
                          <p className="font-bold text-xs text-amber-950">
                            Day {day.day}: {day.title}
                          </p>
                          <ul className="mt-1.5 space-y-1 text-xs text-stone-700 font-sans pl-2">
                            {day.schedule.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-amber-700 font-bold">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-stone-500">
                      <strong>Departure Cities:</strong> {tour.departureCities.join(', ')}
                    </div>
                  </div>
                )}

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-4">
                  <div className="hidden lg:block">
                    <span className="text-[11px] text-stone-500 block">All-Inclusive Cost:</span>
                    <span className="text-2xl font-bold text-stone-900">₹{tour.pricePerPerson}</span>
                    <span className="text-xs text-stone-500"> / Devotee</span>
                  </div>

                  <div className="flex items-center gap-2 w-full lg:w-auto justify-end">
                    <button
                      onClick={() => toggleItinerary(tour.id)}
                      className="px-3.5 py-2.5 text-xs font-semibold text-stone-700 hover:text-stone-900 bg-stone-100 hover:bg-stone-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <span>{isExpanded ? 'Hide Itinerary' : 'View Day Plan'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    <button
                      onClick={() => onSelectTour(tour)}
                      className="px-5 py-2.5 bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs flex items-center gap-1.5"
                    >
                      <Compass className="w-4 h-4 text-amber-300" />
                      <span>Book Pilgrimage Tour</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
