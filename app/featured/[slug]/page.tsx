'use client'

import { useState, use, useEffect } from 'react'
import { Download, CheckCircle2, FileText, ChevronRight, MessageSquare, ChevronDown, ChevronUp, Layers, ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';

// --- DATA OBJECT (Make sure this is inside the file or imported) ---
const productDetails = {
  "calcium-carbonate": {
    name: "Ground Calcium Carbonate",
    description: "Our ultra-fine Ground Calcium Carbonate (GCC) is sourced from high-purity marble deposits. It features exceptional whiteness and a controlled particle size distribution, making it the industry standard for paper, plastics, and high-end coatings.",
    applications: ["Paper & Pulp", "Plastic & Polymer", "Paint & Coatings", "Construction Materials"],
    benefits: [
      { title: "High Whiteness", text: "Exceptional brightness (>98%) reducing the need for expensive TiO2 pigments." },
      { title: "Controlled Particle Size", text: "Precision milling ensures consistency in your manufacturing process." },
      { title: "Low Abrasivity", text: "Extends the life of your machinery and processing equipment." }
    ],
    tdsUrl: "/downloads/gcc-technical-data.pdf"
  },
  "talc-powder": {
    name: "Industrial Grade Talc",
    description: "Premium lamellar talc powder optimized for reinforcement in automotive plastics and architectural coatings. Provides excellent stiffness and heat resistance.",
    applications: ["Automotive", "Ceramics", "Cosmetics", "Rubber"],
    benefits: [
      { title: "Platy Structure", text: "Enhances mechanical strength and dimensional stability in polymers." },
      { title: "Chemical Inertness", text: "Resistant to acids and alkalis, perfect for protective coatings." }
    ],
    tdsUrl: "/downloads/talc-technical-data.pdf"
  }
};

// --- HELPER COMPONENT ---
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
        {description && (
          isOpen ? <ChevronUp className="text-slate-400" size={20} /> : <ChevronDown className="text-slate-400" size={20} />
        )}
      </button>
      
      <AnimatePresence>
        {isOpen && description && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-5 pb-5 pt-0 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              <div className="pl-8 border-l-2 border-red-100 dark:border-red-900/30">
                {description}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  // Use the 'use' hook to unwrap params in Next.js 15
  const resolvedParams = use(params);
  const slug = decodeURIComponent(resolvedParams.slug);
  
  // Safely find the product
  const product = productDetails[slug as keyof typeof productDetails];

  // Prevent hydration errors by waiting for mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/" className="text-red-600 flex items-center gap-2">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb / Back */}
          <Link href="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-red-600 transition-colors mb-8 group">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Products</span>
          </Link>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                {product.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-red-600/20 flex items-center gap-2">
                  <MessageSquare size={20} /> Request Quote
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-square bg-white dark:bg-slate-900 rounded-[3rem] p-12 border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-[100px] -z-10" />
              <Layers size={180} className="text-red-600/20 absolute rotate-12" />
              <div className="relative z-10 text-center">
                 <span className="text-red-600 font-bold text-xl uppercase tracking-widest block mb-2">Industrial Grade</span>
                 <div className="h-1 w-12 bg-red-600 mx-auto rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Applications Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">01</span>
              Primary Applications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.applications.map((app, i) => (
                <span key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl text-center font-bold text-slate-700 dark:text-slate-300 shadow-sm">
                  {app}
                </span>
              ))}
            </div>
          </div>

          {/* Strategic Benefits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-8 bg-red-600 text-white rounded-lg flex items-center justify-center text-sm">02</span>
              Key Strategic Benefits
            </h2>
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
              <a href={product.tdsUrl} className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-xl font-bold border border-white/20 hover:bg-white/20 transition-all">
                <FileText size={20}/> TDS
              </a>
              <Link href="/get-quote" className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all">
                Get Quote <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}