// "use client"

// import { useEffect, useState } from "react"

// export function AnimatedUserFlow() {
//   const [isVisible, setIsVisible] = useState(false)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.2 },
//     )

//     const element = document.getElementById("user-flow")
//     if (element) observer.observe(element)

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <div id="user-flow" className="w-full h-auto">
//       <svg
//         width="800"
//         height="400"
//         viewBox="0 0 800 400"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="w-full h-auto"
//       >
//         <defs>
//           <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#7F5AF0" />
//             <stop offset="100%" stopColor="#2CB67D" />
//           </linearGradient>
//           <linearGradient id="widgetGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#2CB67D" />
//             <stop offset="100%" stopColor="#7F5AF0" />
//           </linearGradient>
//           <linearGradient id="platformGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#8B5CF6" />
//             <stop offset="100%" stopColor="#2CB67D" />
//           </linearGradient>
//           <filter id="screenGlow">
//             <feGaussianBlur stdDeviation="3" result="coloredBlur" />
//             <feMerge>
//               <feMergeNode in="coloredBlur" />
//               <feMergeNode in="SourceGraphic" />
//             </feMerge>
//           </filter>
//         </defs>

//         {/* Step 1: Browse RWA Assets */}
//         <g transform="translate(50, 80)" className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
//           {/* Asset Browser */}
//           <rect
//             width="120"
//             height="160"
//             fill="url(#platformGradient)"
//             rx="8"
//             opacity="0.9"
//           />
          
//           {/* Asset categories */}
//           <rect x="15" y="20" width="90" height="20" fill="#FFFFFE" opacity="0.8" rx="2" />
//           <text x="60" y="33" textAnchor="middle" fill="#7F5AF0" fontSize="10" fontWeight="bold">Real Estate</text>
          
//           <rect x="15" y="50" width="90" height="20" fill="#FFFFFE" opacity="0.8" rx="2" />
//           <text x="60" y="63" textAnchor="middle" fill="#2CB67D" fontSize="10" fontWeight="bold">Commodities</text>
          
//           <rect x="15" y="80" width="90" height="20" fill="#FFFFFE" opacity="0.8" rx="2" />
//           <text x="60" y="93" textAnchor="middle" fill="#8B5CF6" fontSize="10" fontWeight="bold">Infrastructure</text>
          
//           {/* Search icon */}
//           <rect x="15" y="110" width="90" height="40" fill="url(#widgetGradient)" rx="4" />
//           <text x="60" y="130" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Search</text>
//           <text x="60" y="145" textAnchor="middle" fill="white" fontSize="8" opacity="0.9">Assets</text>
//         </g>

//         {/* Step 1 Label */}
//         <text
//           x="110"
//           y="270"
//           textAnchor="middle"
//           fill="#7F5AF0"
//           fontSize="14"
//           fontWeight="bold"
//           className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
//           style={{ animationDelay: "0.4s" }}
//         >
//           Browse RWA Assets
//         </text>

//         {/* Arrow 1: Integration to Marketplace */}
//         <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
//           <line
//             x1="190"
//             y1="160"
//             x2="250"
//             y2="160"
//             stroke="url(#stepGradient)"
//             strokeWidth="3"
//             strokeDasharray="5,5"
//             className="animate-pulse"
//           />
//           <polygon
//             points="250,160 245,155 245,165"
//             fill="url(#stepGradient)"
//               />
//             </g>

//         {/* Step 2: Connect & Invest */}
//         <g transform="translate(270, 60)" className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
//           {/* Wallet Connection */}
//           <rect
//             width="140"
//             height="200"
//             fill="url(#stepGradient)"
//             rx="8"
//             opacity="0.9"
//           />
          
//           {/* Wallet Icon */}
//           <rect x="50" y="20" width="40" height="40" fill="#FFFFFE" opacity="0.9" rx="20" />
//           <text
//             x="70"
//             y="45"
//             textAnchor="middle"
//             fill="#7F5AF0"
//             fontSize="12"
//             fontWeight="bold"
//           >
//             Wallet
//           </text>
          
//           {/* Connection Status */}
//           <rect x="15" y="80" width="110" height="25" fill="#2CB67D" opacity="0.8" rx="3" />
//           <text
//             x="70"
//             y="97"
//             textAnchor="middle"
//             fill="white"
//             fontSize="10"
//             fontWeight="bold"
//           >
//             Connected
//           </text>
          
