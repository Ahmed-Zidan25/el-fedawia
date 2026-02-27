'use client'

import { useEffect, useState } from 'react'
import {
  CheckCircle2,
  FileText,
  ChevronRight,
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
import { useParams, usePathname } from 'next/navigation'

const productDetails = {
  'calcium-carbonate': {
    name: 'Calcium Carbonate (CaCO3)',
    description: 'Calcium Carbonate (CaCO3) | High-Performance Mineral Solutions.',
    longContent:
      'Calcium Carbonate is the world’s most versatile and abundant mineral, sourced from our high-purity deposits of limestone and marble. With a Mohs hardness of approximately 3, it serves as the most efficient, soft, and easy-to-process functional filler in the industry. As a leading manufacturer, we provide essential solutions for paint formulations and allied industries. Our products are engineered to enhance chemical inertness, ensure high whiteness, and optimize production economics through superior dispersibility.',
    applications: [
      { title: 'Calcium Nitrate Fertilizers', image: '/applications/calciumnitratefertilizers.png' },
      { title: 'Gypsum Boards', image: '/applications/gypsum-boards.png' },
      { title: 'Paints & Coatings', image: '/applications/paints-coatings.png' },
      { title: 'Paper', image: '/applications/paper1.png' },
    ],
    benefits: [
      {
        title: 'Superior Whiteness & Brightness',
        text: 'Provides a clean, neutral white base for high-quality coatings and paper products.',
      },
      {
        title: 'Cost Optimization',
        text: 'Enables the partial replacement of expensive pigments like Titanium Dioxide (TiO_2), significantly reducing total formulation costs without compromising opacity.',
      },
      {
        title: 'Advanced Rheology & Film Integrity',
        text: 'Improves viscosity control and enhances the mechanical strength and application characteristics of the coating film.',
      },
      {
        title: 'Enhanced Durability',
        text: 'Increases abrasion and wear resistance, ensuring the longevity of the finished surface.',
      },
      {
        title: 'Eco-Friendly & Safe',
        text: 'A non-hazardous, sustainable mineral compatible with strictly regulated environmental standards.',
      },
      {
        title: 'Broad Chemical Compatibility',
        text: 'Resists efflorescence in waterborne systems and integrates seamlessly with various binder chemistries.',
      },
    ],
    tdsUrl: '/pdfs/Calcium-Carbonate.pdf',
  },

  'coated-calcium-carbonate': {
    name: 'Coated Calcium Carbonate',
    description: 'Surface-Treated Calcium Carbonate (CGCC).',
    longContent:
      'Our flagship Processed Grade, treated with Stearic Acid to transform the mineral from hydrophilic to hydrophobic. This grade is specifically designed for:',
     applications: [
      { title: 'Color Masterbatch', image: '/applications/color-masterbatch.png' },
      { title: 'Filler Masterbatch', image: '/applications/filler-masterbatch.png' },
      { title: 'Pipes & Fittings', image: '/applications/pipes-fittings.png' },
      { title: 'PVC Cables', image: '/applications/pvc-cables.png' },
      { title: 'PVC Sheets', image: '/applications/pvc-sheets.png' },
      { title: 'Rubber', image: '/applications/rubber.png' }
    ],
      benefits: [
      { title: 'Plastics & PVC', text: 'Improved bonding with polymer resins.' },
      { title: 'Optimized Processing', text: 'Lower plasticizer absorption and reduced machine wear.' },
      { title: 'Superior Dispersion', text: 'Prevention of particle agglomeration in non-polar systems.' },
    ],
    tdsUrl: '/pdfs/Calcium-Carbonate.pdf',
  },

  'talc-powder': {
    name: 'Premium Talc Solutions from Egypt',
    description:
      'Talc is one of the most versatile industrial minerals, valued for its exceptional softness, hydrophobic nature, and chemical stability. It enhances product quality, improves processing efficiency, and delivers reliable performance across a wide range of applications.',
    longContent:
      'Elfedawia Co. is uniquely positioned with access to high-quality talc reserves in Egypt, enabling us to supply consistent, pure, and reliable talc products to global markets at a time when premium resources are becoming increasingly scarce worldwide. <br /><br /> The performance of talc depends on its particle size distribution and particle shape. At Elfedawia Co., we apply advanced milling and classification techniques to produce talc with uniform particle sizes, optimized PSD curves, and excellent dispersion characteristics—ensuring dependable results in every application. <br /><br /> Our FD Talc product range is manufactured from carefully selected, high-purity deposits with controlled mineral content. We also offer special high–aspect-ratio talc grades, developed for advanced and high-performance applications requiring precision and consistency.',
   applications: [
      { title: 'Agricultural Pesticides', image: '/applications/agricultural-pesticides.png'},
      { title: 'Home Pestisides', image: '/applications/talc-petisides.png'},
      { title: 'Soap', image: '/applications/talc-soup.png' },
      { title: 'Paints', image: '/applications/talc-paints.png' },
      { title: 'Rubber', image: '/applications/talc-application2.png' }
    ],
      benefits: [
      { title: 'Paints', text: 'Talc powder is considered one of the essential filler materials in the paint and coatings industry, playing a key role in enhancing the technical performance of the final product while also reducing overall production costs. Talc is composed of hydrated magnesium silicate and is characterized by its fine particle size, chemical stability, and ability to improve coating properties.'},
      { title: 'Agricultural Pesticides', text: 'Talc is an important material used in the manufacturing of agricultural pesticides, where it serves as a carrier and diluent for active ingredients in various formulations. Talc is characterized by its fine particle size and chemical stability, making it suitable for agricultural applications without affecting the effectiveness of the active substance.'},
      { title: 'Household Insecticide', text: 'Talc is used in the production of certain types of household insecticides, particularly in powder formulations and dry baits, where it functions as a carrier and diluent for active ingredients. Talc is characterized by its fine particle size and chemical stability, making it suitable for indoor residential environments when used in accordance with safety standards.' },
      { title: ' Bar Soap ', text: 'Ground talc is used in certain types of bar soap due to its fine texture and chemical stability. It is added in controlled amounts to improve the consistency of the soap bar and increase its hardness, helping it maintain its shape for a longer period during use and storage.' }
     
    
    ],
    tdsUrl: '/pdfs/Talc.pdf',
  },

  limestone: {
    name: 'Industrial Limestone',
    description: 'Ground Limestone (Calcium Carbonate) – Industrial Applications.',
    longContent:
      'Ground limestone, also known as calcium carbonate (CaCO₃), is one of the most widely used industrial minerals worldwide. Produced by crushing and grinding high-quality limestone into controlled millimeter-sized particles, this versatile material plays a vital role in a wide range of manufacturing and construction sectors. Due to its high purity, excellent whiteness, cost-effectiveness, and chemical stability, ground limestone is a preferred raw material for many industries.',
    applications: [
      { title: 'Poultry Feed', image: '/applications/limestone1.png' },
      { title: 'Glass', image: '/applications/limestone3.png' },
      { title: 'Ground Limestone', image: '/applications/limestone4.png' },
      { title: 'Impurity Removal', image: '/applications/limestone5.png' }
     ],
      benefits: [
      {
        title: 'Cement and Construction Materials',
        text: 'Ground limestone is an essential component in the cement industry. It is used both as a raw feed material and as a mineral additive to improve workability and reduce production costs. It also contributes to enhanced strength and durability in construction products.',
      },
    ],
    tdsUrl: '/pdfs/Limestone.pdf',
  },
  agricultural-gypsum: {
    name: 'Agricultural Gypsum',
    description: 'Natural mineral used to improve soil structure and provide essential nutrients',
    longContent:
      'Agricultural gypsum is one of the most important natural soil amendments used by farmers to improve soil quality and increase crop productivity—especially in saline, sodic, and heavy clay soils. It is a natural material composed mainly of calcium sulfate dihydrate (CaSO₄·2H₂O). It is widely used to improve soil structure, reduce salinity and sodicity problems, and enhance overall soil fertility. Provides multiple benefits that make it one of the most effective soil conditioners.',
    applications: [
      { title: 'Fertilizers', image: '/featured-gypsum.jpg' }
     
     ],
      benefits: [
      {
        title: 'Reduces Soil Salinity and Sodicity',
        text: 'Gypsum helps replace excess sodium (Na) in the soil with calcium, which:',
        subItems: [
'Reduces soil alkalinity',
'Improves soil fertility',
'Enhances root nutrient uptake',
'Promotes healthier plant growth']
},
  { title: 'Improves Soil Structure',
        text: 'In heavy clay soils, gypsum',
        subItems: [  
'Breaks up compacted soil',
'Improves soil aeration',
'Enhances water infiltration and drainage',
'Prevents surface crusting']
  },
  { title: 'Increases Crop Productivity',
        text: 'By improving soil conditions, plants can absorb nutrients more efficiently, resulting in:'
        subItems: [  
'Stronger root systems',
'Higher yield',
'Better crop quality'
],
  },
  { title: 'Enhances Water and Fertilizer Efficiency',
        text: 'Gypsum improves irrigation efficiency and increases the effectiveness of applied fertilizers'
       },
     tdsUrl: '/pdfs/gypsum.pdf',
  },
} as const

function BenefitItem({ benefit }: { benefit: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const title = typeof benefit === 'string' ? benefit : benefit?.title
  const description = typeof benefit === 'string' ? null : benefit?.text
  const subItems: string[] | undefined = typeof benefit === 'string' ? undefined : benefit?.subItems

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-red-600 shrink-0" size={18} />
          <span className="text-slate-900 dark:text-white font-bold text-base">{title}</span>
        </div>
        {description ? (
          isOpen ? (
            <ChevronUp className="text-slate-400" size={20} />
          ) : (
            <ChevronDown className="text-slate-400" size={20} />
          )
        ) : null}
      </button>

      <AnimatePresence>
        {isOpen && description && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              <div className="pl-8 border-l-2 border-red-100 dark:border-red-900/30">
                <p className="mb-3">{description}</p>
                {Array.isArray(subItems) && subItems.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {subItems.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Prefer URL params (works even if props params are missing due to rewrites)
  const urlParams = useParams<{ slug?: string | string[] }>()
  const pathname = usePathname()

  const rawSlug = urlParams?.slug ?? params?.slug ?? ''
  const raw = Array.isArray(rawSlug) ? rawSlug[0] : rawSlug

  // Safe decode
  let decoded = raw
  try {
    decoded = decodeURIComponent(raw)
  } catch {
    decoded = raw
  }

  const slug = decoded
    .trim()
    .toLowerCase()
    .replace(/[_\s]+/g, '-')
    .replace(/-+/g, '-')

  // Lookup + fallback
  let product: any = (productDetails as any)[slug]
  if (!product) {
    const matchedKey = Object.keys(productDetails).find((k) => {
      const nk = k.trim().toLowerCase().replace(/[_\s]+/g, '-').replace(/-+/g, '-')
      return nk === slug
    })
    if (matchedKey) product = (productDetails as any)[matchedKey]
  }

  // Hydration guard (hooks remain consistent)
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/featured" className="text-red-600 flex items-center gap-2">
          <ArrowLeft size={20} /> Back
        </Link>

        {/* Debug */}
        <p className="mt-3 text-sm text-slate-500">
          pathname: <span className="font-mono">{pathname}</span>
        </p>
        <p className="text-sm text-slate-500">
          slug: <span className="font-mono">{slug || '(empty)'}</span>
        </p>
      </div>
    )
  }

  // ✅ No hook here (prevents React error #310)
  const applications = Array.isArray(product?.applications) ? product.applications : []

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <Link
            href="/featured"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back</span>
          </Link>

          {/* HERO (single column, no right box, no top buttons) */}
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              {product.name}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {product.description}
            </p>
          </motion.div>

          {/* Overview */}
          {product.longContent ? (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
                <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">
                  01
                </span>
                Overview
              </h2>
              <div
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 md:p-8 text-slate-700 dark:text-slate-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: product.longContent }}
              />
            </div>
          ) : null}

          {/* Applications */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">
                02
              </span>
              Primary Applications
            </h2>

            {applications.length === 0 ? (
              <div className="text-slate-600 dark:text-slate-400">
                No applications listed for this product.
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {applications.map((app: any, idx: number) => {
                  const isString = typeof app === 'string'
                  const title = isString ? app : app?.title
                  const image = isString ? undefined : app?.image

                  return (
                    <div
                      key={`${title}-${idx}`}
                      className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm hover:shadow-md transition-all"
                    >
                      {image ? (
                        <div className="relative w-full aspect-square overflow-hidden rounded-xl mb-3 bg-slate-50 dark:bg-slate-800">
                          <Image
                            src={image}
                            alt={title}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="w-full aspect-square rounded-xl mb-3 bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                          <Layers size={42} />
                        </div>
                      )}
                      <p className="text-slate-900 dark:text-white font-semibold text-sm leading-snug">
                        {title}
                      </p>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">
                03
              </span>
              Key Strategic Benefits
            </h2>
            <div className="flex flex-col gap-4">
              {Array.isArray(product.benefits)
                ? product.benefits.map((benefit: any, i: number) => (
                    <BenefitItem key={i} benefit={benefit} />
                  ))
                : null}
            </div>
          </div>

          {/* CTA (kept as bottom resources section) */}
          <div
            id="quote"
            className="bg-red-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">Technical Resources</h2>
              <p className="text-red-50 opacity-90">Download specifications or request commercial pricing.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {product.tdsUrl ? (
                <a
                  href={product.tdsUrl}
                  className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all"
                >
                  <FileText size={20} /> TDS
                </a>
              ) : null}
              <Link
                href="/get-quote"
                className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all"
              >
                Get Quote <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}