"use client"

import { Globe2, Factory, Mountain, ExternalLink, MapPin } from "lucide-react"

export default function DistributionMap() {
  const locations = [
    {
      type: "Processing Plant",
      city: "Cairo",
      description: "Our primary processing facility and administrative hub, strategically located for global logistics.",
      capacity: "300,000 MT/year",
      icon: Factory,
      color: "from-blue-500 to-cyan-400",
      query: "Cairo, Egypt"
    },
    {
      type: "Mining Site",
      city: "Bani Suef",
      description: "Rich mineral deposits providing high-purity raw materials for our industrial grade products.",
      capacity: "500,000 MT/year",
      icon: Mountain,
      color: "from-amber-500 to-orange-400",
      query: "Bani+Suef, Egypt"
    },
  ]

  // This URL uses the free embedding method that doesn't require an API Key
  const freeMapUrl = "https://maps.google.com/maps?q=Cairo,Bani%20Suef&t=&z=7&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-12 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
            <Globe2 size={18} />
            <span>Live Logistics Map</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Strategic Operations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our industrial footprint across Egypt via our live interactive map.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Details Column */}
          <div className="lg:col-span-4 space-y-6">
            {locations.map((loc, idx) => {
              const Icon = loc.icon;
              return (
                <div 
                  key={idx} 
                  className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-[2rem] shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${loc.color} text-white shadow-lg`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{loc.city}</h3>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary/70">{loc.type}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {loc.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Annual Capacity</span>
                    <span className="text-sm font-black text-slate-900 dark:text-white">{loc.capacity}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Google Maps Iframe Container */}
          <div className="lg:col-span-8 relative min-h-[500px] lg:min-h-full rounded-[3.5rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-slate-200">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={freeMapUrl}
              className="absolute inset-0 dark:invert-[0.9] dark:hue-rotate-180 dark:grayscale-[0.2]"
            ></iframe>

            {/* Floating Legend Overlay */}
            <div className="absolute top-6 right-6 z-10">
              <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur px-4 py-3 rounded-2xl border border-border shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-3 h-3 rounded-full bg-blue-500" />
                   <span className="text-[10px] font-bold uppercase tracking-tighter">Cairo Plant</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-3 h-3 rounded-full bg-amber-500" />
                   <span className="text-[10px] font-bold uppercase tracking-tighter">Bani Suef Mine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}