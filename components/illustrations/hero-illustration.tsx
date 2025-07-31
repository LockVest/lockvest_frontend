export function HeroIllustration() {
  return (
    <svg
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      {/* Background gradient */}
      <defs>
        <radialGradient id="heroGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F5AF0" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#2CB67D" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="100%" stopColor="#2CB67D" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx="300" cy="300" r="280" fill="url(#heroGradient)" />

      {/* Nigeria map outline (simplified) */}
      <path
        d="M200 150 C220 140, 250 145, 280 155 C320 165, 350 180, 380 200 C400 220, 410 250, 405 280 C400 320, 390 350, 370 380 C350 400, 320 410, 290 405 C250 400, 220 390, 200 370 C180 350, 175 320, 180 290 C185 250, 190 200, 200 150 Z"
        fill="none"
        stroke="#7F5AF0"
        strokeWidth="2"
        opacity="0.6"
      />

      {/* Blockchain network nodes */}
      <g filter="url(#glow)">
        {/* Main nodes */}
        <circle cx="220" cy="200" r="8" fill="url(#nodeGradient)" />
        <circle cx="300" cy="180" r="6" fill="url(#nodeGradient)" />
        <circle cx="360" cy="220" r="7" fill="url(#nodeGradient)" />
        <circle cx="340" cy="280" r="8" fill="url(#nodeGradient)" />
        <circle cx="280" cy="320" r="6" fill="url(#nodeGradient)" />
        <circle cx="230" cy="300" r="7" fill="url(#nodeGradient)" />
        <circle cx="250" cy="240" r="9" fill="url(#nodeGradient)" />

        {/* Connection lines */}
        <line x1="220" y1="200" x2="300" y2="180" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="300" y1="180" x2="360" y2="220" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="360" y1="220" x2="340" y2="280" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="340" y1="280" x2="280" y2="320" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="280" y1="320" x2="230" y2="300" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="230" y1="300" x2="220" y2="200" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="250" y1="240" x2="300" y2="180" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
        <line x1="250" y1="240" x2="340" y2="280" stroke="#7F5AF0" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Property token pins */}
      <g>
        {/* Property pin 1 */}
        <g transform="translate(240, 190)">
          <path d="M0 20 L-8 8 C-8 3, -4 0, 0 0 C4 0, 8 3, 8 8 L0 20 Z" fill="#2CB67D" />
          <circle cx="0" cy="8" r="4" fill="#FFFFFE" />
          <rect x="-2" y="6" width="4" height="4" fill="#2CB67D" rx="1" />
        </g>

        {/* Property pin 2 */}
        <g transform="translate(320, 250)">
          <path d="M0 20 L-8 8 C-8 3, -4 0, 0 0 C4 0, 8 3, 8 8 L0 20 Z" fill="#2CB67D" />
          <circle cx="0" cy="8" r="4" fill="#FFFFFE" />
          <rect x="-2" y="6" width="4" height="4" fill="#2CB67D" rx="1" />
        </g>

        {/* Property pin 3 */}
        <g transform="translate(270, 300)">
          <path d="M0 20 L-8 8 C-8 3, -4 0, 0 0 C4 0, 8 3, 8 8 L0 20 Z" fill="#2CB67D" />
          <circle cx="0" cy="8" r="4" fill="#FFFFFE" />
          <rect x="-2" y="6" width="4" height="4" fill="#2CB67D" rx="1" />
        </g>
      </g>

      {/* Floating blockchain blocks */}
      <g opacity="0.7">
        <g transform="translate(150, 120) rotate(15)">
          <rect width="30" height="30" fill="#7F5AF0" rx="4" />
          <rect x="5" y="5" width="20" height="4" fill="#FFFFFE" opacity="0.8" />
          <rect x="5" y="12" width="15" height="4" fill="#FFFFFE" opacity="0.6" />
          <rect x="5" y="19" width="18" height="4" fill="#FFFFFE" opacity="0.4" />
        </g>

        <g transform="translate(420, 160) rotate(-10)">
          <rect width="25" height="25" fill="#2CB67D" rx="3" />
          <rect x="4" y="4" width="17" height="3" fill="#FFFFFE" opacity="0.8" />
          <rect x="4" y="10" width="12" height="3" fill="#FFFFFE" opacity="0.6" />
          <rect x="4" y="16" width="15" height="3" fill="#FFFFFE" opacity="0.4" />
        </g>

        <g transform="translate(380, 380) rotate(20)">
          <rect width="28" height="28" fill="#7F5AF0" rx="4" />
          <rect x="4" y="4" width="20" height="4" fill="#FFFFFE" opacity="0.8" />
          <rect x="4" y="11" width="15" height="4" fill="#FFFFFE" opacity="0.6" />
          <rect x="4" y="18" width="18" height="4" fill="#FFFFFE" opacity="0.4" />
        </g>
      </g>

      {/* Animated pulse rings */}
      <g opacity="0.3">
        <circle cx="250" cy="240" r="40" fill="none" stroke="#7F5AF0" strokeWidth="1">
          <animate attributeName="r" values="40;60;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="320" cy="250" r="35" fill="none" stroke="#2CB67D" strokeWidth="1">
          <animate attributeName="r" values="35;55;35" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}
