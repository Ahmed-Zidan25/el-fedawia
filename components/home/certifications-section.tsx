"use client";

import { useState } from "react";
import { Download, Award, FileText, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "QUALITY MANAGEMENT",
    description: "Demonstrates our commitment to quality management systems and continuous improvement.",
    icon: Award,
    details: [
      "Rigorous testing procedures for all batches",
      "Documented quality control processes",
      "Regular third-party audits and compliance checks",
      "Continuous improvement initiatives",
      "Customer satisfaction monitoring",
    ],
    downloadUrl: "/certs/ISO.jpeg",
  },
  {
    id: "tds",
    title: "Technical Data Sheet",
    subtitle: "INDUSTRIAL MINERALS",
    description: "Technical specs for high-purity Calcium Carbonate (CaCO3) by EL FEDAWIA CO.",
    icon: FileText,
    details: [
      "Chemical composition and purity levels",
      "Particle size distribution",
      "Physical and mechanical properties",
      "Application guidelines",
      "Storage and handling instructions",
    ],
    downloadUrl: "/certs/TDS.pdf",
  },
];

export default function CertificationsSection() {
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
        {certifications.map((cert) => {
          const Icon = cert.icon;
          const isExpanded = expandedCert === cert.id;

          return (
            <div
              key={cert.id}
              className="group relative flex flex-col rounded-[2rem] bg-card border border-border p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Header Container - Fixed Height to prevent shifting */}
              <div className="flex-grow">
                <div className="flex items-start gap-5 mb-6">
                  <div className="rounded-2xl bg-red-50 dark:bg-red-950/30 p-4 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-7 w-7 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-red-600 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="mt-1 text-xs font-bold tracking-widest text-red-600 uppercase">
                      {cert.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description - Always Visible to prevent "missing text" feel */}
                <p className="text-muted-foreground leading-relaxed min-h-[3rem]">
                  {cert.description}
                </p>

                {/* Details List - Expandable */}
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[500px] opacity-100 mt-6" : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="space-y-3 border-t border-border pt-6">
                    {cert.details.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-foreground/80">
                        <CheckCircle2 className="h-4 w-4 text-red-600 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 flex flex-col gap-4">
                <button
                  onClick={() => setExpandedCert(isExpanded ? null : cert.id)}
                  className="text-left text-sm font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  {isExpanded ? "Hide details" : "View technical specs"}
                </button>

                <a
                  href={cert.downloadUrl}
                  download
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-red-600 px-6 py-4 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-lg shadow-red-600/10"
                >
                  <Download size={20} />
                  Download Document
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}