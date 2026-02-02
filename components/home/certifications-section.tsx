"use client";

import { useState } from "react";
import { Download, Award, FileText } from "lucide-react";

const certifications = [
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    subtitle: "QUALITY MANAGEMENT",
    description:
      "Demonstrates our commitment to quality management systems and continuous improvement.",
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
    description:
      "Technical specs for high-purity Calcium Carbonate (CaCO3) by EL FEDAWIA CO.",
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
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {certifications.map((cert) => {
        const Icon = cert.icon;
        const isExpanded = expandedCert === cert.id;

        return (
          <div
            key={cert.id}
            className="rounded-2xl bg-white p-8 shadow-lg"
          >
            {/* Header */}
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-red-100 p-3">
                <Icon className="h-6 w-6 text-red-700" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {cert.title}
                </h3>
                <p className="mt-1 text-sm font-semibold tracking-wide text-red-600">
                  {cert.subtitle}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-gray-600">
              {cert.description}
            </p>

            {/* Expandable content */}
            {isExpanded && (
              <ul className="mt-6 space-y-3 border-t pt-6">
                {cert.details.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={() =>
                  setExpandedCert(isExpanded ? null : cert.id)
                }
                className="text-left text-sm font-medium text-red-600 hover:underline"
              >
                {isExpanded ? "Show less" : "View details"}
              </button>

              <a
                href={cert.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-700 px-6 py-4 font-semibold text-white hover:bg-red-800"
              >
                <Download size={20} />
                Download Certificate
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}
