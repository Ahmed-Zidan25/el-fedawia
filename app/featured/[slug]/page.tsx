import { Download, CheckCircle2, FileText, ChevronRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const productDetails = {
  // Key must match: product.name.toLowerCase().replace(/ /g, '-')
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
    description: "High-quality limestone crushed and ground into controlled particles for manufacturing and construction.",
    longContent: "Preferred for its high purity, excellent whiteness, and cost-effectiveness. It is essential in cement production, bricks, and concrete products.",
    benefits: [
      "High calcium carbonate content",
      "Consistent particle size distribution",
      "Improves structural performance in concrete",
      "Used as a fluxing agent in glass and ceramics"
    ],
    tdsUrl: "#"
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
    longContent: "Our rock phosphate is finely ground to ensure maximum surface area and availability. It is a slow-release phosphorus source that builds long-term soil fertility without the risk of leaching common in chemical fertilizers.",
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
    longContent: "Valued for its fine texture, brightness, and chemical stability. Essential for ceramics, porcelain, and the paper industry to enhance smoothness and opacity.",
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
      "Alkali-rich composition for industrial performance" 
    ],
    tdsUrl: "#"
  }
};

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Use decoded URL to find the product
  const decodedSlug = decodeURIComponent(params.slug);
  const product = productDetails[decodedSlug as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found: {decodedSlug}</h1>
        <p className="mb-6 text-muted-foreground">Please check the URL or return to the products page.</p>
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              {product.name}
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed border-l-4 border-red-600 pl-6 italic">
              {product.description}
            </p>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none mb-16">
            <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Technical Overview</h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              {product.longContent}
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Key Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={20} />
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-red-600/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Technical Data Sheet (TDS)</h2>
              <p className="text-red-50 text-lg opacity-90">
                Get full chemical composition and particle size distribution.
              </p>
            </div>
            <a
              href={product.tdsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all active:scale-95 shadow-lg"
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