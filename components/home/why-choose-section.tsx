"use client"

import React, { useEffect, useState } from "react"
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
      description: "Our coated particles are designed to prevent clumping, ensuring a homogenous mix in hydrophobic environments.",
      icon: Zap,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Stringent Quality Control",
      description: "Every batch undergoes rigorous testing for whiteness, moisture content, and micron-level consistency.",
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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-500/40 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles size={16} className="text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-400">Why Choose Us</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-400">
            Why Choose Our Mineral?
          </h2>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          <button
            onClick={handlePrev}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-400 hover:border-cyan-400 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="w-full md:w-[520px] h-[420px]" onMouseMove={handleMouseMove}>
            {isVisible && (
              <div className="group relative w-full h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${currentFeature.gradient} opacity-20 blur-2xl rounded-3xl`} />
                <div className="relative w-full h-full bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 flex flex-col justify-center items-center text-center">
                   <div className="p-4 bg-slate-900 rounded-2xl mb-8 mx-auto w-fit">
                    <Icon size={40} className="text-cyan-300" />
                  </div>
                  <h3 className="text-4xl font-bold mb-6 text-white">{currentFeature.title}</h3>
                  <p className="text-slate-300 text-lg leading-relaxed">{currentFeature.description}</p>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handleNext}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-slate-800 border border-purple-500/30 text-purple-400 hover:border-purple-400 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setAutoPlay(false)
              }}
              className={`transition-all duration-300 rounded-full h-3 ${
                index === currentIndex ? `w-10 bg-gradient-to-r ${feature.gradient}` : "w-3 bg-slate-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}