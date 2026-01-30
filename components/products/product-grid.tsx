"use client"

import { useState } from "react"
import { Download, Award } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  specifications: {
    label: string
    value: string
  }[]
  applications: string[]
  dataSheet: string
}

const products: Product[] = [
  {
    id: "quartz",
    name: "Processed Quartz",
    category: "Industrial Minerals",
    image: "/processed-quartz-mineral.jpg",
    description: "High-purity processed quartz for glass, ceramics, and electronics manufacturing",
    specifications: [
      { label: "SiO₂ Content", value: ">99.5%" },
      { label: "Particle Size", value: "0.1-2mm" },
      { label: "Color", value: "White/Colorless" },
      { label: "Hardness (Mohs)", value: "7" },
      { label: "Density", value: "2.65 g/cm³" },
    ],
    applications: ["Glass Manufacturing", "Electronics", "Ceramics", "Refractory Industry"],
    dataSheet: "/datasheets/quartz.pdf",
  },
  {
    id: "kaolin",
    name: "Processed Kaolin",
    category: "Industrial Minerals",
    image: "/kaolin-clay-mineral.jpg",
    description: "Premium grade kaolin for ceramics, paper coating, and paint applications",
    specifications: [
      { label: "Al₂O₃ Content", value: "38-40%" },
      { label: "SiO₂ Content", value: "45-50%" },
      { label: "Brightness", value: ">80%" },
      { label: "Particle Size", value: "<2 μm (typical)" },
      { label: "Whiteness", value: ">88%" },
    ],
    applications: ["Ceramics", "Paper Coating", "Paint Industry", "Rubber & Plastics"],
    dataSheet: "/datasheets/kaolin.pdf",
  },
  {
    id: "clay",
    name: "Fuller's Earth Clay",
    category: "Industrial Minerals",
    image: "/fullers-earth-clay.jpg",
    description: "Natural fuller's earth clay for bleaching, filtration, and absorbent applications",
    specifications: [
      { label: "Al₂O₃ Content", value: "16-20%" },
      { label: "Moisture Content", value: "8-12%" },
      { label: "Oil Absorption", value: "120-150%" },
      { label: "Color", value: "Light Brown" },
      { label: "Particle Size", value: "<200 mesh" },
    ],
    applications: ["Oil Bleaching", "Filtration", "Absorbents", "Cosmetics"],
    dataSheet: "/datasheets/fullers-earth.pdf",
  },
  {
    id: "phosphate",
    name: "Processed Phosphate",
    category: "Agricultural/Industrial",
    image: "/phosphate-fertilizer.jpg",
    description: "High-grade phosphate for agricultural fertilizers and industrial applications",
    specifications: [
      { label: "P₂O₅ Content", value: "16-18%" },
      { label: "CaO Content", value: "40-45%" },
      { label: "Moisture Content", value: "<3%" },
      { label: "Particle Size", value: "1-4mm" },
      { label: "Solubility", value: "High" },
    ],
    applications: ["Agriculture", "Fertilizer Production", "Chemical Industry", "Food Industry"],
    dataSheet: "/datasheets/phosphate.pdf",
  },
  {
    id: "limestone-gravel",
    name: "Limestone Gravel",
    category: "Construction Materials",
    image: "/limestone-gravel-aggregate.jpg",
    description: "High-quality limestone gravel for construction, road building, and aggregate applications",
    specifications: [
      { label: "CaCO₃ Content", value: "92-96%" },
      { label: "Particle Size", value: "10-50mm" },
      { label: "Density", value: "2.7 g/cm³" },
      { label: "Hardness (Mohs)", value: "3-4" },
      { label: "Compressive Strength", value: ">100 MPa" },
    ],
    applications: ["Construction", "Road Building", "Concrete Production", "Landscaping"],
    dataSheet: "/datasheets/limestone-gravel.pdf",
  },
  {
    id: "limestone-powder",
    name: "Limestone Powder (CaCO₃)",
    category: "Construction Materials",
    image: "/limestone-powder-calcium-carbonate.jpg",
    description: "Fine limestone powder for industrial, construction, and chemical applications",
    specifications: [
      { label: "CaCO₃ Content", value: "94-98%" },
      { label: "Particle Size", value: "<200 mesh" },
      { label: "Whiteness", value: ">92%" },
      { label: "Purity", value: ">95%" },
      { label: "Moisture Content", value: "<2%" },
    ],
    applications: ["Construction", "Paint Industry", "Plastics", "Agriculture", "Chemical Processing"],
    dataSheet: "/datasheets/limestone-powder.pdf",
  },
  {
    id: "talc",
    name: "MICRON Talc 40 (Processed)",
    category: "Industrial Minerals",
    image: "/talc-powder-mineral.jpg",
    description: "Fine particle processed talc for paper coating, powder coatings, and industrial applications",
    specifications: [
      { label: "SiO₂ Content", value: "61% Min" },
      { label: "MgO Content", value: "33% Min" },
      { label: "Whiteness", value: "86% Min" },
      { label: "Main Particle Size", value: "40 μm" },
      { label: "Oil Absorption", value: "45-55%" },
    ],
    applications: ["Paper Coating", "Powder Coatings", "Paints", "Rubber", "Cosmetics"],
    dataSheet: "/datasheets/talc.pdf",
  },
  {
    id: "feldspar",
    name: "Processed Feldspar",
    category: "Industrial Minerals",
    image: "/feldspar-mineral.jpg",
    description: "Premium grade feldspar for glass, ceramics, and enamel manufacturing",
    specifications: [
      { label: "Al₂O₃ Content", value: "16-20%" },
      { label: "K₂O/Na₂O Content", value: "8-12%" },
      { label: "SiO₂ Content", value: "64-68%" },
      { label: "Particle Size", value: "<200 mesh" },
      { label: "Color", value: "White/Off-white" },
    ],
    applications: ["Glass Manufacturing", "Ceramics", "Enamel Production", "Fiberglass"],
    dataSheet: "/datasheets/feldspar.pdf",
  },
  {
    id: "iron-oxide",
    name: "Red Iron Oxide (Natural)",
    category: "Pigments/Colorants",
    image: "/red-iron-oxide-pigment.jpg",
    description: "Natural red iron oxide for paint, coating, and pigment applications",
    specifications: [
      { label: "Fe₂O₃ Content", value: "96% Min" },
      { label: "Color Index", value: "PR101" },
      { label: "Particle Size", value: "0.1-0.5 μm" },
      { label: "Brightness", value: "60-70%" },
      { label: "Solubility", value: "Insoluble" },
    ],
    applications: ["Paint Industry", "Coatings", "Pigments", "Concrete Coloring", "Cosmetics"],
    dataSheet: "/datasheets/iron-oxide.pdf",
  },
]

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((p) => p.category))]
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                  : "bg-muted text-foreground hover:bg-muted/70 border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{product.description}</p>

                {/* Key Specifications */}
                <div className="mb-5 pb-5 border-b border-border/30">
                  <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Award size={16} className="text-primary" />
                    Key Specifications
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.specifications.slice(0, 4).map((spec, idx) => (
                      <li key={idx} className="text-xs">
                        <span className="font-semibold text-foreground">{spec.label}</span>
                        <div className="text-foreground/70">{spec.value}</div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="mb-5 pb-5 border-b border-border/30">
                  <h4 className="text-sm font-semibold mb-2">Applications</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx} className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-md font-medium">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <a
                    href={product.dataSheet}
                    download
                    className="flex-1 px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all flex items-center justify-center gap-2 text-sm group/btn"
                  >
                    <Download size={16} className="group-hover/btn:animate-bounce" />
                    <span className="hidden sm:inline">Data Sheet</span>
                    <span className="sm:hidden">Download</span>
                  </a>
                  <a
                    href="/get-quote"
                    className="flex-1 px-4 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-center text-sm"
                  >
                    Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
