export function SecurityShieldIllustration() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="100%" stopColor="#2CB67D" />
        </linearGradient>
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F5AF0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7F5AF0" stopOpacity="0" />
        </radialGradient>
        <filter id="dropShadow">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#7F5AF0" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Glow effect */}
      <circle cx="150" cy="150" r="120" fill="url(#glowGradient)" />

      {/* Main shield */}
      <path
        d="M150 40 C120 50, 90 70, 90 110 L90 160 C90 200, 120 230, 150 250 C180 230, 210 200, 210 160 L210 110 C210 70, 180 50, 150 40 Z"
        fill="url(#shieldGradient)"
        filter="url(#dropShadow)"
      />

      {/* Inner shield details */}
      <path
        d="M150 60 C130 65, 110 80, 110 110 L110 150 C110 180, 130 200, 150 215 C170 200, 190 180, 190 150 L190 110 C190 80, 170 65, 150 60 Z"
        fill="#FFFFFE"
        opacity="0.9"
      />

      {/* Lock icon in center */}
      <g transform="translate(135, 120)">
        <rect x="0" y="10" width="30" height="20" fill="#7F5AF0" rx="3" />
        <path
          d="M8 10 L8 6 C8 3, 10 0, 15 0 C20 0, 22 3, 22 6 L22 10"
          fill="none"
          stroke="#7F5AF0"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="15" cy="20" r="3" fill="#FFFFFE" />
        <rect x="14" y="20" width="2" height="6" fill="#FFFFFE" />
      </g>

      {/* Security badges around shield */}
      <g>
        {/* Audit badge */}
        <g transform="translate(60, 80)">
          <circle cx="0" cy="0" r="20" fill="#2CB67D" />
          <path d="M-8 -2 L-3 3 L8 -8" stroke="#FFFFFE" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="0" y="35" fill="#94A1B2" fontSize="10" textAnchor="middle">
            Audited
          </text>
        </g>

        {/* KYC badge */}
        <g transform="translate(240, 80)">
          <circle cx="0" cy="0" r="20" fill="#7F5AF0" />
          <circle cx="0" cy="-5" r="5" fill="#FFFFFE" />
          <path d="M-8 8 C-8 3, -4 0, 0 0 C4 0, 8 3, 8 8" fill="#FFFFFE" />
          <text x="0" y="35" fill="#94A1B2" fontSize="10" textAnchor="middle">
            KYC
          </text>
        </g>

        {/* Insurance badge */}
        <g transform="translate(60, 220)">
          <circle cx="0" cy="0" r="20" fill="#2CB67D" />
          <rect x="-8" y="-8" width="16" height="12" fill="#FFFFFE" rx="2" />
          <rect x="-6" y="4" width="12" height="4" fill="#FFFFFE" rx="1" />
          <text x="0" y="35" fill="#94A1B2" fontSize="10" textAnchor="middle">
            Insured
          </text>
        </g>

        {/* Compliance badge */}
        <g transform="translate(240, 220)">
          <circle cx="0" cy="0" r="20" fill="#7F5AF0" />
          <rect x="-6" y="-8" width="12" height="16" fill="#FFFFFE" rx="1" />
          <rect x="-4" y="-6" width="8" height="2" fill="#7F5AF0" />
          <rect x="-4" y="-2" width="8" height="2" fill="#7F5AF0" />
          <rect x="-4" y="2" width="8" height="2" fill="#7F5AF0" />
          <text x="0" y="35" fill="#94A1B2" fontSize="10" textAnchor="middle">
            Compliant
          </text>
        </g>
      </g>

      {/* Animated security rings */}
      <g opacity="0.4">
        <circle cx="150" cy="150" r="80" fill="none" stroke="#7F5AF0" strokeWidth="1">
          <animate attributeName="r" values="80;100;80" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
        </circle>
        <circle cx="150" cy="150" r="90" fill="none" stroke="#2CB67D" strokeWidth="1">
          <animate attributeName="r" values="90;110;90" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="4s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  )
}
