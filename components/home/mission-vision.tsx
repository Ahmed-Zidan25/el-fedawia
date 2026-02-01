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
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Our Vision & Mission</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driving innovation through commitment to quality and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Card */}
          <div
            className={`group relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
<<<<<<< HEAD
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl min-h-[480px] flex flex-col">
=======
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
>>>>>>> 054be50de85ed9acb0a9e77ed4f0da87997feb07
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Target size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Mission</h3>
              </div>
<<<<<<< HEAD
              <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
=======
              <p className="text-foreground/80 leading-relaxed mb-6">
>>>>>>> 054be50de85ed9acb0a9e77ed4f0da87997feb07
                To deliver exceptional quality products and services that meet the evolving needs of global markets
                while maintaining the highest standards of safety, sustainability, and customer satisfaction.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">→</span>
                  <span className="text-foreground/70">Quality-first approach in all operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">→</span>
                  <span className="text-foreground/70">Sustainable and responsible mining practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-lg mt-0.5">→</span>
                  <span className="text-foreground/70">Continuous innovation and improvement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div
            className={`group relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
<<<<<<< HEAD
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl min-h-[480px] flex flex-col">
=======
            <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-10 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
>>>>>>> 054be50de85ed9acb0a9e77ed4f0da87997feb07
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                  <Sparkles size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Our Vision</h3>
              </div>
<<<<<<< HEAD
              <p className="text-foreground/80 leading-relaxed mb-6 flex-grow">
=======
              <p className="text-foreground/80 leading-relaxed mb-6">
>>>>>>> 054be50de85ed9acb0a9e77ed4f0da87997feb07
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
          </div>
        </div>
      </div>
    </section>
  )
}
