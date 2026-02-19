"use client"

import { Leaf, Droplet, Wind, Zap, Recycle, Target } from "lucide-react"

export default function SustainabilitySection() {
  const initiatives = [
    {
      icon: Leaf,
      title: "Eco-Friendly Mining",
      description: "Implement best practices in land restoration and biodiversity conservation at mining sites",
      stats: "95% land restoration",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Droplet,
      title: "Water Conservation",
      description: "Advanced water recycling systems reducing consumption by 60% across facilities",
      stats: "60% water reduction",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Wind,
      title: "Carbon Neutrality",
      description: "Target to achieve carbon-neutral operations by 2030 through renewable energy",
      stats: "45% emissions reduced",
      color: "from-slate-500 to-slate-600",
    },
    {
      icon: Zap,
      title: "Renewable Energy",
      description: "80% of processing facilities powered by solar and wind energy",
      stats: "80% renewable power",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      description: "Zero-waste initiatives and complete recycling of production byproducts",
      stats: "95% waste recycled",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Target,
      title: "Sustainable Supply Chain",
      description: "Partnership with eco-conscious logistics providers and sustainable packaging",
      stats: "100% recyclable packaging",
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const milestones = [
    { year: 2024, milestone: "50% carbon reduction achieved" },
    { year: 2025, milestone: "Complete solar installation at all facilities" },
    { year: 2026, milestone: "Zero-waste production certification" },
    { year: 2027, milestone: "Achieve water neutrality" },
    { year: 2028, milestone: "100% renewable energy transition" },
    { year: 2030, milestone: "Carbon-negative operations" },
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-green-500/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Sustainability & Environmental Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Committed to responsible mining and manufacturing for a sustainable future
          </p>
        </div>

        {/* Initiative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {initiatives.map((initiative, idx) => {
            const Icon = initiative.icon
            return (
              <div key={idx} className="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className={`h-1 bg-gradient-to-r ${initiative.color}`} />
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${initiative.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{initiative.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{initiative.description}</p>
                  <div className="pt-4 border-t">
                    <p className="text-primary font-bold text-sm">{initiative.stats}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Roadmap */}
        <div className="bg-card border rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Sustainability Roadmap 2024-2030</h3>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-primary transform md:-translate-x-1/2" />

            {/* Timeline Items */}
            <div className="space-y-8 md:space-y-0">
              {milestones.map((item, idx) => (
                <div key={idx} className={`flex gap-8 md:mb-12 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="flex-1" />
                  <div className={`flex-1 relative ${idx % 2 === 0 ? "text-right" : ""}`}>
                    <div className="absolute left-4 md:left-1/2 top-3 w-8 h-8 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 -translate-x-1/2 md:translate-x-0" />
                    <div className="bg-secondary/50 rounded-lg p-6">
                      <p className="text-sm font-bold text-primary mb-1">{item.year}</p>
                      <p className="font-semibold">{item.milestone}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Environmental Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-green-600 mb-2">12,000</p>
            <p className="text-sm text-muted-foreground">Hectares Restored</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">15M</p>
            <p className="text-sm text-muted-foreground">Liters Water Saved Annually</p>
          </div>
          <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 border border-amber-500/20 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-amber-600 mb-2">50K</p>
            <p className="text-sm text-muted-foreground">Tons CO2 Reduced</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl p-6 text-center">
            <p className="text-3xl font-bold text-purple-600 mb-2">95%</p>
            <p className="text-sm text-muted-foreground">Waste Diverted from Landfills</p>
          </div>
        </div>

        {/* Community & Social Responsibility */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Community & Social Responsibility</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4">Local Community Programs</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Direct employment of 5,000+ local workers</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Vocational training and skills development programs</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Community development projects in mining regions</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Industry Leadership</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Active member of global sustainability initiatives</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Research partnerships with environmental organizations</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Transparent sustainability reporting and audits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
