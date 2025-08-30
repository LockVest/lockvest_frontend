"use client"

import { useEffect, useState } from "react"

export function AnimatedTokenizationIllustration() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("tokenization-animation")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="tokenization-animation" className="w-full h-auto">
      <svg
        width="600"
        height="400"
        viewBox="0 0 600 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F5AF0" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#2CB67D" />
          </linearGradient>
          
          <linearGradient id="tokenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2CB67D" />
            <stop offset="50%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#7F5AF0" />
          </linearGradient>
          
          <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F5AF0" />
            <stop offset="100%" stopColor="#2CB67D" />
          </linearGradient>

          <filter id="tokenGlow">
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

        {/* Process Flow Background */}
        <rect
          x="0"
          y="0"
          width="600"
          height="400"
          fill="url(#processGradient)"
          opacity="0.02"
          className={`transition-all duration-1000 ${isVisible ? "opacity-2" : "opacity-0"}`}
        />

        {/* Step 1: Property Asset */}
        <g transform="translate(50, 100)" filter="url(#shadow)">
          <rect
            width="120"
            height="160"
            fill="url(#buildingGradient)"
            rx="12"
            className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          />
          
          {/* Building roof */}
          <path
            d="M0 0 L60 -15 L120 0 L120 15 L0 15 Z"
            fill="url(#buildingGradient)"
            opacity="0.8"
            className={`transition-all duration-1000 ${isVisible ? "opacity-80" : "opacity-0"}`}
          />
          
          {/* Windows */}
          {[
            { x: 20, y: 25, delay: "0.5s" },
            { x: 60, y: 25, delay: "0.7s" },
            { x: 20, y: 70, delay: "0.9s" },
            { x: 60, y: 70, delay: "1.1s" },
            { x: 20, y: 115, delay: "1.3s" },
            { x: 60, y: 115, delay: "1.5s" },
          ].map((window, index) => (
            <rect
              key={index}
              x={window.x}
              y={window.y}
              width="25"
              height="35"
              fill="#FFFFFE"
              opacity="0.9"
              rx="4"
              className="animate-pulse"
              style={{ animationDelay: window.delay }}
            />
          ))}
          
          {/* Door */}
          <rect
            x="45"
            y="140"
            width="30"
            height="20"
            fill="#1E293B"
            rx="3"
            className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
            style={{ animationDelay: "1.7s" }}
          />
        </g>

        {/* Step 1 Label */}
        <text
          x="110"
          y="290"
          textAnchor="middle"
          fill="#7F5AF0"
          fontSize="14"
          fontWeight="bold"
          className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "1.9s" }}
        >
          Property Asset
        </text>

        {/* Arrow 1: Property to Process */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "2.1s" }}>
          <line
            x1="190"
            y1="180"
            x2="250"
            y2="180"
            stroke="url(#processGradient)"
            strokeWidth="3"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <polygon
            points="250,180 245,175 245,185"
            fill="url(#processGradient)"
          />
        </g>

        {/* Step 2: Tokenization Process */}
        <g transform="translate(270, 80)" className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "2.3s" }}>
          <rect
            width="100"
            height="120"
            fill="url(#processGradient)"
            rx="8"
            opacity="0.9"
          />
          
          {/* Process icon */}
          <circle cx="50" cy="40" r="15" fill="#FFFFFE" opacity="0.9" />
          <path
            d="M45 40 L48 43 L55 36"
            stroke="#7F5AF0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Process steps */}
          <text x="50" y="70" textAnchor="middle" fill="#FFFFFE" fontSize="10" fontWeight="600">
            ERC-20
          </text>
          <text x="50" y="85" textAnchor="middle" fill="#FFFFFE" fontSize="10" fontWeight="600">
            ERC-721
          </text>
          <text x="50" y="100" textAnchor="middle" fill="#FFFFFE" fontSize="10" fontWeight="600">
            Commodities
          </text>
        </g>

        {/* Step 2 Label */}
        <text
          x="320"
          y="220"
          textAnchor="middle"
          fill="#2CB67D"
          fontSize="14"
          fontWeight="bold"
          className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "2.5s" }}
        >
          Tokenization
        </text>

        {/* Arrow 2: Process to Tokens */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "2.7s" }}>
          <line
            x1="390"
            y1="180"
            x2="450"
            y2="180"
            stroke="url(#processGradient)"
            strokeWidth="3"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <polygon
            points="450,180 445,175 445,185"
            fill="url(#processGradient)"
          />
        </g>

        {/* Step 3: Generated Tokens */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "2.9s" }}>
          {/* ERC-20 Token */}
          <g transform="translate(470, 60)">
            <circle
              cx="0"
              cy="0"
              r="30"
              fill="url(#tokenGradient)"
              filter="url(#tokenGlow)"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              ERC20
            </text>
            <text
              x="0"
              y="20"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              opacity="0.8"
            >
              Shares
            </text>
          </g>

          {/* ERC-721 Token */}
          <g transform="translate(470, 140)">
            <circle
              cx="0"
              cy="0"
              r="30"
              fill="url(#tokenGradient)"
              filter="url(#tokenGlow)"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              ERC721
            </text>
            <text
              x="0"
              y="20"
              textAnchor="middle"
              fill="white"
              fontSize="10"
              opacity="0.8"
            >
              Titles
            </text>
          </g>

          {/* Commodity Token */}
          <g transform="translate(470, 220)">
            <circle
              cx="0"
              cy="0"
              r="30"
              fill="url(#tokenGradient)"
              filter="url(#tokenGlow)"
            />
            <text
              x="0"
              y="5"
              textAnchor="middle"
              fill="white"
              fontSize="12"
              fontWeight="bold"
            >
              COMM
            </text>
            <text
              x="0"
              y="20"
              textAnchor="middle"
              fill="white"
              fontSize="8"
              opacity="0.8"
            >
              Commodities
            </text>
          </g>
        </g>

        {/* Step 3 Label */}
        <text
          x="520"
          y="290"
          textAnchor="middle"
          fill="#7F5AF0"
          fontSize="14"
          fontWeight="bold"
          className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
          style={{ animationDelay: "3.1s" }}
        >
          Digital Tokens
        </text>

        {/* Process Flow Indicators */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "3.3s" }}>
          {/* Flow lines connecting tokens */}
          <line
            x1="495"
            y1="85"
            x2="495"
            y2="115"
            stroke="#2CB67D"
            strokeWidth="1"
            opacity="0.6"
            className="animate-pulse"
          />
          <line
            x1="495"
            y1="165"
            x2="495"
            y2="195"
            stroke="#2CB67D"
            strokeWidth="1"
            opacity="0.6"
            className="animate-pulse"
          />
        </g>

        {/* Floating particles for process effect */}
        <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={200 + Math.random() * 200}
              cy={100 + Math.random() * 200}
              r={1 + Math.random() * 2}
              fill={i % 3 === 0 ? "#7F5AF0" : i % 3 === 1 ? "#2CB67D" : "#8B5CF6"}
              opacity="0.6"
              className="animate-pulse"
              style={{
                animationDelay: `${3.5 + Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
