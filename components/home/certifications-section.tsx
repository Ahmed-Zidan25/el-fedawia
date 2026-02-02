"use client"

import { Award, CheckCircle, Shield, Download, FileText } from "lucide-react" // Added FileText for the second icon
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
      // Points to public/certs/iso-9001.pdf
      downloadUrl: "/certs/ISO.jpeg" 
    },
    {
      id: "iso-14001",
      name: "Technical Data Sheet",
      category: "Industrial Minerals",
      icon: FileText, // Fixed: Added the missing icon
      description: "Technical specs for high-purity Calcium Carbonate ($CaCO_3$) by EL FEDAWIA CO.",
      details: [
        "Chemical purity analysis",
        "Particle size distribution charts",
        "Whiteness and brightness levels",
        "Specific gravity and density data",
        "Safety and handling instructions",
      ],
      color: "from-green-500 to-green-600",
      // Points to public/certs/iso-14001.pdf
      downloadUrl: "/certs/TDS.pdf"
    },
  ]

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Quality Certifications & Standards</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rigorous testing and compliance ensuring the highest standards in every batch
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certifications.map(cert => {
            const Icon = cert.icon
            const isExpanded = expandedCert === cert.id

            return (
              <div
                key={cert.id}
                className={`bg-card border-2 rounded-[2rem] p-8 transition-all duration-300 flex flex-col ${
                  isExpanded ? "border-primary shadow-xl" : "border-border"
                }`}
              >
                <div className="flex-grow">
                  <div className={`bg-gradient-to-r ${cert.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-primary font-bold uppercase tracking-wider mb-4">{cert.category}</p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{cert.description}</p>

                  {/* Expanded Details Section */}
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 space-y-4">
                    <p className="font-bold text-xs text-slate-400 uppercase tracking-widest">Key Requirements:</p>
                    <ul className="space-y-3">
                      {cert.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-3 items-start group">
                          <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Download Button using Static Public Files */}
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
        
        {/* Quality Standards Footer... */}
      </div>
    </section>
  )
}