"use client"

import { Award, CheckCircle, Shield, Zap } from "lucide-react"
import { useState } from "react"


export default function CertificationsSection() {
  const [expandedCert, setExpandedCert] = useState<string | null>("iso-9001")

  const certifications = [
    {
      id: "iso-9001",
      name: "ISO 9001:2015",
      category: "Quality Management",
      icon: Award,
      description: "Demonstrates our commitment to quality management systems and continuous improvement",
      details: [
        "Rigorous testing procedures for all batches",
        "Documented quality control processes",
        "Regular third-party audits and compliance checks",
        "Continuous improvement initiatives",
        "Customer satisfaction monitoring",
      ],
      color: "from-blue-500 to-blue-600",
      
    },
    {
      id: "iso-14001",
      name: "ISO 14001:2015",
      category: "Environmental Management",
      icon: Shield,
      description: "Certifies our environmental management and sustainable mining practices",
      details: [
        "Waste reduction and recycling programs",
        "Carbon footprint monitoring and reduction",
        "Water conservation initiatives",
        "Emission control and air quality standards",
        "Environmental impact assessments",
      ],
      color: "from-green-500 to-green-600",
    },
    
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Quality Certifications & Standards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rigorous testing and compliance ensuring the highest standards in every batch
          </p>
        </div>

        {/* Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map(cert => {
            const Icon = cert.icon
            const isExpanded = expandedCert === cert.id

            return (
              <button
                key={cert.id}
                onClick={() => setExpandedCert(isExpanded ? null : cert.id)}
                className="text-left"
              >
                <div className={`bg-card border-2 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg min-h-[420px] flex flex-col ${
                  isExpanded ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
                }`}>
                  <div className={`bg-gradient-to-r ${cert.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="text-white" size={24} />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-primary font-semibold mb-2">{cert.category}</p>
                  <p className="text-muted-foreground mb-4 flex-grow">{cert.description}</p>

                  {isExpanded && (
                    <div className="mt-6 pt-6 border-t space-y-3">
                      <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">Key Requirements:</p>
                      <ul className="space-y-2">
                        {cert.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="text-xs text-muted-foreground mt-auto pt-4">
                    {isExpanded ? "Click to collapse" : "Click to learn more"}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Testing Standards Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6">Stringent Quality Control Testing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">✓</span>
                Whiteness Testing
              </h4>
              <p className="text-muted-foreground">Spectrophotometer analysis for consistent brightness and color quality</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">✓</span>
                Particle Size Distribution
              </h4>
              <p className="text-muted-foreground">Laser diffraction and sedimentation methods for micron-level precision</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">✓</span>
                Moisture Content
              </h4>
              <p className="text-muted-foreground">Karl Fischer titration ensuring &lt;0.5% moisture in all batches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
