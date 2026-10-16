import React, { useState } from 'react';
import { X, Compass, Calendar, Users, Car, Hotel, Check, Phone, Mail, User, ShieldCheck } from 'lucide-react';
import { DivineTour, TourBookingRequest } from '../types';

interface TourBookingModalProps {
  tour: DivineTour | null;
  onClose: () => void;
  onSubmitBooking: (request: TourBookingRequest) => void;
}

export const TourBookingModal: React.FC<TourBookingModalProps> = ({
  tour,
  onClose,
  onSubmitBooking,
}) => {
  if (!tour) return null;

  const [devoteeName, setDevoteeName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [departureCity, setDepartureCity] = useState(tour.departureCities[0] || 'Tirupati');
  const [travelDate, setTravelDate] = useState(
    new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0]
  );
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [vehicleType, setVehicleType] = useState<TourBookingRequest['vehicleType']>('Innova / SUV');
  const [hotelPreference, setHotelPreference] = useState<TourBookingRequest['hotelPreference']>('Standard 3-Star');
  const [specialRequirements, setSpecialRequirements] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const estimatedTotal = tour.pricePerPerson * adultsCount + (tour.pricePerPerson * 0.6 * childrenCount);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!devoteeName.trim() || !phone.trim()) return;

    onSubmitBooking({
      tourId: tour.id,
      devoteeName,
      phone,
      email,
      departureCity,
      travelDate,
      adultsCount,
      childrenCount,
      vehicleType,
      hotelPreference,
      specialRequirements
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-amber-900 via-stone-900 to-rose-950 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="text-[11px] text-amber-300 font-semibold tracking-wide">
                Divine Yatra Reservation & Custom Quote
              </p>
              <h2 className="text-lg font-serif font-bold text-white">
                {tour.title}
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

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900">
              Divine Yatra Request Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto">
              Namaskaram, <strong>{devoteeName}</strong>. Our AP Divine Tour Coordinator will call you at <strong>{phone}</strong> within 30 minutes with your customized itinerary, vehicle allocation, and confirmed darshan slots.
            </p>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-950 text-left max-w-md mx-auto space-y-1">
              <p><strong>Tour:</strong> {tour.title}</p>
              <p><strong>Duration:</strong> {tour.duration}</p>
              <p><strong>Estimated Quote:</strong> ₹{estimatedTotal.toLocaleString('en-IN')} (All-inclusive)</p>
              <p><strong>Assigned Coordinator:</strong> Sri R. Srinivasa Sharma (+91 94401 90402)</p>
              <p><strong>Official Support:</strong> contact@templeassist.com</p>
            </div>
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-rose-800 text-white font-bold text-xs rounded-xl hover:bg-rose-900 cursor-pointer"
            >
              Close & Return to Tours
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 max-h-[75vh] overflow-y-auto space-y-5 text-xs font-sans">
            {/* Quick Tour Summary */}
            <div className="flex items-center justify-between p-3.5 bg-amber-50 rounded-xl border border-amber-200">
              <div>
                <span className="text-stone-500 block">Duration & Route:</span>
                <strong className="text-stone-900 font-serif text-xs">{tour.duration} · {tour.route}</strong>
              </div>
              <div className="text-right">
                <span className="text-stone-500 block">Base Price:</span>
                <strong className="text-base text-rose-900 font-bold">₹{tour.pricePerPerson} / Person</strong>
              </div>
            </div>

            {/* Devotee Info */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-sm text-stone-900 border-b border-stone-200 pb-1">
                Pilgrim Lead Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Lead Devotee Full Name *</label>
                  <input
                    type="text"
                    required
                    value={devoteeName}
                    onChange={(e) => setDevoteeName(e.target.value)}
                    placeholder="e.g. S. Venkataramani"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">WhatsApp / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98480 12345"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="devotee@example.com"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
                  />
                </div>
              </div>
            </div>

            {/* Travel Details */}
            <div className="space-y-3">
              <h3 className="font-serif font-bold text-sm text-stone-900 border-b border-stone-200 pb-1">
                Travel & Logistics Preferences
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Preferred Pickup City</label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900 cursor-pointer"
                  >
                    {tour.departureCities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Preferred Start Date</label>
                  <input
                    type="date"
                    value={travelDate}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg focus:outline-hidden focus:border-amber-600 text-stone-900"
                  />
                </div>
              </div>

              {/* Passengers Count */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Adults (Age 12+)</label>
                  <input
                    type="number"
                    min={1}
                    max={30}
                    value={adultsCount}
                    onChange={(e) => setAdultsCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Children (Age 5 - 11)</label>
                  <input
                    type="number"
                    min={0}
                    max={15}
                    value={childrenCount}
                    onChange={(e) => setChildrenCount(Math.max(0, parseInt(e.target.value) || 0))}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>

              {/* Vehicle & Hotel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Vehicle Preference</label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900 cursor-pointer"
                  >
                    <option value="Sedan">AC Sedan (Dzire / Etios - 1 to 3 Pax)</option>
                    <option value="Innova / SUV">AC Innova / Crysta (4 to 6 Pax)</option>
                    <option value="Tempo Traveller">AC Tempo Traveller (7 to 12 Pax)</option>
                    <option value="Bus Group">Mini Luxury Bus (15+ Pax Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-1">Accommodation Type</label>
                  <select
                    value={hotelPreference}
                    onChange={(e) => setHotelPreference(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900 cursor-pointer"
                  >
                    <option value="Standard 3-Star">Comfort 3-Star AC Hotel with Satvik Food</option>
                    <option value="Premium 4-Star">Premium 4-Star Heritage Hotel</option>
                    <option value="Heritage Devasthanam Cottage">Devasthanam VIP Cottages (Subject to availability)</option>
                  </select>
                </div>
              </div>

              {/* Special Requirements */}
              <div>
                <label className="block text-stone-700 font-medium mb-1">
                  Special Requirements (Senior citizens wheelchair, tonsure assistance, infant meals, etc.)
                </label>
                <textarea
                  rows={2}
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder="e.g. My parents are 74 and 70 years old, wheelchair assistance needed at Vaikuntam queue complex."
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>
            </div>

            {/* Estimated Total */}
            <div className="p-3.5 bg-stone-100 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-stone-500 block text-[11px]">Estimated Comprehensive Package Cost:</span>
                <span className="text-lg font-bold text-stone-900">₹{estimatedTotal.toLocaleString('en-IN')}</span>
                <span className="text-[10px] text-stone-500 block">Includes Stay, AC Vehicle, Fuel, Tolls, Meals & Sahayak Escort</span>
              </div>
              <div className="text-right">
                <span className="text-emerald-700 font-bold block text-xs">Zero Advance Booking Fee</span>
                <span className="text-[10px] text-stone-500">Pay only upon coordinator verification</span>
              </div>
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
                <Compass className="w-4 h-4 text-amber-300" />
                <span>Request Yatra Booking & Assistance</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
