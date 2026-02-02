"use client";

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
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-stretch">
        {certifications.map((cert) => {
          const Icon = cert.icon;

          return (
            <div
              key={cert.id}
              className="group relative flex flex-col rounded-[2.5rem] bg-card border border-border p-10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Header */}
              <div className="flex items-start gap-6 mb-8">
                <div className="rounded-2xl bg-red-50 dark:bg-red-950/30 p-4 transition-transform duration-500 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-red-600 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs font-black tracking-[0.2em] text-red-600 uppercase">
                    {cert.subtitle}
                  </p>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-grow space-y-8">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {cert.description}
                </p>

                {/* Details List - NOW PERMANENTLY VISIBLE */}
                <div className="pt-8 border-t border-border">
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">
                    Key Specifications & Requirements
                  </p>
                  <ul className="space-y-4">
                    {cert.details.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                        <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download Action */}
              <div className="mt-10">
                <a
                  href={cert.downloadUrl}
                  download
                  className="inline-flex items-center justify-center gap-3 w-full rounded-2xl bg-red-600 px-8 py-5 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-xl shadow-red-600/20"
                >
                  <Download size={22} />
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