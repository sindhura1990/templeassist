import React, { useState } from 'react';
import { X, Flame, ShieldCheck, Video, Calendar, User, Check, Sparkles } from 'lucide-react';
import { PoojaItem, CartItem } from '../types';

interface PoojaBookingModalProps {
  pooja: PoojaItem | null;
  onClose: () => void;
  onConfirmBooking: (pooja: PoojaItem, sankalpamDetails: CartItem['sankalpamDetails']) => void;
}

const COMMON_GOTRAS = [
  'Kashyapa Gotram',
  'Bharadwaja Gotram',
  'Vasishta Gotram',
  'Vishwamitra / Kaushika Gotram',
  'Gouthama Gotram',
  'Haritha Gotram',
  'Koundinya Gotram',
  'Atreya Gotram',
  'Agastya Gotram',
  'Srivatsa Gotram',
  'Angirasa Gotram',
  'Shiva Gotram (If unknown)',
  'Vishnu Gotram (If unknown)'
];

const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Arudra', 'Punarvasu',
  'Pushyami', 'Ashlesha', 'Magha', 'Purva Phalguni (Pubba)', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Moola',
  'Purvashadha', 'Uttarashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purvabhadra', 'Uttarabhadra', 'Revati'
];

const RASHIS = [
  'Mesha (Aries)', 'Vrishabha (Taurus)', 'Mithuna (Gemini)', 'Karkataka (Cancer)',
  'Simha (Leo)', 'Kanya (Virgo)', 'Tula (Libra)', 'Vrischika (Scorpio)',
  'Dhanu (Sagittarius)', 'Makara (Capricorn)', 'Kumbha (Aquarius)', 'Meena (Pisces)'
];

export const PoojaBookingModal: React.FC<PoojaBookingModalProps> = ({
  pooja,
  onClose,
  onConfirmBooking,
}) => {
  if (!pooja) return null;

  const [devoteeName, setDevoteeName] = useState('');
  const [gotra, setGotra] = useState('Kashyapa Gotram');
  const [customGotra, setCustomGotra] = useState('');
  const [nakshatra, setNakshatra] = useState('Shravana');
  const [rashi, setRashi] = useState('Makara (Capricorn)');
  const [familyMembers, setFamilyMembers] = useState('');
  const [preferredDate, setPreferredDate] = useState(
    new Date(Date.now() + 86400000 * 2).toISOString().split('T')[0]
  );
  const [specialPrayer, setSpecialPrayer] = useState('Health, Family Prosperity & Divine Blessings');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!devoteeName.trim()) {
      setValidationError('Please enter the primary devotee full name for Vedic Sankalpam.');
      return;
    }

    const finalGotra = gotra === 'other' ? (customGotra || 'Kashyapa Gotram') : gotra;

    onConfirmBooking(pooja, {
      devoteeName,
      gotra: finalGotra,
      nakshatra,
      rashi,
      familyMembers,
      preferredDate,
      specialPrayer
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6">
        {/* Modal Top Banner */}
        <div className="bg-gradient-to-r from-rose-900 via-stone-900 to-amber-950 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <Flame className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="text-[11px] text-amber-300 font-semibold tracking-wide">
                Sacred Sankalpam Seva Booking
              </p>
              <h2 className="text-lg font-serif font-bold text-white">
                {pooja.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-stone-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Form */}
        <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-xs font-sans">
          {/* Temple and Price Summary */}
          <div className="flex items-center justify-between p-3.5 bg-amber-50/80 rounded-xl border border-amber-200">
            <div>
              <span className="text-stone-500 block">Temple Kshetram:</span>
              <strong className="text-stone-900 font-serif text-sm">{pooja.templeName}</strong>
            </div>
            <div className="text-right">
              <span className="text-stone-500 block">Seva Dakshina:</span>
              <strong className="text-base text-rose-900 font-bold">₹{pooja.price}</strong>
            </div>
          </div>

          {/* Guarantees Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-700">
            <div className="flex items-center gap-2 p-2 bg-stone-100/70 rounded-lg">
              <Video className="w-3.5 h-3.5 text-rose-700 shrink-0" />
              <span>Personalized Sankalpam Video Proof</span>
            </div>
            <div className="flex items-center gap-2 p-2 bg-stone-100/70 rounded-lg">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
              <span>Consecrated Prasadam Dispatched Home</span>
            </div>
          </div>

          {validationError && (
            <div className="p-2.5 bg-red-50 text-red-700 rounded-lg border border-red-200 font-medium">
              {validationError}
            </div>
          )}

          {/* Devotee Vedic Credentials Form */}
          <div className="space-y-4">
            <h3 className="font-serif font-bold text-sm text-stone-900 border-b border-stone-200 pb-1">
              Devotee Sankalpam Details (సంకల్ప వివరాలు)
            </h3>

            {/* Primary Name */}
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Primary Devotee Full Name * (ప్రధాన కర్త పేరు)
              </label>
              <input
                type="text"
                required
                value={devoteeName}
                onChange={(e) => setDevoteeName(e.target.value)}
                placeholder="e.g. Venkata Ramana Sharma"
                className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
              />
            </div>

            {/* Gotra & Custom Gotra */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Family Gotram (గోత్రం)
                </label>
                <select
                  value={gotra}
                  onChange={(e) => setGotra(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900 cursor-pointer"
                >
                  {COMMON_GOTRAS.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                  <option value="other">Other / Custom Gotram</option>
                </select>
              </div>

              {gotra === 'other' ? (
                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Enter Custom Gotram
                  </label>
                  <input
                    type="text"
                    value={customGotra}
                    onChange={(e) => setCustomGotra(e.target.value)}
                    placeholder="Enter your Gotram"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-stone-700 font-medium mb-1">
                    Janma Nakshatra (జన్మ నక్షత్రం)
                  </label>
                  <select
                    value={nakshatra}
                    onChange={(e) => setNakshatra(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900 cursor-pointer"
                  >
                    {NAKSHATRAS.map((nak) => (
                      <option key={nak} value={nak}>{nak}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>

            {/* Rashi & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Rashi (రాశి)
                </label>
                <select
                  value={rashi}
                  onChange={(e) => setRashi(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900 cursor-pointer"
                >
                  {RASHIS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Preferred Pooja Date (పూజా దినం)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
                />
              </div>
            </div>

            {/* Family Members */}
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Family Members Names (కుటుంబ సభ్యుల పేర్లు - Optional)
              </label>
              <input
                type="text"
                value={familyMembers}
                onChange={(e) => setFamilyMembers(e.target.value)}
                placeholder="e.g. Spouse: Lakshmi, Son: Karthik, Daughter: Sai Sneha"
                className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
              />
              <span className="text-[10px] text-stone-500 mt-0.5 block">
                All names will be chanted by the Vedic priest during the divine Sankalpa.
              </span>
            </div>

            {/* Specific Wish / Sankalpa Intention */}
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Special Prayer Intention / Purpose (కోరిక / సంకల్ప ఉద్దేశం)
              </label>
              <textarea
                rows={2}
                value={specialPrayer}
                onChange={(e) => setSpecialPrayer(e.target.value)}
                placeholder="e.g. Seeking early marriage alliance, clearing severe debts, relief from chronic health issues, general family peace..."
                className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
              />
            </div>
          </div>

          {/* Submit Actions */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-stone-700 hover:text-stone-900 font-medium cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-rose-800 hover:bg-rose-900 text-white font-bold rounded-lg transition-colors cursor-pointer shadow-xs flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-amber-300" />
              <span>Confirm & Add to Basket (₹{pooja.price})</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
