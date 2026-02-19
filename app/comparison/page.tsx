"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"
import { Check, X } from "lucide-react"

export default function ComparisonPage() {
  const [selectedProducts, setSelectedProducts] = useState(["calcium-natural", "calcium-treated", "talc"])

  const products = {
    "calcium-natural": {
      name: "Calcium Carbonate (Natural)",
      grade: "Standard Grade",
      whiteness: "96-98%",
      particleSize: "2-10 microns",
      moistureContent: "<0.5%",
      purity: "98%+",
      density: "2.71 g/cm³",
      ph: "8-9",
      applications: ["Agriculture", "Construction", "Ceramics"],
      price: "$$",
      certifications: ["ISO 9001", "ISO 14001"],
    },
    "calcium-treated": {
      name: "Calcium Carbonate (Treated)",
      grade: "Advanced Coated",
      whiteness: "98%+",
      particleSize: "1-5 microns",
      moistureContent: "<0.3%",
      purity: "99%+",
      density: "2.71 g/cm³",
      ph: "8-9",
      applications: ["Paints", "Plastics", "Rubber"],
      price: "$$$",
      certifications: ["ISO 9001", "ISO 14001", "FDA"],
    },
    talc: {
      name: "Talc Powder",
      grade: "Multi-Grade",
      whiteness: "95-97%",
      particleSize: "1-20 microns",
      moistureContent: "<0.5%",
      purity: "96%+",
      density: "2.78 g/cm³",
      ph: "7-8",
      applications: ["Cosmetics", "Paints", "Ceramics"],
      price: "$$",
      certifications: ["ISO 9001", "Cosmetics Grade"],
    },
  }

  const specs = [
    { key: "whiteness", label: "Whiteness (%)" },
    { key: "particleSize", label: "Particle Size" },
    { key: "moistureContent", label: "Moisture Content" },
    { key: "purity", label: "Purity" },
    { key: "density", label: "Density" },
    { key: "ph", label: "pH Level" },
  ]

  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Comparison Tool</h1>
            <p className="text-xl text-muted-foreground">Compare specifications across our product range to find the perfect fit for your needs</p>
          </div>

          {/* Product Selector */}
          <div className="mb-12 p-6 bg-card rounded-lg border">
            <h2 className="text-lg font-semibold mb-6">Select Products to Compare</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(products).map(([key, product]) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedProducts(prev =>
                      prev.includes(key) ? prev.filter(p => p !== key) : [...prev, key]
                    )
                  }}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedProducts.includes(key)
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="font-semibold">{product.name}</div>
                  <div className="text-sm text-muted-foreground">{product.grade}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-4 px-6 font-bold">Specification</th>
                  {selectedProducts.map(key => (
                    <th key={key} className="text-center py-4 px-6 font-bold">
                      {products[key as keyof typeof products].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {specs.map(spec => (
                  <tr key={spec.key} className="border-b hover:bg-secondary/50">
                    <td className="py-4 px-6 font-semibold text-muted-foreground">{spec.label}</td>
                    {selectedProducts.map(key => {
                      const product = products[key as keyof typeof products]
                      const value = product[spec.key as keyof typeof product]
                      return (
                        <td key={`${key}-${spec.key}`} className="text-center py-4 px-6">
                          {value}
                        </td>
                      )
                    })}
                  </tr>
                ))}
                
                <tr className="bg-primary/5 border-y-2">
                  <td className="py-4 px-6 font-semibold">Applications</td>
                  {selectedProducts.map(key => (
                    <td key={key} className="text-center py-4 px-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {products[key as keyof typeof products].applications.map(app => (
                          <span key={app} className="px-2 py-1 bg-primary/20 text-primary rounded text-sm">
                            {app}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="border-b">
                  <td className="py-4 px-6 font-semibold">Certifications</td>
                  {selectedProducts.map(key => (
                    <td key={key} className="text-center py-4 px-6">
                      <div className="flex flex-wrap gap-2 justify-center">
                        {products[key as keyof typeof products].certifications.map(cert => (
                          <span key={cert} className="text-xs px-2 py-1 bg-green-500/20 text-green-700 rounded">
                            {cert}
                          </span>
                        ))}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/get-quote"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
            >
              Request Quote for Selected Products
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
