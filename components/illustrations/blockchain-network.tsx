export function BlockchainNetworkIllustration() {
  return (
    <svg
      width="500"
      height="400"
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <radialGradient id="networkGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F5AF0" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#2CB67D" stopOpacity="0.1" />
        </radialGradient>
        <linearGradient id="blockGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="100%" stopColor="#2CB67D" />
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="500" height="400" fill="url(#networkGradient)" />

      {/* Network nodes */}
      <g>
        {/* Central hub */}
        <circle cx="250" cy="200" r="25" fill="url(#blockGradient)" />
        <circle cx="250" cy="200" r="15" fill="#FFFFFE" opacity="0.9" />
        <circle cx="250" cy="200" r="8" fill="#7F5AF0" />

        {/* Surrounding nodes */}
        <circle cx="150" cy="120" r="18" fill="url(#blockGradient)" />
        <circle cx="150" cy="120" r="10" fill="#FFFFFE" opacity="0.8" />

        <circle cx="350" cy="120" r="18" fill="url(#blockGradient)" />
        <circle cx="350" cy="120" r="10" fill="#FFFFFE" opacity="0.8" />

        <circle cx="100" cy="200" r="18" fill="url(#blockGradient)" />
        <circle cx="100" cy="200" r="10" fill="#FFFFFE" opacity="0.8" />

        <circle cx="400" cy="200" r="18" fill="url(#blockGradient)" />
        <circle cx="400" cy="200" r="10" fill="#FFFFFE" opacity="0.8" />

        <circle cx="150" cy="280" r="18" fill="url(#blockGradient)" />
        <circle cx="150" cy="280" r="10" fill="#FFFFFE" opacity="0.8" />

        <circle cx="350" cy="280" r="18" fill="url(#blockGradient)" />
        <circle cx="350" cy="280" r="10" fill="#FFFFFE" opacity="0.8" />

        {/* Outer ring nodes */}
        <circle cx="80" cy="100" r="12" fill="#2CB67D" />
        <circle cx="420" cy="100" r="12" fill="#2CB67D" />
        <circle cx="80" cy="300" r="12" fill="#2CB67D" />
        <circle cx="420" cy="300" r="12" fill="#2CB67D" />
        <circle cx="50" cy="200" r="12" fill="#2CB67D" />
        <circle cx="450" cy="200" r="12" fill="#2CB67D" />
      </g>

      {/* Connection lines */}
      <g stroke="#7F5AF0" strokeWidth="2" opacity="0.6">
        <line x1="250" y1="200" x2="150" y2="120" />
        <line x1="250" y1="200" x2="350" y2="120" />
        <line x1="250" y1="200" x2="100" y2="200" />
        <line x1="250" y1="200" x2="400" y2="200" />
        <line x1="250" y1="200" x2="150" y2="280" />
        <line x1="250" y1="200" x2="350" y2="280" />
      </g>

      <g stroke="#2CB67D" strokeWidth="1" opacity="0.4">
        <line x1="150" y1="120" x2="80" y2="100" />
        <line x1="350" y1="120" x2="420" y2="100" />
        <line x1="100" y1="200" x2="50" y2="200" />
        <line x1="400" y1="200" x2="450" y2="200" />
        <line x1="150" y1="280" x2="80" y2="300" />
        <line x1="350" y1="280" x2="420" y2="300" />
      </g>

      {/* Data flow animation */}
      <g>
        <circle cx="250" cy="200" r="30" fill="none" stroke="#7F5AF0" strokeWidth="1" opacity="0.3">
          <animate attributeName="r" values="30;50;30" dur="2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="250" cy="200" r="40" fill="none" stroke="#2CB67D" strokeWidth="1" opacity="0.2">
          <animate attributeName="r" values="40;70;40" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.2;0;0.2" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Labels */}
      <text x="250" y="350" fill="#94A1B2" fontSize="16" textAnchor="middle" fontWeight="bold">
        Decentralized Network
      </text>
      <text x="250" y="370" fill="#94A1B2" fontSize="12" textAnchor="middle">
        Secure • Transparent • Global
      </text>
    </svg>
  )
}
