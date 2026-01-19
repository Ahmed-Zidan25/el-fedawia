"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const sectors = [
  {
    title: "Agriculture",
    description: "Super phosphate fertilizers for enhanced crop growth and agricultural productivity",
    icon: "🌾",
    color: "from-green-500/20 to-emerald-500/20",
    image: "/images/agriculture-sector.jpg",
    video: "/videos/agriculture-sector.mp4",
  },
  {
    title: "Construction & Building",
    description: "Limestone and aggregates for concrete, cement, and building materials",
    icon: "🏗️",
    color: "from-gray-500/20 to-slate-500/20",
    image: "/images/construction-sector.jpg",
    video: "/videos/construction-sector.mp4",
  },
  {
    title: "Ceramics & Tiles",
    description: "Premium kaolin for ceramic manufacturing and porcelain production",
    icon: "🏺",
    color: "from-orange-500/20 to-red-500/20",
    image: "/images/ceramics-sector.jpg",
    video: "/videos/ceramics-sector.mp4",
  },
  {
    title: "Chemicals & Refining",
    description: "Raw materials for chemical processing, refinement, and industrial synthesis",
    icon: "⚗️",
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/images/chemicals-sector.jpg",
    video: "/videos/chemicals-sector.mp4",
  },
  {
    title: "Glass & Silicates",
    description: "High-grade kaolin for transparent and industrial glass manufacturing",
    icon: "🪟",
    color: "from-sky-500/20 to-blue-500/20",
    image: "/images/glass-sector.jpg",
    video: "/videos/glass-sector.mp4",
  },
  {
    title: "Paper & Pulp",
    description: "Kaolin coating pigments for paper production and finishing applications",
    icon: "📄",
    color: "from-amber-500/20 to-yellow-500/20",
    image: "/images/paper-sector.jpg",
    video: "/videos/paper-sector.mp4",
  },
  {
    title: "Paints & Coatings",
    description: "Talc and kaolin for protective, decorative, and industrial coatings",
    icon: "🎨",
    color: "from-pink-500/20 to-rose-500/20",
    image: "/images/paints-sector.jpg",
    video: "/videos/paints-sector.mp4",
  },
  {
    title: "Rubber & Plastics",
    description: "Fillers and additives for rubber and plastic compound enhancement",
    icon: "♻️",
    color: "from-violet-500/20 to-purple-500/20",
    image: "/images/rubber-sector.jpg",
    video: "/videos/rubber-sector.mp4",
  },
]

export default function SectorsCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)
  const [videoErrors, setVideoErrors] = useState<Record<number, boolean>>({})

  useEffect(() => {
    if (!isAutoPlay) return

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sectors.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isAutoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % sectors.length)
    setIsAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + sectors.length) % sectors.length)
    setIsAutoPlay(false)
  }

  const handleVideoError = (index: number) => {
    setVideoErrors((prev) => ({ ...prev, [index]: true }))
  }

  return (
    <section id="sectors" className="py-8 md:py-10 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Sectors We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing innovative mineral solutions across diverse industries
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {sectors.map((sector, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div
                    className={`bg-gradient-to-br ${sector.color} backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:border-primary/50 group cursor-pointer relative overflow-hidden h-96 flex flex-col justify-end`}
                  >
                    {/* Video Background */}
                    {!videoErrors[index] && (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                        poster={sector.image}
                        onError={() => handleVideoError(index)}
                      >
                        <source src={sector.video} type="video/mp4" />
                      </video>
                    )}

                    {/* Fallback image if video fails */}
                    {videoErrors[index] && (
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${sector.image})` }}
                      />
                    )}

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10">
                      <div className="text-6xl md:text-7xl mb-4 group-hover:scale-110 transition-transform">
                        {sector.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors text-white">
                        {sector.title}
                      </h3>
                      <p className="text-white/90 leading-relaxed text-base md:text-lg">{sector.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 md:-translate-x-20 z-10 p-3 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Previous sector"
          >
            <ChevronLeft size={32} className="text-primary" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 md:translate-x-20 z-10 p-3 hover:bg-primary/20 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Next sector"
          >
            <ChevronRight size={32} className="text-primary" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8 flex-wrap">
            {sectors.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrent(index)
                  setIsAutoPlay(false)
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === current ? "bg-primary w-8" : "bg-border w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to sector ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
