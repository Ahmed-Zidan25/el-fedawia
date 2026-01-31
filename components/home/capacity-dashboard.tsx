"use client"

import { Activity, Zap, TrendingUp } from "lucide-react"

export default function CapacityDashboard() {
  const capacityData = [
    {
      product: "Calcium Carbonate",
      annual: 280000,
      monthly: 23333,
      utilization: 85,
      status: "Operating",
    },
    {
      product: "Kaolin",
      annual: 150000,
      monthly: 12500,
      utilization: 72,
      status: "Operating",
    },
    {
      product: "Talc Powder",
      annual: 95000,
      monthly: 7917,
      utilization: 68,
      status: "Operating",
    },
    {
      product: "Phosphate",
      annual: 120000,
      monthly: 10000,
      utilization: 78,
      status: "Operating",
    },
  ]

  const totalCapacity = capacityData.reduce((sum, item) => sum + item.annual, 0)
  const avgUtilization = Math.round(
    capacityData.reduce((sum, item) => sum + item.utilization, 0) / capacityData.length
  )

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Production Capacity</h2>
          <p className="text-xl text-muted-foreground">Transparent supply chain visibility and production metrics</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card border rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Total Annual Capacity</h3>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Activity size={24} className="text-primary" />
              </div>
            </div>
            <p className="text-4xl font-bold">{(totalCapacity / 1000).toFixed(0)}K</p>
            <p className="text-muted-foreground text-sm mt-2">Metric Tons per Year</p>
          </div>

          <div className="bg-card border rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Average Utilization</h3>
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Zap size={24} className="text-green-500" />
              </div>
            </div>
            <p className="text-4xl font-bold">{avgUtilization}%</p>
            <p className="text-muted-foreground text-sm mt-2">Across All Products</p>
          </div>

          <div className="bg-card border rounded-xl p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Monthly Output</h3>
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <TrendingUp size={24} className="text-blue-500" />
              </div>
            </div>
            <p className="text-4xl font-bold">{(totalCapacity / 12 / 1000).toFixed(1)}K</p>
            <p className="text-muted-foreground text-sm mt-2">Average Monthly</p>
          </div>
        </div>

        {/* Capacity by Product */}
        <div className="bg-card border rounded-xl p-8 mb-12">
          <h3 className="font-bold text-lg mb-8">Production by Product</h3>
          <div className="space-y-8">
            {capacityData.map((product, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-bold">{product.product}</p>
                    <p className="text-sm text-muted-foreground">{product.annual.toLocaleString()} MT/year • {product.monthly.toLocaleString()} MT/month</p>
                  </div>
                  <span className="text-lg font-bold text-primary">{product.utilization}%</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="flex-1 bg-secondary rounded-full h-4 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all"
                      style={{ width: `${product.utilization}%` }}
                    />
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-700 px-3 py-1 rounded-full font-semibold">
                    {product.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Supply Assurance */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="font-bold text-lg mb-6">Supply Chain Assurance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold mb-4">Production Guarantees</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Dedicated production lines for each product type</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Real-time production monitoring and reporting</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Backup systems ensure 99.5% uptime</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quality Consistency</h4>
              <ul className="space-y-3">
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Batch testing on every production run</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Long-term supply contracts available</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="w-5 h-5 bg-primary text-primary-foreground rounded flex items-center justify-center flex-shrink-0 text-xs">✓</span>
                  <span>Strategic inventory buffers for demand peaks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
