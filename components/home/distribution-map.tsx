"use client"

import { MapPin, Warehouse, Globe2 } from "lucide-react"

export default function DistributionMap() {
  const locations = [
    {
      type: "Processing Plant",
      city: "Cairo",
      country: "Egypt",
      capacity: "300,000 MT/year",
      coordinates: { x: 50, y: 48 }, // Cairo is North
    },
    {
      type: "Mining Site",
      city: "Bani Suef",
      country: "Egypt",
      capacity: "500,000 MT/year",
      coordinates: { x: 49.5, y: 56 }, // Bani Suef is South of Cairo
    },
  ]

  const marketRegions = [
    { name: "Middle East", percentage: 35, color: "from-blue-500 to-blue-600" },
    { name: "South Asia", percentage: 28, color: "from-green-500 to-green-600" },
    { name: "Africa", percentage: 20, color: "from-amber-500 to-amber-600" },
    { name: "Europe", percentage: 12, color: "from-purple-500 to-purple-600" },
    { name: "Others", percentage: 5, color: "from-gray-500 to-gray-600" },
  ]

  return (
    <section className="py-20 px-4 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Globe2 size={16} />
            <span>Global Reach</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Distribution</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our operations are strategically located to ensure efficient supply chain management and rapid global delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Map Visualization */}
          <div className="lg:col-span-2 relative aspect-[4/3] bg-slate-200 dark:bg-slate-900 rounded-3xl overflow-hidden border border-border shadow-inner">
            {/* Natural Map Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
            />
            
            {/* Simplified Map Contours/Lines for a "Natural" feel */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[80%] h-[80%] border-2 border-primary/5 rounded-full scale-[1.5] blur-sm" />
              <div className="w-[60%] h-[60%] border border-primary/10 rounded-full blur-xs" />
            </div>

            {/* Location Pins */}
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="absolute transition-all duration-500 hover:z-10 group"
                style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none" />
                  <div className="relative bg-background border-2 border-primary p-2 rounded-full shadow-lg cursor-pointer transform group-hover:scale-110 transition-transform">
                    {loc.type === "Mining Site" ? (
                      <MapPin className="w-5 h-5 text-primary" />
                    ) : (
                      <Warehouse className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-popover border border-border rounded-lg shadow-xl p-3 text-sm">
                      <p className="font-bold text-primary">{loc.city}</p>
                      <p className="text-xs font-medium mb-1">{loc.type}</p>
                      <p className="text-xs text-muted-foreground">Capacity: {loc.capacity}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Market Stats Card */}
          <div className="bg-card border rounded-2xl p-8 shadow-sm h-full">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
              Market Distribution
            </h3>
            <div className="space-y-6">
              {marketRegions.map((region, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">{region.name}</p>
                    <p className="text-xs font-mono font-bold text-muted-foreground">{region.percentage}%</p>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${region.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Our logistics network spans over 40 countries, providing seamless door-to-door delivery.</p>
              <a
                href="/contact"
                className="flex items-center justify-center w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-95"
              >
                Find Local Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}