'use client'

import { useEffect, useState } from 'react'
import { CheckCircle2, Zap, Shield } from 'lucide-react'
import Image from 'next/image'

const featuredProducts = [
  {
    id: 1,
    name: 'Calcium Carbonate',
    subtitle: 'Natural Grade',
    image: '/featured-calcium-carbonate-natural.jpg',
    description: 'Pure natural calcium carbonate for diverse industrial applications',
    features: [
      'High whiteness (96-98%)',
      'Low moisture content',
      'Consistent particle size',
      'ISO certified quality'
    ],
   /*  applications: ['Paints & Coatings', 'Plastics', 'Paper Industry', 'Construction'], */
    color: 'from-blue-50 to-blue-100'
  },
  {
    id: 2,
    name: 'Coated calcium carbonate',
    subtitle: 'Advanced Coated Grade',
    image: '/featured-calcium-carbonate-treated.png',
    description: 'Surface-treated calcium carbonate with advanced dispersion properties',
    features: [
      'Advanced dispersion coating',
      'Prevents clumping',
      'Hydrophobic environments compatible',
      'Enhanced consistency'
    ],
    /* applications: ['High-Performance Coatings', 'Specialty Chemicals', 'Premium Plastics'], */
    color: 'from-purple-50 to-purple-100'
  },
  {
    id: 3,
    name: 'Talc Powder',
    subtitle: 'Multi-Grade Selection',
    image: '/featured-talc-powder.jpg',
    description: 'Premium talc powder with multiple micron grades for specialized applications',
    features: [
      'Multiple grade options',
      'Fine particle distribution',
      'Stringent quality control',
      'Micron-level consistency'
    ],
    /* applications: ['Ceramics', 'Rubber', 'Cosmetics', 'Industrial Applications'], */
    color: 'from-amber-50 to-amber-100'
  },
  {
    id: 4,
    name: 'Limestone',
    subtitle: 'Industrial Grade',
    image: '/featured-limestone.jpg',
    description: 'High-purity sedimentary rock essential for construction and chemical processes',
    features: [
      'High CaCO3 content',
      'Excellent durability',
      'Low impurities level',
      'Customized crushing sizes'
    ],
    color: 'from-slate-50 to-slate-200'
  },
  {
    id: 5,
    name: 'Agricultural Gypsum',
    subtitle: 'Soil Conditioner',
    image: '/featured-gypsum.jpg',
    description: 'Natural mineral used to improve soil structure and provide essential nutrients',
    features: [
      'Rich in Calcium and Sulfur',
      'Neutralizes soil salinity',
      'Improves water infiltration',
      'Finely ground for easy application'
    ],
    color: 'from-amber-50 to-amber-100'
  },
  {
    id: 6,
    name: 'Rock Phosphate Powder',
    subtitle: 'Natural Fertilizer',
    image: '/featured-phosphate.jpg',
    description: 'Organic phosphorus source for long-term soil fertility and plant growth',
    features: [
      'High P2O5 concentration',
      'Slow-release nutrient delivery',
      '100% natural organic source',
      'Optimized for direct application'
    ],
    color: 'from-orange-50 to-orange-100'
  },
  {
    id: 7,
    name: 'Kaolin',
    subtitle: 'Refined White Clay',
    image: '/featured-kaolin.jpg',
    description: 'Soft white clay widely used in ceramics, paper, and paint industries',
    features: [
      'Exceptional brightness',
      'Fine plate-like structure',
      'Chemical inertness',
      'High thermal resistance'
    ],
    color: 'from-gray-50 to-gray-100'
  },
  {
    id: 8,
    name: 'Feldspar',
    subtitle: 'Potassium / Sodium Grade',
    image: '/featured-feldspar.jpg',
    description: 'Essential fluxing agent for the glass and ceramic manufacturing sectors',
    features: [
      'Alkali-rich composition',
      'Low iron content',
      'Consistent melting behavior',
      'Enhances ceramic durability'
    ],
    color: 'from-rose-50 to-rose-100'
  }
]

export default function FeaturedProducts() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('featured-products')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="featured-products" className="py-12 md:py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our premium mineral solutions engineered for excellence across diverse industries
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl h-full flex flex-col">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  {/* Product Name */}
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-primary mb-1">{product.subtitle}</p>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{product.description}</p>
                  </div>

                  {/* Features */}
                  <div className="mb-6 space-y-2 flex-1">
                    <p className="text-sm font-semibold text-foreground/80 mb-3">Key Features:</p>
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications */}
                 {/*  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/80 mb-3">Applications:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/30">
                    <a
                      href="/products"
                      className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all text-center text-sm"
                    >
                      Learn More
                    </a>
                    {/* <a
                      href="/get-quote"
                      className="flex-1 px-4 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-all text-center text-sm"
                    >
                      Get Quote
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-foreground/80 mb-6">
            Interested in our complete product portfolio? Explore all available grades and specifications.
          </p>
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
          >
            <Zap size={20} />
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
