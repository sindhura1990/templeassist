import React, { useState } from 'react';
import { X, Search, CheckCircle2, Clock, Truck, Package, ShieldCheck, Flame, Video, Play, ExternalLink } from 'lucide-react';
import { DevoteeOrder } from '../types';

interface OrderTrackerModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: DevoteeOrder[];
}

export const OrderTrackerModal: React.FC<OrderTrackerModalProps> = ({
  isOpen,
  onClose,
  orders,
}) => {
  const [searchId, setSearchId] = useState('');
  const [selectedOrder, setSelectedOrder] = useState<DevoteeOrder | null>(orders[0] || null);
  const [showVideoPlayer, setShowVideoPlayer] = useState(false);
  const [searchError, setSearchError] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchError('');
    const query = searchId.trim().toUpperCase();
    if (!query) return;

    const found = orders.find(
      (o) =>
        o.orderId.toUpperCase() === query ||
        o.trackingNumber.toUpperCase() === query ||
        o.shippingAddress.phone.includes(query)
    );

    if (found) {
      setSelectedOrder(found);
    } else {
      setSearchError(`No order found matching "${searchId}". Try sample IDs: TA-AP-9824 or TA-POOJA-5120.`);
    }
  };

  const getStepState = (status: DevoteeOrder['status'], stepIndex: number) => {
    const statusMap = {
      'Confirmed': 0,
      'Sankalpam Scheduled': 1,
      'Blessed & Consecrated': 2,
      'Dispatched via SpeedPost': 3,
      'Delivered': 4
    };
    const current = statusMap[status] ?? 0;
    if (stepIndex < current) return 'completed';
    if (stepIndex === current) return 'current';
    return 'upcoming';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-3xl bg-[#FFFDF9] rounded-2xl shadow-2xl border border-amber-900/15 overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-stone-900 via-rose-950 to-amber-950 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center">
              <Truck className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <p className="text-[11px] text-amber-300 font-semibold tracking-wide">
                Live Devotee Dispatch & Ritual Status
              </p>
              <h2 className="text-lg font-serif font-bold text-white">
                Track Prasadam & Pooja Order
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

        {/* Search input & Sample quick clicks */}
        <div className="p-6 border-b border-stone-200 bg-amber-50/50">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              <input
                type="text"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Enter Order ID (e.g. TA-AP-9824 or TA-POOJA-5120) or Phone..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-stone-300 rounded-xl text-xs text-stone-900 focus:outline-hidden focus:border-amber-600"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2 bg-rose-800 hover:bg-rose-900 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer"
            >
              Track
            </button>
          </form>

          {/* Sample quick pills */}
          <div className="flex flex-wrap items-center gap-2 mt-2.5 text-xs text-stone-500">
            <span>Quick Sample Orders:</span>
            <button
              onClick={() => {
                const sample = orders.find((o) => o.orderId === 'TA-AP-9824');
                if (sample) setSelectedOrder(sample);
              }}
              className="text-rose-800 underline hover:text-rose-950 font-medium cursor-pointer"
            >
              TA-AP-9824 (Prasadam Dispatched)
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => {
                const sample = orders.find((o) => o.orderId === 'TA-POOJA-5120');
                if (sample) setSelectedOrder(sample);
              }}
              className="text-rose-800 underline hover:text-rose-950 font-medium cursor-pointer"
            >
              TA-POOJA-5120 (Rahu-Ketu Pooja & Video)
            </button>
          </div>

          {searchError && (
            <p className="mt-2 text-xs text-red-600 font-medium">{searchError}</p>
          )}
        </div>

        {/* Selected Order Details */}
        {selectedOrder ? (
          <div className="p-6 max-h-[65vh] overflow-y-auto space-y-6 text-xs font-sans">
            {/* Status Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white rounded-xl border border-stone-200">
              <div>
                <span className="text-[11px] text-stone-500 block">Order ID:</span>
                <span className="font-serif font-bold text-base text-stone-900">{selectedOrder.orderId}</span>
                <span className="text-[11px] text-stone-500 block mt-0.5">Placed on {selectedOrder.date}</span>
              </div>
              <div className="sm:text-right">
                <span className="text-[11px] text-stone-500 block">Current Status:</span>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-950 font-bold rounded-lg border border-amber-300">
                  {selectedOrder.status}
                </span>
                <span className="text-[11px] text-stone-500 block mt-0.5 font-mono">
                  SpeedPost: {selectedOrder.trackingNumber}
                </span>
              </div>
            </div>

            {/* Stepper Timeline */}
            <div>
              <h4 className="font-serif font-bold text-sm text-stone-900 mb-4">
                Consecration & Dispatch Progress
              </h4>
              <div className="relative flex flex-col sm:flex-row items-start justify-between gap-4">
                {[
                  { title: 'Order & Sankalpam Confirmed', desc: 'Devotee details logged' },
                  { title: 'Devasthanam Collection', desc: 'Authorized potu schedule' },
                  { title: 'Blessed & Consecrated', desc: 'Sanctified at lotus feet' },
                  { title: 'SpeedPost Dispatched', desc: 'Vacuum sealed tracking' },
                  { title: 'Delivered to Home', desc: 'Doorstep divine blessing' },
                ].map((step, idx) => {
                  const state = getStepState(selectedOrder.status, idx);
                  return (
                    <div key={idx} className="flex-1 flex sm:flex-col items-center gap-2.5 text-center sm:text-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                          state === 'completed'
                            ? 'bg-emerald-600 text-white'
                            : state === 'current'
                            ? 'bg-amber-600 text-white ring-4 ring-amber-100'
                            : 'bg-stone-200 text-stone-500'
                        }`}
                      >
                        {state === 'completed' ? '✓' : idx + 1}
                      </div>
                      <div>
                        <p className={`font-bold text-xs ${state === 'upcoming' ? 'text-stone-400' : 'text-stone-900'}`}>
                          {step.title}
                        </p>
                        <p className="text-[10px] text-stone-500 mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Video Proof Section for Pooja Orders */}
            {selectedOrder.items.some((i) => i.type === 'pooja') && (
              <div className="p-4 bg-rose-50 rounded-xl border border-rose-200 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-rose-800" />
                    <h4 className="font-serif font-bold text-sm text-rose-950">
                      Personalized Sankalpam Video Proof
                    </h4>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    Verified Archaka Blessing
                  </span>
                </div>

                <p className="text-xs text-rose-900">
                  Your ritual has been conducted according to Vedic shastras. Watch the archaka invoke your family Gotra and Nakshatra:
                </p>

                {showVideoPlayer ? (
                  <div className="p-4 bg-stone-900 text-amber-100 rounded-lg text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-rose-700 flex items-center justify-center mx-auto text-white">
                      <Play className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-serif font-bold text-white">
                      [Vedic Archaka Sankalpam Video Streaming]
                    </p>
                    <p className="text-[11px] text-amber-200">
                      "Om Shri Srikalahasteeswaraya Namaha... Kashyapa Gotrodbhavasya Anantha Padmanabha Rao Sarma Namadheyasya..."
                    </p>
                    <button
                      onClick={() => setShowVideoPlayer(false)}
                      className="text-xs text-stone-400 hover:text-white underline cursor-pointer pt-1"
                    >
                      Close Player
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowVideoPlayer(true)}
                    className="w-full py-2.5 bg-rose-800 hover:bg-rose-900 text-white font-bold rounded-lg text-xs flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <Play className="w-4 h-4" />
                    <span>Watch Devotee Sankalpam Video (Recorded at Sanctum)</span>
                  </button>
                )}
              </div>
            )}

            {/* Items in this Order */}
            <div>
              <h4 className="font-serif font-bold text-sm text-stone-900 mb-3">
                Items in This Sacred Consignment
              </h4>
              <div className="space-y-2">
                {selectedOrder.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-white rounded-xl border border-stone-200 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-12 h-12 rounded-lg object-cover bg-stone-100"
                      />
                      <div>
                        <span className="text-[10px] text-amber-800 font-medium block">
                          {item.templeName}
                        </span>
                        <h5 className="font-bold text-stone-900">{item.title}</h5>
                        {item.sankalpamDetails && (
                          <p className="text-[10px] text-stone-500">
                            Gotra: {item.sankalpamDetails.gotra} · {item.sankalpamDetails.nakshatra}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-stone-500 text-[11px]">Qty: {item.quantity}</span>
                      <strong className="block text-stone-900">₹{item.price * item.quantity}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="p-3.5 bg-stone-100 rounded-xl">
              <span className="font-bold text-stone-900 block mb-1">Postal Delivery Destination:</span>
              <p className="text-stone-700">
                {selectedOrder.shippingAddress.fullName} — {selectedOrder.shippingAddress.addressLine},{' '}
                {selectedOrder.shippingAddress.city}, {selectedOrder.shippingAddress.state} -{' '}
                {selectedOrder.shippingAddress.pincode}
              </p>
              <p className="text-stone-500 mt-1">Contact: {selectedOrder.shippingAddress.phone}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
