"use client";

import { Download, Award, CheckCircle2 } from "lucide-react";

const isoCertification = {
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
  // Direct Google Drive preview link
  previewUrl: "https://drive.google.com/file/d/1zLxaVBGvwJnkiYG5HrtNC87EkWzYwq1m/preview",
  downloadUrl: "https://drive.google.com/file/d/1zLxaVBGvwJnkiYG5HrtNC87EkWzYwq1m/view?usp=sharing",
};

export default function CertificationsSection() {
  const Icon = isoCertification.icon;

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Information Content */}
        <div className="flex flex-col rounded-[2.5rem] bg-card border border-border p-10 shadow-sm">
          <div className="flex items-start gap-6 mb-8">
            <div className="rounded-2xl bg-red-50 dark:bg-red-950/30 p-4">
              <Icon className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground">
                {isoCertification.title}
              </h3>
              <p className="mt-1 text-xs font-black tracking-[0.2em] text-red-600 uppercase">
                {isoCertification.subtitle}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-muted-foreground leading-relaxed text-lg">
              {isoCertification.description}
            </p>

            <div className="pt-8 border-t border-border">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-5">
                Key Specifications & Requirements
              </p>
              <ul className="space-y-4">
                {isoCertification.details.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm font-medium text-foreground/90">
                    <CheckCircle2 className="h-5 w-5 text-red-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <a
              href={isoCertification.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full rounded-2xl bg-red-600 px-8 py-5 font-bold text-white transition-all hover:bg-red-700 active:scale-95 shadow-xl shadow-red-600/20"
            >
              <Download size={22} />
              Download Document
            </a>
          </div>
        </div>

        {/* Right Side: Document Preview */}
        <div className="relative h-[600px] lg:h-full min-h-[600px] rounded-[2.5rem] overflow-hidden border border-border bg-muted shadow-inner">
          <iframe
            src={isoCertification.previewUrl}
            className="w-full h-full border-0"
            allow="autoplay"
            title="ISO Certificate Preview"
          ></iframe>
          
          {/* Subtle Overlay to maintain design language */}
          <div className="absolute inset-0 pointer-events-none border-[12px] border-card/10 rounded-[2.5rem]"></div>
        </div>

      </div>
    </section>
  );
}