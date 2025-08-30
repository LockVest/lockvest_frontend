"use client"

import { useEffect, useState } from "react"

export function AnimatedBlockchainNetwork() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("blockchain-network")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="blockchain-network" className="w-full h-auto">
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
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Animated background */}
        <rect
          width="500"
          height="400"
          fill="url(#networkGradient)"
          className={`transition-opacity duration-2000 ${isVisible ? "animate-bg-pulse" : "opacity-0"}`}
        />

        {/* Central hub with expanding rings */}
        <g>
          <circle
            cx="250"
            cy="200"
            r="25"
            fill="url(#blockGradient)"
            filter="url(#nodeGlow)"
            className={`transition-all duration-1000 ${isVisible ? "animate-central-hub" : "scale-0 opacity-0"}`}
          />
          <circle
            cx="250"
            cy="200"
            r="15"
            fill="#FFFFFE"
            opacity="0.9"
            className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-hub-core" : "scale-0 opacity-0"}`}
          />
          <circle
            cx="250"
            cy="200"
            r="8"
            fill="#7F5AF0"
            className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-hub-center" : "scale-0 opacity-0"}`}
          />

          {/* Expanding rings around central hub */}
          {[40, 60, 80].map((radius, index) => (
            <circle
              key={index}
              cx="250"
              cy="200"
              r={radius}
              fill="none"
              stroke="#7F5AF0"
              strokeWidth="1"
              opacity="0.3"
              className="animate-expanding-ring"
              style={{ animationDelay: `${1 + index * 0.5}s` }}
            />
          ))}
        </g>

        {/* Surrounding nodes with staggered animations */}
        {[
          { cx: 150, cy: 120, delay: "2s", label: "SPN" },
          { cx: 350, cy: 120, delay: "2.2s", label: "EVM" },
          { cx: 100, cy: 200, delay: "2.4s", label: "50K" },
          { cx: 400, cy: 200, delay: "2.6s", label: "TPS" },
          { cx: 150, cy: 280, delay: "2.8s", label: "ZK" },
          { cx: 350, cy: 280, delay: "3s", label: "RWA" },
        ].map((node, index) => (
          <g key={index}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="18"
              fill="url(#blockGradient)"
              filter="url(#nodeGlow)"
              className="animate-node-emerge"
              style={{ animationDelay: node.delay }}
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r="10"
              fill="#FFFFFE"
              opacity="0.8"
              className="animate-node-core"
              style={{ animationDelay: `${Number.parseFloat(node.delay.replace("s", "")) + 0.3}s` }}
            />
            
            {/* Node labels */}
            <text
              x={node.cx}
              y={node.cy + 4}
              textAnchor="middle"
              fill="#7F5AF0"
              fontSize="8"
              fontWeight="bold"
              className="animate-node-core"
              style={{ animationDelay: `${Number.parseFloat(node.delay.replace("s", "")) + 0.5}s` }}
            >
              {node.label}
            </text>

            {/* Data packets flowing from nodes */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="3"
              fill="#2CB67D"
              className="animate-data-packet"
              style={{
                animationDelay: `${Number.parseFloat(node.delay.replace("s", "")) + 1}s`,
                transformOrigin: `${node.cx}px ${node.cy}px`,
              }}
            />
          </g>
        ))}

        {/* Outer ring nodes */}
        {[
          { cx: 80, cy: 100, delay: "3.5s", label: "Block" },
          { cx: 420, cy: 100, delay: "3.7s", label: "Chain" },
          { cx: 80, cy: 300, delay: "3.9s", label: "Node" },
          { cx: 420, cy: 300, delay: "4.1s", label: "Data" },
          { cx: 50, cy: 200, delay: "4.3s", label: "Fast" },
          { cx: 450, cy: 200, delay: "4.5s", label: "Secure" },
        ].map((node, index) => (
          <g key={index}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r="12"
              fill="#2CB67D"
              className="animate-outer-node"
              style={{ animationDelay: node.delay }}
            />
            <text
              x={node.cx}
              y={node.cy + 3}
              textAnchor="middle"
              fill="white"
              fontSize="6"
              fontWeight="bold"
              className="animate-outer-node"
              style={{ animationDelay: `${Number.parseFloat(node.delay.replace("s", "")) + 0.2}s` }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Connection lines with data flow animation */}
        <g stroke="#7F5AF0" strokeWidth="2" opacity="0.6">
          {[
            { x1: 250, y1: 200, x2: 150, y2: 120, delay: "5s" },
            { x1: 250, y1: 200, x2: 350, y2: 120, delay: "5.2s" },
            { x1: 250, y1: 200, x2: 100, y2: 200, delay: "5.4s" },
            { x1: 250, y1: 200, x2: 400, y2: 200, delay: "5.6s" },
            { x1: 250, y1: 200, x2: 150, y2: 280, delay: "5.8s" },
            { x1: 250, y1: 200, x2: 350, y2: 280, delay: "6s" },
          ].map((line, index) => (
            <g key={index}>
              <line
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                className="animate-connection-line"
                style={{
                  strokeDasharray: "200",
                  strokeDashoffset: isVisible ? "0" : "200",
                  transition: `stroke-dashoffset 1s ease-in-out ${line.delay}`,
                }}
              />

              {/* Data flow along connections */}
              <circle
                cx={line.x1}
                cy={line.y1}
                r="2"
                fill="#2CB67D"
                className="animate-data-flow"
                style={{
                  animationDelay: `${Number.parseFloat(line.delay.replace("s", "")) + 1}s`,
                }}
              >
                <animateMotion
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${Number.parseFloat(line.delay.replace("s", "")) + 1}s`}
                >
                  <mpath href={`#path-${index}`} />
                </animateMotion>
              </circle>

              <path
                id={`path-${index}`}
                d={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
                fill="none"
                stroke="none"
              />
            </g>
          ))}
        </g>

        {/* Secondary connections */}
        <g stroke="#2CB67D" strokeWidth="1" opacity="0.4">
          {[
            { x1: 150, y1: 120, x2: 80, y2: 100, delay: "6.5s" },
            { x1: 350, y1: 120, x2: 420, y2: 100, delay: "6.7s" },
            { x1: 100, y1: 200, x2: 50, y2: 200, delay: "6.9s" },
            { x1: 400, y1: 200, x2: 450, y2: 200, delay: "7.1s" },
            { x1: 150, y1: 280, x2: 80, y2: 300, delay: "7.3s" },
            { x1: 350, y1: 280, x2: 420, y2: 300, delay: "7.5s" },
          ].map((line, index) => (
            <line
              key={index}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              className="animate-secondary-connection"
              style={{
                strokeDasharray: "100",
                strokeDashoffset: isVisible ? "0" : "100",
                transition: `stroke-dashoffset 0.8s ease-in-out ${line.delay}`,
              }}
            />
          ))}
        </g>

        {/* Network activity indicators */}
        {[...Array(12)].map((_, i) => (
          <circle
            key={i}
            cx={100 + (i % 4) * 100}
            cy={100 + Math.floor(i / 4) * 100}
            r="1"
            fill="#7F5AF0"
            className="animate-network-activity"
            style={{ animationDelay: `${8 + i * 0.2}s` }}
          />
        ))}

        {/* Labels */}
        <text
          x="250"
          y="350"
          fill="#FFFFFE"
          fontSize="18"
          textAnchor="middle"
          fontWeight="bold"
          className="animate-label-appear"
          style={{ animationDelay: "9s" }}
        >
          Pharos Blockchain Network
        </text>
        <text
          x="250"
          y="370"
          fill="#94A1B2"
          fontSize="12"
          textAnchor="middle"
          className="animate-label-appear"
          style={{ animationDelay: "9.5s" }}
        >
          50K TPS • EVM Compatible • SPN Powered
        </text>
      </svg>

      <style jsx>{`
        @keyframes bg-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes central-hub {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes hub-core {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 0.9; }
        }

        @keyframes hub-center {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes expanding-ring {
          0% { r: 25; opacity: 0.5; }
          50% { opacity: 0.2; }
          100% { r: 100; opacity: 0; }
        }

        @keyframes node-emerge {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes node-core {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 0.8; }
        }

        @keyframes outer-node {
          0% { transform: scale(0); opacity: 0; }
          60% { transform: scale(1.2); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes data-packet {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes data-flow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes network-activity {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(2); }
        }

        @keyframes label-appear {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-bg-pulse {
          animation: bg-pulse 4s ease-in-out infinite;
        }

        .animate-central-hub {
          animation: central-hub 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .animate-hub-core {
          animation: hub-core 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-hub-center {
          animation: hub-center 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-expanding-ring {
          animation: expanding-ring 3s ease-out infinite;
          animation-fill-mode: both;
        }

        .animate-node-emerge {
          animation: node-emerge 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-node-core {
          animation: node-core 0.5s ease-out;
          animation-fill-mode: both;
        }

        .animate-outer-node {
          animation: outer-node 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-data-packet {
          animation: data-packet 2s ease-in-out infinite;
        }

        .animate-data-flow {
          animation: data-flow 2s ease-in-out infinite;
        }

        .animate-network-activity {
          animation: network-activity 1.5s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-label-appear {
          animation: label-appear 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-connection-line {
          animation-fill-mode: both;
        }

        .animate-secondary-connection {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
