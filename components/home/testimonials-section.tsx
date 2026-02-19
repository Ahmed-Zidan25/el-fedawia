"use client"

import { Star, Play } from "lucide-react"
import { useState } from "react"

export default function TestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Premier Ceramics Ltd",
      role: "Production Manager",
      content: "El Fedawia's kaolin has transformed our production quality. The consistency is exceptional, and our defect rates dropped by 45% within the first month. Outstanding service!",
      rating: 5,
      image: "/professional-business-portrait-ceo.jpg",
      videoId: "video-1",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Modern Paints Co.",
      role: "R&D Director",
      content: "The treated calcium carbonate solved our clumping problems completely. No more production delays. The technical support team was incredibly helpful in optimizing our formulation.",
      rating: 5,
      image: "/professional-business-portrait-manager.jpg",
      videoId: "video-2",
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      company: "Green Valley Farms",
      role: "Agricultural Manager",
      content: "Remarkable improvement in crop yield after switching to their super phosphate fertilizer. My soil pH is now perfectly balanced, and farmers are seeing real results.",
      rating: 5,
      image: "/professional-business-portrait-sales.jpg",
      videoId: "video-3",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear directly from industry leaders about their experience with El Fedawia minerals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-all group">
              {/* Video Thumbnail */}
              <div className="relative w-full aspect-video bg-muted flex items-center justify-center overflow-hidden">
                <img 
                  src={testimonial.image || "/placeholder.svg"} 
                  alt={testimonial.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => setSelectedVideo(testimonial.videoId)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-all">
                    <Play size={32} className="text-white fill-white ml-1" />
                  </div>
                </button>
              </div>

              <div className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial */}
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                {/* Author */}
                <div className="border-t pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-primary font-semibold">{testimonial.company}</p>
                </div>

                <button className="w-full mt-4 py-2 text-primary hover:bg-primary/10 rounded-lg transition-all font-semibold text-sm flex items-center justify-center gap-2">
                  <Play size={16} /> Watch Video
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-10 right-0 text-white hover:text-gray-300 text-2xl font-bold"
              >
                ✕
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
                  <div className="text-center">
                    <p className="text-white text-lg mb-4">Video Player</p>
                    <p className="text-gray-400">Video: {selectedVideo}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Ready to join hundreds of satisfied clients?</p>
          <a
            href="/get-quote"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}
