'use client'

import { useEffect, useMemo, useState } from 'react'
import { Download, CheckCircle2, FileText, ChevronRight, MessageSquare, ChevronDown, ChevronUp, Layers, ArrowLeft } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
import Image from 'next/image';


const productDetails = {
 "calcium-carbonate": {
  name: "Calcium Carbonate (CaCO3)",
  description: "Calcium Carbonate (CaCO3) | High-Performance Mineral Solutions.",
  longContent:
    "Calcium Carbonate is the world’s most versatile and abundant mineral, sourced from our high-purity deposits of limestone and marble. With a Mohs hardness of approximately 3, it serves as the most efficient, soft, and easy-to-process functional filler in the industry. As a leading manufacturer, we provide essential solutions for paint formulations and allied industries. Our products are engineered to enhance chemical inertness, ensure high whiteness, and optimize production economics through superior dispersibility.",

  applications: [
    {
      title: "Calcium Nitrate Fertilizers",
      image: "/applications/Calcium nitrate fertilizers.png",
    },
    {
      title: "Gypsum Boards",
      image: "/applications/gypsum boards.png",
    },
    {
      title: "Paints & Coatings",
      image: "/applications/PAINTS & COATING.png",
    },
    {
      title: "Paper",
      image: "/applications/PAPER.png",
    },
  ],   // ✅ comma added here

  benefits: [
    {
      title: "Superior Whiteness & Brightness",
      text: "Provides a clean, neutral white base for high-quality coatings and paper products.",
    },
    {
      title: "Cost Optimization",
      text: "Enables the partial replacement of expensive pigments like Titanium Dioxide (TiO_2), significantly reducing total formulation costs without compromising opacity.",
    },
    {
      title: "Advanced Rheology & Film Integrity",
      text: "Improves viscosity control and enhances the mechanical strength and application characteristics of the coating film.",
    },
    {
      title: "Enhanced Durability",
      text: "Increases abrasion and wear resistance, ensuring the longevity of the finished surface.",
    },
    {
      title: "Eco-Friendly & Safe",
      text: "A non-hazardous, sustainable mineral compatible with strictly regulated environmental standards.",
    },
    {
      title: "Broad Chemical Compatibility",
      text: "Resists efflorescence in waterborne systems and integrates seamlessly with various binder chemistries.",
    },
  ],

  tdsUrl: "/pdfs/Calcium-Carbonate.pdf",
},
  "coated-calcium-carbonate": {
    name: "Coated Calcium Carbonate",
    description: "Surface-Treated Calcium Carbonate (CGCC).",
    longContent: "Our flagship Processed Grade, treated with Stearic Acid to transform the mineral from hydrophilic to hydrophobic. This grade is specifically designed for:",
    benefits: [
      {title: "Plastics & PVC", text: "Improved bonding with polymer resins."},
      {title: "Optimized Processing", text: "Lower plasticizer absorption and reduced machine wear."},
      {title: "Superior Dispersion", text: "Prevention of particle agglomeration in non-polar systems."}
    ],
    tdsUrl: "/pdfs/Calcium-Carbonate.pdf"
  },
 "talc-powder": {
  name: "Premium Talc Solutions from Egypt",
  description: "Talc is one of the most versatile industrial minerals, valued for its exceptional softness, hydrophobic nature, and chemical stability. It enhances product quality, improves processing efficiency, and delivers reliable performance across a wide range of applications.",
  longContent: "Elfedawia Co. is uniquely positioned with access to high-quality talc reserves in Egypt, enabling us to supply consistent, pure, and reliable talc products to global markets at a time when premium resources are becoming increasingly scarce worldwide. <br /><br /> The performance of talc depends on its particle size distribution and particle shape. At Elfedawia Co., we apply advanced milling and classification techniques to produce talc with uniform particle sizes, optimized PSD curves, and excellent dispersion characteristics—ensuring dependable results in every application. <br /><br /> Our FD Talc product range is manufactured from carefully selected, high-purity deposits with controlled mineral content. We also offer special high–aspect-ratio talc grades, developed for advanced and high-performance applications requiring precision and consistency.",
  benefits: [
    {title: "Paper & Packaging"},
    {title: "Paints & Coatings"},
    {title: "Plastics & Polymers"},
    {title: "Polyester Putties"},
    {title: "Adhesives & Sealants"},
    {title: "Cosmetics & Personal Care"},
    {title: "Ceramics"}
  ],
  tdsUrl: "/pdfs/Talc.pdf" 
},
  "limestone": {
    name: "Industrial Limestone",
    description: "Ground Limestone (Calcium Carbonate) – Industrial Applications.",
    longContent: "Ground limestone, also known as calcium carbonate (CaCO₃), is one of the most widely used industrial minerals worldwide. Produced by crushing and grinding high-quality limestone into controlled millimeter-sized particles, this versatile material plays a vital role in a wide range of manufacturing and construction sectors. Due to its high purity, excellent whiteness, cost-effectiveness, and chemical stability, ground limestone is a preferred raw material for many industries.",
    benefits: [
      {
        title: "Cement and Construction Materials",
        text: "Ground limestone is an essential component in the cement industry. It is used both as a raw feed material and as a mineral additive to improve workability and reduce production costs. It also contributes to enhanced strength and durability in construction products.",
       
      },
      {title: "Bricks, Blocks, and Concrete Products",
      text: "In the production of concrete blocks, bricks, and precast materials, limestone powder improves structural performance, reduces shrinkage, and enhances the overall quality of the final product."
      },
 {title: "Animal Feed and Agriculture",
      text: "Limestone is an important source of calcium in animal nutrition, particularly for poultry and livestock. It supports healthy bone development and eggshell formation. Agricultural-grade limestone is also used to improve soil pH and fertility."
      },
       {title: "Water Treatment and Environmental Uses",
      text: "Ground limestone is used in water treatment facilities to neutralize acidity and remove impurities. It is also applied in environmental projects to control pollution and improve water quality."
      },
       {title: "Glass and Ceramics Production",
      text: "In ceramics and glass manufacturing, limestone acts as a fluxing agent, helping to reduce melting temperatures and improve product strength and clarity."
      },
      {title: "Why Choose Our Ground Limestone?",
        text: "",
        subItems: [
"Consistent particle size distribution",
"High calcium carbonate content",
"Reliable industrial performance",
"Custom sizing for different applications"
        ]
      
      }
    ],
    tdsUrl: "/pdfs/Limestone.pdf"
  },
  "agricultural-gypsum": {
    name: "Agricultural Gypsum",
    description: "Benefits of Agricultural Gypsum, Application Timing, Recommended Rates per Feddan, and Reasons for Use.",
    longContent: "Agricultural gypsum is one of the most important natural soil amendments used by farmers to improve soil quality and increase crop productivity—especially in saline, sodic, and heavy clay soils.In this article, we will cover the benefits of agricultural gypsum, when to apply it, recommended application rates per feddan, reasons for use, and the nutrients it supplies to support plant growth stages.",
    benefits: [
      {
  title: "What Is Agricultural Gypsum?",
  text: "Agricultural gypsum is a natural material composed mainly of calcium sulfate dihydrate (CaSO₄·2H₂O). It is widely used to improve soil structure, reduce salinity and sodicity problems, and enhance overall soil fertility."
      },
      {
        title: "Benefits of Agricultural Gypsum for Soil and Crops",
       text: "Agricultural gypsum provides multiple benefits that make it one of the most effective soil conditioners." 
      },
      {title: "Reduces Soil Salinity and Sodicity",
       text: "Gypsum helps replace excess sodium (Na) in the soil with calcium, which:", 
       subItems: [
        "Reduces soil alkalinity",
"Improves soil fertility",
"Enhances root nutrient uptake",
"Promotes healthier plant growth"
       ]
      },
{title: "Improves Soil Structure",
       text: "In heavy clay soils, gypsum:",
       subItems: [
"Breaks up compacted soil",
"Improves soil aeration",
"Enhances water infiltration and drainage",
"Prevents surface crusting"
       ]
      },
{title: "Increases Crop Productivity",
       text: "By improving soil conditions, plants can absorb nutrients more efficiently, resulting in:" ,
subItems: [
"Stronger root systems",
"Higher yield",
"Better crop quality"
]
},
      {title: "Enhances Water and Fertilizer Efficiency",
       text: "Gypsum improves irrigation efficiency and increases the effectiveness of applied fertilizers." 
      },
{title: "What Nutrients Does Agricultural Gypsum Supply?",
       text: "Agricultural gypsum is an important source of two essential plant nutrients:" ,
       subItems: ["Calcium (Ca): Calcium helps:",
        "Strengthen root development",
"Improve cell wall formation",
"Increase plant resistance to diseases",
"Support overall plant structure"
]
},
{title: "Sulfur (S)",
       text: "Sulfur contributes in:", 
       subItems: ["Protein synthesis",
"Enzyme activation",
"Improved crop quality",
"Better tolerance to stress conditions"
]
      },
      {title: "Reasons to Use Agricultural Gypsum",
        text: "Agricultural gypsum is recommended in the following situations:",
      subItems: [
        "Saline and sodic soils",
"High sodium levels in soil tests",
"Poor root development",
"Heavy clay soils",
"Poor soil drainage",
"Declining soil fertility due to repeated cultivation"
 ]
      },
        {title: "Best Time to Apply Agricultural Gypsum",
        text: "Proper timing ensures maximum effectiveness.",
        subItems: [
"Before Planting (Best Time)",
"• The ideal time to apply gypsum is during land preparation before planting. This allows the soil to improve before crop establishment.",
"During Land Preparation and Tillage",
"Gypsum should be evenly spread and incorporated into the soil before the final plowing.",
"When Salinity Symptoms Appear",
"Such as:",
"• White salt crust on soil surface",
"• Poor plant growth",
"• Yellowing leaves",
"• Weak root systems",
"After Harvest",
"It can also be applied after harvest to rehabilitate soil and prepare it for the next growing season."
        ]
     },
        {title: "Recommended Application Rates per Feddan",
        text: "Application rates depend on soil condition and salinity level. General guidelines are:",
      subItems: [
        "Slight soil improvement ---- > needed	1 ton per feddan",
"Heavy clay soil ---- > 1–2 tons per feddan",
"Moderate salinity ---- > 2–3 tons per feddan",
"Severe salinity / high sodicity ---- > 4–5 tons per feddan",
"Note: A soil test is strongly recommended to determine the precise application rate."
]
},
    {title: "How to Apply Agricultural Gypsum Correctly",
        text: "For best results:",
      subItems: ["Apply before planting",
"Spread evenly across the field",
"Incorporate into soil through plowing",
"Irrigate thoroughly after application to help leach excess salts"
]},
],
    tdsUrl: "/pdfs/gypsum.pdf"
  },
  "rock-phosphate-powder": {
    name: "Rock Phosphate Powder",
    description: "High-quality natural phosphorus source for organic farming and fertilizer production.",
    longContent: "Our rock phosphate is finely ground to ensure maximum surface area and availability. It is a slow-release phosphorus source that builds long-term soil fertility.",
    benefits: [
      {title: "High P2O5 concentration"},
      {title: "100% Organic and Natural"},
      {title: "Sustainable Soil Fertility"},
      {title: "Compatible with Organic Certification"}
    ],
    tdsUrl: "#"
  },
  "kaolin": {
    name: "Refined Kaolin (China Clay)",
    description: "Kaolin (China Clay) is a high-purity natural mineral widely used in advanced industrial applications.",
    longContent: "It is mainly composed of hydrated aluminum silicate (Al₂Si₂O₅(OH)₄) and is valued for its fine texture, brightness, and chemical stability.",
    benefits: [
      "Kaolin is an essential raw material in ceramics and porcelain, improving strength and whiteness.",
      "It is also used in the paper industry to enhance smoothness, opacity, and print quality.",
      "In paints and coatings, kaolin provides better coverage and consistency.",
      "Kaolin is additionally applied in rubber, plastics, and agriculture for durability and protective solutions."
    ],
    tdsUrl: "#"
  },
  "feldspar": {
    name: "Ground Feldspar",
    description: "Ground Feldspar is a finely processed mineral widely used in many industrial applications",
    longContent: "It is produced by crushing and grinding natural feldspar into a powder form.",
    benefits: [
      "Ground feldspar is mainly used in the ceramics and glass industries, where it acts as a flux to reduce melting temperatures and improve the strength, durability, and surface finish of the final products. ",
      "It is also utilized in paints, plastics, rubber, and construction materials as a functional filler that enhances performance and quality.",
      "Due to its versatility and consistent properties, ground feldspar is an essential raw material in modern manufacturing." 
    ],
    tdsUrl: "#"
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
            {/* Applications Grid */}
<div className="mb-16">
  {/* ... */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
   {product.applications.map((app) => (
  <div key={app.title} className="application-card">
    <Image
      src={app.image}
      alt={app.title}
      width={200}
      height={200}
      className="rounded-lg"
    />
    <p>{app.title}</p>
  </div>
))}
  </div>
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