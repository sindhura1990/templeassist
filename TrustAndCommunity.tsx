import React from 'react';
import { ShieldCheck, Heart, Sparkles, Star, Award, CheckCircle2, AlertCircle } from 'lucide-react';

export const TrustAndCommunity: React.FC = () => {
  return (
    <div className="bg-[#FAF4E8] py-16 border-t border-amber-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Purity & Authenticity Sacred Vow */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-300/80 shadow-sm relative overflow-hidden">
          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-widest font-bold text-amber-900">
              Devasthanams Purity Charter
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Our Uncompromising Devotional Integrity
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              At <strong>TempleAssist.com</strong>, we hold the sanctity of divine prasadams and Vedic sankalpams as an inviolable sacred trust. Every offering is procured through lawful Devasthanam channels, handled exclusively by devotees observing ritual purity (Madi/Shaucha), and delivered with verifiable proof.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700">
                  <strong>Zero Intermediary Quality:</strong> Sourced only from authorized Devasthanam Potu counters.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700">
                  <strong>Vedic Certified Archakas:</strong> Sanctified rituals recited strictly as per Agama shastras.
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-700">
                  <strong>Hermetic Vacuum Packing:</strong> Locks in fresh cow ghee aroma and prevents moisture ingress.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Devotee Experiences */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs uppercase tracking-widest font-bold text-rose-800">
              Blessings from Pilgrims
            </p>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900 mt-1">
              Devotee Experiences & Gratitude
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 font-sans">
              Heartfelt words from elderly parents, overseas NRIs, and families assisted across AP temples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic">
                  "My mother is 82 and walking long queues at Tirumala was impossible. TempleAssist's sahayak met us right at the cottage, arranged a clean wheelchair, and escorted us calmly through Supadham senior entry. We had tears of joy having Lord Balaji darshan peacefully."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-stone-900">Dr. M. Sitarama Raju</p>
                  <p className="text-stone-500 text-[11px]">Hyderabad · Tirumala Darshan</p>
                </div>
                <span className="text-emerald-700 font-semibold text-[11px]">Verified Devotee</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic">
                  "Living in Texas, USA, we could not travel to Srikalahasti for our daughter's Rahu-Ketu dosha pooja. We booked online via TempleAssist. Within 48 hours, they sent us the WhatsApp HD video where the purohit chanted our family Gotra and names clearly, and the consecrated silver raksha arrived safe in Dallas!"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-stone-900">Smt. Padmavathi & Rajeev</p>
                  <p className="text-stone-500 text-[11px]">Dallas, USA · Srikalahasti Pooja</p>
                </div>
                <span className="text-emerald-700 font-semibold text-[11px]">Verified NRI Devotee</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans italic">
                  "The Pancharama Kshetras 4-day tour was exceptional. The driver knew every ghat road and temple timing to perfection. Never once were we rushed. Accommodations were sparkling clean, and we enjoyed piping hot Satvik Godavari meals every day."
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <p className="font-bold text-stone-900">Sri Gopala Krishna Murthy</p>
                  <p className="text-stone-500 text-[11px]">Bengaluru · Pancharama Tour</p>
                </div>
                <span className="text-emerald-700 font-semibold text-[11px]">Verified Devotee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Temple Do's and Don'ts Guide for Devotees */}
        <div className="p-6 bg-white rounded-2xl border border-stone-200">
          <div className="flex items-center gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-rose-800" />
            <h3 className="font-serif font-bold text-base text-stone-900">
              Pilgrim Code of Conduct & Sacred Guidelines (ఆంధ్ర క్షేత్ర నియమావళి)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-stone-700 font-sans">
            <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-100 space-y-1.5">
              <p className="font-bold text-emerald-950">Devotional Do's:</p>
              <ul className="space-y-1 list-disc pl-4 text-emerald-900">
                <li>Wear traditional Indian attire (Dhoti/Kurta for men, Saree/Chudidar for women).</li>
                <li>Take a holy head bath (Snanam) before stepping into the sanctum sanctorum.</li>
                <li>Chant the sacred Ashtakshari or Panchakshari mantras quietly in queue lines.</li>
                <li>Carry government photo IDs (Aadhaar/Passport) for Devasthanam special entry verification.</li>
              </ul>
            </div>
            <div className="p-4 bg-rose-50/50 rounded-xl border border-rose-100 space-y-1.5">
              <p className="font-bold text-rose-950">Devotional Don'ts:</p>
              <ul className="space-y-1 list-disc pl-4 text-rose-900">
                <li>Strictly no leather items (belts, wallets), cameras, or smartphones inside the Garbhalaya.</li>
                <li>Avoid western clothing like jeans, bermudas, and t-shirts to prevent being turned away at queue entry.</li>
                <li>Consume strictly pure satvik vegetarian food during the pilgrimage duration.</li>
                <li>Avoid purchasing unverified prasadams from unauthorized hawkers outside temple premises.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
