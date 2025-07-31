import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "LockVest - Tokenize Trust. Unlock Property Wealth.",
  description:
    "Invest in real estate like never before — simple, secure, and decentralized. Join the future of property investment with LockVest.",
  keywords: "Web3, real estate, tokenization, blockchain, Nigeria, Africa, property investment, DeFi",
  openGraph: {
    title: "LockVest - Web3 Real Estate Tokenization Platform",
    description: "Invest in real estate like never before — simple, secure, and decentralized.",
    type: "website",
  },
    generator: 'v1',
    icons: {
      icon: '/logo2.png',
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
