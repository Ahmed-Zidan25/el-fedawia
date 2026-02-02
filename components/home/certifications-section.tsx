"use client"

import { Award, CheckCircle, Shield, Download, FileText } from "lucide-react"
import { useState } from "react"

export default function CertificationsSection() {
  // Keeping ISO 9001 expanded by default as per your previous preference
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
      downloadUrl: "/certs/ISO.jpeg" 
    },
    {
      id: "iso-14001",
      name: "Technical Data Sheet",
      category: "Industrial Minerals",
      icon: FileText,
      description: "Technical specs for high-purity Calcium Carbonate ($CaCO_3$) by EL FEDAWIA CO.",
      details: [
        "Chemical purity analysis",
        "Particle size distribution charts",
        "Whiteness and brightness levels",
        "Specific gravity and density data",
        "Safety and handling instructions",
      ],
      color: "from-green-500 to-green-600",
      downloadUrl: "/certs/TDS.pdf"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certifications.map(cert => {
            const Icon = cert.icon
            const isExpanded = expandedCert === cert.id

            return (
              <div
                key={cert.id}
                className={`group bg-card border border-border rounded-[2rem] p-8 transition-all duration-500 flex flex-col hover:shadow-2xl hover:-translate-y-2 ${
                  isExpanded ? "ring-2 ring-primary/20 shadow-lg" : "shadow-md"
                }`}
              >
                <button
                  onClick={() => setExpandedCert(isExpanded ? null : cert.id)}
                  className="text-left flex-grow"
                >
                  <div className={`bg-gradient-to-r ${cert.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-transform group-hover:scale-110`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                  <p className="text-sm text-primary font-bold uppercase tracking-wider mb-4">{cert.category}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">{cert.description}</p>

                  <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pt-6 border-t border-border space-y-4">
                      <p className="font-bold text-xs text-muted-foreground uppercase tracking-widest">Key Requirements:</p>
                      <ul className="space-y-3">
                        {cert.details.map((detail, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </button>

                <div className="mt-8">
                  <a
                    href={cert.downloadUrl}
                    download
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-primary text-primary-foreground font-bold rounded-2xl transition-all hover:bg-primary/90 hover:shadow-lg active:scale-95"
                  >
                    <Download size={20} />
                    Download Certificate
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Testing Standards Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-[2rem] p-10">
          <h3 className="text-2xl font-bold mb-8">Stringent Quality Control Testing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">✓</span>
                Whiteness Testing
              </h4>
              <p className="text-sm text-muted-foreground">Spectrophotometer analysis for consistent brightness and color quality</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">✓</span>
                Particle Size Distribution
              </h4>
              <p className="text-sm text-muted-foreground">Laser diffraction and sedimentation methods for micron-level precision</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">✓</span>
                Moisture Content
              </h4>
              <p className="text-sm text-muted-foreground">Karl Fischer titration ensuring &lt;0.5% moisture in all batches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}