export function UserFlowIllustration() {
  return (
    <svg
      width="800"
      height="300"
      viewBox="0 0 800 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="100%" stopColor="#2CB67D" />
        </linearGradient>
        <linearGradient id="deviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2CB67D" />
          <stop offset="100%" stopColor="#7F5AF0" />
        </linearGradient>
      </defs>

      {/* Step 1: Browse Assets */}
      <g transform="translate(50, 50)">
        {/* Phone/Device */}
        <rect width="80" height="140" fill="url(#deviceGradient)" rx="12" />
        <rect x="10" y="20" width="60" height="100" fill="#16161A" rx="4" />

        {/* Property cards on screen */}
        <rect x="15" y="25" width="50" height="20" fill="#7F5AF0" rx="2" />
        <rect x="20" y="28" width="15" height="8" fill="#FFFFFE" opacity="0.8" />
        <rect x="37" y="28" width="25" height="3" fill="#FFFFFE" opacity="0.6" />
        <rect x="37" y="33" width="20" height="3" fill="#FFFFFE" opacity="0.4" />

        <rect x="15" y="50" width="50" height="20" fill="#2CB67D" rx="2" />
        <rect x="20" y="53" width="15" height="8" fill="#FFFFFE" opacity="0.8" />
        <rect x="37" y="53" width="25" height="3" fill="#FFFFFE" opacity="0.6" />
        <rect x="37" y="58" width="20" height="3" fill="#FFFFFE" opacity="0.4" />

        <rect x="15" y="75" width="50" height="20" fill="#7F5AF0" rx="2" />
        <rect x="20" y="78" width="15" height="8" fill="#FFFFFE" opacity="0.8" />
        <rect x="37" y="78" width="25" height="3" fill="#FFFFFE" opacity="0.6" />
        <rect x="37" y="83" width="20" height="3" fill="#FFFFFE" opacity="0.4" />

        {/* Home button */}
        <circle cx="40" cy="135" r="8" fill="#94A1B2" />

        <text x="40" y="220" fill="#FFFFFE" fontSize="14" textAnchor="middle" fontWeight="bold">
          Browse Assets
        </text>
        <text x="40" y="240" fill="#94A1B2" fontSize="12" textAnchor="middle">
          Explore verified properties
        </text>
      </g>

      {/* Arrow 1 */}
      <g transform="translate(180, 140)">
        <path d="M0 5 L60 5 M55 0 L60 5 L55 10" stroke="#94A1B2" strokeWidth="2" fill="none" />
      </g>

      {/* Step 2: Connect Wallet */}
      <g transform="translate(280, 50)">
        {/* Wallet */}
        <rect width="100" height="60" fill="url(#stepGradient)" rx="8" />
        <rect x="10" y="10" width="80" height="40" fill="#16161A" rx="4" />

        {/* Wallet details */}
        <rect x="15" y="15" width="30" height="8" fill="#7F5AF0" rx="2" />
        <rect x="15" y="27" width="70" height="4" fill="#94A1B2" opacity="0.6" />
        <rect x="15" y="35" width="50" height="4" fill="#94A1B2" opacity="0.4" />
        <rect x="15" y="43" width="60" height="4" fill="#2CB67D" />

        {/* Connection indicator */}
        <circle cx="85" cy="25" r="8" fill="#2CB67D" />
        <path d="M80 25 L83 28 L90 21" stroke="#FFFFFE" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Transaction animation */}
        <g opacity="0.7">
          <circle cx="50" cy="130" r="15" fill="none" stroke="#7F5AF0" strokeWidth="2">
            <animate attributeName="r" values="15;25;15" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.7;0;0.7" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>

        <text x="50" y="220" fill="#FFFFFE" fontSize="14" textAnchor="middle" fontWeight="bold">
          Connect & Invest
        </text>
        <text x="50" y="240" fill="#94A1B2" fontSize="12" textAnchor="middle">
          Secure wallet transaction
        </text>
      </g>

      {/* Arrow 2 */}
      <g transform="translate(430, 140)">
        <path d="M0 5 L60 5 M55 0 L60 5 L55 10" stroke="#94A1B2" strokeWidth="2" fill="none" />
      </g>

      {/* Step 3: Governance & Rewards */}
      <g transform="translate(530, 50)">
        {/* Governance dashboard */}
        <rect width="120" height="100" fill="url(#deviceGradient)" rx="8" />
        <rect x="10" y="10" width="100" height="80" fill="#16161A" rx="4" />

        {/* Voting interface */}
        <rect x="15" y="15" width="90" height="15" fill="#7F5AF0" opacity="0.8" rx="2" />
        <text x="60" y="25" fill="#FFFFFE" fontSize="8" textAnchor="middle">
          Proposal #1
        </text>

        <rect x="15" y="35" width="40" height="12" fill="#2CB67D" rx="2" />
        <text x="35" y="43" fill="#FFFFFE" fontSize="7" textAnchor="middle">
          YES 65%
        </text>

        <rect x="65" y="35" width="25" height="12" fill="#94A1B2" rx="2" />
        <text x="77.5" y="43" fill="#FFFFFE" fontSize="7" textAnchor="middle">
          NO 35%
        </text>

        {/* Rewards section */}
        <rect x="15" y="55" width="90" height="15" fill="#2CB67D" opacity="0.8" rx="2" />
        <text x="60" y="65" fill="#FFFFFE" fontSize="8" textAnchor="middle">
          Monthly Rewards
        </text>

        <rect x="15" y="75" width="90" height="10" fill="#7F5AF0" opacity="0.6" rx="2" />
        <text x="60" y="82" fill="#FFFFFE" fontSize="7" textAnchor="middle">
          $1,250 Earned
        </text>

        {/* Reward coins */}
        <g transform="translate(140, 20)">
          <circle cx="0" cy="0" r="8" fill="#2CB67D" />
          <text x="0" y="3" fill="#FFFFFE" fontSize="8" textAnchor="middle" fontWeight="bold">
            $
          </text>

          <circle cx="15" cy="10" r="8" fill="#7F5AF0" />
          <text x="15" y="13" fill="#FFFFFE" fontSize="8" textAnchor="middle" fontWeight="bold">
            $
          </text>

          <circle cx="5" cy="25" r="8" fill="#2CB67D" />
          <text x="5" y="28" fill="#FFFFFE" fontSize="8" textAnchor="middle" fontWeight="bold">
            $
          </text>
        </g>

        <text x="60" y="220" fill="#FFFFFE" fontSize="14" textAnchor="middle" fontWeight="bold">
          Earn & Govern
        </text>
        <text x="60" y="240" fill="#94A1B2" fontSize="12" textAnchor="middle">
          Rewards and DAO voting
        </text>
      </g>

      {/* Background connecting line */}
      <line x1="90" y1="200" x2="590" y2="200" stroke="#7F5AF0" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />
    </svg>
  )
}
