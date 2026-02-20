"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      category: "Product Quality",
      questions: [
        {
          q: "What is the primary role of Calcium Carbonate in paint formulations?",
          a: "Beyond acting as a cost-effective filler, it is essential for enhancing whiteness and opacity. It also provides critical rheological control (viscosity) and improves the mechanical strength of the dry film.",
        },
        {
          q: "Which grades do you provide?",
          a: "We offer a comprehensive portfolio including Ground Calcium Carbonate (GCC) for standard applications and Surface-Treated Grades (CGCC) for superior performance in polymers and specialty coatings.",
        },
        {
          q: "Can your products be used in outdoor/exterior coatings?",
          a: "Absolutely. It is a staple in exterior paints to optimize opacity. While TiO2 provides UV resistance, our high-purity grades support weather resistance while significantly lowering the overall cost per liter.",
        },
      ]
    }
  ]

  return (
    <> {/* Wrap everything in a fragment */}
      <Header />
      <section className="pt-24 pb-12 md:pt-32 px-4 bg-slate-50 dark:bg-slate-950 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Find answers to common questions about our products and services</p>
          </div>

          <div className="space-y-8">
            {faqs.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="text-2xl font-bold mb-4 text-primary">{section.category}</h3>
                <div className="space-y-3">
                  {section.questions.map((faq, idx) => {
                    const faqId = sectionIdx * 100 + idx
                    const isOpen = openFaq === faqId

                    return (
                      <button
                        key={faqId}
                        onClick={() => setOpenFaq(isOpen ? null : faqId)}
                        className="w-full text-left"
                      >
                        <div className={`bg-card border rounded-lg p-6 transition-all ${
                          isOpen ? "border-primary shadow-lg" : "border-border hover:border-primary/50"
                        }`}>
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="font-bold text-lg pr-4">{faq.q}</h4>
                            <ChevronDown
                              size={24}
                              className={`flex-shrink-0 text-primary transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </div>

                          {isOpen && (
                            <div className="mt-4 pt-4 border-t text-muted-foreground">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-primary/5 border border-primary/20 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-2">Didn't find your answer?</h3>
            <p className="text-muted-foreground mb-6">Our team is ready to help with any questions or custom requirements</p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}