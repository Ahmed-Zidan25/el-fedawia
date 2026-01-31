"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Download, FileText, BookOpen, FileJson } from "lucide-react"
import { useState } from "react"

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const resources = [
    {
      id: 1,
      title: "Calcium Carbonate Technical Data Sheet",
      category: "datasheet",
      type: "PDF",
      size: "2.4 MB",
      description: "Complete specifications and properties for our calcium carbonate products",
      icon: FileText,
    },
    {
      id: 2,
      title: "Application Guide: Paints & Coatings",
      category: "guide",
      type: "PDF",
      size: "3.1 MB",
      description: "Detailed recommendations for using our minerals in paint formulations",
      icon: BookOpen,
    },
    {
      id: 3,
      title: "Kaolin Specifications & Grades",
      category: "datasheet",
      type: "PDF",
      size: "1.8 MB",
      description: "Complete guide to all kaolin grades and their properties",
      icon: FileText,
    },
    {
      id: 4,
      title: "Agriculture Application Whitepaper",
      category: "whitepaper",
      type: "PDF",
      size: "4.2 MB",
      description: "Research-backed insights on using phosphate and minerals in agriculture",
      icon: BookOpen,
    },
    {
      id: 5,
      title: "Quality Control Procedures",
      category: "technical",
      type: "PDF",
      size: "2.9 MB",
      description: "Our rigorous testing and quality assurance methodology",
      icon: FileJson,
    },
    {
      id: 6,
      title: "Talc Powder Specification Sheet",
      category: "datasheet",
      type: "PDF",
      size: "2.1 MB",
      description: "Comprehensive talc powder grades and technical specifications",
      icon: FileText,
    },
    {
      id: 7,
      title: "Ceramics Industry Guide",
      category: "guide",
      type: "PDF",
      size: "3.7 MB",
      description: "Best practices for using our minerals in ceramic tile production",
      icon: BookOpen,
    },
    {
      id: 8,
      title: "Sustainability & Environmental Impact",
      category: "report",
      type: "PDF",
      size: "3.4 MB",
      description: "Our commitment to sustainable mining and production practices",
      icon: FileJson,
    },
  ]

  const categories = [
    { id: "all", label: "All Resources", count: 8 },
    { id: "datasheet", label: "Data Sheets", count: 3 },
    { id: "guide", label: "Application Guides", count: 2 },
    { id: "whitepaper", label: "Whitepapers", count: 1 },
    { id: "technical", label: "Technical Documents", count: 1 },
    { id: "report", label: "Reports", count: 1 },
  ]

  const filtered = selectedCategory === "all" 
    ? resources 
    : resources.filter(r => r.category === selectedCategory)

  return (
    <main className="min-h-screen flex flex-col pt-20">
      <Header />

      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Resources Hub</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Download datasheets, application guides, and technical documentation for all our products
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-lg p-6 sticky top-28">
                <h2 className="font-bold text-lg mb-4">Categories</h2>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all font-semibold text-sm ${
                        selectedCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{category.label}</span>
                        <span className="text-xs opacity-75">({category.count})</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Resources Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map(resource => {
                  const Icon = resource.icon
                  return (
                    <div key={resource.id} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-all group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all">
                          <Icon size={24} className="text-primary" />
                        </div>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded font-semibold">
                          {resource.type}
                        </span>
                      </div>

                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{resource.description}</p>

                      <div className="flex items-center justify-between pt-4 border-t">
                        <p className="text-xs text-muted-foreground">{resource.size}</p>
                        <button className="flex items-center gap-2 text-primary hover:gap-3 font-semibold text-sm transition-all">
                          <Download size={16} />
                          Download
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

              {filtered.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No resources found in this category</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Documentation?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can prepare custom technical documentation, SDS (Safety Data Sheets), and application reports for your specific needs
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all"
            >
              Request Custom Documentation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
