import { Download, CheckCircle2, FileText, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const productDetails = {
  "calcium-carbonate": {
    name: "Calcium Carbonate (CaCO3)",
    description: "The world’s most versatile and abundant mineral, sourced from high-purity deposits of limestone and marble.",
    longContent: "As a leading manufacturer, we provide essential solutions for paint formulations and allied industries. Our products are engineered to enhance chemical inertness, ensure high whiteness, and optimize production economics through superior dispersibility.",
    benefits: [
      "Superior Whiteness & Brightness",
      "Cost Optimization: Partial replacement of Titanium Dioxide (TiO2)",
      "Advanced Rheology & Film Integrity",
      "Enhanced Durability and Abrasion Resistance"
    ],
    tdsUrl: "https://drive.google.com/file/d/1KxbTE11WqXFz8JTSj012VDbU1n4nUtDQ/view?usp=sharing"
  },
  "coated-calcium-carbonate": {
    name: "Coated Calcium Carbonate",
    description: "Surface-treated calcium carbonate with advanced stearic acid coating for superior dispersion.",
    longContent: "Our coated grade is specifically designed for plastic and polymer applications. The organic treatment prevents particle agglomeration and ensures a hydrophobic surface, making it perfectly compatible with non-polar resins.",
    benefits: [
      "Reduced Plasticizer Absorption",
      "Excellent Dispersion in Polymers",
      "Improved Impact Strength",
      "Enhanced Surface Gloss"
    ],
    tdsUrl: "#"
  },
  "talc-powder": {
    name: "Premium Talc Solutions",
    description: "The world’s softest and most hydrophobic mineral—insoluble and inert.",
    longContent: "Our FD Talc product range is manufactured from carefully selected, high-purity deposits with controlled mineral content. It adds new features to products and makes processes more efficient.",
    benefits: [
      "Exceptional softness and hydrophobic nature",
      "High chemical stability",
      "Advanced particle size distribution (PSD)",
      "High aspect ratio for high-tech applications"
    ],
    tdsUrl: "#" 
  },
  "limestone": {
    name: "Industrial Limestone",
    description: "Ground Limestone (Calcium Carbonate) – Industrial Applications.",
    longContent: "Ground limestone, also known as calcium carbonate (CaCO₃), is one of the most widely used industrial minerals worldwide. Produced by crushing and grinding high-quality limestone into controlled millimeter-sized particles, this versatile material plays a vital role in a wide range of manufacturing and construction sectors. <br /> Due to its high purity, excellent whiteness, cost-effectiveness, and chemical stability, ground limestone is a preferred raw material for many industries.",
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
    description: "One of the most important natural soil amendments used to improve soil quality and increase crop productivity.",
    longContent: "Composed mainly of calcium sulfate dihydrate, it is widely used to improve soil structure, reduce salinity and sodicity problems, and enhance overall soil fertility.",
    benefits: [
      "Reduces Soil Salinity and Sodicity",
      "Supplies essential Calcium (Ca) and Sulfur (S)",
      "Breaks up compacted heavy clay soils",
      "Enhances water infiltration and root development"
    ],
    tdsUrl: "#"
  },
  "rock-phosphate-powder": {
    name: "Rock Phosphate Powder",
    description: "High-quality natural phosphorus source for organic farming and fertilizer production.",
    longContent: "Our rock phosphate is finely ground to ensure maximum surface area and availability. It is a slow-release phosphorus source that builds long-term soil fertility.",
    benefits: [
      "High P2O5 concentration",
      "100% Organic and Natural",
      "Sustainable Soil Fertility",
      "Compatible with Organic Certification"
    ],
    tdsUrl: "#"
  },
  "kaolin": {
    name: "Refined Kaolin (China Clay)",
    description: "A high-purity natural mineral composed of hydrated aluminum silicate.",
    longContent: "Valued for its fine texture, brightness, and chemical stability. Essential for ceramics, porcelain, and the paper industry.",
    benefits: [
      "Exceptional brightness and whiteness",
      "Improved strength in ceramics",
      "Better coverage and consistency in paints",
      "Chemical stability and inertness"
    ],
    tdsUrl: "#"
  },
  "feldspar": {
    name: "Ground Feldspar",
    description: "Essential raw material for the glass and ceramic manufacturing sectors.",
    longContent: "Acts as a flux to reduce melting temperatures and improve the strength, durability, and surface finish of final products.",
    benefits: [
      "Reduced melting temperatures",
      "Improved durability and surface finish",
      "Consistent chemical properties",
      "Alkali-rich composition" 
    ],
    tdsUrl: "#"
  }
};

// Next.js params are now async in newer versions
export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(slug);
  
  const product = productDetails[decodedSlug as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found: "{decodedSlug}"</h1>
        <p className="mb-6 text-muted-foreground text-center">
          The link sent us to <code className="bg-slate-100 p-1">{decodedSlug}</code>, but that key doesn't exist in our data.
        </p>
        <a href="/" className="px-6 py-2 bg-red-600 text-white rounded-lg">Return Home</a>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-16 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">{product.name}</h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              {product.description}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Technical Overview</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">{product.longContent}</p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Key Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {product.benefits.map((benefit, i) => (
    <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex items-start gap-3 mb-3">
        <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={20} />
        <div>
          {/* Main Title or Text */}
          <span className="text-slate-900 dark:text-white font-bold block text-lg">
            {typeof benefit === 'string' ? benefit : benefit.title}
          </span>
          
          {/* Description Text (if it's an object) */}
          {typeof benefit !== 'string' && benefit.text && (
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              {benefit.text}
            </p>
          )}
        </div>
      </div>

      {/* Render the Sublist if it exists */}
      {typeof benefit !== 'string' && benefit.subItems && benefit.subItems.length > 0 && (
        <ul className="ml-8 space-y-2 mt-4 border-l-2 border-slate-100 dark:border-slate-800 pl-4">
          {benefit.subItems.map((sub, j) => (
            <li key={j} className="text-sm text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full" />
              {sub}
            </li>
          ))}
        </ul>
      )}
    </div>
  ))}
</div>
          </div>

          <div className="bg-red-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-red-600/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Technical Data Sheet (TDS)</h2>
              <p className="text-red-50 text-lg opacity-90">Get full chemical composition and particle size distribution.</p>
            </div>
            <a
              href={product.tdsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-lg"
            >
              <FileText size={24} /> DOWNLOAD TDS
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}