import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Check, Truck, Flame, Sparkles } from 'lucide-react';
import { CartItem, DevoteeOrder } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  onOrderPlaced: (order: DevoteeOrder) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOrderPlaced,
}) => {
  const [step, setStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [placedOrder, setPlacedOrder] = useState<DevoteeOrder | null>(null);

  // Checkout address state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine, setAddressLine] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('Andhra Pradesh');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI (Google Pay / PhonePe / Paytm)');

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 799 || subtotal === 0 ? 0 : 79;
  const grandTotal = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !addressLine || !pincode) return;

    const newOrderId = `TA-AP-${Math.floor(1000 + Math.random() * 9000)}`;
    const newTracking = `IN-SPD-${Math.floor(1000000 + Math.random() * 9000000)}`;

    const order: DevoteeOrder = {
      orderId: newOrderId,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      items: [...cart],
      totalAmount: grandTotal,
      shippingAddress: {
        fullName,
        phone,
        addressLine,
        city,
        state,
        pincode
      },
      paymentMethod,
      status: 'Confirmed',
      trackingNumber: newTracking,
      videoLink: cart.some((c) => c.type === 'pooja')
        ? `https://templeassist.com/sankalpam-video/${newOrderId}`
        : undefined
    };

    // Save order
    onOrderPlaced(order);
    setPlacedOrder(order);
    setStep('success');
  };

  const resetAndClose = () => {
    setStep('cart');
    setPlacedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-900/60 backdrop-blur-xs flex justify-end">
      <div className="w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-200 border-l border-amber-900/15">
        {/* Drawer Header */}
        <div className="p-4 border-b border-stone-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900">
                {step === 'cart' && 'Divine Basket'}
                {step === 'checkout' && 'Devotee Shipping & Payment'}
                {step === 'success' && 'Order Placed Blessings'}
              </h3>
              <p className="text-[11px] text-stone-500 font-sans">
                {cart.length} item(s) consecrated for your family
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-1.5 rounded-full hover:bg-stone-100 text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {step === 'cart' && (
            <>
              {cart.length === 0 ? (
                <div className="py-20 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8 opacity-60" />
                  </div>
                  <h4 className="font-serif font-bold text-base text-stone-800">
                    Your Divine Basket is Empty
                  </h4>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto">
                    Explore sanctified prasadams or book sacred online poojas from famous AP shrines.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 px-4 py-2 bg-rose-800 text-white font-bold text-xs rounded-lg hover:bg-rose-900 cursor-pointer"
                  >
                    Browse Holy Offerings
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="p-3 bg-white rounded-xl border border-stone-200 shadow-xs flex gap-3 text-xs"
                    >
                      {/* Image / Thumbnail */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded-lg object-cover shrink-0 bg-stone-100"
                      />

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <div>
                              <span className="text-[10px] text-amber-800 font-medium block">
                                {item.templeName}
                              </span>
                              <h5 className="font-bold text-stone-900 leading-snug">
                                {item.title}
                              </h5>
                            </div>
                            <button
                              onClick={() => onRemoveItem(item.id)}
                              className="text-stone-400 hover:text-rose-700 p-1 cursor-pointer"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Sankalpam details summary if pooja */}
                          {item.type === 'pooja' && item.sankalpamDetails && (
                            <div className="mt-1.5 p-1.5 bg-amber-50 rounded text-[10px] text-amber-950 font-sans space-y-0.5 border border-amber-200/50">
                              <p><strong>Devotee:</strong> {item.sankalpamDetails.devoteeName} ({item.sankalpamDetails.gotra})</p>
                              <p><strong>Star / Rashi:</strong> {item.sankalpamDetails.nakshatra} · {item.sankalpamDetails.rashi}</p>
                              <p><strong>Date:</strong> {item.sankalpamDetails.preferredDate}</p>
                            </div>
                          )}
                        </div>

                        {/* Price & Quantity Controls */}
                        <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                          <span className="font-bold text-stone-900">
                            ₹{item.price * item.quantity}
                          </span>

                          {item.type === 'prasadam' ? (
                            <div className="flex items-center border border-stone-200 rounded-md overflow-hidden bg-stone-50">
                              <button
                                onClick={() => onUpdateQuantity(item.id, -1)}
                                className="px-2 py-0.5 hover:bg-stone-200 text-stone-600 cursor-pointer"
                              >
                                <Minus className="w-2.5 h-2.5" />
                              </button>
                              <span className="px-2 font-bold text-stone-800 text-[11px]">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => onUpdateQuantity(item.id, 1)}
                                className="px-2 py-0.5 hover:bg-stone-200 text-stone-600 cursor-pointer"
                              >
                                <Plus className="w-2.5 h-2.5" />
                              </button>
                            </div>
                          ) : (
                            <span className="text-[10px] font-semibold text-rose-800 bg-rose-50 px-2 py-0.5 rounded">
                              1 Vedic Sankalpam
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Free shipping banner */}
                  <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-900 text-[11px] flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>
                      {subtotal > 799
                        ? 'Eligible for Free SpeedPost Doorstep Delivery!'
                        : `Add ₹${799 - subtotal} more for Free SpeedPost Delivery.`}
                    </span>
                  </div>
                </div>
              )}
            </>
          )}

          {step === 'checkout' && (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4 text-xs font-sans">
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                <p className="font-serif font-bold text-amber-950">
                  Devotee Postal Address (ప్రసాదం పంపే చిరునామా)
                </p>
                <p className="text-[11px] text-stone-600">
                  Where should we dispatch your consecrated prasadam, holy raksha, and silver tokens?
                </p>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. S. Venkatesh"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Mobile Number (For Courier Tracking) *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 98480 12345"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Door / Flat / Street Address *</label>
                <textarea
                  rows={2}
                  required
                  value={addressLine}
                  onChange={(e) => setAddressLine(e.target.value)}
                  placeholder="e.g. Flat 302, Srinivasa Enclave, Near Ramalayam"
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">City / Town *</label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Vijayawada / Hyderabad"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">PIN Code *</label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="520001"
                    className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">State / Province</label>
                <input
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Andhra Pradesh / Telangana / Karnataka / etc."
                  className="w-full px-3 py-2 bg-white border border-stone-300 rounded-lg text-stone-900"
                />
              </div>

              {/* Payment Method */}
              <div className="pt-2 border-t border-stone-200">
                <label className="block text-stone-700 font-medium mb-1.5">Payment Method</label>
                <div className="space-y-1.5">
                  {[
                    'UPI (Google Pay / PhonePe / Paytm / BHIM)',
                    'NetBanking (SBI, HDFC, ICICI, Andhra Bank/UBI)',
                    'Debit / Credit Cards (Visa, Mastercard, RuPay)',
                    'Cash on Delivery (Available for dry prasadams)'
                  ].map((method) => (
                    <label
                      key={method}
                      className="flex items-center gap-2 p-2 bg-stone-50 rounded-lg border border-stone-200 cursor-pointer text-xs"
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        checked={paymentMethod === method}
                        onChange={() => setPaymentMethod(method)}
                        className="text-rose-800 focus:ring-rose-800"
                      />
                      <span>{method}</span>
                    </label>
                  ))}
                </div>
              </div>
            </form>
          )}

          {step === 'success' && placedOrder && (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Sparkles className="w-8 h-8" />
              </div>
              <h4 className="font-serif font-bold text-xl text-stone-900">
                Order Confirmed! Divine Blessings!
              </h4>
              <p className="text-xs text-stone-600 max-w-xs mx-auto">
                Your sacred order has been confirmed under Order ID <strong className="text-stone-900">{placedOrder.orderId}</strong>.
              </p>

              {/* Order Card */}
              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-left space-y-2 text-stone-800 font-sans">
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-stone-500">Order ID:</span>
                  <strong className="text-rose-900">{placedOrder.orderId}</strong>
                </div>
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-stone-500">Tracking Number:</span>
                  <span className="font-mono font-semibold">{placedOrder.trackingNumber}</span>
                </div>
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-stone-500">Total Paid:</span>
                  <strong>₹{placedOrder.totalAmount}</strong>
                </div>
                <div className="flex justify-between border-b border-amber-200/60 pb-1.5">
                  <span className="text-stone-500">Shipping To:</span>
                  <span className="text-right">{placedOrder.shippingAddress.fullName}, {placedOrder.shippingAddress.city}</span>
                </div>
                {placedOrder.videoLink && (
                  <p className="text-emerald-800 font-semibold pt-1">
                    ✓ Sankalpam video link will be sent to your WhatsApp ({placedOrder.shippingAddress.phone}).
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <button
                  onClick={resetAndClose}
                  className="w-full py-2.5 bg-rose-800 text-white font-bold text-xs rounded-xl hover:bg-rose-900 cursor-pointer shadow-xs"
                >
                  Return to TempleAssist.com
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {cart.length > 0 && step !== 'success' && (
          <div className="p-4 border-t border-stone-200 bg-white space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal:</span>
                <span className="font-medium text-stone-900">₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-stone-600">
                <span>SpeedPost Dispatch:</span>
                <span className="font-medium text-stone-900">
                  {shipping === 0 ? <strong className="text-emerald-700">FREE</strong> : `₹${shipping}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-stone-900 pt-1.5 border-t border-stone-100">
                <span>Total Amount:</span>
                <span className="text-rose-900 font-serif text-lg">₹{grandTotal}</span>
              </div>
            </div>

            {step === 'cart' ? (
              <button
                onClick={() => setStep('checkout')}
                className="w-full py-3 bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
              >
                <span>Proceed to Devotee Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep('cart')}
                  className="px-4 py-2.5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-xl cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 py-3 bg-rose-800 hover:bg-rose-900 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Confirm Order & Pay ₹{grandTotal}</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
