"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 70) {
        setIsHidden(currentScrollY > lastScrollY);
      } else {
        setIsHidden(false)
      }
      setLastScrollY(currentScrollY)
      setIsScrolled(currentScrollY > 5)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      } ${isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}
    >
      {/* 1. Changed px-4 to px-2 to move logo closer to the left edge.
          2. Changed py-2 to py-0 to remove vertical space at the top/bottom of the bar.
      */}
      <nav className="max-w-full mx-auto px-2 sm:px-4 py-0">
        <div className="flex justify-between items-center w-full">
          {/* Logo Container: object-left ensures the image stays pinned to the left of its box */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="w-48 h-12 md:w-64 md:h-20 relative">
              <Image 
                src="/logo.png" 
                alt="El Fedawia Co. Logo" 
                fill 
                className="object-contain object-left" 
                priority 
              />
            </div>
          </Link>

          {/* Menus aligned right */}
          <div className="hidden md:flex items-center gap-8 ml-auto">
            {[
              { href: "/", label: "Home" },
              { href: "/products", label: "Products" },
			  { href: "/application", label: "Industrial Applications" },
              { href: "/get-quote", label: "Get Quote" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  )
}