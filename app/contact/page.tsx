import Header from "@/components/header"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact/contact-form"
import MapSection from "@/components/contact/map-section"
import SocialMediaSection from "@/components/contact/social-media"

export const metadata = {
  title: "Contact Us | El Fedawia Co.",
  description:
    "Get in touch with El Fedawia Co. Located in Bani-Suef, Egypt. Contact our team for inquiries and support.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      {/* Header Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions? Our team is ready to help. Reach out to us using any of the methods below.
          </p>
        </div>
      </section>

      {/* Contact & Map */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Info */}
            <div className="space-y-8">
              <MapSection />

              {/* Contact Info */}
              <div className="bg-card rounded-lg border border-border p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Office Details</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">Address</p>
                    <p className="text-foreground">
                      Section No.51, 52 & 53 Mineral Sector
                      <br />
                      Bayad El-Arab industrial zone
                      <br />
                      Bani-Suef, Egypt
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">Email</p>
                    <a href="mailto:mariam.rashwan@elfedawia.com" className="text-primary hover:underline">
                      mariam.rashwan@elfedawia.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="text-foreground">Available upon request</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground mb-1">Hours</p>
                    <p className="text-foreground">Monday - Friday: 8:00 AM - 6:00 PM EGY</p>
                    <p className="text-foreground">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 md:py-24 bg-muted/50 border-t border-border">
        <SocialMediaSection />
      </section>

      <Footer />
    </main>
  )
}
