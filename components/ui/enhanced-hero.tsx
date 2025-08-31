"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Play, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MotionButton } from "@/components/ui/motion"
import { AnimatedHeroIllustration } from "@/components/illustrations/animated-hero-illustration"

export function EnhancedHero() {
    const [isVisible, setIsVisible] = useState(false)
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const handleExploreClick = () => {
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
    }

    const stats = [
        { value: "$300T", label: "Global Market" },
        { value: "90%", label: "Untapped" },
        { value: "2nd", label: "Crypto Adoption" },
        { value: "50K", label: "TPS Performance" },
    ]

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Animated Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#7F5AF0]/10 via-[#16161A] to-[#2CB67D]/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#7F5AF0] rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            x: [0, Math.random() * 50 - 25, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Badge */}
                    <motion.div
                        className="inline-flex items-center px-4 py-2 bg-[#7F5AF0]/10 border border-[#7F5AF0]/20 rounded-full text-sm text-[#7F5AF0] md:mt-0 mt-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Star className="w-4 h-4 mr-2" />
                        <span>Revolutionary Real Estate Tokenization</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                            <motion.span
                                className="bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                            >
                                Tokenize Trust.
                            </motion.span>
                            <br />
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.0 }}
                            >
                                Unlock Property Wealth.
                            </motion.span>
                        </h1>
                        <motion.p
                            className="text-lg sm:text-xl text-[#94A1B2] max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                        >
                            Invest in real estate like never before — simple, secure, and decentralized.
                        </motion.p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="flex flex-wrap gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.6 + index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="text-2xl font-bold text-[#7F5AF0]">{stat.value}</div>
                                <div className="text-sm text-[#94A1B2]">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8 }}
                    >
                        <MotionButton
                            size="lg"
                            className="bg-[#7F5AF0] hover:bg-[#7F5AF0]/80 text-white px-8 group rounded-lg flex items-center justify-center py-3"
                            onClick={handleExploreClick}
                        >
                            <span>Explore RWA Marketplace</span>
                            <motion.div
                                className="ml-2"
                                initial={{ x: 0 }}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 400 }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </MotionButton>

                        <MotionButton
                            size="lg"
                            variant="outline"
                            className="border-[#2CB67D] text-[#2CB67D] hover:bg-[#2CB67D] hover:text-white px-8 bg-transparent group rounded-lg flex items-center justify-center py-3"
                        >
                            <Play className="w-5 h-5 mr-2" />
                            <span>View Demo</span>
                        </MotionButton>
                    </motion.div>

                    {/* Trust indicators */}
                    <motion.div
                        className="flex items-center space-x-6 text-sm text-[#94A1B2]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0 }}
                    >
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#2CB67D] rounded-full animate-pulse" />
                            <span>Regulation Ready</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#7F5AF0] rounded-full animate-pulse" />
                            <span>Decentralized</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#FFFFFE] rounded-full animate-pulse" />
                            <span>Secure</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content - Hero Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0]/20 to-[#2CB67D]/20 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                    <div className="relative">
                        <AnimatedHeroIllustration />
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-[#7F5AF0] rounded-full flex justify-center"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <motion.div
                        className="w-1 h-3 bg-[#7F5AF0] rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </motion.div>
            </motion.div>

            {/* Confetti Effect */}
            <AnimatePresence>
                {showConfetti && (
                    <motion.div
                        className="fixed inset-0 pointer-events-none z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {[...Array(50)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 rounded-full"
                                style={{
                                    backgroundColor: ["#7F5AF0", "#2CB67D", "#FFFFFE", "#94A1B2"][i % 4],
                                    left: `${Math.random() * 100}%`,
                                    top: "50%",
                                }}
                                initial={{
                                    y: 0,
                                    x: 0,
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                animate={{
                                    y: -window.innerHeight,
                                    x: Math.random() * 200 - 100,
                                    rotate: Math.random() * 360,
                                    opacity: 0,
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    ease: "easeOut",
                                    delay: Math.random() * 0.5,
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
} 