"use client"

import type React from "react"
import Link from "next/link"
import { Mail, MapPin, Phone, Linkedin, Facebook, Twitter, Send } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribeStatus, setSubscribeStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscribeStatus("loading")

    setTimeout(() => {
      setSubscribeStatus("success")
      setEmail("")
      setTimeout(() => setSubscribeStatus("idle"), 3000)
    }, 800)
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Connect With Us Section */}
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">El Fedawia Co.</h3>
            <p className="text-sm opacity-80 mb-6">
              Leading innovators in mining and manufacturing, committed to delivering exceptional quality.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover:bg-secondary-foreground/20 rounded-lg transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 hover:bg-secondary-foreground/20 rounded-lg transition-colors">
                <Facebook size={18} />
              </a>
             
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#featured-products" className="hover:text-primary transition-colors">
                  Calcium Carbonate
                </Link>
              </li>
              <li>
                <Link href="/products#kaolin" className="hover:text-primary transition-colors">
                  Kaolin
                </Link>
              </li>
              <li>
                <Link href="/products#limestone" className="hover:text-primary transition-colors">
                  Limestone
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#mission-vision" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#team" className="hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-70">
          <p>© 2026 El Fedawia Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}