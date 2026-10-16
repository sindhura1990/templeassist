import React, { useState } from 'react';
import { X, HeartHandshake, ShieldCheck, Check, Calendar, Phone, Mail, User, Users } from 'lucide-react';
import { SahayakRequest } from '../types';
import { TEMPLES } from '../data/temples';

interface DarshanSahayakModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTempleId?: string;
}

const AVAILABLE_SERVICES = [
  'Senior Citizen & Wheelchair Queue Escort (Vaikuntam / Special queue)',
  'Hair Tonsuring (Kalyanakatta) assistance & token guidance',
  'Devasthanam Cottage / Room Allotment assistance',
  'Special Entry Rs. 300 / Divya Darshan / VIP Break entry navigation',
  'Local Station / Airport pickup & drop with respectful driver',
  'Prasadam & Laddu counter queue collection',
  'Pure Satvik Brahmin Bhojanam / Meal coordination'
];

export const DarshanSahayakModal: React.FC<DarshanSahayakModalProps> = ({
  isOpen,
  onClose,
  defaultTempleId,
}) => {
  if (!isOpen) return null;

  const [templeId, setTempleId] = useState(defaultTempleId || 'tirumala-tirupati');
  const [devoteeName, setDevoteeName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState(
    new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]
  );
  const [devoteeCount, setDevoteeCount] = useState(3);
  const [seniorCitizensCount, setSeniorCitizensCount] = useState(1);
  const [wheelchairNeeded, setWheelchairNeeded] = useState(true);
  const [accommodationNeeded, setAccommodationNeeded] = useState(true);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Senior Citizen & Wheelchair Queue Escort (Vaikuntam / Special queue)',
    'Devasthanam Cottage / Room Allotment assistance'
  ]);
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!devoteeName.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const selectedTempleObj = TEMPLES.find((t) => t.id === templeId);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-800 via-stone-900 to-rose-900 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-300/30 flex items-center justify-center">
              <HeartHandshake className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="text-[11px] text-amber-300 font-semibold tracking-wide">
                On-Ground Devotee Assistance
              </p>
              <h2 className="text-lg font-serif font-bold text-white">
                Book a Dedicated Darshan Sahayak
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

        {isSubmitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Darshan Sahayak Assigned!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Namaskaram, <strong>{devoteeName}</strong>. Our local Sahayak at <strong>{selectedTempleObj?.name}</strong> has received your pilgrimage details for <strong>{visitDate}</strong>.
            </p>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 text-left max-w-md mx-auto space-y-1">
              <p><strong>Temple:</strong> {selectedTempleObj?.name}</p>
              <p><strong>Devotees:</strong> {devoteeCount} ({seniorCitizensCount} Senior Citizens)</p>
              <p><strong>Wheelchair Escort:</strong> {wheelchairNeeded ? 'Yes (Arranged)' : 'Not needed'}</p>
              <p><strong>Local Sahayak Helpdesk:</strong> +91 94401 90402 (WhatsApp Available)</p>
              <p><strong>Email Support:</strong> contact@templeassist.com</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-rose-800 text-white font-bold text-xs rounded-xl hover:bg-rose-900 cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-xs font-sans">
            <p className="text-stone-600 leading-relaxed text-xs">
              Visiting Tirumala, Srisailam, or Indrakeeladri with elderly parents, infants, or for the first time? Our verified local Sahayaks guide you through crowd lines, wheelchair navigation, hair tonsure, and stay allotment.
            </p>

            {/* Temple Selection */}
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Select Sacred Shrine / Temple *
              </label>
              <select
                value={templeId}
                onChange={(e) => setTempleId(e.target.value)}
                className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900 cursor-pointer text-xs"
              >
                {TEMPLES.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.district})
                  </option>
                ))}
              </select>
            </div>

            {/* Devotee Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Lead Devotee Full Name *</label>
                <input
                  type="text"
                  required
                  value={devoteeName}
                  onChange={(e) => setDevoteeName(e.target.value)}
                  placeholder="e.g. K. Raghavendra Rao"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 94400 98765"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
            </div>

            {/* Date & Counts */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-stone-700 font-medium mb-1">Planned Darshan Date *</label>
                <input
                  type="date"
                  required
                  value={visitDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setVisitDate(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-1">Total Pilgrims</label>
                <input
                  type="number"
                  min={1}
                  max={25}
                  value={devoteeCount}
                  onChange={(e) => setDevoteeCount(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
              <div>
                <label className="block text-stone-700 font-medium mb-1">Senior Citizens (Age 65+)</label>
                <input
                  type="number"
                  min={0}
                  max={10}
                  value={seniorCitizensCount}
                  onChange={(e) => setSeniorCitizensCount(Math.max(0, parseInt(e.target.value) || 0))}
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
            </div>

            {/* Special Services Checkbox List */}
            <div>
              <label className="block text-stone-700 font-medium mb-2">
                Assistance Services Required:
              </label>
              <div className="space-y-2">
                {AVAILABLE_SERVICES.map((srv, idx) => {
                  const checked = selectedServices.includes(srv);
                  return (
                    <label
                      key={idx}
                      className="flex items-start gap-2.5 p-2.5 bg-stone-50 hover:bg-amber-50/60 rounded-lg border border-stone-200 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(srv)}
                        className="mt-0.5 rounded-sm border-stone-300 text-rose-800 focus:ring-rose-800"
                      />
                      <span className="text-xs text-stone-800">{srv}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-stone-700 font-medium mb-1">
                Additional Pilgrim Details or Medical Needs (Optional)
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Need battery car assistance at Tirumala, father cannot walk long steps..."
                className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
              />
            </div>

            {/* Submit */}
            <div className="pt-3 border-t border-stone-200 flex items-center justify-end gap-3">
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
                <HeartHandshake className="w-4 h-4 text-amber-300" />
                <span>Confirm Sahayak Request</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
