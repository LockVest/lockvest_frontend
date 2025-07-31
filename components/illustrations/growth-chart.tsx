export function GrowthChartIllustration() {
  return (
    <svg
      width="600"
      height="400"
      viewBox="0 0 600 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#7F5AF0" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#7F5AF0" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="barGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#2CB67D" />
          <stop offset="100%" stopColor="#7F5AF0" />
        </linearGradient>
      </defs>

      {/* Chart background */}
      <rect
        x="80"
        y="50"
        width="480"
        height="280"
        fill="#16161A"
        rx="8"
        stroke="#7F5AF0"
        strokeWidth="1"
        opacity="0.3"
      />

      {/* Grid lines */}
      <g stroke="#94A1B2" strokeWidth="0.5" opacity="0.3">
        <line x1="80" y1="110" x2="560" y2="110" />
        <line x1="80" y1="170" x2="560" y2="170" />
        <line x1="80" y1="230" x2="560" y2="230" />
        <line x1="80" y1="290" x2="560" y2="290" />

        <line x1="160" y1="50" x2="160" y2="330" />
        <line x1="240" y1="50" x2="240" y2="330" />
        <line x1="320" y1="50" x2="320" y2="330" />
        <line x1="400" y1="50" x2="400" y2="330" />
        <line x1="480" y1="50" x2="480" y2="330" />
      </g>

      {/* Growth bars */}
      <g>
        <rect x="120" y="280" width="40" height="50" fill="url(#barGradient)" rx="4" />
        <rect x="200" y="250" width="40" height="80" fill="url(#barGradient)" rx="4" />
        <rect x="280" y="200" width="40" height="130" fill="url(#barGradient)" rx="4" />
        <rect x="360" y="140" width="40" height="190" fill="url(#barGradient)" rx="4" />
        <rect x="440" y="80" width="40" height="250" fill="url(#barGradient)" rx="4" />
        <rect x="520" y="60" width="40" height="270" fill="url(#barGradient)" rx="4" />
      </g>

      {/* Growth line */}
      <path
        d="M140 305 L220 290 L300 265 L380 235 L460 205 L540 195"
        stroke="#2CB67D"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Data points */}
      <g fill="#2CB67D">
        <circle cx="140" cy="305" r="4" />
        <circle cx="220" cy="290" r="4" />
        <circle cx="300" cy="265" r="4" />
        <circle cx="380" cy="235" r="4" />
        <circle cx="460" cy="205" r="4" />
        <circle cx="540" cy="195" r="4" />
      </g>

      {/* Area under curve */}
      <path d="M140 305 L220 290 L300 265 L380 235 L460 205 L540 195 L540 330 L140 330 Z" fill="url(#chartGradient)" />

      {/* Y-axis labels */}
      <g fill="#94A1B2" fontSize="12" textAnchor="end">
        <text x="75" y="115">
          $200T
        </text>
        <text x="75" y="175">
          $150T
        </text>
        <text x="75" y="235">
          $100T
        </text>
        <text x="75" y="295">
          $50T
        </text>
        <text x="75" y="335">
          $0
        </text>
      </g>

      {/* X-axis labels */}
      <g fill="#94A1B2" fontSize="12" textAnchor="middle">
        <text x="140" y="350">
          2020
        </text>
        <text x="220" y="350">
          2021
        </text>
        <text x="300" y="350">
          2022
        </text>
        <text x="380" y="350">
          2023
        </text>
        <text x="460" y="350">
          2024
        </text>
        <text x="540" y="350">
          2025
        </text>
      </g>

      {/* Title and stats */}
      <text x="320" y="30" fill="#FFFFFE" fontSize="18" textAnchor="middle" fontWeight="bold">
        Real Estate Tokenization Growth
      </text>

      {/* Key stats */}
      <g transform="translate(50, 20)">
        <rect width="120" height="60" fill="#7F5AF0" fillOpacity="0.1" rx="8" />
        <text x="60" y="25" fill="#7F5AF0" fontSize="24" textAnchor="middle" fontWeight="bold">
          $300T
        </text>
        <text x="60" y="40" fill="#94A1B2" fontSize="10" textAnchor="middle">
          Global Market
        </text>
        <text x="60" y="52" fill="#94A1B2" fontSize="10" textAnchor="middle">
          Size
        </text>
      </g>

      <g transform="translate(430, 20)">
        <rect width="120" height="60" fill="#2CB67D" fillOpacity="0.1" rx="8" />
        <text x="60" y="25" fill="#2CB67D" fontSize="24" textAnchor="middle" fontWeight="bold">
          90%
        </text>
        <text x="60" y="40" fill="#94A1B2" fontSize="10" textAnchor="middle">
          Still in
        </text>
        <text x="60" y="52" fill="#94A1B2" fontSize="10" textAnchor="middle">
          Traditional Finance
        </text>
      </g>
    </svg>
  )
}
