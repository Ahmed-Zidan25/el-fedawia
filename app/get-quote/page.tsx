import Header from "@/components/header"
import Footer from "@/components/footer"
import QuoteForm from "@/components/quote/quote-form"

export const metadata = {
  title: "Get Quote | El Fedawia Co.",
  description: "Request a custom quote for El Fedawia Co. products. Fast response times and competitive pricing.",
}

export default function GetQuotePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get a Quote</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Request a customized quote for our products. Our sales team will respond within 24 hours with competitive
            pricing and terms.
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24 bg-background flex-1">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
