export function PropertyTokenizationIllustration() {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="100%" stopColor="#2CB67D" />
        </linearGradient>
        <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2CB67D" />
          <stop offset="100%" stopColor="#7F5AF0" />
        </linearGradient>
      </defs>

      {/* Building */}
      <g transform="translate(50, 80)">
        <rect width="120" height="140" fill="url(#buildingGradient)" rx="8" />

        {/* Windows */}
        <rect x="15" y="20" width="20" height="25" fill="#FFFFFE" opacity="0.8" rx="2" />
        <rect x="45" y="20" width="20" height="25" fill="#FFFFFE" opacity="0.6" rx="2" />
        <rect x="75" y="20" width="20" height="25" fill="#FFFFFE" opacity="0.8" rx="2" />

        <rect x="15" y="55" width="20" height="25" fill="#FFFFFE" opacity="0.6" rx="2" />
        <rect x="45" y="55" width="20" height="25" fill="#FFFFFE" opacity="0.8" rx="2" />
        <rect x="75" y="55" width="20" height="25" fill="#FFFFFE" opacity="0.6" rx="2" />

        <rect x="15" y="90" width="20" height="25" fill="#FFFFFE" opacity="0.8" rx="2" />
        <rect x="45" y="90" width="20" height="25" fill="#FFFFFE" opacity="0.6" rx="2" />
        <rect x="75" y="90" width="20" height="25" fill="#FFFFFE" opacity="0.8" rx="2" />

        {/* Door */}
        <rect x="45" y="125" width="30" height="15" fill="#16161A" rx="2" />
      </g>

      {/* Arrow */}
      <g transform="translate(200, 140)">
        <path d="M0 5 L30 5 M25 0 L30 5 L25 10" stroke="#94A1B2" strokeWidth="2" fill="none" />
        <text x="15" y="-5" fill="#94A1B2" fontSize="12" textAnchor="middle">
          Tokenize
        </text>
      </g>

      {/* Tokens */}
      <g transform="translate(260, 100)">
        {/* Token 1 */}
        <circle cx="20" cy="20" r="18" fill="url(#tokenGradient)" />
        <text x="20" y="25" fill="#FFFFFE" fontSize="10" textAnchor="middle" fontWeight="bold">
          T1
        </text>

        {/* Token 2 */}
        <circle cx="60" cy="20" r="18" fill="url(#tokenGradient)" />
        <text x="60" y="25" fill="#FFFFFE" fontSize="10" textAnchor="middle" fontWeight="bold">
          T2
        </text>

        {/* Token 3 */}
        <circle cx="100" cy="20" r="18" fill="url(#tokenGradient)" />
        <text x="100" y="25" fill="#FFFFFE" fontSize="10" textAnchor="middle" fontWeight="bold">
          T3
        </text>

        {/* Token 4 */}
        <circle cx="20" cy="60" r="18" fill="url(#tokenGradient)" />
        <text x="20" y="65" fill="#FFFFFE" fontSize="10" textAnchor="middle" fontWeight="bold">
          T4
        </text>

        {/* Token 5 */}
        <circle cx="60" cy="60" r="18" fill="url(#tokenGradient)" />
        <text x="60" y="65" fill="#FFFFFE" fontSize="10" textAnchor="middle" fontWeight="bold">
          T5
        </text>

        {/* Token 6 */}
        <circle cx="100" cy="60" r="18" fill="url(#tokenGradient)" />
        <text x="100" y="65" fill="#FFFFFE" fontSize="10" textAnchor="middle" fontWeight="bold">
          T6
        </text>
      </g>

      {/* Connecting lines */}
      <g stroke="#7F5AF0" strokeWidth="1" opacity="0.5">
        <line x1="280" y1="120" x2="320" y2="120" />
        <line x1="320" y1="120" x2="360" y2="120" />
        <line x1="280" y1="160" x2="320" y2="160" />
        <line x1="320" y1="160" x2="360" y2="160" />
        <line x1="300" y1="140" x2="340" y2="140" />
      </g>

      {/* Labels */}
      <text x="110" y="250" fill="#94A1B2" fontSize="14" textAnchor="middle">
        Real Estate Asset
      </text>
      <text x="320" y="250" fill="#94A1B2" fontSize="14" textAnchor="middle">
        Property Tokens
      </text>
    </svg>
  )
}