//           {/* Investment Options */}
//           <rect x="15" y="115" width="110" height="20" fill="#FFFFFE" opacity="0.8" rx="3" />
//           <text
//             x="70"
//             y="128"
//             textAnchor="middle"
//             fill="#7F5AF0"
//             fontSize="9"
//             fontWeight="600"
//           >
//             Buy Shares
//           </text>
          
//           <rect x="15" y="145" width="110" height="20" fill="#FFFFFE" opacity="0.8" rx="3" />
//           <text
//             x="70"
//             y="158"
//             textAnchor="middle"
//             fill="#2CB67D"
//             fontSize="9"
//             fontWeight="600"
//           >
//             Invest Now
//           </text>
//         </g>

//         {/* Step 2 Label */}
//         <text
//           x="340"
//           y="280"
//           textAnchor="middle"
//           fill="#2CB67D"
//           fontSize="14"
//           fontWeight="bold"
//           className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
//           style={{ animationDelay: "1.0s" }}
//         >
//           Connect & Invest
//         </text>

//         {/* Arrow 2: Marketplace to Settlement */}
//         <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.2s" }}>
//           <line
//             x1="430"
//             y1="160"
//             x2="490"
//             y2="160"
//             stroke="url(#stepGradient)"
//             strokeWidth="3"
//             strokeDasharray="5,5"
//             className="animate-pulse"
//           />
//           <polygon
//             points="490,160 485,155 485,165"
//             fill="url(#stepGradient)"
//           />
//         </g>

//         {/* Step 3: Trade & Earn */}
//         <g transform="translate(510, 80)" className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.4s" }}>
//           {/* Portfolio Dashboard */}
//           <rect
//             width="120"
//             height="160"
//             fill="url(#widgetGradient)"
//             rx="8"
//             opacity="0.9"
//           />
          
//           {/* Portfolio Icon */}
//           <rect x="45" y="20" width="30" height="30" fill="#FFFFFE" opacity="0.9" rx="4" />
//           <text
//             x="60"
//             y="40"
//             textAnchor="middle"
//             fill="#2CB67D"
//             fontSize="12"
//             fontWeight="bold"
//           >
//             Portfolio
//           </text>

//           {/* Trading Actions */}
//           <rect x="20" y="70" width="80" height="15" fill="#FFFFFE" opacity="0.8" rx="2" />
//           <text
//             x="60"
//             y="81"
//             textAnchor="middle"
//             fill="#7F5AF0"
//             fontSize="8"
//             fontWeight="600"
//           >
//             Buy/Sell
//           </text>

//           <rect x="20" y="95" width="80" height="15" fill="#FFFFFE" opacity="0.8" rx="2" />
//           <text
//             x="60"
//             y="106"
//             textAnchor="middle"
//             fill="#2CB67D"
//             fontSize="8"
//             fontWeight="600"
//           >
//             Track Value
//           </text>

//           {/* Earnings */}
//           <rect x="20" y="120" width="80" height="20" fill="url(#stepGradient)" rx="3" />
//           <text
//             x="60"
//             y="133"
//             textAnchor="middle"
//             fill="white"
//             fontSize="9"
//             fontWeight="bold"
//           >
//             Earn Rewards
//           </text>
//         </g>

//         {/* Step 3 Label */}
//         <text
//           x="570"
//           y="270"
//           textAnchor="middle"
//             fill="#7F5AF0"
//           fontSize="14"
//           fontWeight="bold"
//           className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
//           style={{ animationDelay: "1.6s" }}
//         >
//           Trade & Earn
//         </text>

//         {/* Data Flow Indicators */}
//         <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "1.8s" }}>
//           {/* Oracle Data Flow */}
//           <line
//             x1="340"
//             y1="100"
//             x2="340"
//             y2="60"
//             stroke="#2CB67D"
//             strokeWidth="2"
//             strokeDasharray="3,3"
//             className="animate-pulse"
//           />
//           <text
//             x="360"
//             y="70"
//             fill="#2CB67D"
//             fontSize="10"
//             fontWeight="600"
//           >
//             Chainlink Oracles
//           </text>

//           {/* SPN Compliance */}
//           <line
//             x1="340"
//             y1="220"
//             x2="340"
//             y2="260"
//             stroke="#7F5AF0"
//             strokeWidth="2"
//             strokeDasharray="3,3"
//             className="animate-pulse"
//                 />
//                 <text
//             x="360"
//             y="250"
//             fill="#7F5AF0"
//             fontSize="10"
//             fontWeight="600"
//           >
//             SPN Compliance
//                 </text>
//               </g>

