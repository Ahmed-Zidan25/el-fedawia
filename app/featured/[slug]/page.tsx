import { Download, CheckCircle2, FileText, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Detailed data mapped from your Word document
const productDetails = {
  "calcium-carbonate": {
    name: "Calcium Carbonate (CaCO3)",
    description: "The world’s most versatile and abundant mineral, sourced from high-purity deposits of limestone and marble[cite: 251].",
    longContent: "As a leading manufacturer, we provide essential solutions for paint formulations and allied industries. Our products are engineered to enhance chemical inertness, ensure high whiteness, and optimize production economics through superior dispersibility[cite: 253, 254].",
    benefits: [
      "Superior Whiteness & Brightness [cite: 256]",
      "Cost Optimization: Partial replacement of Titanium Dioxide (TiO2) ",
      "Advanced Rheology & Film Integrity [cite: 258]",
      "Enhanced Durability and Abrasion Resistance [cite: 259]"
    ],
    tdsUrl: "https://drive.google.com/file/d/1KxbTE11WqXFz8JTSj012VDbU1n4nUtDQ/view?usp=sharing" // Your TDS link
  },
  "talc-powder": {
    name: "Premium Talc Solutions",
    description: "The world’s softest and most hydrophobic mineral—insoluble and inert[cite: 219].",
    longContent: "Our FD Talc product range is manufactured from carefully selected, high-purity deposits with controlled mineral content. It adds new features to products and makes processes more efficient[cite: 220, 237].",
    benefits: [
      "Exceptional softness and hydrophobic nature [cite: 230]",
      "High chemical stability [cite: 230]",
      "Advanced particle size distribution (PSD) [cite: 235]",
      "High aspect ratio for high-tech applications [cite: 227]"
    ],
    tdsUrl: "/downloads/talc-tds.pdf" 
  },
  "agricultural-gypsum": {
    name: "Agricultural Gypsum",
    description: "One of the most important natural soil amendments used to improve soil quality and increase crop productivity[cite: 291].",
    longContent: "Composed mainly of calcium sulfate dihydrate, it is widely used to improve soil structure, reduce salinity and sodicity problems, and enhance overall soil fertility[cite: 294, 295].",
    benefits: [
      "Reduces Soil Salinity and Sodicity [cite: 298]",
      "Supplies essential Calcium (Ca) and Sulfur (S) [cite: 318, 319, 325]",
      "Breaks up compacted heavy clay soils [cite: 305, 306]",
      "Enhances water infiltration and root development [cite: 308, 312]"
    ],
    tdsUrl: "/downloads/gypsum-tds.pdf"
  },
  "limestone": {
    name: "Industrial Limestone",
    description: "High-quality limestone crushed and ground into controlled particles for manufacturing and construction[cite: 379].",
    longContent: "Preferred for its high purity, excellent whiteness, and cost-effectiveness. It is essential in cement production, bricks, and concrete products[cite: 380, 382, 386].",
    benefits: [
      "High calcium carbonate content [cite: 399]",
      "Consistent particle size distribution [cite: 398]",
      "Improves structural performance in concrete [cite: 387]",
      "Used as a fluxing agent in glass and ceramics [cite: 395]"
    ],
    tdsUrl: "/downloads/limestone-tds.pdf"
  },
  "kaolin": {
    name: "Refined Kaolin (China Clay)",
    description: "A high-purity natural mineral composed of hydrated aluminum silicate[cite: 375].",
    longContent: "Valued for its fine texture, brightness, and chemical stability. Essential for ceramics, porcelain, and the paper industry to enhance smoothness and opacity[cite: 375].",
    benefits: [
      "Exceptional brightness and whiteness [cite: 375]",
      "Improved strength in ceramics [cite: 375]",
      "Better coverage and consistency in paints [cite: 375]",
      "Chemical stability and inertness [cite: 375]"
    ],
    tdsUrl: "/downloads/kaolin-tds.pdf"
  },
  "feldspar": {
    name: "Ground Feldspar",
    description: "Essential raw material for the glass and ceramic manufacturing sectors[cite: 373].",
    longContent: "Acts as a flux to reduce melting temperatures and improve the strength, durability, and surface finish of final products[cite: 371].",
    benefits: [
      "Reduced melting temperatures [cite: 371]",
      "Improved durability and surface finish [cite: 371]",
      "Consistent chemical properties [cite: 373]",
      "Alkali-rich composition for industrial performance [cite: 8]" 
    ],
    tdsUrl: "/downloads/feldspar-tds.pdf"
  }
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productDetails[params.slug as keyof typeof productDetails];

  if (!product) return <div className="py-20 text-center">Product not found.</div>;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-12 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <a href="/products" className="hover:text-primary">Products</a>
            <ChevronRight size={14} />
            <span className="text-foreground font-medium">{product.name}</span>
          </nav>

          {/* Title and Intro */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              {product.description}
            </p>
          </div>

          {/* Detailed Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-4">Technical Overview</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {product.longContent}
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6">Key Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* TDS Download Section */}
          <div className="bg-red-600 rounded-[2rem] p-8 md:p-12 text-white shadow-2xl shadow-red-600/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Technical Data Sheet (TDS)</h2>
              <p className="text-red-50 text-lg opacity-90">
                Get full chemical composition and particle size distribution.
              </p>
            </div>
            <a
              href={product.tdsUrl}
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95 whitespace-nowrap"
            >
              <FileText size={24} />
              DOWNLOAD TDS
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}