"use client"

import { useEffect, useState } from "react"
import { Zap, CheckCircle, Beaker, ChevronLeft, ChevronRight } from "lucide-react"

export default function WhyChooseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

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
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const features = [
    {
      title: "Advanced Dispersion",
      description:
        "Our coated particles are designed to prevent clumping, ensuring a homogenous mix in hydrophobic environments.",
      icon: Zap,
    },
    {
      title: "Stringent Quality Control",
      description:
        "Every batch undergoes rigorous testing for whiteness, moisture content, and micron-level consistency.",
      icon: CheckCircle,
    },
    {
      title: "Customized Solutions",
      description: "Available in a variety of grades to match your specific production requirements.",
      icon: Beaker,
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
      className="py-8 md:py-10 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Why Choose Our Mineral?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading quality with unmatched performance and reliability
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 md:gap-8">
          {/* Previous button */}
          <button
            onClick={handlePrev}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary/60"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel card - unified size */}
          <div className="w-full md:w-[500px] h-[400px]">
            <div
              className={`group relative w-full h-full transition-all duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl h-full flex flex-col justify-center items-center text-center">
                <div className="p-4 bg-primary/20 rounded-lg mb-8 group-hover:bg-primary/30 transition-colors group-hover:scale-110 transform duration-300">
                  <Icon size={48} className="text-primary" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-primary transition-colors">
                  {currentFeature.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed text-lg">{currentFeature.description}</p>
              </div>
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={handleNext}
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            className="hidden md:flex items-center justify-center w-14 h-14 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 hover:border-primary/60"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setAutoPlay(false)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-8" : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 md:hidden">
          Slide {currentIndex + 1} of {features.length}
        </p>
      </div>
    </section>
  )
}
