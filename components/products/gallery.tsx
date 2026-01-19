"use client"

import { useState } from "react"
import { Download, Info, Zap } from "lucide-react"

interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  specs: string[]
  dataSheet: string
}

const products: Product[] = [
  {
    id: "phosphate",
    name: "Super Phosphate",
    category: "Phosphate",
    image: "/images/4.jpeg",
    description: "High-purity phosphate fertilizer for agricultural applications with enhanced crop yield",
    specs: ["P₂O₅: 16-18%", "CaO: 40-45%", "Moisture: <3%", "Particle size: 1-4mm"],
    dataSheet: "/datasheets/super-phosphate.pdf",
  },
  {
    id: "kaolin-1",
    name: "Kaolin Grade A",
    category: "Kaolin",
    image: "/images/9.jpeg",
    description: "Premium grade kaolin for ceramic and coating applications with superior brightness",
    specs: ["Al₂O₃: 38-40%", "SiO₂: 45-50%", "Fe₂O₃: <0.5%", "Brightness: >80%"],
    dataSheet: "/datasheets/kaolin-grade-a.pdf",
  },
  {
    id: "talc-2",
    name: "MICRON Talc 40 Grade 2",
    category: "Talc",
    image: "/images/7.jpeg",
    description: "Fine particle talc for paper coating, powder coating and industrial applications",
    specs: ["SiO₂: 61.00% Min", "MgO: 33.00% Min", "Whiteness: 86% Min", "Main particle size: 40 μm"],
    dataSheet: "/datasheets/micron-talc-grade-2.pdf",
  },
  {
    id: "limestone",
    name: "Crushed Limestone",
    category: "Limestone",
    image: "/images/10.jpeg",
    description: "High-quality limestone for construction and industrial use with consistent particle distribution",
    specs: ["CaCO₃: 92-96%", "Size: 10-50mm", "Density: 2.7 g/cm³", "Hardness: 3-4"],
    dataSheet: "/datasheets/limestone.pdf",
  },
  {
    id: "limestone-powder",
    name: "Limestone Powder",
    category: "Limestone",
    image: "/images/14.jpeg",
    description: "Fine limestone powder for multiple industrial applications with premium whiteness",
    specs: ["CaCO₃: 94-98%", "Particle size: <200 mesh", "Whiteness: >92%", "Purity: 95%+"],
    dataSheet: "/datasheets/limestone-powder.pdf",
  },
  {
    id: "raw-mineral",
    name: "Raw Mineral Ore",
    category: "Raw Materials",
    image: "/industrial-mining-raw-material.jpg",
    description: "Unprocessed mineral ore for further processing and refinement with high purity",
    specs: ["Variable composition", "High purity source", "Consistent quality", "Bulk availability"],
    dataSheet: "/datasheets/raw-mineral.pdf",
  },
]

export default function ProductsGallery() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(products[0])
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((p) => p.category))]
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setSelectedProduct(
                  category === "All" ? products[0] : products.find((p) => p.category === category) || null,
                )
              }}
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Product Gallery Grid */}
          <div className="lg:col-span-3">
            {/* Main Display */}
            {selectedProduct && (
              <div className="mb-8">
                <div className="relative h-80 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden bg-muted border-2 border-border shadow-2xl group">
                  <img
                    src={selectedProduct.image || "/placeholder.svg"}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-lg">
                    {selectedProduct.category}
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-4">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className={`group relative h-40 sm:h-44 rounded-xl overflow-hidden border-2 transition-all duration-300 hover:shadow-xl ${
                    selectedProduct?.id === product.id
                      ? "border-primary shadow-lg shadow-primary/50 scale-105"
                      : "border-border hover:border-primary/50 hover:scale-105"
                  }`}
                >
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-white font-semibold text-sm line-clamp-2">{product.name}</span>
                  </div>
                  {selectedProduct?.id === product.id && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details Sidebar */}
          {selectedProduct && (
            <div className="lg:col-span-1">
              <div className="sticky top-24 h-fit">
                <div className="bg-gradient-to-br from-card via-card to-card/50 rounded-2xl border-2 border-border/50 p-6 md:p-8 shadow-2xl backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 line-clamp-2">{selectedProduct.name}</h2>
                    <p className="text-primary font-semibold flex items-center gap-2 text-sm">
                      <Zap size={16} />
                      {selectedProduct.category}
                    </p>
                  </div>

                  <p className="text-foreground/75 leading-relaxed mb-6 pb-6 border-b border-border/50 text-sm">
                    {selectedProduct.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="mb-6">
                    <h3 className="font-bold mb-3 flex items-center gap-2 text-sm">
                      <Info size={16} className="text-primary" />
                      Technical Specs
                    </h3>
                    <ul className="space-y-2">
                      {selectedProduct.specs.map((spec, index) => (
                        <li key={index} className="text-foreground/70 flex items-start gap-2 text-xs">
                          <span className="text-primary font-bold text-lg leading-none mt-0.5 flex-shrink-0">◆</span>
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-2">
                    <a
                      href={selectedProduct.dataSheet}
                      download
                      className="w-full px-4 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group text-sm"
                    >
                      <Download size={16} className="group-hover:animate-bounce" />
                      Download Data Sheet
                    </a>
                    <a
                      href="/get-quote"
                      className="w-full px-4 py-2.5 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all text-center text-sm"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
