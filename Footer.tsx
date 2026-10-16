import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck, Compass, Package, Flame, Clock } from 'lucide-react';
import { TempleAssistLogo } from './TempleAssistLogo';

interface FooterProps {
  onSelectTab: (tab: 'darshan' | 'tours' | 'prasadam' | 'poojas') => void;
  onOpenSahayak: () => void;
  onOpenTracker: () => void;
  onOpenPanchangamModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenSahayak,
  onOpenTracker,
  onOpenPanchangamModal,
}) => {
  return (
    <footer className="bg-[#1C1917] text-stone-300 font-sans border-t border-amber-900/30">
      {/* Top Banner with Sanskrit Blessing */}
      <div className="bg-[#2D120B] text-amber-200/90 py-3 px-4 border-b border-amber-900/40 text-center text-xs tracking-wide font-medium">
        <span>|| లోకాః సమస్తాః సుఖినోభవంతు · May all beings everywhere be happy and peaceful ||</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white/5 p-3 rounded-2xl inline-block border border-white/10">
              <TempleAssistLogo size="lg" textColor="text-amber-100" showDomain={true} />
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              <strong>TempleAssist.com</strong> is the premier dedicated spiritual pilgrimage platform for Andhra Pradesh temples. We empower devotees with authentic darshan guidance, curated divine tour packages, authorized Vedic poojas, and vacuum-sealed doorstep delivery of sanctified temple prasadams.
            </p>

            <div className="flex flex-col gap-2 text-xs text-stone-300 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Darshan Sahayak Support: <strong>+91 94401 90402</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Email: <a href="mailto:contact@templeassist.com" className="font-bold text-amber-300 hover:underline">contact@templeassist.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Regional Offices: Tirupati · Vijayawada · Hyderabad</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wide">
              Divine Services
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  onClick={() => onSelectTab('darshan')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  AP Temple Darshan Guides
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('tours')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Pancharama & Tirupati Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('prasadam')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Tirumala Laddu & Prasad Delivery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('poojas')}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Rahu-Ketu & Satyanarayana Poojas
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenSahayak}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Wheelchair & Senior Sahayak
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenTracker}
                  className="hover:text-amber-200 transition-colors cursor-pointer text-left"
                >
                  Live SpeedPost Order Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Top AP Holy Temples */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wide">
              Major Shrines Assisted
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>Tirumala Venkateswara Swamy</li>
              <li>Srisailam Mallikarjuna Swamy</li>
              <li>Indrakeeladri Kanaka Durga</li>
              <li>Simhachalam Narasimha Swamy</li>
              <li>Srikalahasteeswara Swamy</li>
              <li>Annavaram Satyanarayana Swamy</li>
              <li>Ahobilam Nava Narasimha</li>
              <li>Draksharamam Bhimeswara Swamy</li>
            </ul>
          </div>

          {/* Devasthanam Emergency Numbers */}
          <div className="space-y-3">
            <h4 className="font-serif font-bold text-amber-200 text-sm tracking-wide">
              Devasthanam Helplines
            </h4>
            <div className="space-y-2 text-xs text-stone-400">
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                <span className="font-bold text-stone-200 block">TTD Tirumala Toll-Free:</span>
                <span className="text-amber-300 font-mono">1800 425 4141 / 1800 425 333333</span>
              </div>
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                <span className="font-bold text-stone-200 block">Srisailam Devasthanam:</span>
                <span className="text-amber-300 font-mono">+91 8524 288888</span>
              </div>
              <div className="p-2.5 bg-white/5 rounded-lg border border-white/5">
                <span className="font-bold text-stone-200 block">Vijayawada Kanaka Durga:</span>
                <span className="text-amber-300 font-mono">+91 866 2423600</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} <strong>TempleAssist.com</strong>. All rights reserved. Devoted to the welfare of pilgrims.
          </div>
          <div className="flex items-center gap-4 text-stone-400">
            <span>Purity Guaranteed</span>
            <span aria-hidden="true">·</span>
            <span>SpeedPost Dispatch</span>
            <span aria-hidden="true">·</span>
            <span>Vedic Shastra Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
