"use client"

import { Award, Truck, DollarSign, Headphones } from "lucide-react"

export default function ProductsDetails() {
  const features = [
    {
      title: "Premium Quality",
      description: "Rigorous quality control and testing ensures only the best products reach our customers",
      icon: Award,
    },
    {
      title: "Reliable Delivery",
      description: "On-time delivery with large inventory to meet your production demands",
      icon: Truck,
    },
    {
      title: "Competitive Pricing",
      description: "Excellent value for money with bulk discounts and flexible payment terms",
      icon: DollarSign,
    },
    {
      title: "Expert Support",
      description: "Technical assistance and consultation from our experienced professionals",
      icon: Headphones,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-muted/30 border-t border-border relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Why Choose Our Products?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-leading quality with unmatched customer service and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group bg-card/80 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-3 bg-primary/20 rounded-lg w-fit mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-transparent rounded-2xl border border-primary/30 p-8 md:p-12">
          <p className="text-muted-foreground mb-6 text-lg">Ready to partner with El Fedawia?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl"
            >
              Contact Sales Team
            </a>
            <a
              href="/products"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-all"
            >
              Browse All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
