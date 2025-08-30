"use client"

import { useEffect, useState } from "react"

export function AnimatedHeroIllustration() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative w-full h-auto">
      <svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Filters (kept) */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Background with solid colors */}
        <circle
          cx="300"
          cy="300"
          r="300"
          fill="#7F5AF0"
          opacity="0.03"
          className={`transition-all duration-1500 ${isVisible ? "opacity-3" : "opacity-0"}`}
        />
        
        <circle
          cx="300"
          cy="300"
          r="250"
          fill="#2CB67D"
          opacity="0.02"
          className={`transition-all duration-1500 ${isVisible ? "opacity-2" : "opacity-0"}`}
        />

        {/* Main Building - Enhanced Real Estate Representation */}
        <g transform="translate(200, 120)" filter="url(#shadow)">
          {/* Building base with clean styling */}
          <rect
            width="200"
            height="280"
            fill="#7F5AF0"
            rx="12"
            className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
          
          {/* Building roof with modern design */}
          <path
            d="M0 0 L100 -20 L200 0 L200 20 L0 20 Z"
            fill="#8B5CF6"
            opacity="0.8"
            className={`transition-all duration-1000 ${isVisible ? "opacity-80" : "opacity-0"}`}
          />
          
          {/* Enhanced windows with better spacing and design */}
          {[
            { x: 25, y: 40, delay: "0.2s", floor: "1" },
            { x: 70, y: 40, delay: "0.4s", floor: "1" },
            { x: 115, y: 40, delay: "0.6s", floor: "1" },
            { x: 160, y: 40, delay: "0.8s", floor: "1" },
            { x: 25, y: 100, delay: "1.0s", floor: "2" },
            { x: 70, y: 100, delay: "1.2s", floor: "2" },
            { x: 115, y: 100, delay: "1.4s", floor: "2" },
            { x: 160, y: 100, delay: "1.6s", floor: "2" },
            { x: 25, y: 160, delay: "1.8s", floor: "3" },
            { x: 70, y: 160, delay: "2.0s", floor: "3" },
            { x: 115, y: 160, delay: "2.2s", floor: "3" },
            { x: 160, y: 160, delay: "2.4s", floor: "3" },
          ].map((window, index) => (
            <g key={index}>
              <rect
                x={window.x}
                y={window.y}
                width="30"
                height="40"
                fill="#FFFFFE"
                opacity="0.9"
                rx="4"
                className="animate-pulse"
                style={{ animationDelay: window.delay }}
              />
              {/* Window frame */}
              <rect
                x={window.x + 2}
                y={window.y + 2}
                width="26"
                height="36"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="1"
                rx="3"
              />
              {/* Window reflection */}
              <rect
                x={window.x + 4}
                y={window.y + 4}
                width="8"
                height="12"
                fill="#F1F5F9"
                opacity="0.6"
                rx="2"
              />
            </g>
          ))}
          
          {/* Enhanced building entrance with details */}
          <rect
            x="80"
            y="220"
            width="40"
            height="60"
            fill="#1E293B"
            rx="6"
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "2.6s" }}
          />
          {/* Entrance door */}
          <rect
            x="85"
            y="225"
            width="30"
            height="50"
            fill="#475569"
            rx="3"
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "2.8s" }}
          />
          {/* Door handle */}
          <circle
            cx="110"
            cy="250"
            r="3"
            fill="#E2E8F0"
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "3.0s" }}
          />
        </g>

        {/* Enhanced Token Symbols with Better Information */}
        <g filter="url(#glow)">
          {/* ERC-20 Token - Fractional Shares */}
          <g className={`transition-all duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.5s" }}>
            <circle cx="120" cy="120" r="30" fill="#2CB67D" />
            <text
              x="120"
              y="118"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              ERC20
            </text>
            <text
              x="120"
              y="135"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              opacity="0.8"
            >
              Shares
            </text>
          </g>

          {/* ERC-721 NFT Token - Property Titles */}
          <g className={`transition-all duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
            <circle cx="480" cy="120" r="30" fill="#7F5AF0" />
            <text
              x="480"
              y="118"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              ERC721
            </text>
            <text
              x="480"
              y="135"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              opacity="0.8"
            >
              Titles
            </text>
          </g>

          {/* LVT Utility Token - Governance */}
          <g className={`transition-all duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.1s" }}>
            <circle cx="120" cy="480" r="30" fill="#8B5CF6" />
            <text
              x="120"
              y="478"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              LVT
            </text>
            <text
              x="120"
              y="495"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              opacity="0.8"
            >
              Governance
            </text>
          </g>

          {/* New: Commodity Token */}
          <g className={`transition-all duration-800 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.3s" }}>
            <circle cx="480" cy="480" r="30" fill="#10B981" />
            <text
              x="480"
              y="478"
              textAnchor="middle"
              fill="white"
              fontSize="14"
              fontWeight="bold"
            >
              COMM
            </text>
            <text
              x="480"
              y="495"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              opacity="0.8"
            >
              Commodities
            </text>
          </g>
        </g>

        {/* Enhanced Blockchain Network with Better Visual Flow */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Connection lines with better styling */}
          <line x1="300" y1="200" x2="150" y2="120" stroke="#7F5AF0" strokeWidth="3" opacity="0.7" className="animate-pulse" style={{ animationDelay: "1.5s" }} />
          <line x1="300" y1="200" x2="450" y2="120" stroke="#2CB67D" strokeWidth="3" opacity="0.7" className="animate-pulse" style={{ animationDelay: "1.7s" }} />
          <line x1="300" y1="200" x2="150" y2="480" stroke="#8B5CF6" strokeWidth="3" opacity="0.7" className="animate-pulse" style={{ animationDelay: "1.9s" }} />
          <line x1="300" y1="200" x2="450" y2="480" stroke="#10B981" strokeWidth="3" opacity="0.7" className="animate-pulse" style={{ animationDelay: "2.1s" }} />

          {/* Enhanced blockchain blocks with better design */}
          {[
            { x: 80, y: 300, delay: "2.3s", label: "Block" },
            { x: 520, y: 300, delay: "2.5s", label: "Chain" },
            { x: 300, y: 450, delay: "2.7s", label: "Node" },
          ].map((block, index) => (
            <g key={index}>
              <rect x={block.x - 25} y={block.y - 20} width="50" height="40" fill="#7F5AF0" rx="6" className="animate-pulse" style={{ animationDelay: block.delay }} />
              <text
                x={block.x}
                y={block.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="bold"
              >
                {block.label}
              </text>
            </g>
          ))}
        </g>

        {/* Enhanced Marketplace with Better Information Architecture */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Marketplace platform representation */}
          <rect x="180" y="60" width="240" height="40" fill="#2CB67D" rx="20" opacity="0.9" className="animate-pulse" style={{ animationDelay: "3.0s" }} />
          <text
            x="300"
            y="85"
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="bold"
          >
            RWA Marketplace
          </text>

          {/* Connection nodes with better positioning */}
          {[
            { cx: 200, cy: 80, delay: "3.2s", label: "List" },
            { cx: 400, cy: 80, delay: "3.4s", label: "Trade" },
            { cx: 200, cy: 520, delay: "3.6s", label: "Invest" },
            { cx: 400, cy: 520, delay: "3.8s", label: "Earn" },
          ].map((node, index) => (
            <g key={index}>
              <circle
                cx={node.cx}
                cy={node.cy}
                r="10"
                fill="#2CB67D"
                className="animate-pulse"
                style={{ animationDelay: node.delay }}
              />
              <text
                x={node.cx}
                y={node.cy + 20}
                textAnchor="middle"
                fill="#2CB67D"
                fontSize="10"
                fontWeight="600"
              >
                {node.label}
              </text>
            </g>
          ))}

          {/* Enhanced marketplace grid with better visual hierarchy */}
          <line
            x1="200"
            y1="80"
            x2="400"
            y2="80"
            stroke="#2CB67D"
            strokeWidth="2"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: "4.0s" }}
          />
          <line
            x1="200"
            y1="520"
            x2="400"
            y2="520"
            stroke="#2CB67D"
            strokeWidth="2"
            opacity="0.6"
            className="animate-pulse"
            style={{ animationDelay: "4.2s" }}
          />
          <line
            x1="200"
            y1="80"
            x2="200"
            y2="520"
            stroke="#2CB67D"
            strokeWidth="2"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: "4.4s" }}
          />
          <line
            x1="400"
            y1="80"
            x2="400"
            y2="520"
            stroke="#2CB67D"
            strokeWidth="2"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: "4.6s" }}
          />
        </g>

        {/* Enhanced floating particles with better distribution */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={80 + Math.random() * 440}
              cy={80 + Math.random() * 440}
              r={1.5 + Math.random() * 2}
              fill={i % 3 === 0 ? "#7F5AF0" : i % 3 === 1 ? "#2CB67D" : "#8B5CF6"}
              opacity="0.7"
              className="animate-pulse"
              style={{
                animationDelay: `${4.0 + Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </g>

        {/* New: Performance indicators */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "4.8s" }}>
          {/* 50K TPS indicator */}
          <rect x="250" y="300" width="100" height="30" fill="#2CB67D" rx="15" opacity="0.8" />
          <text
            x="300"
            y="320"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="bold"
          >
            50K TPS
          </text>
        </g>
      </svg>
    </div>
  )
}
