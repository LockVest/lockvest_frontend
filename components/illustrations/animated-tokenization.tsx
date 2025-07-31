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
        width="500"
        height="300"
        viewBox="0 0 500 300"
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
          <filter id="tokenGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Building with construction animation */}
        <g transform="translate(50, 80)">
          <rect
            width="120"
            height="140"
            fill="url(#buildingGradient)"
            rx="8"
            className={`transition-all duration-1000 ${isVisible ? "animate-building-rise" : "translate-y-full opacity-0"}`}
          />

          {/* Windows with staggered light-up animation */}
          {[
            { x: 15, y: 20, delay: "1.2s" },
            { x: 45, y: 20, delay: "1.4s" },
            { x: 75, y: 20, delay: "1.6s" },
            { x: 15, y: 55, delay: "1.8s" },
            { x: 45, y: 55, delay: "2.0s" },
            { x: 75, y: 55, delay: "2.2s" },
            { x: 15, y: 90, delay: "2.4s" },
            { x: 45, y: 90, delay: "2.6s" },
            { x: 75, y: 90, delay: "2.8s" },
          ].map((window, index) => (
            <rect
              key={index}
              x={window.x}
              y={window.y}
              width="20"
              height="25"
              fill="#FFFFFE"
              opacity={index % 2 === 0 ? "0.8" : "0.6"}
              rx="2"
              className="animate-window-glow"
              style={{ animationDelay: window.delay }}
            />
          ))}

          {/* Door */}
          <rect
            x="45"
            y="125"
            width="30"
            height="15"
            fill="#16161A"
            rx="2"
            className={`transition-all duration-500 ${isVisible ? "animate-door-open" : ""}`}
            style={{ animationDelay: "3s" }}
          />
        </g>

        {/* Animated transformation arrow */}
        <g transform="translate(200, 140)">
          <path
            d="M0 5 L30 5 M25 0 L30 5 L25 10"
            stroke="#94A1B2"
            strokeWidth="2"
            fill="none"
            className={`transition-all duration-1000 ${isVisible ? "animate-arrow-pulse" : "opacity-0"}`}
            style={{ animationDelay: "3.5s" }}
          />
          <text
            x="15"
            y="-5"
            fill="#94A1B2"
            fontSize="12"
            textAnchor="middle"
            className={`transition-all duration-500 ${isVisible ? "animate-text-glow" : "opacity-0"}`}
            style={{ animationDelay: "4s" }}
          >
            Tokenize
          </text>

          {/* Magic sparkles */}
          {[...Array(6)].map((_, i) => (
            <circle
              key={i}
              cx={15 + Math.cos((i * 60 * Math.PI) / 180) * 20}
              cy={5 + Math.sin((i * 60 * Math.PI) / 180) * 15}
              r="1"
              fill="#7F5AF0"
              className="animate-sparkle"
              style={{ animationDelay: `${4 + i * 0.2}s` }}
            />
          ))}
        </g>

        {/* Tokens with sequential appearance and floating animation */}
        <g transform="translate(280, 100)">
          {[
            { x: 20, y: 20, id: "T1", delay: "5s" },
            { x: 60, y: 20, id: "T2", delay: "5.3s" },
            { x: 100, y: 20, id: "T3", delay: "5.6s" },
            { x: 20, y: 60, id: "T4", delay: "5.9s" },
            { x: 60, y: 60, id: "T5", delay: "6.2s" },
            { x: 100, y: 60, id: "T6", delay: "6.5s" },
          ].map((token, index) => (
            <g key={index} className="animate-token-appear" style={{ animationDelay: token.delay }}>
              <circle
                cx={token.x}
                cy={token.y}
                r="18"
                fill="url(#tokenGradient)"
                filter="url(#tokenGlow)"
                className="animate-token-float"
                style={{ animationDelay: token.delay }}
              />
              <text
                x={token.x}
                y={token.y + 4}
                fill="#FFFFFE"
                fontSize="10"
                textAnchor="middle"
                fontWeight="bold"
                className="animate-token-text"
                style={{ animationDelay: `${Number.parseFloat(token.delay.replace("s", "")) + 0.3}s` }}
              >
                {token.id}
              </text>
            </g>
          ))}
        </g>

        {/* Animated connecting lines between tokens */}
        <g stroke="#7F5AF0" strokeWidth="1" opacity="0.5">
          {[
            { x1: 300, y1: 120, x2: 340, y2: 120, delay: "7s" },
            { x1: 340, y1: 120, x2: 380, y2: 120, delay: "7.2s" },
            { x1: 300, y1: 160, x2: 340, y2: 160, delay: "7.4s" },
            { x1: 340, y1: 160, x2: 380, y2: 160, delay: "7.6s" },
            { x1: 320, y1: 140, x2: 360, y2: 140, delay: "7.8s" },
          ].map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              className="animate-connection-draw"
              style={{
                strokeDasharray: "50",
                strokeDashoffset: isVisible ? "0" : "50",
                transition: `stroke-dashoffset 0.8s ease-in-out ${line.delay}`,
              }}
            />
          ))}
        </g>

        {/* Labels with typewriter effect */}
        <text
          x="110"
          y="250"
          fill="#94A1B2"
          fontSize="14"
          textAnchor="middle"
          className="animate-typewriter"
          style={{ animationDelay: "8s" }}
        >
          Real Estate Asset
        </text>
        <text
          x="340"
          y="250"
          fill="#94A1B2"
          fontSize="14"
          textAnchor="middle"
          className="animate-typewriter"
          style={{ animationDelay: "8.5s" }}
        >
          Property Tokens
        </text>

        {/* Floating value indicators */}
        {[...Array(4)].map((_, i) => (
          <g key={i} className="animate-value-float" style={{ animationDelay: `${9 + i * 0.5}s` }}>
            <circle cx={150 + i * 80} cy={50 + Math.sin(i) * 20} r="3" fill="#2CB67D" opacity="0.8" />
            <text
              x={150 + i * 80}
              y={45 + Math.sin(i) * 20}
              fill="#2CB67D"
              fontSize="8"
              textAnchor="middle"
              fontWeight="bold"
            >
              ${(i + 1) * 25}K
            </text>
          </g>
        ))}
      </svg>

      <style jsx>{`
        @keyframes building-rise {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes window-glow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; box-shadow: 0 0 10px #FFFFFE; }
        }

        @keyframes door-open {
          0% { transform: scaleY(1); }
          50% { transform: scaleY(0.8); }
          100% { transform: scaleY(1); }
        }

        @keyframes arrow-pulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes text-glow {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; text-shadow: 0 0 10px #94A1B2; }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        @keyframes token-appear {
          0% { opacity: 0; transform: scale(0) rotate(180deg); }
          70% { opacity: 1; transform: scale(1.2) rotate(0deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }

        @keyframes token-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(2deg); }
          66% { transform: translateY(3px) rotate(-2deg); }
        }

        @keyframes token-text {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes typewriter {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes value-float {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 1; transform: translateY(-10px); }
          100% { opacity: 0.7; transform: translateY(0); }
        }

        .animate-building-rise {
          animation: building-rise 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-window-glow {
          animation: window-glow 2s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-door-open {
          animation: door-open 0.5s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-arrow-pulse {
          animation: arrow-pulse 2s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-text-glow {
          animation: text-glow 2s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-sparkle {
          animation: sparkle 1s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-token-appear {
          animation: token-appear 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-token-float {
          animation: token-float 3s ease-in-out infinite;
        }

        .animate-token-text {
          animation: token-text 0.3s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-typewriter {
          animation: typewriter 0.5s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-value-float {
          animation: value-float 2s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-connection-draw {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
