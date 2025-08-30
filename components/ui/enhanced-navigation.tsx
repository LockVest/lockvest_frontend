"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Wallet, 
  Menu, 
  X, 
  ChevronDown,
  Globe,
  Shield,
  TrendingUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { SmoothScrollLink } from "@/components/ui/motion"

export function EnhancedNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isWalletConnecting, setIsWalletConnecting] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWalletConnect = async () => {
    setIsWalletConnecting(true)
    // Simulate wallet connection
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsWalletConnecting(false)
  }

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    // { href: "#roadmap", label: "Roadmap" },
  ]

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#16161A]/95 backdrop-blur-md border-b border-[#7F5AF0]/30" 
            : "bg-[#16161A]/90 backdrop-blur-md border-b border-[#7F5AF0]/20"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br rounded-lg flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Image src="/logo2.png" alt="LockVest" width={32} height={32} />
              </motion.div>
              <motion.span 
                className="text-xl font-bold bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                LockVest
              </motion.span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <SmoothScrollLink
                  key={item.href}
                  href={item.href}
                  className="text-[#94A1B2] hover:text-[#FFFFFE] transition-colors relative group"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {item.label}
                  </motion.span>
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] group-hover:w-full transition-all duration-300"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                  />
                </SmoothScrollLink>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  variant="outline"
                  className="border-[#7F5AF0] text-[#7F5AF0] hover:bg-[#7F5AF0] hover:text-white bg-transparent relative overflow-hidden group"
                  onClick={handleWalletConnect}
                  disabled={isWalletConnecting}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div className="relative flex items-center">
                    {isWalletConnecting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                      </motion.div>
                    ) : (
                      <Wallet className="w-4 h-4 mr-2" />
                    )}
                    <span>{isWalletConnecting ? "Connecting..." : "Connect Wallet"}</span>
                  </motion.div>
                </Button>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-[#0E0E10] border-t border-[#7F5AF0]/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="px-4 py-4 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <SmoothScrollLink
                      href={item.href}
                      className="block text-[#94A1B2] hover:text-[#FFFFFE] transition-colors"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {item.label}
                    </SmoothScrollLink>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    className="w-full bg-[#7F5AF0] hover:bg-[#7F5AF0]/80"
                    onClick={() => {
                      handleWalletConnect()
                      setIsMenuOpen(false)
                    }}
                    disabled={isWalletConnecting}
                  >
                    {isWalletConnecting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      </motion.div>
                    ) : (
                      <>
                        <Wallet className="w-4 h-4 mr-2" />
                        Connect Wallet
                      </>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
} 