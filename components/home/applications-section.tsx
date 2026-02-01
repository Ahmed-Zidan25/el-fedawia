"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const applications = [
  { id: 1, title: "Agriculture", description: "Super phosphate and mineral fertilizers for enhanced crop growth.", image: "/applications/agriculture-application.jpg", color: "from-green-600/80 to-emerald-900/90" },
  { id: 2, title: "Ceramics & Tiles", description: "Premium kaolin for ceramic manufacturing and porcelain production.", image: "/applications/ceramics-application.jpg", color: "from-orange-600/80 to-red-900/90" },
  { id: 3, title: "Construction", description: "Limestone and calcium carbonate for high-strength concrete.", image: "/applications/construction-application.jpg", color: "from-gray-600/80 to-slate-900/90" },
  { id: 4, title: "Paints & Coatings", description: "Talc and kaolin pigments for industrial and decorative coatings.", image: "/applications/paints-application.jpg", color: "from-rose-600/80 to-pink-900/90" },
  { id: 5, title: "Plastics & Polymers", description: "Mineral fillers for enhanced plastic and rubber properties.", image: "/applications/plastics-application.jpg", color: "from-blue-600/80 to-indigo-900/90" },
  { id: 6, title: "Rubber & Tires", description: "Reinforcing fillers for industrial rubber and automotive tires.", image: "/applications/rubber-application.jpg", color: "from-zinc-700/80 to-black/90" },
  { id: 7, title: "Paper & Pulp", description: "High-whiteness kaolin for premium paper coating and fillers.", image: "/applications/paper-application.jpg", color: "from-sky-500/80 to-blue-800/90" },
  { id: 8, title: "Glass Manufacturing", description: "Essential mineral components for high-clarity industrial glass.", image: "/applications/glass-application.jpg", color: "from-teal-500/80 to-cyan-900/90" },
]

export default function ApplicationsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-24 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Industrial Applications</h2>
            <p className="text-lg text-muted-foreground">
              Providing high-purity minerals that serve as the backbone for global manufacturing sectors.
            </p>
          </div>
          
          {/* Custom Navigation Buttons */}
          <div className="flex gap-3">
            <button className="swiper-prev-btn w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button className="swiper-next-btn w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="pb-16 !overflow-visible"
        >
          {applications.map((app) => (
            <SwiperSlide key={app.id}>
              <div
                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-xl cursor-grab active:cursor-grabbing transition-transform duration-500 hover:-translate-y-2"
                onMouseEnter={() => setHoveredId(app.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <Image
                  src={app.image}
                  alt={app.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Aesthetic Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${app.color} transition-opacity duration-500`} />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-3">{app.title}</h3>
                  
                  <p className={`text-white/80 text-sm leading-relaxed mb-6 transition-all duration-500 ${
                      hoveredId === app.id ? "opacity-100 max-h-24 translate-y-0" : "opacity-0 max-h-0 translate-y-4"
                    }`}
                  >
                    {app.description}
                  </p>

                  <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                    <span className="text-xs tracking-widest uppercase">Explore Sector</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active {
          background: hsl(var(--primary)) !important;
          width: 20px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  )
}