"use client"

import { MapPin, Globe2, Factory, Mountain, ExternalLink } from "lucide-react"

export default function DistributionMap() {
  const locations = [
    {
      type: "Processing Plant",
      city: "Cairo",
      label: "Headquarters & Processing",
      description: "Our primary processing facility and administrative hub, strategically located for global logistics.",
      capacity: "300,000 MT/year",
      // Google Maps Embed URL for Cairo (Generalized for Al Obour/Cairo area)
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389531517!2d31.1884235!3d30.0594699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb2965c1f595b!2sCairo%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg",
      icon: Factory,
      color: "from-blue-500 to-cyan-400"
    },
    {
      type: "Mining Site",
      city: "Bani Suef",
      label: "Primary Extraction Site",
      description: "Rich mineral deposits providing high-purity raw materials for our industrial grade products.",
      capacity: "500,000 MT/year",
      // Google Maps Embed URL for Bani Suef
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111000.0!2d31.09!3d29.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145a27866f65805d%3A0x9d90f2307137b00a!2sBeni%20Suef%2C%20Beni%20Suef%20City%2C%20Beni%20Suef!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg",
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
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Our Locations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interact with the map to explore our extraction and processing facilities across Egypt.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Detailed Location Cards */}
          <div className="lg:col-span-4 space-y-4">
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
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                    {loc.description}
                  </p>
                  
                  {/* Interactive Map Link */}
                  <a 
                    href={loc.mapUrl.split('?')[0]} 
                    target="_blank" 
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-tighter text-primary hover:underline"
                  >
                    View on Google Maps <ExternalLink size={14} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Actual Google Map Container */}
          <div className="lg:col-span-8 relative min-h-[500px] rounded-[3rem] overflow-hidden border-8 border-white dark:border-slate-900 shadow-2xl bg-slate-200 dark:bg-slate-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1738743.0034426544!2d31.1472551!3d29.5694389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1706821200000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale-[0.2] contrast-[1.1] invert-0 dark:invert-[0.9] dark:hue-rotate-180"
            />
            
            {/* Custom Overlay Pins (Visual Only, floating above the real map) */}
            <div className="absolute top-10 left-10 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-4 py-2 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
               <span className="text-[10px] font-bold uppercase">Live Map View</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}