'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Download,
  CheckCircle2,
  FileText,
  ChevronRight,
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Layers,
  ArrowLeft,
} from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

/* =========================
   PRODUCT DATA
========================= */

const productDetails = {
  'calcium-carbonate': {
    name: 'Calcium Carbonate (CaCO3)',
    description: 'Calcium Carbonate (CaCO3) | High-Performance Mineral Solutions.',
    longContent:
      'Calcium Carbonate is the world’s most versatile and abundant mineral, sourced from our high-purity deposits of limestone and marble. With a Mohs hardness of approximately 3, it serves as the most efficient, soft, and easy-to-process functional filler in the industry.',

    applications: [
      { title: 'Calcium Nitrate Fertilizers', image: '/applications/fertilizers.png' },
      { title: 'Gypsum Boards', image: '/applications/gypsum.png' },
      { title: 'Paints & Coatings', image: '/applications/paints.png' },
      { title: 'Paper', image: '/applications/paper.png' },
    ],

    benefits: [
      { title: 'Superior Whiteness & Brightness', text: 'Provides a clean neutral white base.' },
      { title: 'Cost Optimization', text: 'Reduces pigment costs.' },
    ],

    tdsUrl: '/pdfs/Calcium-Carbonate.pdf',
  },
}

/* =========================
   BENEFIT COMPONENT
========================= */

function BenefitItem({ benefit }: { benefit: any }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border rounded-xl bg-white dark:bg-slate-900">
      <button
        className="w-full flex justify-between p-4"
        onClick={() => setOpen(!open)}
      >
        <span>{benefit.title}</span>
        {open ? <ChevronUp /> : <ChevronDown />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            <div className="p-4 text-sm text-slate-500">{benefit.text}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* =========================
   PAGE
========================= */

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  /* ===== SLUG NORMALIZATION (FIX) ===== */

  const rawSlug = (params as any)?.slug
  const decoded = decodeURIComponent(Array.isArray(rawSlug) ? rawSlug[0] : rawSlug || '')

  const slug = decoded
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')

  let product = (productDetails as any)[slug]

  if (!product) {
    const key = Object.keys(productDetails).find((k) => {
      const nk = k.trim().toLowerCase().replace(/[_\s]+/g, '-').replace(/-+/g, '-')
      return nk === slug
    })
    if (key) product = (productDetails as any)[key]
  }

  /* ===== HYDRATION FIX ===== */

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  /* ===== NOT FOUND ===== */

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/featured">Back</Link>
      </div>
    )
  }

  /* ===== RENDER ===== */

  const apps = product.applications || []

  return (
    <div>
      <Header />

      <main className="pt-32 max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-6">{product.name}</h1>

        {/* Applications */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {apps.map((a: any, i: number) => (
            <div key={i} className="border rounded-xl p-3">
              <div className="relative aspect-square">
                <Image src={a.image} alt={a.title} fill className="object-cover rounded-lg" />
              </div>
              <p className="mt-2 text-sm font-semibold">{a.title}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="space-y-3">
          {product.benefits?.map((b: any, i: number) => (
            <BenefitItem key={i} benefit={b} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}