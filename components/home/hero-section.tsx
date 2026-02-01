"use client"

<<<<<<< HEAD
import { ChevronDown, ArrowRight } from "lucide-react"
=======
import { ChevronDown } from "lucide-react"
>>>>>>> 054be50de85ed9acb0a9e77ed4f0da87997feb07

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-01-07%20at%203.58.21%20PM-J26KlS8ljZiUgZuahubK8ACGkuDFoW.mp4" type="video/mp4" />
      </video>

<<<<<<< HEAD
      {/* Overlay Gradient - More sophisticated */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />

      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 bg-primary/20 border border-primary/40 rounded-full text-sm font-semibold text-primary backdrop-blur-sm">
            Leading Industrial Minerals & Speciality Chemicals
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Excellence in Mining & <span className="text-primary">Manufacturing</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
          India's largest producer of ultrafine industrial minerals and specialty chemicals with expanding global footprints
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-xl transform hover:scale-105"
          >
            Explore Products
            <ArrowRight size={20} />
          </a>
          <a
            href="/get-quote"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all backdrop-blur-sm"
          >
            Discover More
=======
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto fade-in">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Excellence in Mining & Manufacturing
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          Delivering superior quality phosphate and kaolin products through innovation and sustainable practices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/products"
            className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all hover:shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="/get-quote"
            className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all"
          >
            Get a Quote
>>>>>>> 054be50de85ed9acb0a9e77ed4f0da87997feb07
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown size={32} className="text-white" />
      </div>
    </section>
  )
}
