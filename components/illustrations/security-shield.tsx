"use client"

import { useEffect, useState } from "react"

export function SecurityShieldIllustration() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7F5AF0" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#2CB67D" />
        </linearGradient>
        
        <linearGradient id="badgeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2CB67D" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        
        <radialGradient id="glowGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7F5AF0" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7F5AF0" stopOpacity="0" />
        </radialGradient>
        
        <filter id="dropShadow">
          <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#7F5AF0" floodOpacity="0.4" />
        </filter>
        
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Enhanced glow effect */}
      <circle cx="200" cy="200" r="150" fill="url(#glowGradient)" className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} />

      {/* Main shield with enhanced styling */}
      <path
        d="M200 60 C160 75, 120 100, 120 150 L120 220 C120 270, 160 300, 200 320 C240 300, 280 270, 280 220 L280 150 C280 100, 240 75, 200 60 Z"
        fill="url(#shieldGradient)"
        filter="url(#dropShadow)"
        className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ animationDelay: "0.2s" }}
      />

      {/* Inner shield details */}
      <path
        d="M200 80 C170 90, 140 110, 140 150 L140 200 C140 240, 170 260, 200 275 C230 260, 260 240, 260 200 L260 150 C260 110, 230 90, 200 80 Z"
        fill="#FFFFFE"
        opacity="0.95"
        className={`transition-all duration-1000 ${isVisible ? "opacity-95" : "opacity-0"}`}
        style={{ animationDelay: "0.4s" }}
      />

      {/* Enhanced lock icon in center */}
      <g transform="translate(180, 160)" className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
        <rect x="0" y="15" width="40" height="30" fill="url(#shieldGradient)" rx="4" filter="url(#glow)" />
        <path
          d="M10 15 L10 8 C10 4, 13 0, 20 0 C27 0, 30 4, 30 8 L30 15"
          fill="none"
          stroke="#FFFFFE"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20" cy="30" r="4" fill="#FFFFFE" />
        <rect x="18" y="30" width="4" height="8" fill="#FFFFFE" rx="1" />
      </g>

              {/* Security badges with enhanced information */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
          {/* Chainlink Oracle Badge */}
          <g transform="translate(80, 80)">
            <circle cx="0" cy="0" r="25" fill="url(#badgeGradient)" filter="url(#glow)" />
            <path d="M-8 -8 L8 8 M-8 8 L8 -8" stroke="#FFFFFE" strokeWidth="2" fill="none" strokeLinecap="round" />
            <circle cx="0" cy="0" r="4" fill="#FFFFFE" />
            <text x="0" y="40" fill="#2CB67D" fontSize="11" fontWeight="bold" textAnchor="middle">
              Chainlink
            </text>
            <text x="0" y="55" fill="#2CB67D" fontSize="9" textAnchor="middle">
              Oracles
            </text>
          </g>

        {/* SPN Compliance Badge */}
        <g transform="translate(320, 80)">
          <circle cx="0" cy="0" r="25" fill="url(#badgeGradient)" filter="url(#glow)" />
          <rect x="-8" y="-8" width="16" height="16" fill="#FFFFFE" rx="2" />
          <rect x="-6" y="-6" width="12" height="2" fill="#2CB67D" />
          <rect x="-6" y="-2" width="12" height="2" fill="#2CB67D" />
          <rect x="-6" y="2" width="12" height="2" fill="#2CB67D" />
          <text x="0" y="40" fill="#2CB67D" fontSize="11" fontWeight="bold" textAnchor="middle">
            SPN
          </text>
          <text x="0" y="55" fill="#2CB67D" fontSize="9" textAnchor="middle">
            Compliance
          </text>
        </g>

        {/* Insurance Protection Badge */}
        <g transform="translate(80, 280)">
          <circle cx="0" cy="0" r="25" fill="url(#badgeGradient)" filter="url(#glow)" />
          <rect x="-10" y="-10" width="20" height="16" fill="#FFFFFE" rx="2" />
          <rect x="-8" y="6" width="16" height="4" fill="#FFFFFE" rx="1" />
          <text x="0" y="40" fill="#2CB67D" fontSize="11" fontWeight="bold" textAnchor="middle">
            Insurance
          </text>
          <text x="0" y="55" fill="#2CB67D" fontSize="9" textAnchor="middle">
            Protected
          </text>
        </g>

        {/* KYC/AML Badge */}
        <g transform="translate(320, 280)">
          <circle cx="0" cy="0" r="25" fill="url(#badgeGradient)" filter="url(#glow)" />
          <circle cx="0" cy="-6" r="6" fill="#FFFFFE" />
          <path d="M-8 8 C-8 3, -4 0, 0 0 C4 0, 8 3, 8 8" fill="#FFFFFE" />
          <text x="0" y="40" fill="#2CB67D" fontSize="11" fontWeight="bold" textAnchor="middle">
            KYC
          </text>
          <text x="0" y="55" fill="#2CB67D" fontSize="9" textAnchor="middle">
            Verified
          </text>
        </g>
      </g>

      {/* Enhanced security rings with better animation */}
      <g opacity="0.5" className={`transition-all duration-1000 ${isVisible ? "opacity-50" : "opacity-0"}`} style={{ animationDelay: "1.0s" }}>
        <circle cx="200" cy="200" r="100" fill="none" stroke="#7F5AF0" strokeWidth="1.5">
          <animate attributeName="r" values="100;130;100" dur="4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0;0.5" dur="4s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="120" fill="none" stroke="#2CB67D" strokeWidth="1.5">
          <animate attributeName="r" values="120;150;120" dur="5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0;0.4" dur="5s" repeatCount="indefinite" />
        </circle>
        <circle cx="200" cy="200" r="140" fill="none" stroke="#8B5CF6" strokeWidth="1.5">
          <animate attributeName="r" values="140;170;140" dur="6s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.3;0;0.3" dur="6s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* Security metrics display */}
      <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.2s" }}>
        {/* Security score indicator */}
        <rect x="150" y="200" width="100" height="45" fill="url(#badgeGradient)" rx="20" opacity="0.9" />
        <text x="200" y="225" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">
          Security Score
        </text>
        <text x="200" y="240" fill="white" fontSize="10" textAnchor="middle">
          99.9%
        </text>
      </g>

      {/* Floating security particles */}
      <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {[...Array(15)].map((_, i) => (
          <circle
            key={i}
            cx={100 + Math.random() * 200}
            cy={100 + Math.random() * 200}
            r={1.5 + Math.random() * 2}
            fill={i % 4 === 0 ? "#7F5AF0" : i % 4 === 1 ? "#2CB67D" : i % 4 === 2 ? "#8B5CF6" : "#10B981"}
            opacity="0.7"
            className="animate-pulse"
            style={{
              animationDelay: `${1.5 + Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </g>

      {/* Security layers indicator */}
      <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.4s" }}>
        <text x="200" y="350" fill="#94A1B2" fontSize="12" textAnchor="middle" fontWeight="500">
          Multi-Layer Security Architecture
        </text>
        <text x="200" y="365" fill="#94A1B2" fontSize="10" textAnchor="middle" opacity="0.8">
          Chainlink • SPN • KYC • Compliance
        </text>
      </g>
    </svg>
  )
}