//         {/* Floating Integration Elements */}
//         <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
//           {[...Array(8)].map((_, i) => (
//             <circle
//               key={i}
//               cx={200 + Math.random() * 400}
//               cy={100 + Math.random() * 200}
//               r={1.5 + Math.random() * 2}
//               fill={i % 3 === 0 ? "#7F5AF0" : i % 3 === 1 ? "#2CB67D" : "#8B5CF6"}
//               opacity="0.6"
//               className="animate-pulse"
//               style={{
//                 animationDelay: `${2.0 + Math.random() * 2}s`,
//                 animationDuration: `${1.5 + Math.random() * 2}s`
//               }}
//             />
//             ))}
//           </g>

//         {/* Process Flow Labels */}
//         <g className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`} style={{ animationDelay: "2.2s" }}>
//           <text
//             x="400"
//             y="350"
//             textAnchor="middle"
//             fill="#FFFFFE"
//             fontSize="16"
//             fontWeight="bold"
//           >
//             Simple RWA Investment Journey
//           </text>
//           <text
//             x="400"
//             y="370"
//             textAnchor="middle"
//             fill="#94A1B2"
//             fontSize="12"
//             opacity="0.8"
//           >
//             Browse Assets • Connect Wallet • Trade & Earn
//           </text>
//         </g>
//       </svg>
//     </div>
//   )
// }


"use client"

import { useEffect, useState } from "react"

