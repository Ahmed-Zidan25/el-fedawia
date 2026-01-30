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
  },
  {
    id: 2,
    title: "Ceramics & Tiles",
    description: "Premium kaolin for ceramic manufacturing, porcelain production, and tile glazing",
    image: "/applications/ceramics-application.jpg",
    color: "from-orange-600 to-red-600",
  },
  {
    id: 3,
    title: "Construction",
    description: "Limestone and calcium carbonate for concrete, cement, and building materials",
    image: "/applications/construction-application.jpg",
    color: "from-gray-600 to-slate-700",
  },
  {
    id: 4,
    title: "Paints & Coatings",
    description: "Talc and kaolin pigments for protective, decorative, and industrial coatings",
    image: "/applications/paints-application.jpg",
    color: "from-rose-600 to-pink-600",
  },
  {
    id: 5,
    title: "Plastics & Polymers",
    description: "Mineral fillers and additives for enhanced plastic and rubber compound properties",
    image: "/applications/plastics-application.jpg",
    color: "from-indigo-600 to-violet-600",
  },
  {
    id: 6,
    title: "Glass Manufacturing",
    description: "High-grade kaolin and silica for transparent and industrial glass production",
    image: "/applications/glass-application.jpg",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: 7,
    title: "Paper & Pulp",
    description: "Kaolin coating pigments for paper production, finishing, and brightness enhancement",
    image: "/applications/paper-application.jpg",
    color: "from-amber-600 to-yellow-600",
  },
  {
    id: 8,
    title: "Chemicals & Refining",
    description: "Industrial minerals for chemical processing, refinement, and synthesis applications",
    image: "/applications/chemicals-application.jpg",
    color: "from-cyan-600 to-blue-600",
  },
]

export default function ApplicationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="applications" className="py-10 md:py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Sectors We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our industrial minerals and specialty chemicals find applications across diverse industries, enhancing product performance and quality
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-72"
              onMouseEnter={() => setHoveredId(app.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image Background */}
              <Image
                src={app.image || "/placeholder.svg"}
                alt={app.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300" />

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6 z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {app.title}
                </h3>
                
                {/* Description - Show on hover */}
                <p
                  className={`text-white/90 text-sm md:text-base leading-relaxed mb-4 transition-all duration-300 overflow-hidden ${
                    hoveredId === app.id ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {app.description}
                </p>

                {/* Learn More Link */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  <span className="text-sm">Explore</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Custom Solutions for Your Industry</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Our team works closely with industries to develop tailored mineral solutions that meet specific production requirements and quality standards.
            </p>
            <a
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Request Custom Solution
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
