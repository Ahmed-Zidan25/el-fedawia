"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const applications = [
  {
    id: 1,
    title: "Agriculture",
    description: "Super phosphate and mineral fertilizers for enhanced crop growth and soil enrichment",
    image: "/applications/agriculture-application.jpg",
    color: "from-green-600 to-emerald-600",
    delay: "0s", // Unique delays for a natural feel
  },
  {
    id: 2,
    title: "Ceramics & Tiles",
    description: "Premium kaolin for ceramic manufacturing, porcelain production, and tile glazing",
    image: "/applications/ceramics-application.jpg",
    color: "from-orange-600 to-red-600",
    delay: "0.2s",
  },
  {
    id: 3,
    title: "Construction",
    description: "Limestone and calcium carbonate for concrete, cement, and building materials",
    image: "/applications/construction-application.jpg",
    color: "from-gray-600 to-slate-700",
    delay: "0.4s",
  },
  {
    id: 4,
    title: "Paints & Coatings",
    description: "Talc and kaolin pigments for protective, decorative, and industrial coatings",
    image: "/applications/paints-application.jpg",
    color: "from-rose-600 to-pink-600",
    delay: "0.1s",
  },
  {
    id: 5,
    title: "Plastics & Polymers",
    description: "Mineral fillers and additives for enhanced plastic and rubber compound properties",
    image: "/applications/plastics-application.jpg",
    color: "from-blue-600 to-indigo-600",
    delay: "0.3s",
  },
]

export default function ApplicationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      {/* Adding the custom animation style to the document */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Industrial Applications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our high-purity minerals serve as essential raw materials across diverse global industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-xl animate-float"
              style={{ animationDelay: app.delay }}
              onMouseEnter={() => setHoveredId(app.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background Image with Hover Scale */}
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${app.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />

              {/* Content Container */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-3 transform transition-transform duration-500 group-hover:-translate-y-2">
                  {app.title}
                </h3>
                
                <p className={`text-white/90 mb-6 leading-relaxed transition-all duration-500 ${
                    hoveredId === app.id ? "max-h-32 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  {app.description}
                </p>

                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  <span className="text-sm tracking-wider uppercase">Explore Solutions</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Glassmorphism Border on Hover */}
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <div className="mt-20">
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50 shadow-2xl overflow-hidden">
            <div className="bg-white dark:bg-slate-950 rounded-[22px] p-10 md:p-16 text-center relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Need a Tailored Mineral Solution?</h3>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                We specialize in micronizing and coating minerals to meet the exact specifications of your production line.
              </p>
              <a
                href="/get-quote"
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-all shadow-lg shadow-primary/25"
              >
                Request Customization
                <ArrowRight size={20} />
              </a>
            </div>
            {/* Animated background glow for the CTA */}
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 animate-pulse -z-0" />
          </div>
        </div>
      </div>
    </section>
  )
}