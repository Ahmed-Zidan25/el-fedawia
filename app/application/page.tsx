"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const applications = [
  {
    id: 1,
    title: "Agriculture",
    description: "Super phosphate and mineral fertilizers for enhanced crop growth and soil enrichment",
    image: "/applications/agriculture-application.jpg",
    delay: "0s",
  },
  {
    id: 2,
    title: "Ceramics & Tiles",
    description: "Premium kaolin for ceramic manufacturing, porcelain production, and tile glazing",
    image: "/applications/ceramics-application.jpg",
    delay: "0.2s",
  },
  {
    id: 3,
    title: "Construction",
    description: "Limestone and calcium carbonate for concrete, cement, and building materials",
    image: "/applications/construction-application.jpg",
    delay: "0.4s",
  },
  {
    id: 4,
    title: "Paints & Coatings",
    description: "Talc and kaolin pigments for protective, decorative, and industrial coatings",
    image: "/applications/paints-application.jpg",
    delay: "0.1s",
  },
  {
    id: 5,
    title: "Plastics & Polymers",
    description: "Mineral fillers and additives for enhanced plastic and rubber compound properties",
    image: "/applications/plastics-application.jpg",
    delay: "0.3s",
  },
  {
    id: 6,
    title: "Rubber & Tires",
    description: "Reinforcing fillers for industrial rubber products and high-performance automotive tires",
    image: "/applications/rubber-application.jpg",
    delay: "0.5s",
  },
  {
    id: 7,
    title: "Paper & Pulp",
    description: "High-whiteness kaolin and calcium carbonate for paper coating and filler applications",
    image: "/applications/paper-application.jpg",
    delay: "0.2s",
  },
  {
    id: 8,
    title: "Glass Manufacturing",
    description: "Essential mineral components for high-clarity container glass and industrial glassware",
    image: "/applications/glass-application.jpg",
    delay: "0.4s",
  },
]

export default function ApplicationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
<Header />
  return (
    <section className="py-12 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
            Industrial Applications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            El Fedawia Co. provides high-purity minerals that serve as the backbone for global manufacturing and agricultural sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group relative h-[380px] rounded-[2rem] overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 animate-float cursor-pointer bg-white"
              style={{ animationDelay: app.delay }}
              onMouseEnter={() => setHoveredId(app.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Pure Image - No filters, no grayscale */}
              <Image
                src={app.image}
                alt={app.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Subtle bottom shadow only (Scrim). 
                  This ensures the image looks "pure" at the top while keeping text readable.
              */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <h3 className="text-2xl font-bold mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 drop-shadow-md">
                  {app.title}
                </h3>
                
                <p className={`text-white/95 text-sm leading-relaxed mb-6 transition-all duration-500 drop-shadow-sm ${
                    hoveredId === app.id ? "opacity-100 max-h-24 translate-y-0" : "opacity-0 max-h-0 translate-y-4"
                  }`}
                >
                  {app.description}
                </p>

                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100">
                  <span className="text-xs tracking-widest uppercase">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}