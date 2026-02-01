"use client"

import { MapPin, Warehouse } from "lucide-react"

export default function DistributionMap() {
  const locations = [
    {
      type: "Mining Site",
      city: "Bani Suef",
      country: "Egypt",
      capacity: "500,000 MT/year",
      coordinates: { x: 48, y: 55 },
    },
    {
      type: "Processing Plant",
      city: "Cairo",
      country: "Egypt",
      capacity: "300,000 MT/year",
      coordinates: { x: 50, y: 52 },
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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Distribution Network</h2>
          <p className="text-xl text-muted-foreground">Strategic locations and supply chain excellence</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map Visualization */}
          <div className="lg:col-span-2">
            <div className="bg-card border rounded-xl p-8 h-96 flex flex-col">
              <h3 className="font-bold text-lg mb-6">Our Global Presence</h3>
              
              <div className="flex-1 relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden">
                {/* Simplified World Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    <path d="M10,20 L20,15 L25,20 L30,18 L35,22" stroke="currentColor" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="0.5" />
                    <path d="M40,30 L50,25 L55,30 L60,28" stroke="currentColor" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="0.5" />
                    <path d="M65,35 L75,32 L80,35 L85,33" stroke="currentColor" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="0.5" />
                  </svg>
                </div>

                {/* Location Markers */}
                {locations.map((location, idx) => (
                  <div
                    key={idx}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                    style={{
                      left: `${location.coordinates.x}%`,
                      top: `${location.coordinates.y}%`,
                    }}
                  >
                    <div className="flex items-center gap-2 bg-card border border-primary rounded-lg px-3 py-2 whitespace-nowrap shadow-lg">
                      <MapPin size={16} className="text-primary" />
                      <div>
                        <p className="text-xs font-bold">{location.city}</p>
                        <p className="text-xs text-muted-foreground">{location.type}</p>
                      </div>
                    </div>
                    <div className="absolute w-2 h-2 bg-primary rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10 animate-pulse" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Locations List */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Operational Locations</h3>
            <div className="space-y-3">
              {locations.map((location, idx) => (
                <div key={idx} className="bg-card border rounded-lg p-4 hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Warehouse size={18} className="text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm">{location.city}, {location.country}</p>
                      <p className="text-xs text-muted-foreground">{location.type}</p>
                      <p className="text-xs text-primary font-semibold mt-1">{location.capacity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Distribution */}
        <div className="mt-16 bg-card border rounded-xl p-8">
          <h3 className="font-bold text-lg mb-8">Market Reach by Region</h3>
          <div className="space-y-6">
            {marketRegions.map((region, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold">{region.name}</p>
                  <p className="text-primary font-bold">{region.percentage}%</p>
                </div>
                <div className="w-full bg-secondary rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${region.color} transition-all`}
                    style={{ width: `${region.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Need local support? Connect with our regional teams</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
          >
            Find Your Local Team
          </a>
        </div>
      </div>
    </section>
  )
}
