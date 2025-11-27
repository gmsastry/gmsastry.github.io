"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/mission", label: "Mission" },
    { href: "/projects", label: "Projects" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="border-b-4 border-foreground bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold tracking-tighter">
            MRUTHYUNJAYA
            <br className="md:hidden" /> SASTRY GABBITA
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-mono text-sm uppercase hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-transparent hover:border-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/donate">
              <Button className="ml-2 font-mono uppercase border-4 border-foreground">Donate Now</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-2 border-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t-2 border-foreground flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-3 font-mono text-sm uppercase hover:bg-primary hover:text-primary-foreground transition-colors border-2 border-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full font-mono uppercase border-4 border-foreground">Donate Now</Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
