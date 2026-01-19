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
                  <p className="text-xs text-secondary-foreground/