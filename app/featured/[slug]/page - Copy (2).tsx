import { Download, CheckCircle2, FileText, ChevronRight, MessageSquare } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

const productDetails = {
  "calcium-carbonate": {
    name: "Calcium Carbonate (CaCO3)",
    description: "Calcium Carbonate (CaCO3) | High-Performance Mineral Solutions.",
    longContent: "Calcium Carbonate is the world’s most versatile and abundant mineral, sourced from our high-purity deposits of limestone and marble. With a Mohs hardness of approximately 3, it serves as the most efficient, soft, and easy-to-process functional filler in the industry. As a leading manufacturer, we provide essential solutions for paint formulations and allied industries. Our products are engineered to enhance chemical inertness, ensure high whiteness, and optimize production economics through superior dispersibility.",
    benefits: [
      "Superior Whiteness & Brightness: Provides a clean, neutral white base for high-quality coatings and paper products.",
      "Cost Optimization: Enables the partial replacement of expensive pigments like Titanium Dioxide (TiO2), significantly reducing total formulation costs without compromising opacity.",
      "Advanced Rheology & Film Integrity: Improves viscosity control and enhances the mechanical strength and application characteristics of the coating film.",
      "Enhanced Durability: Increases abrasion and wear resistance, ensuring the longevity of the finished surface.",
      "Eco-Friendly & Safe: A non-hazardous, sustainable mineral compatible with strictly regulated environmental standards.",
      "Broad Chemical Compatibility: Resists efflorescence in waterborne systems and integrates seamlessly with various binder chemistries."
    ],
    tdsUrl: "/pdfs/Calcium-Carbonate.pdf"
  },
  "coated-calcium-carbonate": {
    name: "Coated Calcium Carbonate",
    description: "Surface-Treated Calcium Carbonate (CGCC).",
    longContent: "Our flagship Processed Grade, treated with Stearic Acid to transform the mineral from hydrophilic to hydrophobic. This grade is specifically designed for plastics and polymer applications where moisture resistance and superior dispersion are critical.",
    benefits: [
      "Plastics & PVC: Improved bonding with polymer resins.",
      "Optimized Processing: Lower plasticizer absorption and reduced machine wear.",
      "Superior Dispersion: Prevention of particle agglomeration in non-polar systems."
    ],
    tdsUrl: "/pdfs/Calcium-Carbonate.pdf"
  },
  "talc-powder": {
    name: "Premium Talc Solutions from Egypt",
    description: "Talc is one of the most versatile industrial minerals, valued for its exceptional softness, hydrophobic nature, and chemical stability. It enhances product quality, improves processing efficiency, and delivers reliable performance across a wide range of applications.",
    longContent: "Elfedawia Co. is uniquely positioned with access to high-quality talc reserves in Egypt, enabling us to supply consistent, pure, and reliable talc products to global markets at a time when premium resources are becoming increasingly scarce worldwide. <br /><br /> The performance of talc depends on its particle size distribution and particle shape. At Elfedawia Co., we apply advanced milling and classification techniques to produce talc with uniform particle sizes, optimized PSD curves, and excellent dispersion characteristics—ensuring dependable results in every application. <br /><br /> Our FD Talc product range is manufactured from carefully selected, high-purity deposits with controlled mineral content. We also offer special high–aspect-ratio talc grades, developed for advanced and high-performance applications requiring precision and consistency.",
    benefits: [
      "Paper & Packaging",
      "Paints & Coatings",
      "Plastics & Polymers",
      "Polyester Putties",
      "Adhesives & Sealants",
      "Cosmetics & Personal Care",
      "Ceramics"
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
        text: "Ground limestone is an essential component in the cement industry. It is used both as a raw feed material and as a mineral additive to improve workability and reduce production costs."
      },
      {
        title: "Bricks, Blocks, and Concrete Products",
        text: "In the production of concrete blocks, bricks, and precast materials, limestone powder improves structural performance and reduces shrinkage."
      },
      {
        title: "Animal Feed and Agriculture",
        text: "Limestone is an important source of calcium in animal nutrition, particularly for poultry and livestock. It supports healthy bone development and eggshell formation."
      },
      {
        title: "Water Treatment and Environmental Uses",
        text: "Used in water treatment facilities to neutralize acidity and remove impurities."
      },
      {
        title: "Glass and Ceramics Production",
        text: "Limestone acts as a fluxing agent, helping to reduce melting temperatures and improve product strength and clarity."
      },
      {
        title: "Why Choose Our Ground Limestone?",
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
    description: "Benefits of Agricultural Gypsum, Application Timing, and Reasons for Use.",
    longContent: "Agricultural gypsum is one of the most important natural soil amendments used by farmers to improve soil quality and increase crop productivity—especially in saline, sodic, and heavy clay soils.",
    benefits: [
      {
        title: "Reduces Soil Salinity and Sodicity",
        text: "Gypsum helps replace excess sodium (Na) in the soil with calcium, which:", 
        subItems: ["Reduces soil alkalinity", "Improves soil fertility", "Enhances root nutrient uptake"]
      },
      {
        title: "Improves Soil Structure",
        text: "In heavy clay soils, gypsum:",
        subItems: ["Breaks up compacted soil", "Improves soil aeration", "Enhances water infiltration"]
      },
      {
        title: "Nutrient Supply",
        text: "Supplies essential Calcium (Ca) and Sulfur (S) for:",
        subItems: ["Root development", "Cell wall formation", "Protein synthesis"]
      }
    ],
    tdsUrl: "/pdfs/gypsum.pdf"
  },
  "rock-phosphate-powder": {
    name: "Rock Phosphate Powder",
    description: "High-quality natural phosphorus source for organic farming and fertilizer production.",
    longContent: "Our rock phosphate is finely ground to ensure maximum surface area and availability. It is a slow-release phosphorus source that builds long-term soil fertility.",
    benefits: ["High P2O5 concentration", "100% Organic and Natural", "Sustainable Soil Fertility"],
    tdsUrl: "#"
  },
  "kaolin": {
    name: "Refined Kaolin (China Clay)",
    description: "Kaolin (China Clay) is a high-purity natural mineral widely used in advanced industrial applications.",
    longContent: "It is mainly composed of hydrated aluminum silicate and is valued for its fine texture, brightness, and chemical stability.",
    benefits: [
      "Essential raw material in ceramics and porcelain",
      "Enhances smoothness and opacity in paper",
      "Provides better coverage in paints",
      "Used in rubber and plastics for durability"
    ],
    tdsUrl: "#"
  },
  "feldspar": {
    name: "Ground Feldspar",
    description: "Finely processed mineral widely used in many industrial applications.",
    longContent: "It acts as a flux in ceramics and glass industries to reduce melting temperatures and improve product strength.",
    benefits: [
      "Reduces melting temperatures in glass",
      "Improves strength and surface finish",
      "Functional filler in paints and plastics"
    ],
    tdsUrl: "#"
  }
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const decodedSlug = decodeURIComponent(slug);
  const product = productDetails[decodedSlug as keyof typeof productDetails];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Product Not Found: "{decodedSlug}"</h1>
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
            <div 
              className="text-lg leading-relaxed text-slate-600 dark:text-slate-400"
              dangerouslySetInnerHTML={{ __html: product.longContent }}
            />

            <h2 className="text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Key Strategic Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.benefits.map((benefit, i) => (
                <div key={i} className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2 className="text-red-600 shrink-0 mt-1" size={20} />
                    <div>
                      <span className="text-slate-900 dark:text-white font-bold block text-lg">
                        {typeof benefit === 'string' ? benefit : benefit.title}
                      </span>
                      {typeof benefit !== 'string' && benefit.text && (
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{benefit.text}</p>
                      )}
                    </div>
                  </div>
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

          <div className="bg-red-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl shadow-red-600/20 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Technical Resources</h2>
              <p className="text-red-50 text-lg opacity-90">Download specifications or request commercial pricing.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href={product.tdsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
              >
                <FileText size={22} /> TDS
              </a>
              <a
                href={`/get-quote?product=${encodeURIComponent(product.name)}`}
                className="flex items-center justify-center gap-3 bg-white text-red-600 px-8 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all shadow-lg"
              >
                <MessageSquare size={22} /> GET QUOTE
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}