import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Space_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mruthyunjaya Sastry Gabbita - Peace Advocate & Disarmament Activist",
  description:
    "Official website showcasing life story, achievements, and mission for world peace. Professional journey with Amul, TCS, CDF, and NGOs. Advocacy for disarmament and global harmony.",
  generator: "v0.app",
  keywords: ["disarmament", "peace", "world peace", "NGO", "social work", "advocacy"],
  icons: {
    icon: [
      {
        url: "/peace.svg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/peace.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/peace.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/images/image0.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
