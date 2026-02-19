"use client"

import { useEffect, useState } from "react"
import { Sparkles, Target } from "lucide-react"

export default function MissionVisionSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("mission-vision")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="mission-vision"
      className="py-8 md:py-10 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Our Mission & Vision</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving excellence through sustainable practices and innovative mining solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div
            className={`group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-700 flex flex-col ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
              To provide high-quality, sustainable mineral products while maintaining the highest standards of safety,
              environmental responsibility, and operational excellence.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Uncompromising quality in every batch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Sustainable mining and processing techniques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Dedicated partnership with our global clients</span>
              </li>
            </ul>
          </div>

          {/* Vision Card */}
          <div
            className={`group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-700 flex flex-col ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                <Sparkles className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
              To be the leading global provider of mining and manufacturing solutions, recognized for our commitment
              to innovation, sustainability, and industry leadership.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Industry-leading innovation and technology</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Global market presence and reliability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Environmental stewardship and social responsibility</span>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
=======

            {/* Mission Card */}
          <div
            className={`group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-700 flex flex-col ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors">
                <Target className="text-primary w-8 h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold">Our Values</h3>
            </div>
            <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
              Integrity, quality, and customer satisfaction are the core values that guide our operations. We believe in building lasting relationships with our clients by consistently exceeding their expectations.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Radical Reliability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">Partnership Over Projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold text-lg mt-0.5">→</span>
                <span className="text-foreground/70">The "Plus One" Standard</span>
              </li>
            </ul>
          </div>
>>>>>>> cfb8975 (values)
        </div>
      </div>
    </section>
  )
}