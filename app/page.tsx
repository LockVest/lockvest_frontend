"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Globe,
  Coins,
  TrendingUp,
  Lock,
  Smartphone,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Wallet,
  BarChart3,
  Users,
  Zap,
  Eye,
  Twitter,
  MessageCircle,
  Send,
} from "lucide-react"

import { AnimatedHeroIllustration } from "@/components/illustrations/animated-hero-illustration"
import { AnimatedTokenizationIllustration } from "@/components/illustrations/animated-tokenization"
import { AnimatedBlockchainNetwork } from "@/components/illustrations/animated-blockchain-network"
import { AnimatedGrowthChart } from "@/components/illustrations/animated-growth-chart"
import { SecurityShieldIllustration } from "@/components/illustrations/security-shield"
import { AnimatedUserFlow } from "@/components/illustrations/animated-user-flow"

// Enhanced components
import { EnhancedNavigation } from "@/components/ui/enhanced-navigation"
import { EnhancedHero } from "@/components/ui/enhanced-hero"
import { RoadmapSection } from "@/components/ui/roadmap-section"
import {
  MotionCard,
  MotionButton,
  FadeInOnScroll,
  StaggeredContainer,
  StaggeredItem
} from "@/components/ui/motion"
import { motion } from "framer-motion"

export default function LockVestLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#16161A] text-[#FFFFFE] overflow-x-hidden">
      {/* Enhanced Navigation */}
      <EnhancedNavigation />

      {/* Enhanced Hero Section */}
      <EnhancedHero />

      {/* Why LockVest Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why <span className="text-[#7F5AF0]">LockVest</span>?
              </h2>
              <p className="text-[#94A1B2] text-lg max-w-2xl mx-auto">
                Revolutionary real estate investment powered by blockchain technology
              </p>
            </div>
          </FadeInOnScroll>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Coins className="w-8 h-8" />,
                title: "Fractional Property Investment",
                description: "Own a piece of high-value assets with minimal capital",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "On-Chain Transparency",
                description: "View ownership history & title verification on blockchain",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Regulation Ready",
                description: "Compliant with zk-proofs and KYC requirements",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Built for Africa",
                description: "Global access with Nigeria-first approach",
              },
            ].map((benefit, index) => (
              <StaggeredItem key={index}>
                <MotionCard
                  className="bg-[#16161A] border-[#7F5AF0]/20 hover:border-[#7F5AF0]/40 transition-all duration-300 group"
                  delay={index * 0.1}
                >
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="text-[#7F5AF0] mb-4 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2 text-[#FFFFFE]">{benefit.title}</h3>
                    <p className="text-[#94A1B2]">{benefit.description}</p>
                  </CardContent>
                </MotionCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-[#94A1B2] text-lg max-w-2xl mx-auto">
                Advanced technology stack for seamless real estate tokenization
              </p>
            </div>
          </FadeInOnScroll>

          <StaggeredContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Non-Custodial Trading",
                description: "Full control of your assets with decentralized trading",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Live Oracle Feeds",
                description: "Real-time property valuations via Chainlink oracles",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Embeddable Widgets",
                description: "Integrate LockVest into any platform seamlessly",
              },
              {
                icon: <Coins className="w-6 h-6" />,
                title: "ERC-20 + ERC-721 Support",
                description: "Dual token standard for maximum flexibility",
              },
              {
                icon: <TrendingUp className="w-6 h-6" />,
                title: "LVT Utility Token",
                description: "Staking, voting, and platform discounts",
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Seamless UX",
                description: "Mobile-first design with multilingual support",
              },
            ].map((feature, index) => (
              <StaggeredItem key={index}>
                <MotionCard
                  className="bg-gradient-to-br from-[#16161A] to-[#0E0E10] border-[#2CB67D]/20 hover:border-[#2CB67D]/40 transition-all duration-300 group"
                  delay={index * 0.1}
                >
                  <CardContent className="p-6">
                    <motion.div
                      className="text-[#2CB67D] mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FFFFFE]">{feature.title}</h3>
                    <p className="text-[#94A1B2] text-sm">{feature.description}</p>
                  </CardContent>
                </MotionCard>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Technology Showcase Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFE]">Property Tokenization Process</h3>
              <p className="text-[#94A1B2] mb-6">
                Transform real estate assets into digital tokens, enabling fractional ownership and global
                accessibility.
              </p>
              <AnimatedTokenizationIllustration />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#FFFFFE]">Enterprise Security</h3>
              <p className="text-[#94A1B2] mb-6">
                Multi-layered security architecture with audits, compliance, and insurance protection.
              </p>
              <SecurityShieldIllustration />
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-[#FFFFFE]">Powered by Blockchain Technology</h3>
            <p className="text-[#94A1B2] mb-8 max-w-2xl mx-auto">
              Built on a robust decentralized network ensuring transparency, security, and global accessibility.
            </p>
            <AnimatedBlockchainNetwork />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-[#94A1B2] text-lg max-w-2xl mx-auto">
              Three simple steps to start your real estate investment journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                step: "01",
                title: "Browse Verified Assets",
                description: "Explore our curated selection of tokenized real estate properties",
              },
              {
                step: "02",
                title: "Connect Wallet & Invest",
                description: "Securely connect your wallet and purchase property tokens",
              },
              {
                step: "03",
                title: "Earn Rewards, Vote in DAO",
                description: "Receive rental income and participate in governance decisions",
              },
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7F5AF0] to-[#2CB67D] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-[#FFFFFE]">{step.title}</h3>
                <p className="text-[#94A1B2]">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <AnimatedUserFlow />
          </div>
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Built for Trust</h2>
            <p className="text-[#94A1B2] text-lg max-w-2xl mx-auto">
              Enterprise-grade security and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "",
                description: "Smart contracts audited by leading security firm",
              },
              {
                title: "zk-Compliance",
                description: "Privacy-preserving compliance via SPNs",
              },
              {
                title: "KYC Integration",
                description: "Verified with Blockpass & SmileID",
              },
              {
                title: "Bug Bounty Program",
                description: "Community-driven security with insurance fund",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-[#16161A] border-[#2CB67D]/20 hover:border-[#2CB67D]/40 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <CheckCircle className="w-8 h-8 text-[#2CB67D] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-[#FFFFFE]">{item.title}</h3>
                  <p className="text-[#94A1B2] text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Opportunity</h2>
            <p className="text-[#94A1B2] text-lg max-w-2xl mx-auto">
              Massive market potential in real estate tokenization
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  stat: "$300T",
                  label: "Global Real Estate Market",
                  description: "Total addressable market size",
                },
                {
                  stat: "90%",
                  label: "Still Locked in Traditional Finance",
                  description: "Opportunity for tokenization",
                },
                {
                  stat: "2nd",
                  label: "Global Crypto Adoption: Nigeria",
                  description: "Leading emerging market",
                },
                {
                  stat: "55%",
                  label: "Unbanked Population",
                  description: "High demand for DeFi solutions",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-[#7F5AF0]">{item.stat}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#FFFFFE]">{item.label}</h3>
                    <p className="text-[#94A1B2] text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <AnimatedGrowthChart />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap & Future Vision Section */}
      <RoadmapSection />

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#7F5AF0]/10 to-[#2CB67D]/10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInOnScroll>
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Join the Future of Real Estate
            </motion.h2>
            <motion.p
              className="text-[#94A1B2] text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Start your journey with LockVest and own real property from anywhere, on-chain.
            </motion.p>
          </FadeInOnScroll>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <MotionButton
              size="lg"
              className="bg-[#7F5AF0] hover:bg-[#7F5AF0]/80 text-white px-8 group rounded-lg flex items-center justify-center py-3"
            >
              <span>Explore Marketplace</span>
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
              className="border-[#2CB67D] text-[#2CB67D] hover:bg-[#2CB67D] hover:text-white px-8 bg-transparent rounded-lg flex items-center justify-center py-3"
            >
              Subscribe for Updates
            </MotionButton>
          </motion.div>

          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="bg-[#16161A] border-[#7F5AF0]/20 text-[#FFFFFE] placeholder:text-[#94A1B2]"
              />
              <MotionButton className="bg-[#2CB67D] hover:bg-[#2CB67D]/80 px-2 rounded-lg">
                Subscribe
              </MotionButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0E0E10] border-t border-[#7F5AF0]/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/logo2.png" alt="LockVest" width={32} height={32} />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-[#7F5AF0] to-[#2CB67D] bg-clip-text text-transparent">
                  LockVest
                </span>
              </div>
              <p className="text-[#94A1B2] text-sm">Tokenizing real estate for the future of property investment.</p>
            </div>

            <div>
              <h4 className="text-[#FFFFFE] font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-[#94A1B2]">
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFFFFE] font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-[#94A1B2]">
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFFFFE] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#FFFFFE] font-semibold mb-4">Community</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#94A1B2] hover:text-[#FFFFFE] transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#94A1B2] hover:text-[#FFFFFE] transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-[#94A1B2] hover:text-[#FFFFFE] transition-colors">
                  <Send className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-[#7F5AF0]/20 pt-8 text-center">
            <p className="text-[#94A1B2] text-sm">© 2025 LockVest. Powered by Pharos. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
