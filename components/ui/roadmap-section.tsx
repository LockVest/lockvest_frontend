"use client"

import { motion } from "framer-motion"
import { 
  Code, 
  Shield, 
  Globe, 
  Rocket, 
  Users, 
  Zap,
  CheckCircle,
  Clock
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInOnScroll, StaggeredContainer, StaggeredItem, MotionCard } from "@/components/ui/motion"

export function RoadmapSection() {
  const roadmapItems = [
    {
      quarter: "Late Aug 2025",
      title: "Contract & Kickoff",
      description: "Signed contracts, team onboarding, and LOIs finalized",
      icon: <Code className="w-6 h-6" />,
      status: "upcoming",
      features: ["Team Onboarding", "LOIs Finalized", "Project Setup", "Pharos Integration"]
    },
    {
      quarter: "Sep 2025", 
      title: "Architecture & PoC",
      description: "Finalized design docs and PoC widget demonstrating token minting",
      icon: <Shield className="w-6 h-6" />,
      status: "upcoming",
      features: ["Design Documentation", "PoC Widget", "Token Minting Demo", "2 LOIs Integration"]
    },
    {
      quarter: "Oct 2025",
      title: "Beta Contracts & UI",
      description: "Deploy contracts on testnet with KYC flow and oracle integration",
      icon: <Globe className="w-6 h-6" />,
      status: "upcoming",
      features: ["Testnet Deployment", "KYC Integration", "Oracle Feeds", "500 Test Wallets"]
    },
    {
      quarter: "Nov 2025",
      title: "Audited Mainnet Launch",
      description: "Third-party audit completion and mainnet deployment",
      icon: <Rocket className="w-6 h-6" />,
      status: "upcoming",
      features: ["Hacken Audit", "Mainnet Launch", "1,000+ Transactions", "Audit Report Published"]
    },
    {
      quarter: "Dec 2025",
      title: "UX/PMF Optimization",
      description: "A/B testing, UI refinement, and partner app integration",
      icon: <Zap className="w-6 h-6" />,
      status: "upcoming",
      features: ["A/B Testing", "UI Refinement", "SmileID Integration", "5 Partner Apps"]
    },
    {
      quarter: "Jan 2026",
      title: "Growth & Metrics",
      description: "TVL dashboard, community launch, and DAO voting bootstrapped",
      icon: <Users className="w-6 h-6" />,
      status: "upcoming",
      features: ["TVL Dashboard", "Community Launch", "DAO Voting", "$200K+ TVL Target"]
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-[#2CB67D] text-white"
      case "in-progress":
        return "bg-[#7F5AF0] text-white"
      case "upcoming":
        return "bg-[#94A1B2] text-[#16161A]"
      default:
        return "bg-[#94A1B2] text-[#16161A]"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      case "in-progress":
        return <Clock className="w-4 h-4" />
      case "upcoming":
        return <Clock className="w-4 h-4" />
      default:
        return <Clock className="w-4 h-4" />
    }
  }

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0E0E10]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeInOnScroll>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Roadmap & <span className="text-[#7F5AF0]">Future Vision</span>
            </motion.h2>
            <motion.p 
              className="text-[#94A1B2] text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Charting our path toward a tokenized real estate revolution.
            </motion.p>
          </div>
        </FadeInOnScroll>

        {/* Roadmap Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7F5AF0] via-[#2CB67D] to-[#94A1B2]"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />

          <StaggeredContainer className="space-y-12">
            {roadmapItems.map((item, index) => (
              <StaggeredItem key={index}>
                <motion.div
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-[#16161A] bg-[#7F5AF0] z-10" />
                  
                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}>
                    <MotionCard
                      className="bg-[#16161A] border-[#7F5AF0]/20 hover:border-[#7F5AF0]/40 transition-all duration-300 group"
                      delay={index * 0.1}
                    >
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <motion.div
                              className="p-2 rounded-lg bg-[#7F5AF0]/10 text-[#7F5AF0]"
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {item.icon}
                            </motion.div>
                            <div>
                              <div className="text-sm font-medium text-[#7F5AF0]">{item.quarter}</div>
                              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                                {getStatusIcon(item.status)}
                                <span className="ml-1 capitalize">{item.status.replace("-", " ")}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-semibold mb-3 text-[#FFFFFE] group-hover:text-[#7F5AF0] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-[#94A1B2] text-sm mb-4">
                          {item.description}
                        </p>

                        {/* Features List */}
                        <div className="space-y-2">
                          {item.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              className="flex items-center space-x-2 text-sm text-[#94A1B2]"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: (index * 0.1) + (featureIndex * 0.05) }}
                              viewport={{ once: true }}
                            >
                              <div className="w-1.5 h-1.5 bg-[#2CB67D] rounded-full" />
                              <span>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </MotionCard>
                  </div>
                </motion.div>
              </StaggeredItem>
            ))}
          </StaggeredContainer>
        </div>

        {/* Vision Statement */}
        <FadeInOnScroll>
          <motion.div
            className="mt-20 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-gradient-to-r from-[#7F5AF0]/10 to-[#2CB67D]/10 border border-[#7F5AF0]/20 rounded-2xl p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
                             <h3 className="text-2xl font-bold mb-4 text-[#FFFFFE]">Our Vision</h3>
               <p className="text-lg text-[#94A1B2] leading-relaxed">
                 At LockVest, we envision a future where anyone, anywhere can own a piece of real-world property through trustless, transparent, and compliant blockchain infrastructure. Our goal is to democratize asset ownership — starting in Nigeria, expanding globally. We're building on Pharos blockchain to unlock the $300 trillion global real estate market, making high-value assets accessible to everyday investors.
               </p>
            </motion.div>
          </motion.div>
        </FadeInOnScroll>
      </div>
    </section>
  )
} 