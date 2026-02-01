"use client"

import { ArrowRight, TrendingUp } from "lucide-react"

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      id: 1,
      company: "Premier Ceramics Ltd",
      industry: "Ceramics Manufacturing",
      challenge: "Inconsistent tile quality with uneven coating",
      solution: "Implemented our Grade A Kaolin with standardized particle size distribution",
      results: {
        defects: "45%",
        efficiency: "28%",
        cost: "18%",
      },
      metric: "45% reduction in defects within 3 months",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      company: "Green Valley Farms",
      industry: "Agriculture",
      challenge: "Poor soil nutrient absorption and acidity issues",
      solution: "Applied our Super Phosphate fertilizer with calcium carbonate blend",
      results: {
        yield: "32%",
        quality: "25%",
        soil: "pHn",
      },
      metric: "32% increase in crop yield and improved soil health",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      company: "Modern Paints Co.",
      industry: "Paint & Coatings",
      challenge: "Poor dispersion causing clumping in hydrophobic mixtures",
      solution: "Switched to our Treated Calcium Carbonate with advanced coatings",
      results: {
        clumping: "90%",
        production: "40%",
        rework: "85%",
      },
      metric: "90% reduction in product clumping, 40% faster production",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how leading industries have optimized their processes with our mineral solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map(study => (
            <div
              key={study.id}
              className="group bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${study.color} p-6 flex flex-col justify-end relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10 bg-pattern" />
                <div className="relative z-10">
                  <p className="text-white/80 text-sm font-semibold">{study.industry}</p>
                  <h3 className="text-white text-xl font-bold">{study.company}</h3>
                </div>
              </div>

              <div className="p-6">
                {/* Challenge */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Challenge</p>
                  <p className="text-foreground mt-2">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="mb-4 pb-4 border-b">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Solution</p>
                  <p className="text-foreground mt-2">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">Results</p>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(study.results).map(([key, value]) => (
                      <div key={key} className="text-center p-3 bg-primary/10 rounded-lg">
                        <div className="flex items-center justify-center gap-1 text-primary font-bold text-lg">
                          <TrendingUp size={16} />
                          {value}
                        </div>
                        <p className="text-xs text-muted-foreground capitalize mt-1">{key}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main metric */}
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg mb-4">
                  <p className="text-green-700 font-semibold text-sm">{study.metric}</p>
                </div>

                <a href="/get-quote" className="flex items-center gap-2 text-primary hover:gap-3 font-semibold transition-all">
                  Request Similar Solution
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to optimize your production?</p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </section>
  )
}
