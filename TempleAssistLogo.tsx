import React from 'react';

interface TempleAssistLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textColor?: string;
  showDomain?: boolean;
}

export const TempleAssistLogo: React.FC<TempleAssistLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textColor = 'text-[#4A1504]',
  showDomain = true,
}) => {
  // Dimension mapping
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Golden Gopuram & Halo Emblem exactly matching the uploaded official logo */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Gradient definitions for rich temple gold */}
          <defs>
            <linearGradient id="templeGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DFAD36" />
              <stop offset="50%" stopColor="#C4881A" />
              <stop offset="100%" stopColor="#9C650A" />
            </linearGradient>
            <linearGradient id="haloGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E5B542" />
              <stop offset="100%" stopColor="#B87D14" />
            </linearGradient>
            <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#784804" floodOpacity="0.3" />
            </filter>
          </defs>

          {/* Golden Circular Halo Arc wrapping the upper temple */}
          <path
            d="M 36 128 A 66 66 0 1 1 164 128"
            stroke="url(#haloGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Temple Gopuram Structure */}
          <g filter="url(#goldGlow)">
            {/* Base Plinth / Adhisthana */}
            <path
              d="M 38 170 H 162 V 162 H 154 V 154 H 46 V 162 H 38 Z"
              fill="url(#templeGoldGrad)"
            />

            {/* Lower Tier / Mandapam Level */}
            <path
              d="M 48 154 L 54 112 H 146 L 152 154 Z"
              fill="url(#templeGoldGrad)"
            />

            {/* Decorative Side Cornices */}
            <path
              d="M 48 112 H 58 V 104 H 46 Z"
              fill="url(#templeGoldGrad)"
            />
            <path
              d="M 142 112 H 152 V 104 H 154 Z"
              fill="url(#templeGoldGrad)"
            />

            {/* Tier 2 (Middle Tier) */}
            <path
              d="M 58 112 H 142 V 96 H 136 V 88 H 64 V 96 H 58 Z"
              fill="url(#templeGoldGrad)"
            />

            {/* Tier 3 (Upper Tier) */}
            <path
              d="M 68 88 H 132 V 76 H 126 V 70 H 74 V 76 H 68 Z"
              fill="url(#templeGoldGrad)"
            />

            {/* Tier 4 (Crown Dome / Shikhara) */}
            <path
              d="M 78 70 C 78 54 122 54 122 70 Z"
              fill="url(#templeGoldGrad)"
            />

            {/* Kalasha Pinnacle (Spire) */}
            <path
              d="M 96 54 C 96 46 98 42 100 36 C 102 42 104 46 104 54 Z"
              fill="url(#templeGoldGrad)"
            />
            <circle cx="100" cy="35" r="3" fill="#DFAD36" />
            <circle cx="100" cy="48" r="4.5" fill="#C4881A" />

            {/* Sanctum Doorway (Maha Dwaram Arch) */}
            {/* Cutout / Portal */}
            <path
              d="M 72 170 V 122 C 72 104 100 96 100 96 C 100 96 128 104 128 122 V 170 Z"
              fill="#FAF7F2"
            />
            <path
              d="M 76 170 V 124 C 76 110 100 102 100 102 C 100 102 124 110 124 124 V 170 Z"
              fill="#521B07"
            />

            {/* Sacred Namam / Tirunamam (Venkateswara Tilak) in the sanctum */}
            {/* White outer U-shape prongs */}
            <path
              d="M 88 122 C 88 140 92 148 100 148 C 108 148 112 140 112 122 H 117 C 117 144 109 154 100 154 C 91 154 83 144 83 122 H 88 Z"
              fill="#FAF7F2"
            />
            {/* Central Srichurnam (Vertical Red/Gold Line) */}
            <path
              d="M 98 124 H 102 V 144 H 98 Z"
              fill="#DFAD36"
            />
            <circle cx="100" cy="147" r="2" fill="#DFAD36" />
          </g>
        </svg>
      </div>

      {/* Brand Wordmark Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline">
            <span
              className={`font-serif font-bold tracking-tight ${textColor} ${textSizes[size]}`}
              style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
            >
              TempleAssist
            </span>
            {showDomain && (
              <span className="text-xs sm:text-sm font-bold text-amber-700 ml-0.5 tracking-tight">
                .com
              </span>
            )}
          </div>
          <span className="text-[10px] sm:text-[11px] font-medium text-stone-600 tracking-wider uppercase -mt-0.5">
            AP Divine Darshan & Prasadam
          </span>
        </div>
      )}
    </div>
  );
};
