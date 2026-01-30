"use client"

import { MapPin } from "lucide-react"

export default function MapSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3435.0486956127265!2d31.29!3d29.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14560e6b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sBani%20Suef!5e0!3m2!1sen!2seg!4v1234567890"

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden shadow-lg">
      {/* Map */}
      <div className="w-full h-80 overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapEmbedUrl}
        />
      </div>

      {/* Location Info */}
      <div className="p-6 bg-primary/5 border-t border-border">
        <div className="flex items-start gap-3">
          <MapPin size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold mb-1">Our Location</h3>
            <p className="text-sm text-foreground/70 mb-3">
              Section No.51, 52 & 53 Mineral Sector Bayad El-Arab industrial zone Bani-Suef, Egypt
            </p>
            <a
              href="https://www.google.com/maps/search/Bani+Suef+Egypt/@29.02,31.29,13z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
