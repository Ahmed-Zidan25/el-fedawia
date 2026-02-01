"use client"

import { MapPin, Warehouse, Globe2, Factory, Mountain } from "lucide-react"

export default function DistributionMap() {
  const locations = [
    {
      type: "Processing Plant",
      city: "Cairo",
      label: "Headquarters & Processing",
      description: "Our primary processing facility and administrative hub, strategically located for global logistics.",
      capacity: "300,000 MT/year",
      coordinates: { x: 58, y: 32 }, // Adjusted for Egypt-only map
      icon: Factory,
      color: "from-blue-500 to-cyan-400"
    },
    {
      type: "Mining Site",
      city: "Bani Suef",
      label: "Primary Extraction Site",
      description: "Rich mineral deposits providing high-purity raw materials for our industrial grade products.",
      capacity: "500,000 MT/year",
      coordinates: { x: 57, y: 44 }, // South of Cairo
      icon: Mountain,
      color: "from-amber-500 to-orange-400"
    },
  ]

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <Globe2 size={18} />
            <span>Strategic Operations</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Footprint in Egypt</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically located extraction and processing facilities ensuring a seamless supply chain from mine to market.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Detailed Location Cards (Separate Cards) */}
          <div className="lg:col-span-4 order-2 lg:order-1 space-y-6">
            {locations.map((loc, idx) => {
              const Icon = loc.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${loc.color} opacity-5 rounded-bl-full -z-0`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${loc.color} text-white shadow-lg`}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{loc.city}</h3>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary/70">{loc.type}</p>
                      </div>
                    </div>
                    
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      {loc.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                      <span className="text-xs font-bold text-slate-400">Annual Capacity</span>
                      <span className="text-sm font-black text-slate-900 dark:text-white">{loc.capacity}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Egypt Map Visualization */}
          <div className="lg:col-span-8 order-1 lg:order-2 relative aspect-[4/3] bg-white dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden group">
            
            {/* Minimalist Egypt SVG Path Background */}
            <div className="absolute inset-0 flex items-center justify-center p-12 opacity-20 dark:opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-400 dark:fill-white">
                    <path d="M15,10 L85,10 L88,90 L12,90 Z" /> {/* Simplified Egypt shape for aesthetic feel */}
                </svg>
            </div>

            {/* Natural Map Detail (River Nile Stylized) */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute left-[58%] top-0 w-1 h-full bg-blue-400/10 blur-sm" />
            </div>

            {/* Location Pins */}
            {locations.map((loc, idx) => (
              <div
                key={idx}
                className="absolute transition-all duration-700"
                style={{ left: `${loc.coordinates.x}%`, top: `${loc.coordinates.y}%` }}
              >
                <div className="relative -translate-x-1/2 -translate-y-1/2">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${loc.color} animate-ping opacity-20 scale-150`} />
                  <div className={`relative bg-white dark:bg-slate-800 border-4 border-white dark:border-slate-900 p-3 rounded-full shadow-2xl transform transition-transform group-hover:scale-110`}>
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Map Label */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap">
                    <span className="bg-slate-900 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg">
                      {loc.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Map Legend/Compass */}
            <div className="absolute bottom-8 right-8 text-slate-300 dark:text-slate-700 pointer-events-none">
                <p className="text-[60px] font-black select-none">EGYPT</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}