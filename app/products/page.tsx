import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGrid from "@/components/products/product-grid"

export const metadata = {
  title: "Products | El Fedawia Co.",
  description:
    "Explore our premium mining and manufacturing products including phosphate, kaolin, talc, and limestone.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />
      <section className="py-12 md:py-16 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Premium quality mining and manufacturing solutions designed for diverse industrial applications
          </p>
        </div>
      </section>
      <ProductGrid />
      <Footer />
    </main>
  )
}
