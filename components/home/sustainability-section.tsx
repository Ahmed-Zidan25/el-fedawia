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

  /* const milestones = [
    { year: 2024, milestone: "50% carbon reduction achieved" },
    { year: 2025, milestone: "Complete solar installation at all facilities" },
    { year: 2026, milestone: "Zero-waste production certification" },
    { year: 2027, milestone: "Achieve water neutrality" },
    { year: 2028, milestone: "100% renewable energy transition" },
    { year: 2030, milestone: "Carbon-negative operations" },
  ] */

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

       
      </div>
    </section>
  )
}
