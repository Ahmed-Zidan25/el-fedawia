"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      category: "Product Quality",
      questions: [
        {
          q: "What are the main differences between natural and treated calcium carbonate?",
          a: "Natural calcium carbonate is processed mechanically to achieve desired particle sizes, while treated calcium carbonate has specialized coatings that prevent clumping and improve dispersion in hydrophobic environments. Treated versions are ideal for paints, plastics, and rubber applications.",
        },
        {
          q: "How do you ensure consistency across batches?",
          a: "We employ rigorous quality control testing on every batch including whiteness measurement, particle size analysis, moisture content testing, and purity verification using advanced laboratory equipment and standardized procedures.",
        },
        {
          q: "What is the particle size range available?",
          a: "We offer particle sizes from 1 micron to 20 microns, with most products available in multiple grades. Custom particle size distributions are available upon request for bulk orders.",
        },
      ],
    },
    {
      category: "Ordering & Delivery",
      questions: [
        {
          q: "What are the minimum order quantities?",
          a: "Minimum orders vary by product. Standard quantities are 20-25 MT per order. For smaller trials or specific requirements, please contact our sales team to discuss custom arrangements.",
        },
        {
          q: "What delivery timelines do you offer?",
          a: "Standard domestic delivery is 7-14 days from order confirmation. International shipments vary by destination (15-45 days). Express delivery options are available at premium rates.",
        },
        {
          q: "Do you offer FOB and CIF pricing?",
          a: "Yes, we offer both FOB (Free on Board) and CIF (Cost, Insurance, Freight) pricing. We work with reliable shipping partners and can accommodate various incoterms based on your requirements.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "Can you provide technical guidance for my application?",
          a: "Absolutely. Our technical team provides detailed guidance on product selection, dosage recommendations, and optimization strategies for your specific application. Contact us with your requirements.",
        },
        {
          q: "Are datasheets and technical documents available?",
          a: "Yes, comprehensive technical data sheets are available for all products on our website. Safety Data Sheets (SDS), certificates of analysis, and application notes can be downloaded or requested directly.",
        },
        {
          q: "What is your quality guarantee?",
          a: "All products come with a quality guarantee. If any batch fails to meet specifications, we provide immediate replacement at no cost. We also offer money-back guarantees on first-time orders if not satisfied.",
        },
      ],
    },
    {
      category: "Customization",
      questions: [
        {
          q: "Do you offer customized grades and specifications?",
          a: "Yes, we can customize particle size, whiteness, moisture content, and coating specifications to match your exact requirements for orders of 50+ MT.",
        },
        {
          q: "Can you produce private label products?",
          a: "Yes, we offer private labeling and white-label products. Minimum quantities apply. Contact our sales team to discuss your specific requirements and pricing.",
        },
      ],
    },
  ]

  return (
    <section className="py-12 px-4 bg-background">
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
  )
}
