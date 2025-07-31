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

        {/* Animated background circle */}
        <circle
          cx="300"
          cy="300"
          r="280"
          fill="url(#heroGradient)"
          className={`transition-all duration-2000 ${isVisible ? "animate-pulse-slow" : "opacity-0"}`}
        />

        {/* Nigeria map outline with draw-on animation */}
        <path
          d="M200 150 C220 140, 250 145, 280 155 C320 165, 350 180, 380 200 C400 220, 410 250, 405 280 C400 320, 390 350, 370 380 C350 400, 320 410, 290 405 C250 400, 220 390, 200 370 C180 350, 175 320, 180 290 C185 250, 190 200, 200 150 Z"
          fill="none"
          stroke="#7F5AF0"
          strokeWidth="2"
          opacity="0.6"
          className="animate-draw-path"
          style={{
            strokeDasharray: "1000",
            strokeDashoffset: isVisible ? "0" : "1000",
            transition: "stroke-dashoffset 3s ease-in-out 0.5s",
          }}
        />

        {/* Blockchain network nodes with staggered animations */}
        <g filter="url(#glow)">
          {[
            { cx: 220, cy: 200, delay: "0.2s", r: 8 },
            { cx: 300, cy: 180, delay: "0.4s", r: 6 },
            { cx: 360, cy: 220, delay: "0.6s", r: 7 },
            { cx: 340, cy: 280, delay: "0.8s", r: 8 },
            { cx: 280, cy: 320, delay: "1.0s", r: 6 },
            { cx: 230, cy: 300, delay: "1.2s", r: 7 },
            { cx: 250, cy: 240, delay: "1.4s", r: 9 },
          ].map((node, index) => (
            <circle
              key={index}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill="url(#nodeGradient)"
              className="animate-node-pulse"
              style={{
                animationDelay: node.delay,
                transformOrigin: `${node.cx}px ${node.cy}px`,
              }}
            />
          ))}

          {/* Animated connection lines */}
          <g className="animate-fade-in-delayed">
            {[
              { x1: 220, y1: 200, x2: 300, y2: 180, delay: "1.6s" },
              { x1: 300, y1: 180, x2: 360, y2: 220, delay: "1.8s" },
              { x1: 360, y1: 220, x2: 340, y2: 280, delay: "2.0s" },
              { x1: 340, y1: 280, x2: 280, y2: 320, delay: "2.2s" },
              { x1: 280, y1: 320, x2: 230, y2: 300, delay: "2.4s" },
              { x1: 230, y1: 300, x2: 220, y2: 200, delay: "2.6s" },
              { x1: 250, y1: 240, x2: 300, y2: 180, delay: "2.8s" },
              { x1: 250, y1: 240, x2: 340, y2: 280, delay: "3.0s" },
            ].map((line, index) => (
              <line
                key={index}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="#7F5AF0"
                strokeWidth="1"
                opacity="0.6"
                className="animate-line-draw"
                style={{
                  strokeDasharray: "100",
                  strokeDashoffset: isVisible ? "0" : "100",
                  transition: `stroke-dashoffset 0.8s ease-in-out ${line.delay}`,
                }}
              />
            ))}
          </g>
        </g>

        {/* Property token pins with bounce animation */}
        <g>
          {[
            { x: 240, y: 190, delay: "3.2s" },
            { x: 320, y: 250, delay: "3.4s" },
            { x: 270, y: 300, delay: "3.6s" },
          ].map((pin, index) => (
            <g
              key={index}
              transform={`translate(${pin.x}, ${pin.y})`}
              className="animate-bounce-in"
              style={{ animationDelay: pin.delay }}
            >
              <path
                d="M0 20 L-8 8 C-8 3, -4 0, 0 0 C4 0, 8 3, 8 8 L0 20 Z"
                fill="#2CB67D"
                className="animate-pin-wiggle"
              />
              <circle cx="0" cy="8" r="4" fill="#FFFFFE" />
              <rect x="-2" y="6" width="4" height="4" fill="#2CB67D" rx="1" className="animate-property-glow" />
            </g>
          ))}
        </g>

        {/* Floating blockchain blocks with rotation */}
        <g opacity="0.7">
          {[
            { x: 150, y: 120, rotation: 15, delay: "4.0s" },
            { x: 420, y: 160, rotation: -10, delay: "4.2s" },
            { x: 380, y: 380, rotation: 20, delay: "4.4s" },
          ].map((block, index) => (
            <g
              key={index}
              transform={`translate(${block.x}, ${block.y}) rotate(${block.rotation})`}
              className="animate-float-rotate"
              style={{ animationDelay: block.delay }}
            >
              <rect
                width={30 - index * 2}
                height={30 - index * 2}
                fill={index % 2 === 0 ? "#7F5AF0" : "#2CB67D"}
                rx="4"
              />
              <rect x="5" y="5" width={20 - index * 2} height="4" fill="#FFFFFE" opacity="0.8" />
              <rect x="5" y="12" width={15 - index} height="4" fill="#FFFFFE" opacity="0.6" />
              <rect x="5" y="19" width={18 - index} height="4" fill="#FFFFFE" opacity="0.4" />
            </g>
          ))}
        </g>

        {/* Multi-layered animated pulse rings */}
        <g opacity="0.3">
          <circle
            cx="250"
            cy="240"
            r="40"
            fill="none"
            stroke="#7F5AF0"
            strokeWidth="1"
            className="animate-pulse-ring-1"
          />
          <circle
            cx="320"
            cy="250"
            r="35"
            fill="none"
            stroke="#2CB67D"
            strokeWidth="1"
            className="animate-pulse-ring-2"
          />
          <circle
            cx="280"
            cy="280"
            r="30"
            fill="none"
            stroke="#7F5AF0"
            strokeWidth="1"
            className="animate-pulse-ring-3"
          />
        </g>

        {/* Data flow particles */}
        <g className="animate-fade-in" style={{ animationDelay: "5s" }}>
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx="250"
              cy="240"
              r="2"
              fill="#2CB67D"
              className="animate-particle-flow"
              style={{
                animationDelay: `${5 + i * 0.3}s`,
                transformOrigin: "250px 240px",
              }}
            />
          ))}
        </g>
      </svg>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.02); }
        }

        @keyframes node-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        @keyframes bounce-in {
          0% { transform: translateY(-50px) scale(0); opacity: 0; }
          60% { transform: translateY(0) scale(1.1); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        @keyframes pin-wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-2deg); }
          75% { transform: rotate(2deg); }
        }

        @keyframes property-glow {
          0%, 100% { box-shadow: 0 0 5px #2CB67D; }
          50% { box-shadow: 0 0 15px #2CB67D, 0 0 25px #2CB67D; }
        }

        @keyframes float-rotate {
          0% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(120deg); }
          66% { transform: translateY(5px) rotate(240deg); }
          100% { transform: translateY(0) rotate(360deg); }
        }

        @keyframes pulse-ring-1 {
          0% { r: 40; opacity: 0.3; }
          50% { r: 60; opacity: 0.1; }
          100% { r: 40; opacity: 0.3; }
        }

        @keyframes pulse-ring-2 {
          0% { r: 35; opacity: 0.3; }
          50% { r: 55; opacity: 0.1; }
          100% { r: 35; opacity: 0.3; }
        }

        @keyframes pulse-ring-3 {
          0% { r: 30; opacity: 0.3; }
          50% { r: 50; opacity: 0.1; }
          100% { r: 30; opacity: 0.3; }
        }

        @keyframes particle-flow {
          0% { transform: rotate(0deg) translateX(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); opacity: 0; }
        }

        @keyframes fade-in-delayed {
          0% { opacity: 0; }
          100% { opacity: 0.6; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-node-pulse {
          animation: node-pulse 2s ease-in-out infinite;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-pin-wiggle {
          animation: pin-wiggle 3s ease-in-out infinite;
        }

        .animate-property-glow {
          animation: property-glow 2s ease-in-out infinite;
        }

        .animate-float-rotate {
          animation: float-rotate 8s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-pulse-ring-1 {
          animation: pulse-ring-1 3s ease-in-out infinite;
        }

        .animate-pulse-ring-2 {
          animation: pulse-ring-2 4s ease-in-out infinite;
        }

        .animate-pulse-ring-3 {
          animation: pulse-ring-3 5s ease-in-out infinite;
        }

        .animate-particle-flow {
          animation: particle-flow 4s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in-delayed 1s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 2s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-line-draw {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
