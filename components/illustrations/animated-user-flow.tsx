"use client"

import { useEffect, useState } from "react"

export function AnimatedUserFlow() {
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

    const element = document.getElementById("user-flow")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div id="user-flow" className="w-full h-auto">
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
          <filter id="screenGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Step 1: Browse Assets */}
        <g transform="translate(50, 50)">
          {/* Phone/Device with animation */}
          <rect
            width="80"
            height="140"
            fill="url(#deviceGradient)"
            rx="12"
            className={`transition-all duration-1000 ${isVisible ? "animate-device-appear" : "scale-0 opacity-0"}`}
          />
          <rect
            x="10"
            y="20"
            width="60"
            height="100"
            fill="#16161A"
            rx="4"
            className={`transition-all duration-800 delay-300 ${isVisible ? "animate-screen-glow" : "opacity-0"}`}
            filter="url(#screenGlow)"
          />

          {/* Property cards with staggered animation */}
          {[
            { y: 25, color: "#7F5AF0", delay: "1s" },
            { y: 50, color: "#2CB67D", delay: "1.3s" },
            { y: 75, color: "#7F5AF0", delay: "1.6s" },
          ].map((card, index) => (
            <g key={index}>
              <rect
                x="15"
                y={card.y}
                width="50"
                height="20"
                fill={card.color}
                rx="2"
                className="animate-card-slide"
                style={{ animationDelay: card.delay }}
              />
              <rect
                x="20"
                y={card.y + 3}
                width="15"
                height="8"
                fill="#FFFFFE"
                opacity="0.8"
                className="animate-card-content"
                style={{ animationDelay: `${Number.parseFloat(card.delay.replace("s", "")) + 0.2}s` }}
              />
              <rect
                x="37"
                y={card.y + 3}
                width="25"
                height="3"
                fill="#FFFFFE"
                opacity="0.6"
                className="animate-card-content"
                style={{ animationDelay: `${Number.parseFloat(card.delay.replace("s", "")) + 0.3}s` }}
              />
              <rect
                x="37"
                y={card.y + 8}
                width="20"
                height="3"
                fill="#FFFFFE"
                opacity="0.4"
                className="animate-card-content"
                style={{ animationDelay: `${Number.parseFloat(card.delay.replace("s", "")) + 0.4}s` }}
              />
            </g>
          ))}

          {/* Home button with pulse */}
          <circle
            cx="40"
            cy="135"
            r="8"
            fill="#94A1B2"
            className="animate-button-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Labels */}
          <text
            x="40"
            y="220"
            fill="#FFFFFE"
            fontSize="14"
            textAnchor="middle"
            fontWeight="bold"
            className="animate-label-appear"
            style={{ animationDelay: "2.5s" }}
          >
            Browse Assets
          </text>
          <text
            x="40"
            y="240"
            fill="#94A1B2"
            fontSize="12"
            textAnchor="middle"
            className="animate-label-appear"
            style={{ animationDelay: "2.7s" }}
          >
            Explore verified properties
          </text>
        </g>

        {/* Arrow 1 with drawing animation */}
        <g transform="translate(180, 140)">
          <path
            d="M0 5 L60 5 M55 0 L60 5 L55 10"
            stroke="#94A1B2"
            strokeWidth="2"
            fill="none"
            className="animate-arrow-draw"
            style={{
              strokeDasharray: "75",
              strokeDashoffset: isVisible ? "0" : "75",
              transition: "stroke-dashoffset 1s ease-in-out 3s",
            }}
          />
        </g>

        {/* Step 2: Connect Wallet */}
        <g transform="translate(280, 50)">
          {/* Wallet with 3D effect */}
          <rect
            width="100"
            height="60"
            fill="url(#stepGradient)"
            rx="8"
            className="animate-wallet-appear"
            style={{ animationDelay: "3.5s" }}
          />
          <rect
            x="10"
            y="10"
            width="80"
            height="40"
            fill="#16161A"
            rx="4"
            className="animate-wallet-screen"
            style={{ animationDelay: "3.8s" }}
          />

          {/* Wallet details with typewriter effect */}
          <rect
            x="15"
            y="15"
            width="30"
            height="8"
            fill="#7F5AF0"
            rx="2"
            className="animate-wallet-detail"
            style={{ animationDelay: "4s" }}
          />
          <rect
            x="15"
            y="27"
            width="70"
            height="4"
            fill="#94A1B2"
            opacity="0.6"
            className="animate-wallet-detail"
            style={{ animationDelay: "4.2s" }}
          />
          <rect
            x="15"
            y="35"
            width="50"
            height="4"
            fill="#94A1B2"
            opacity="0.4"
            className="animate-wallet-detail"
            style={{ animationDelay: "4.4s" }}
          />
          <rect
            x="15"
            y="43"
            width="60"
            height="4"
            fill="#2CB67D"
            className="animate-wallet-balance"
            style={{ animationDelay: "4.6s" }}
          />

          {/* Connection indicator with success animation */}
          <circle
            cx="85"
            cy="25"
            r="8"
            fill="#2CB67D"
            className="animate-connection-success"
            style={{ animationDelay: "5s" }}
          />
          <path
            d="M80 25 L83 28 L90 21"
            stroke="#FFFFFE"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            className="animate-checkmark"
            style={{ animationDelay: "5.2s" }}
          />

          {/* Transaction ripple effect */}
          <circle
            cx="50"
            cy="130"
            r="15"
            fill="none"
            stroke="#7F5AF0"
            strokeWidth="2"
            className="animate-transaction-ripple"
            style={{ animationDelay: "5.5s" }}
          />

          {/* Labels */}
          <text
            x="50"
            y="220"
            fill="#FFFFFE"
            fontSize="14"
            textAnchor="middle"
            fontWeight="bold"
            className="animate-label-appear"
            style={{ animationDelay: "6s" }}
          >
            Connect & Invest
          </text>
          <text
            x="50"
            y="240"
            fill="#94A1B2"
            fontSize="12"
            textAnchor="middle"
            className="animate-label-appear"
            style={{ animationDelay: "6.2s" }}
          >
            Secure wallet transaction
          </text>
        </g>

        {/* Arrow 2 */}
        <g transform="translate(430, 140)">
          <path
            d="M0 5 L60 5 M55 0 L60 5 L55 10"
            stroke="#94A1B2"
            strokeWidth="2"
            fill="none"
            className="animate-arrow-draw"
            style={{
              strokeDasharray: "75",
              strokeDashoffset: isVisible ? "0" : "75",
              transition: "stroke-dashoffset 1s ease-in-out 6.5s",
            }}
          />
        </g>

        {/* Step 3: Governance & Rewards */}
        <g transform="translate(530, 50)">
          {/* Governance dashboard */}
          <rect
            width="120"
            height="100"
            fill="url(#deviceGradient)"
            rx="8"
            className="animate-dashboard-appear"
            style={{ animationDelay: "7s" }}
          />
          <rect
            x="10"
            y="10"
            width="100"
            height="80"
            fill="#16161A"
            rx="4"
            className="animate-dashboard-screen"
            style={{ animationDelay: "7.3s" }}
          />

          {/* Voting interface with progress animation */}
          <rect
            x="15"
            y="15"
            width="90"
            height="15"
            fill="#7F5AF0"
            opacity="0.8"
            rx="2"
            className="animate-proposal-appear"
            style={{ animationDelay: "7.5s" }}
          />
          <text
            x="60"
            y="25"
            fill="#FFFFFE"
            fontSize="8"
            textAnchor="middle"
            className="animate-text-appear"
            style={{ animationDelay: "7.7s" }}
          >
            Proposal #1
          </text>

          {/* Voting bars with animated fill */}
          <rect
            x="15"
            y="35"
            width="40"
            height="12"
            fill="#2CB67D"
            rx="2"
            className="animate-vote-bar"
            style={{ animationDelay: "8s" }}
          />
          <text
            x="35"
            y="43"
            fill="#FFFFFE"
            fontSize="7"
            textAnchor="middle"
            className="animate-text-appear"
            style={{ animationDelay: "8.2s" }}
          >
            YES 65%
          </text>

          <rect
            x="65"
            y="35"
            width="25"
            height="12"
            fill="#94A1B2"
            rx="2"
            className="animate-vote-bar"
            style={{ animationDelay: "8.4s" }}
          />
          <text
            x="77.5"
            y="43"
            fill="#FFFFFE"
            fontSize="7"
            textAnchor="middle"
            className="animate-text-appear"
            style={{ animationDelay: "8.6s" }}
          >
            NO 35%
          </text>

          {/* Rewards section */}
          <rect
            x="15"
            y="55"
            width="90"
            height="15"
            fill="#2CB67D"
            opacity="0.8"
            rx="2"
            className="animate-rewards-appear"
            style={{ animationDelay: "9s" }}
          />
          <text
            x="60"
            y="65"
            fill="#FFFFFE"
            fontSize="8"
            textAnchor="middle"
            className="animate-text-appear"
            style={{ animationDelay: "9.2s" }}
          >
            Monthly Rewards
          </text>

          <rect
            x="15"
            y="75"
            width="90"
            height="10"
            fill="#7F5AF0"
            opacity="0.6"
            rx="2"
            className="animate-earnings-bar"
            style={{ animationDelay: "9.4s" }}
          />
          <text
            x="60"
            y="82"
            fill="#FFFFFE"
            fontSize="7"
            textAnchor="middle"
            className="animate-text-appear"
            style={{ animationDelay: "9.6s" }}
          >
            $1,250 Earned
          </text>

          {/* Floating reward coins */}
          <g transform="translate(140, 20)">
            {[
              { x: 0, y: 0, delay: "10s" },
              { x: 15, y: 10, delay: "10.2s" },
              { x: 5, y: 25, delay: "10.4s" },
            ].map((coin, index) => (
              <g key={index}>
                <circle
                  cx={coin.x}
                  cy={coin.y}
                  r="8"
                  fill={index % 2 === 0 ? "#2CB67D" : "#7F5AF0"}
                  className="animate-coin-float"
                  style={{ animationDelay: coin.delay }}
                />
                <text
                  x={coin.x}
                  y={coin.y + 3}
                  fill="#FFFFFE"
                  fontSize="8"
                  textAnchor="middle"
                  fontWeight="bold"
                  className="animate-coin-symbol"
                  style={{ animationDelay: `${Number.parseFloat(coin.delay.replace("s", "")) + 0.3}s` }}
                >
                  $
                </text>
              </g>
            ))}
          </g>

          {/* Labels */}
          <text
            x="60"
            y="220"
            fill="#FFFFFE"
            fontSize="14"
            textAnchor="middle"
            fontWeight="bold"
            className="animate-label-appear"
            style={{ animationDelay: "11s" }}
          >
            Earn & Govern
          </text>
          <text
            x="60"
            y="240"
            fill="#94A1B2"
            fontSize="12"
            textAnchor="middle"
            className="animate-label-appear"
            style={{ animationDelay: "11.2s" }}
          >
            Rewards and DAO voting
          </text>
        </g>

        {/* Background connecting line with animated dots */}
        <line
          x1="90"
          y1="200"
          x2="590"
          y2="200"
          stroke="#7F5AF0"
          strokeWidth="1"
          opacity="0.3"
          strokeDasharray="5,5"
          className="animate-connecting-line"
          style={{
            strokeDasharray: "500",
            strokeDashoffset: isVisible ? "0" : "500",
            transition: "stroke-dashoffset 2s ease-in-out 11.5s",
          }}
        />

        {/* Data flow particles along the line */}
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            cx="90"
            cy="200"
            r="2"
            fill="#2CB67D"
            className="animate-data-particle"
            style={{ animationDelay: `${12 + i * 0.5}s` }}
          >
            <animateMotion dur="3s" repeatCount="indefinite" begin={`${12 + i * 0.5}s`}>
              <mpath href="#flowPath" />
            </animateMotion>
          </circle>
        ))}

        <path id="flowPath" d="M90,200 L590,200" fill="none" stroke="none" />
      </svg>

      <style jsx>{`
        @keyframes device-appear {
          0% { transform: scale(0) rotate(10deg); opacity: 0; }
          70% { transform: scale(1.05) rotate(0deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }

        @keyframes screen-glow {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes card-slide {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }

        @keyframes card-content {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes button-pulse {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        @keyframes wallet-appear {
          0% { transform: scale(0) rotateY(90deg); opacity: 0; }
          70% { transform: scale(1.05) rotateY(0deg); opacity: 1; }
          100% { transform: scale(1) rotateY(0deg); opacity: 1; }
        }

        @keyframes wallet-screen {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes wallet-detail {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }

        @keyframes wallet-balance {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }

        @keyframes connection-success {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes checkmark {
          0% { stroke-dasharray: 20; stroke-dashoffset: 20; }
          100% { stroke-dasharray: 20; stroke-dashoffset: 0; }
        }

        @keyframes transaction-ripple {
          0% { r: 15; opacity: 0.7; }
          50% { r: 25; opacity: 0.3; }
          100% { r: 15; opacity: 0.7; }
        }

        @keyframes dashboard-appear {
          0% { transform: scale(0) rotateX(45deg); opacity: 0; }
          70% { transform: scale(1.05) rotateX(0deg); opacity: 1; }
          100% { transform: scale(1) rotateX(0deg); opacity: 1; }
        }

        @keyframes dashboard-screen {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes proposal-appear {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 0.8; }
        }

        @keyframes vote-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes rewards-appear {
          0% { transform: scaleY(0); opacity: 0; }
          100% { transform: scaleY(1); opacity: 0.8; }
        }

        @keyframes earnings-bar {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }

        @keyframes coin-float {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { transform: translateY(-10px) rotate(180deg); opacity: 1; }
          100% { transform: translateY(0) rotate(360deg); opacity: 1; }
        }

        @keyframes coin-symbol {
          0% { opacity: 0; transform: scale(0); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes text-appear {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes label-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes data-particle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .animate-device-appear {
          animation: device-appear 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-screen-glow {
          animation: screen-glow 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-card-slide {
          animation: card-slide 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-card-content {
          animation: card-content 0.4s ease-out;
          animation-fill-mode: both;
        }

        .animate-button-pulse {
          animation: button-pulse 2s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-wallet-appear {
          animation: wallet-appear 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-wallet-screen {
          animation: wallet-screen 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-wallet-detail {
          animation: wallet-detail 0.5s ease-out;
          animation-fill-mode: both;
          transform-origin: left center;
        }

        .animate-wallet-balance {
          animation: wallet-balance 0.5s ease-out;
          animation-fill-mode: both;
          transform-origin: left center;
        }

        .animate-connection-success {
          animation: connection-success 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-checkmark {
          animation: checkmark 0.5s ease-out;
          animation-fill-mode: both;
        }

        .animate-transaction-ripple {
          animation: transaction-ripple 2s ease-in-out infinite;
          animation-fill-mode: both;
        }

        .animate-dashboard-appear {
          animation: dashboard-appear 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-dashboard-screen {
          animation: dashboard-screen 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-proposal-appear {
          animation: proposal-appear 0.5s ease-out;
          animation-fill-mode: both;
          transform-origin: center top;
        }

        .animate-vote-bar {
          animation: vote-bar 0.8s ease-out;
          animation-fill-mode: both;
          transform-origin: left center;
        }

        .animate-rewards-appear {
          animation: rewards-appear 0.5s ease-out;
          animation-fill-mode: both;
          transform-origin: center top;
        }

        .animate-earnings-bar {
          animation: earnings-bar 0.8s ease-out;
          animation-fill-mode: both;
          transform-origin: left center;
        }

        .animate-coin-float {
          animation: coin-float 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-coin-symbol {
          animation: coin-symbol 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-text-appear {
          animation: text-appear 0.3s ease-out;
          animation-fill-mode: both;
        }

        .animate-label-appear {
          animation: label-appear 0.6s ease-out;
          animation-fill-mode: both;
        }

        .animate-data-particle {
          animation: data-particle 3s ease-in-out infinite;
        }

        .animate-arrow-draw {
          animation-fill-mode: both;
        }

        .animate-connecting-line {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
