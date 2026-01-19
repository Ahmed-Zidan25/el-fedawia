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
      <div className="bg-gradient-to-r from-primary/20 to-primary/10 border-y border-secondary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Newsletter */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-secondary-foreground/80 mb-6">
                Subscribe to get the latest news and industry insights
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  {/* Increased max-width to align better with the heading */}
                  className="w-full max-w-[380px] px-4 py-3 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg text-secondary-foreground placeholder-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === "loading"}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 flex items-center gap-2 whitespace-nowrap"
                >
                  {subscribeStatus === "loading" ? "..." : <Send size={20} />}
                </button>
              </form>
              {subscribeStatus === "success" && <p className="text-sm text-green-400 mt-2">Thanks for subscribing!</p>}
            </div>

            {/* Quick Contact - Fixed to 3 columns on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="tel:+201012595634"
                className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-secondary-foreground/10 rounded-lg hover:bg-secondary-foreground/20 transition-all group w-full"
              >
                <Phone size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <p className="font-semibold">Call Us</p>
                  <p className="text-xs text-secondary-foreground/70">+20 1012595634</p>
                </div>
              </a>
              <a
                href="mailto:montaser.mohamed@elfedawia.com"
                className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-secondary-foreground/10 rounded-lg hover:bg-secondary-foreground/20 transition-all group w-full"
              >
                <Mail size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <p className="font-semibold">Email</p>
                  <p className="text-xs text-secondary-foreground/70 truncate max-w-[120px]">Email Us</p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col items-center justify-center text-center gap-2 p-4 bg-secondary-foreground/10 rounded-lg hover:bg-secondary-foreground/20 transition-all group w-full"
              >
                <MapPin size={20} className="text-primary group-hover:scale-110 transition-transform" />
                <div className="text-sm">
                  <p className="font-semibold">Visit</p>
                  <p className="text-xs text-secondary-foreground/70">Bani-Suef, Egypt</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">El Fedawia Co.</h3>
            <p className="text-sm opacity-80 mb-6">
              Leading innovators in mining and manufacturing, committed to delivering exceptional quality.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 hover:bg-secondary-foreground/20 rounded-lg transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="p-2 hover:bg-secondary-foreground/20 rounded-lg transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 hover:bg-secondary-foreground/20 rounded-lg transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products#phosphate" className="hover:text-primary transition-colors">Phosphate</Link></li>
              <li><Link href="/products#kaolin" className="hover:text-primary transition-colors">Kaolin</Link></li>
              <li><Link href="/products#limestone" className="hover:text-primary transition-colors">Limestone</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#mission-vision" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/#team" className="hover:text-primary transition-colors">Team</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
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