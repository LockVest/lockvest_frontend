"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"

// Enhanced Button with magnetic effect
export function MotionButton({ 
  children, 
  className = "", 
  onClick, 
  disabled = false,
  variant = "default",
  size = "default"
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
  disabled?: boolean
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}) {
  return (
    <motion.button
      className={className}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(127, 90, 240, 0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      whileFocus={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      style={{
        transformStyle: "preserve-3d"
      }}
    >
      {children}
    </motion.button>
  )
}

// Enhanced Card with hover effects
export function MotionCard({ 
  children, 
  className = "",
  delay = 0
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(127, 90, 240, 0.15)"
      }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}

// Magnetic hover effect wrapper
export function MagneticWrapper({ 
  children, 
  className = ""
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {children}
    </motion.div>
  )
}

// Loading spinner with smooth animation
export function LoadingSpinner({ 
  size = "md",
  className = ""
}: {
  size?: "sm" | "md" | "lg"
  className?: string
}) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  }

  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="31.416"
          strokeDashoffset="31.416"
          className="opacity-25"
        />
        <motion.circle
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="31.416"
          initial={{ strokeDashoffset: 31.416 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </motion.div>
  )
}

// Confetti effect for success states
export function ConfettiEffect({ 
  isVisible = false 
}: {
  isVisible: boolean
}) {
  const confettiColors = ["#7F5AF0", "#2CB67D", "#FFFFFE", "#94A1B2"]
  
  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: confettiColors[i % confettiColors.length],
                left: `${Math.random() * 100}%`,
                top: "-10px"
              }}
              initial={{ 
                y: -10,
                x: 0,
                rotate: 0,
                opacity: 1
              }}
              animate={{
                y: window.innerHeight + 10,
                x: Math.random() * 200 - 100,
                rotate: Math.random() * 360,
                opacity: 0
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: "easeOut",
                delay: Math.random() * 0.5
              }}
            />
          ))}
        </div>
      )}
    </AnimatePresence>
  )
}

// Smooth scroll to section
export function SmoothScrollLink({ 
  children, 
  href, 
  className = "",
  onClick
}: {
  children: ReactNode
  href: string
  className?: string
  onClick?: () => void
}) {
  const scrollToSection = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    }
  }

  return (
    <motion.a
      href={href}
      onClick={scrollToSection}
      className={className}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
    >
      {children}
    </motion.a>
  )
}

// Fade in on scroll
export function FadeInOnScroll({ 
  children, 
  delay = 0,
  direction = "up"
}: {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
}) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children animation
export function StaggeredContainer({ 
  children, 
  staggerDelay = 0.1,
  className = ""
}: {
  children: ReactNode
  staggerDelay?: number
  className?: string
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        staggerChildren: staggerDelay
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggeredItem({ 
  children 
}: {
  children: ReactNode
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
} 