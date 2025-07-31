"use client"

import { useEffect, useState } from "react"

export function AnimatedGrowthChart() {
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

    const element = document.getElementById("growth-chart")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const barData = [
    { height: 50, year: "2020", value: "$50T", delay: "1s" },
    { height: 80, year: "2021", value: "$80T", delay: "1.3s" },
    { height: 130, year: "2022", value: "$130T", delay: "1.6s" },
    { height: 190, year: "2023", value: "$190T", delay: "1.9s" },
    { height: 250, year: "2024", value: "$250T", delay: "2.2s" },
    { height: 270, year: "2025", value: "$300T", delay: "2.5s" },
  ]

  return (
    <div id="growth-chart" className="w-full h-auto">
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
          <filter id="barGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Chart background with animation */}
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
          className={`transition-all duration-1000 ${isVisible ? "animate-chart-appear" : "scale-95 opacity-0"}`}
        />

        {/* Animated grid lines */}
        <g stroke="#94A1B2" strokeWidth="0.5" opacity="0.3">
          {[110, 170, 230, 290].map((y, index) => (
            <line
              key={`h-${index}`}
              x1="80"
              y1={y}
              x2="560"
              y2={y}
              className="animate-grid-line"
              style={{
                strokeDasharray: "480",
                strokeDashoffset: isVisible ? "0" : "480",
                transition: `stroke-dashoffset 1s ease-in-out ${0.5 + index * 0.1}s`,
              }}
            />
          ))}

          {[160, 240, 320, 400, 480].map((x, index) => (
            <line
              key={`v-${index}`}
              x1={x}
              y1="50"
              x2={x}
              y2="330"
              className="animate-grid-line"
              style={{
                strokeDasharray: "280",
                strokeDashoffset: isVisible ? "0" : "280",
                transition: `stroke-dashoffset 1s ease-in-out ${0.8 + index * 0.1}s`,
              }}
            />
          ))}
        </g>

        {/* Animated growth bars */}
        <g>
          {barData.map((bar, index) => (
            <g key={index}>
              <rect
                x={120 + index * 80}
                y={330 - bar.height}
                width="40"
                height={bar.height}
                fill="url(#barGradient)"
                rx="4"
                filter="url(#barGlow)"
                className="animate-bar-grow"
                style={{
                  transformOrigin: `${140 + index * 80}px 330px`,
                  animationDelay: bar.delay,
                }}
              />

              {/* Value labels that appear after bars */}
              <text
                x={140 + index * 80}
                y={320 - bar.height}
                fill="#2CB67D"
                fontSize="12"
                textAnchor="middle"
                fontWeight="bold"
                className="animate-value-appear"
                style={{ animationDelay: `${Number.parseFloat(bar.delay.replace("s", "")) + 0.5}s` }}
              >
                {bar.value}
              </text>
            </g>
          ))}
        </g>

        {/* Animated growth line */}
        <path
          d="M140 305 L220 290 L300 265 L380 235 L460 205 L540 195"
          stroke="#2CB67D"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="animate-growth-line"
          style={{
            strokeDasharray: "500",
            strokeDashoffset: isVisible ? "0" : "500",
            transition: "stroke-dashoffset 2s ease-in-out 3s",
          }}
        />

        {/* Animated data points */}
        <g fill="#2CB67D">
          {[
            { cx: 140, cy: 305, delay: "3.2s" },
            { cx: 220, cy: 290, delay: "3.4s" },
            { cx: 300, cy: 265, delay: "3.6s" },
            { cx: 380, cy: 235, delay: "3.8s" },
            { cx: 460, cy: 205, delay: "4.0s" },
            { cx: 540, cy: 195, delay: "4.2s" },
          ].map((point, index) => (
            <circle
              key={index}
              cx={point.cx}
              cy={point.cy}
              r="4"
              className="animate-point-appear"
              style={{ animationDelay: point.delay }}
            />
          ))}
        </g>

        {/* Area under curve with gradient fill */}
        <path
          d="M140 305 L220 290 L300 265 L380 235 L460 205 L540 195 L540 330 L140 330 Z"
          fill="url(#chartGradient)"
          className="animate-area-fill"
          style={{
            opacity: isVisible ? "1" : "0",
            transition: "opacity 1s ease-in-out 4.5s",
          }}
        />

        {/* Y-axis labels with staggered animation */}
        <g fill="#94A1B2" fontSize="12" textAnchor="end">
          {[
            { y: 115, text: "$200T", delay: "5s" },
            { y: 175, text: "$150T", delay: "5.1s" },
            { y: 235, text: "$100T", delay: "5.2s" },
            { y: 295, text: "$50T", delay: "5.3s" },
            { y: 335, text: "$0", delay: "5.4s" },
          ].map((label, index) => (
            <text
              key={index}
              x="75"
              y={label.y}
              className="animate-label-slide"
              style={{ animationDelay: label.delay }}
            >
              {label.text}
            </text>
          ))}
        </g>

        {/* X-axis labels with staggered animation */}
        <g fill="#94A1B2" fontSize="12" textAnchor="middle">
          {barData.map((bar, index) => (
            <text
              key={index}
              x={140 + index * 80}
              y="350"
              className="animate-label-slide"
              style={{ animationDelay: `${5.5 + index * 0.1}s` }}
            >
              {bar.year}
            </text>
          ))}
        </g>

        {/* Title with typewriter effect */}
        <text
          x="320"
          y="30"
          fill="#FFFFFE"
          fontSize="18"
          textAnchor="middle"
          fontWeight="bold"
          className="animate-title-type"
          style={{ animationDelay: "6s" }}
        >
          Real Estate Tokenization Growth
        </text>

        {/* Key stats with bounce animation */}
        <g transform="translate(50, 20)">
          <rect
            width="120"
            height="60"
            fill="#7F5AF0"
            fillOpacity="0.1"
            rx="8"
            className="animate-stat-card"
            style={{ animationDelay: "6.5s" }}
          />
          <text
            x="60"
            y="25"
            fill="#7F5AF0"
            fontSize="24"
            textAnchor="middle"
            fontWeight="bold"
            className="animate-stat-number"
            style={{ animationDelay: "7s" }}
          >
            $300T
          </text>
          <text
            x="60"
            y="40"
            fill="#94A1B2"
            fontSize="10"
            textAnchor="middle"
            className="animate-stat-label"
            style={{ animationDelay: "7.2s" }}
          >
            Global Market
          </text>
          <text
            x="60"
            y="52"
            fill="#94A1B2"
            fontSize="10"
            textAnchor="middle"
            className="animate-stat-label"
            style={{ animationDelay: "7.4s" }}
          >
            Size
          </text>
        </g>

        <g transform="translate(430, 20)">
          <rect
            width="120"
            height="60"
            fill="#2CB67D"
            fillOpacity="0.1"
            rx="8"
            className="animate-stat-card"
            style={{ animationDelay: "7.6s" }}
          />
          <text
            x="60"
            y="25"
            fill="#2CB67D"
            fontSize="24"
            textAnchor="middle"
            fontWeight="bold"
            className="animate-stat-number"
            style={{ animationDelay: "8s" }}
          >
            90%
          </text>
          <text
            x="60"
            y="40"
            fill="#94A1B2"
            fontSize="10"
            textAnchor="middle"
            className="animate-stat-label"
            style={{ animationDelay: "8.2s" }}
          >
            Still in
          </text>
          <text
            x="60"
            y="52"
            fill="#94A1B2"
            fontSize="10"
            textAnchor="middle"
            className="animate-stat-label"
            style={{ animationDelay: "8.4s" }}
          >
            Traditional Finance
          </text>
        </g>

        {/* Floating trend indicators */}
        {[...Array(6)].map((_, i) => (
          <g key={i} className="animate-trend-float" style={{ animationDelay: `${8.5 + i * 0.2}s` }}>
            <circle cx={150 + i * 80} cy={80 + Math.sin(i) * 10} r="2" fill="#2CB67D" opacity="0.8" />
            <path
              d={`M${148 + i * 80} ${82 + Math.sin(i) * 10} L${152 + i * 80} ${78 + Math.sin(i) * 10}`}
              stroke="#2CB67D"
              strokeWidth="1"
              opacity="0.6"
            />
          </g>
        ))}
      </svg>

      <style jsx>{`
        @keyframes chart-appear {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes bar-grow {
          0% { transform: scaleY(0); }
          70% { transform: scaleY(1.1); }
          100% { transform: scaleY(1); }
        }

        @keyframes value-appear {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes point-appear {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.5); opacity: 0.8; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes area-fill {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes label-slide {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes title-type {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes stat-card {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes stat-number {
          0% { opacity: 0; transform: scale(0.5); }
          100% { opacity: 1; transform: scale(1); }
        }

        @keyframes stat-label {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes trend-float {
          0% { opacity: 0; transform: translateY(20px); }
          50% { opacity: 1; transform: translateY(-5px); }
          100% { opacity: 0.7; transform: translateY(0); }
        }

        .animate-chart-appear {
          animation: chart-appear 1s ease-out;
        }

        .animate-bar-grow {
          animation: bar-grow 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-value-appear {
          animation: value-appear 0.5s ease-out;
          animation-fill-mode: both;
        }

        .animate-growth-line {
          animation-fill-mode: both;
        }

        .animate-point-appear {
          animation: point-appear 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-area-fill {
          animation-fill-mode: both;
        }

        .animate-label-slide {
          animation: label-slide 0.5s ease-out;
          animation-fill-mode: both;
        }

        .animate-title-type {
          animation: title-type 0.8s ease-out;
          animation-fill-mode: both;
        }

        .animate-stat-card {
          animation: stat-card 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-stat-number {
          animation: stat-number 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          animation-fill-mode: both;
        }

        .animate-stat-label {
          animation: stat-label 0.4s ease-out;
          animation-fill-mode: both;
        }

        .animate-trend-float {
          animation: trend-float 2s ease-in-out;
          animation-fill-mode: both;
        }

        .animate-grid-line {
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  )
}
