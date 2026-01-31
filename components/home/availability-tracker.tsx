"use client"

import { Package, Clock, Truck } from "lucide-react"

export default function AvailabilityTracker() {
  const products = [
    {
      name: "Calcium Carbonate (Natural)",
      inStock: 45000,
      capacity: 50000,
      leadTime: "7-10 days",
      status: "In Stock",
      nextProduction: "2026-02-15",
    },
    {
      name: "Calcium Carbonate (Treated)",
      inStock: 28000,
      capacity: 35000,
      leadTime: "10-14 days",
      status: "In Stock",
      nextProduction: "2026-02-10",
    },
    {
      name: "Kaolin Grade A",
      inStock: 15000,
      capacity: 22000,
      leadTime: "14-21 days",
      status: "Limited Stock",
      nextProduction: "2026-02-20",
    },
    {
      name: "Talc Powder Multi-Grade",
      inStock: 8000,
      capacity: 12000,
      leadTime: "21-28 days",
      status: "Low Stock",
      nextProduction: "2026-02-25",
    },
    {
      name: "Super Phosphate",
      inStock: 35000,
      capacity: 40000,
      leadTime: "5-7 days",
      status: "In Stock",
      nextProduction: "2026-02-08",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Real-Time Availability</h2>
          <p className="text-xl text-muted-foreground">Live inventory and delivery information</p>
        </div>

        {/* Availability Table */}
        <div className="bg-card border rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b">
                <tr>
                  <th className="text-left py-4 px-6 font-bold">Product</th>
                  <th className="text-center py-4 px-6 font-bold">In Stock</th>
                  <th className="text-center py-4 px-6 font-bold">Capacity</th>
                  <th className="text-center py-4 px-6 font-bold">Lead Time</th>
                  <th className="text-center py-4 px-6 font-bold">Status</th>
                  <th className="text-center py-4 px-6 font-bold">Next Production</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {products.map((product, idx) => {
                  const stockPercentage = (product.inStock / product.capacity) * 100
                  const statusColor = 
                    product.status === "In Stock" ? "bg-green-500/20 text-green-700" :
                    product.status === "Limited Stock" ? "bg-amber-500/20 text-amber-700" :
                    "bg-red-500/20 text-red-700"

                  return (
                    <tr key={idx} className="hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-6 font-semibold">{product.name}</td>
                      <td className="text-center py-4 px-6">
                        <div className="flex flex-col items-center gap-2">
                          <p className="font-bold">{product.inStock.toLocaleString()} MT</p>
                          <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-primary/60"
                              style={{ width: `${stockPercentage}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <p className="font-semibold">{product.capacity.toLocaleString()} MT</p>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="flex items-center justify-center gap-2 text-sm font-semibold">
                          <Clock size={16} />
                          {product.leadTime}
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColor}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="text-center py-4 px-6">
                        <p className="text-sm font-semibold text-muted-foreground">{product.nextProduction}</p>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Package size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Quick Delivery</h3>
                <p className="text-sm text-muted-foreground">Most products available for shipment within 7-10 days</p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Truck size={24} className="text-green-500" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Flexible Logistics</h3>
                <p className="text-sm text-muted-foreground">Multiple shipping options and delivery methods available</p>
              </div>
            </div>
          </div>

          <div className="bg-card border rounded-xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock size={24} className="text-blue-500" />
              </div>
              <div>
                <h3 className="font-bold mb-2">Regular Updates</h3>
                <p className="text-sm text-muted-foreground">Real-time tracking and proactive delivery notifications</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Need Custom Scheduling?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We can arrange production schedules and dedicated shipments for long-term partnerships
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
          >
            Schedule a Meeting
          </a>
        </div>
      </div>
    </section>
  )
}
