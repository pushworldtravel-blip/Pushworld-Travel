export interface LogoProps {
  variant?: 'full' | 'compact' | 'light' | 'emblem-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'full', className = '', size = 'md' }: LogoProps) {
  const isLight = variant === 'light';

  // Dimension classes based on size
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
  }[size];

  // Exact reproduction of the circular PUSH WORLD TRAVEL LTD emblem
  const circularEmblem = (
    <div className={`relative ${sizeClasses} shrink-0 rounded-full bg-white p-0.5 shadow-md flex items-center justify-center overflow-hidden border border-slate-200`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background white circle */}
        <circle cx="100" cy="100" r="98" fill="#ffffff" />
        <circle cx="100" cy="100" r="97" stroke="#e2e8f0" strokeWidth="2" />

        {/* Top Globe (Earth) */}
        <g id="globe-group">
          <defs>
            <radialGradient id="globeBlue" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="70%" stopColor="#1d4ed8" />
              <stop offset="100%" stopColor="#0f2b74" />
            </radialGradient>
            <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#c2410c" />
            </linearGradient>
            <linearGradient id="pushBlueGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e40af" />
              <stop offset="100%" stopColor="#0a194f" />
            </linearGradient>
          </defs>

          {/* Globe sphere */}
          <circle cx="112" cy="62" r="32" fill="url(#globeBlue)" />
          
          {/* Globe Continents (White Africa & Eurasia silhouette) */}
          <path
            d="M 104 46 C 112 43, 122 47, 128 53 C 130 57, 124 64, 122 70 C 120 78, 114 84, 110 88 C 107 88, 105 82, 107 76 C 109 72, 101 68, 98 62 C 96 56, 98 49, 104 46 Z"
            fill="#ffffff"
            opacity="0.95"
          />
          <path
            d="M 124 42 C 132 40, 138 46, 137 52 C 133 54, 129 48, 124 42 Z"
            fill="#ffffff"
            opacity="0.95"
          />

          {/* Dynamic orange & blue swooshing orbital trails */}
          {/* Blue swoosh behind */}
          <path
            d="M 58 76 C 66 52, 94 36, 132 38 C 152 40, 166 48, 172 58 C 158 52, 136 50, 106 60 C 82 68, 66 74, 58 76 Z"
            fill="#1e3a8a"
          />
          {/* Orange top swoosh */}
          <path
            d="M 64 72 C 74 48, 104 36, 142 38 C 160 40, 172 48, 176 56 C 164 50, 142 48, 112 56 C 88 62, 74 68, 64 72 Z"
            fill="url(#orangeGrad)"
          />

          {/* Flying Orange Jet Airplane */}
          <g transform="translate(174, 54) rotate(42) scale(0.65)">
            <path
              d="M 0 -16 L 4 -2 L 18 4 L 4 7 L 3 15 L 0 13 L -3 15 L -4 7 L -18 4 L -4 -2 Z"
              fill="#ea580c"
            />
          </g>
        </g>

        {/* Center: Bold "PUSH" Text in Blue Gradient with sleek futuristic block styling */}
        <g id="push-text">
          <text
            x="100"
            y="114"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="38"
            letterSpacing="-0.5"
            fill="url(#pushBlueGrad)"
            stroke="#071b56"
            strokeWidth="0.8"
          >
            PUSH
          </text>
        </g>

        {/* Middle: Bold "WORLD" Text with pin marker on 'O' */}
        <g id="world-text">
          <text
            x="100"
            y="146"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="900"
            fontSize="30"
            letterSpacing="0.5"
            fill="url(#orangeGrad)"
            stroke="#c2410c"
            strokeWidth="0.6"
          >
            WORLD
          </text>
          
          {/* Mini globe pin accent over O */}
          <circle cx="89" cy="134" r="7.5" fill="#1d4ed8" />
          <circle cx="89" cy="134" r="7.5" stroke="#f97316" strokeWidth="2" />
          <path d="M 87 131 C 91 130, 94 133, 92 136 C 90 139, 87 137, 87 131 Z" fill="#ffffff" />
        </g>

        {/* Sub-bar: "— TRAVEL LTD —" */}
        <g id="travel-ltd">
          <line x1="22" y1="154" x2="48" y2="154" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" />
          <text
            x="100"
            y="158"
            textAnchor="middle"
            fontFamily="'Plus Jakarta Sans', system-ui, sans-serif"
            fontWeight="800"
            fontSize="13"
            letterSpacing="2.5"
            fill="#0f2b74"
          >
            TRAVEL LTD
          </text>
          <line x1="152" y1="154" x2="178" y2="154" stroke="#c2410c" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Script Tagline: "Your World, Our Journey." */}
        <g id="tagline-script">
          <text
            x="100"
            y="176"
            textAnchor="middle"
            fontFamily="'Brush Script MT', 'Playfair Display', cursive, serif"
            fontStyle="italic"
            fontWeight="600"
            fontSize="14.5"
            fill="#1e3a8a"
          >
            Your World. Our Journey.
          </text>
          {/* Underline flourish */}
          <path d="M 40 181 Q 100 186, 160 178" stroke="url(#orangeGrad)" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );

  if (variant === 'emblem-only') {
    return <div className={`inline-flex items-center ${className}`}>{circularEmblem}</div>;
  }

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {circularEmblem}
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={`text-lg sm:text-xl font-black tracking-tight ${isLight ? 'text-white' : 'text-blue-950'}`}>
            PUSH
          </span>
          <span className="text-lg sm:text-xl font-black tracking-tight text-amber-500">
            WORLD
          </span>
          <span className={`text-base sm:text-lg font-extrabold tracking-tight ${isLight ? 'text-amber-400' : 'text-blue-900'}`}>
            TRAVEL LTD
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className={`text-[10px] font-semibold tracking-wider uppercase ${isLight ? 'text-amber-300' : 'text-blue-700'}`}>
            Travel Beyond Ordinary
          </span>
          <span className={`text-[9px] ${isLight ? 'text-slate-400' : 'text-slate-400'}`}>·</span>
          <span className={`text-[9px] font-medium ${isLight ? 'text-slate-300' : 'text-slate-500'}`}>
            Flights · Safaris · Hotels · Visas
          </span>
        </div>
      </div>
    </div>
  );
}
