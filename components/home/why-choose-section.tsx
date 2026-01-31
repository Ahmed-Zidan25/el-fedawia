"use client"

import React from "react"

import { useEffect, useState } from "react"
import { Zap, CheckCircle, Beaker, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("why-choose")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % features.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [autoPlay])

  useEffect(() => {
    if (!autoPlay) {
      const timer = setTimeout(() => setAutoPlay(true), 8000)
      return () => clearTimeout(timer)
    }
  }, [autoPlay])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const features = [
    {
      title: "Advanced Dispersion",
      description:
        "Our coated particles are designed to prevent clumping, ensuring a homogenous mix in hydrophobic environments.",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Stringent Quality Control",
      description:
        "Every batch undergoes rigorous testing for whiteness, moisture content, and micron-level consistency.",
      icon: CheckCircle,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Customized Solutions",
      description: "Available in a variety of grades to match your specific production requirements.",
      icon: Beaker,
      gradient: "from-emerald-500 to-cyan-500",
    },
  ]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
    setAutoPlay(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
    setAutoPlay(false)
  }

  const currentFeature = features[currentIndex]
  const Icon = currentFeature.icon

  return (
    <section
      id="why-choose"
      className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-32 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
            Why Choose Our Mineral?
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Engineered excellence. Precision-crafted for your industrial needs. Experience the future of mineral solutions.
          </p>
        </div>

        {/* Carousel container */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] group"
            aria-label="Previous"
          >
            <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* Carousel card */}
          <div
            className="w-full md:w-[520px] h-[420px]"
            onMouseMove={handleMouseMove}
          >
            {isVisible && (
              <div className="group relative w-full h-full">
                {/* Animated background glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${currentFeature.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500 rounded-3xl`}
                />

                {/* Glass morphism card */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 hover:border-slate-600/80 transition-all duration-300 flex flex-col justify-center items-center text-center overflow-hidden">
                  {/* Animated border glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    style={{
                      background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.1), transparent 80%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div
                      className={`relative w-20 h-20 mb-8 mx-auto flex items-center justify-center rounded-2xl transition-all duration-500 transform group-hover:scale-125`}
                    >
                      {/* Icon background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.gradient} rounded-2xl opacity-20 group-hover:opacity-40 blur-lg`} />

                      {/* Icon border */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.gradient} rounded-2xl opacity-30 group-hover:opacity-50`} style={{
                        background: `linear-gradient(135deg, rgba(34,211,238,0.5), rgba(168,85,247,0.5))`,
                        borderRadius: "1rem"
                      }} />

                      {/* Inner glow */}
                      <div className="absolute inset-0.5 bg-slate-900 rounded-2xl flex items-center justify-center">
                        <Icon size={40} className="text-cyan-300 relative z-10 drop-shadow-lg" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300">
                      {currentFeature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed text-lg max-w-sm mx-auto group-hover:text-white transition-colors duration-300">
                      {currentFeature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${currentFeature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </div>
            )}
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/30 text-purple-400 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] group"
            aria-label="Next"
          >
            <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Indicators with auto-scroll animation */}
        <div className="flex justify-center gap-3 mt-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setAutoPlay(false)
              }}
              className={`transition-all duration-300 rounded-full backdrop-blur-sm relative ${
                index === currentIndex
                  ? `w-10 h-3 bg-gradient-to-r ${feature.gradient} shadow-[0_0_20px_rgba(34,211,238,0.4)]`
                  : "w-3 h-3 bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && autoPlay && (
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"
                  style={{
                    animation: "pulse 1s ease-in-out infinite",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Mobile slide counter */}
        <p className="text-center text-sm text-slate-400 mt-6 md:hidden">
          Slide {currentIndex + 1} of {features.length}
        </p>
      </div>
    </section>
  )
}
