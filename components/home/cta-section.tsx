"use client"

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-12 md:py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Partner With Us?</h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Discover how El Fedawia Co. can provide you with premium mining and manufacturing products tailored to your
          needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/get-quote"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg"
          >
            Get a Quote Today
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-secondary-foreground rounded-lg font-semibold hover:bg-secondary-foreground/10 transition-all"
          >
            Contact Us
          </Link>
        </div>

        <p className="mt-8 text-sm opacity-75">
          Available 24/7 for inquiries • Fast response times • Professional support team
        </p>
      </div>
    </section>
  )
}
