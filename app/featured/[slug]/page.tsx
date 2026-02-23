'use client' // Changed to client component to allow for toggle state

import { useState } from 'react'
import { Download, CheckCircle2, FileText, ChevronRight, MessageSquare, ChevronDown, ChevronUp, Layers } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";

// Helper Component for Collapsible Benefits
function BenefitItem({ benefit }: { benefit: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const title = typeof benefit === 'string' ? benefit : benefit.title;
  const description = typeof benefit === 'string' ? null : benefit.text;

  return (
    <div className="border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50"
      >
        <div className="flex items-center gap-3">
          <CheckCircle2 className="text-red-600 shrink-0" size={18} />
          <span className="text-slate-900 dark:text-white font-bold text-base">{title}</span>
        </div>
        {description && (isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />)}
      </button>

      <AnimatePresence>
        {isOpen && description && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            <div className="px-12 pb-5">
              {/* Decreased font size here (text-sm) */}
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
              {benefit.subItems && (
                <ul className="mt-3 space-y-1">
                  {benefit.subItems.map((sub: string, j: number) => (
                    <li key={j} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-red-400 rounded-full" />
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ... Keep your productDetails object here ...

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const slug = decodeURIComponent(params.slug);
  const product = productDetails[slug as keyof typeof productDetails];

  if (!product) return <div>Product Not Found</div>;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Header Section */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{product.name}</h1>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              {product.description}
            </p>
          </div>

          {/* New Applications Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900 dark:text-white">
              <Layers className="text-red-600" size={24} /> Applications
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.applications?.map((app, i) => (
                <span key={i} className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm">
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Benefits (Collapsible) */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Key Strategic Benefits</h2>
            <div className="flex flex-col gap-4">
              {product.benefits.map((benefit, i) => (
                <BenefitItem key={i} benefit={benefit} />
              ))}
            </div>
          </div>

          {/* Technical Resources CTA */}
          <div className="bg-red-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">Technical Resources</h2>
              <p className="text-red-50 opacity-90">Download specifications or request commercial pricing.</p>
            </div>
            <div className="flex gap-4">
              <a href={product.tdsUrl} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all"><FileText size={20}/> TDS</a>
              <a href="/get-quote" className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg"><MessageSquare size={20}/> GET QUOTE</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}