export function AnimatedUserFlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById("user-flow")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const stepInterval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3)
    }, 3000)

    return () => clearInterval(stepInterval)
  }, [isVisible])

  const steps = [
    { title: "Browse RWA Assets", color: "#7F5AF0", delay: "0.2s" },
    { title: "Connect & Invest", color: "#2CB67D", delay: "0.8s" },
    { title: "Trade & Earn", color: "#8B5CF6", delay: "1.4s" }
  ]

  return (
    <div id="user-flow" className="w-full hidden h-auto bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-8 rounded-2xl">
      <svg
        width="900"
        height="500"
        viewBox="0 0 900 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        <defs>
          {/* Enhanced Gradients */}
          <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F5AF0" />
            <stop offset="50%" stopColor="#2CB67D" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          
          <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>

          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7F5AF0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2CB67D" stopOpacity="0.8" />
          </linearGradient>

          {/* Enhanced Filters */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/> 
            </feMerge>
          </filter>

          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.3)"/>
          </filter>

          {/* Animated Patterns */}
          <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
            <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.1)">
              <animate attributeName="opacity" values="0.1;0.3;0.1" dur="3s" repeatCount="indefinite"/>
            </circle>
          </pattern>
        </defs>

        {/* Background Pattern */}
        <rect width="900" height="500" fill="url(#dots)" opacity="0.3"/>

        {/* Connecting Path */}
        <path
          d="M 150 250 Q 300 150 450 250 Q 600 350 750 250"
          stroke="url(#primaryGradient)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="10,5"
          opacity={isVisible ? "0.6" : "0"}
          className="transition-all duration-2000"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="0;-15;0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>

        {/* Step 1: Browse RWA Assets */}
        <g transform="translate(50, 150)">
          <rect
            width="140"
            height="180"
            fill="url(#cardGradient)"
            stroke="url(#primaryGradient)"
            strokeWidth="2"
            rx="16"
            filter="url(#shadow)"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-1000"
            style={{ 
              animationDelay: steps[0].delay,
              transform: activeStep === 0 ? 'scale(1.05)' : 'scale(1)',
              filter: activeStep === 0 ? 'url(#glow)' : 'url(#shadow)'
            }}
          />
          
          {/* Asset Categories */}
          {[
            { label: "Real Estate", color: "#7F5AF0", y: 30 },
            { label: "Commodities", color: "#2CB67D", y: 60 },
            { label: "Infrastructure", color: "#8B5CF6", y: 90 }
          ].map((asset, i) => (
            <g key={asset.label}>
              <rect 
                x="20" 
                y={asset.y} 
                width="100" 
                height="24" 
                fill="rgba(255,255,255,0.1)" 
                rx="4"
                opacity={isVisible ? "1" : "0"}
                className="transition-all duration-500"
                style={{ animationDelay: `${0.4 + i * 0.2}s` }}
              />
              <text 
                x="70" 
                y={asset.y + 16} 
                textAnchor="middle" 
                fill={asset.color} 
                fontSize="11" 
                fontWeight="600"
                opacity={isVisible ? "1" : "0"}
                className="transition-all duration-500"
                style={{ animationDelay: `${0.6 + i * 0.2}s` }}
              >
                {asset.label}
              </text>
            </g>
          ))}
          
          {/* Search Button */}
          <rect 
            x="20" 
            y="130" 
            width="100" 
            height="35" 
            fill="url(#primaryGradient)" 
            rx="8"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-500 cursor-pointer hover:opacity-90"
            style={{ animationDelay: "1.0s" }}
          />
          <text 
            x="70" 
            y="152" 
            textAnchor="middle" 
            fill="white" 
            fontSize="12" 
            fontWeight="bold"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-500"
            style={{ animationDelay: "1.2s" }}
          >
            Explore Assets
          </text>
        </g>

        {/* Flow Arrow 1 */}
        <g opacity={isVisible ? "1" : "0"} className="transition-all duration-1000" style={{ animationDelay: "1.4s" }}>
          <line
            x1="210"
            y1="240"
            x2="280"
            y2="240"
            stroke="url(#primaryGradient)"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle cx="245" cy="240" r="3" fill="#2CB67D">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>

        {/* Step 2: Connect & Invest */}
        <g transform="translate(300, 140)">
          <rect
            width="160"
            height="200"
            fill="url(#cardGradient)"
            stroke="url(#primaryGradient)"
            strokeWidth="2"
            rx="16"
            filter="url(#shadow)"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-1000"
            style={{ 
              animationDelay: steps[1].delay,
              transform: activeStep === 1 ? 'scale(1.05)' : 'scale(1)',
              filter: activeStep === 1 ? 'url(#glow)' : 'url(#shadow)'
            }}
          />
          
          {/* Wallet Icon */}
          <circle 
            cx="80" 
            cy="50" 
            r="25" 
            fill="url(#primaryGradient)"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-500"
            style={{ animationDelay: "1.0s" }}
          />
          <text 
            x="80" 
            y="57" 
            textAnchor="middle" 
            fill="white" 
            fontSize="14" 
            fontWeight="bold"
          >
            💼
          </text>
          
          {/* Connection Status */}
          <rect 
            x="20" 
            y="90" 
            width="120" 
            height="28" 
            fill="#2CB67D" 
            rx="14"
            opacity={isVisible ? "0.9" : "0"}
            className="transition-all duration-500"
            style={{ animationDelay: "1.2s" }}
          />
          <text 
            x="80" 
            y="108" 
            textAnchor="middle" 
            fill="white" 
            fontSize="12" 
            fontWeight="bold"
          >
            ✓ Connected
          </text>
          
          {/* Investment Actions */}
          {[
            { label: "Buy Shares", y: 135 },
            { label: "Invest Now", y: 165 }
          ].map((action, i) => (
            <rect 
              key={action.label}
              x="20" 
              y={action.y} 
              width="120" 
              height="22" 
              fill="rgba(255,255,255,0.1)" 
              rx="4"
              opacity={isVisible ? "1" : "0"}
              className="transition-all duration-500 cursor-pointer hover:fill-opacity-20"
              style={{ animationDelay: `${1.4 + i * 0.2}s` }}
            />
          ))}
          
          <text x="80" y="149" textAnchor="middle" fill="#7F5AF0" fontSize="10" fontWeight="600">
            Buy Shares
          </text>
          <text x="80" y="179" textAnchor="middle" fill="#2CB67D" fontSize="10" fontWeight="600">
            Invest Now
          </text>
        </g>

        {/* Flow Arrow 2 */}
        <g opacity={isVisible ? "1" : "0"} className="transition-all duration-1000" style={{ animationDelay: "1.8s" }}>
          <line
            x1="480"
            y1="240"
            x2="550"
            y2="240"
            stroke="url(#primaryGradient)"
            strokeWidth="3"
            markerEnd="url(#arrowhead)"
          />
          <circle cx="515" cy="240" r="3" fill="#8B5CF6">
            <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </circle>
        </g>

        {/* Step 3: Trade & Earn */}
        <g transform="translate(570, 150)">
          <rect
            width="140"
            height="180"
            fill="url(#cardGradient)"
            stroke="url(#primaryGradient)"
            strokeWidth="2"
            rx="16"
            filter="url(#shadow)"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-1000"
            style={{ 
              animationDelay: steps[2].delay,
              transform: activeStep === 2 ? 'scale(1.05)' : 'scale(1)',
              filter: activeStep === 2 ? 'url(#glow)' : 'url(#shadow)'
            }}
          />
          
          {/* Portfolio Icon */}
          <rect 
            x="50" 
            y="25" 
            width="40" 
            height="35" 
            fill="url(#primaryGradient)" 
            rx="8"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-500"
            style={{ animationDelay: "1.6s" }}
          />
          <text 
            x="70" 
            y="48" 
            textAnchor="middle" 
            fill="white" 
            fontSize="14" 
            fontWeight="bold"
          >
            📊
          </text>

          {/* Trading Actions */}
          {[
            { label: "Buy/Sell", color: "#7F5AF0", y: 80 },
            { label: "Track Value", color: "#2CB67D", y: 105 }
          ].map((action, i) => (
            <g key={action.label}>
              <rect 
                x="20" 
                y={action.y} 
                width="100" 
                height="18" 
                fill="rgba(255,255,255,0.1)" 
                rx="3"
                opacity={isVisible ? "1" : "0"}
                className="transition-all duration-500"
                style={{ animationDelay: `${1.8 + i * 0.2}s` }}
              />
              <text 
                x="70" 
                y={action.y + 12} 
                textAnchor="middle" 
                fill={action.color} 
                fontSize="10" 
                fontWeight="600"
              >
                {action.label}
              </text>
            </g>
          ))}

          {/* Earnings Display */}
          <rect 
            x="20" 
            y="135" 
            width="100" 
            height="30" 
            fill="url(#primaryGradient)" 
            rx="6"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-500"
            style={{ animationDelay: "2.2s" }}
          />
          <text 
            x="70" 
            y="154" 
            textAnchor="middle" 
            fill="white" 
            fontSize="11" 
            fontWeight="bold"
          >
            💰 Earn Rewards
          </text>
        </g>

        {/* Arrow Marker Definition */}
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" 
                  refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="url(#primaryGradient)" />
          </marker>
        </defs>

        {/* Step Labels */}
        {steps.map((step, i) => (
          <text
            key={step.title}
            x={120 + i * 280}
            y="380"
            textAnchor="middle"
            fill={step.color}
            fontSize="16"
            fontWeight="bold"
            opacity={isVisible ? "1" : "0"}
            className="transition-all duration-1000"
            style={{ 
              animationDelay: `${1.0 + i * 0.4}s`,
              textShadow: activeStep === i ? `0 0 10px ${step.color}` : 'none'
            }}
          >
            {step.title}
          </text>
        ))}

        {/* Oracle Integration Indicators */}
        <g opacity={isVisible ? "0.7" : "0"} className="transition-all duration-1000" style={{ animationDelay: "2.4s" }}>
          <line x1="380" y1="120" x2="380" y2="80" stroke="#2CB67D" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" values="0;-8;0" dur="2s" repeatCount="indefinite"/>
          </line>
          <text x="400" y="95" fill="#2CB67D" fontSize="11" fontWeight="600">
            Chainlink Oracles
          </text>
          
          <line x1="380" y1="360" x2="380" y2="400" stroke="#7F5AF0" strokeWidth="2" strokeDasharray="4,4">
            <animate attributeName="stroke-dashoffset" values="0;-8;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
          </line>
          <text x="400" y="385" fill="#7F5AF0" fontSize="11" fontWeight="600">
            SPN Compliance
          </text>
        </g>

        {/* Floating Particles */}
        <g opacity={isVisible ? "1" : "0"} className="transition-all duration-2000">
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + (i * 70) % 700}
              cy={120 + (i % 3) * 80}
              r={2 + Math.random() * 2}
              fill={i % 3 === 0 ? "#7F5AF0" : i % 3 === 1 ? "#2CB67D" : "#8B5CF6"}
              opacity="0.4"
            >
              <animate
                attributeName="cy"
                values={`${120 + (i % 3) * 80};${100 + (i % 3) * 80};${120 + (i % 3) * 80}`}
                dur={`${3 + Math.random() * 2}s`}
                repeatCount="indefinite"
                begin={`${i * 0.2}s`}
              />
              <animate
                attributeName="opacity"
                values="0.2;0.6;0.2"
                dur={`${2 + Math.random()}s`}
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              />
            </circle>
          ))}
        </g>

        {/* Title */}
        <text
          x="450"
          y="450"
          textAnchor="middle"
          fill="white"
          fontSize="20"
          fontWeight="bold"
          opacity={isVisible ? "1" : "0"}
          className="transition-all duration-1000"
          style={{ animationDelay: "2.6s" }}
        >
          Simple RWA Investment Journey
        </text>
        
        <text
          x="450"
          y="475"
          textAnchor="middle"
          fill="rgba(255,255,255,0.7)"
          fontSize="14"
          opacity={isVisible ? "1" : "0"}
          className="transition-all duration-1000"
          style={{ animationDelay: "2.8s" }}
        >
          Browse Assets • Connect Wallet • Trade & Earn
        </text>
      </svg>
    </div>
  )
}