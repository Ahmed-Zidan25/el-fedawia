"use client"

import type React from "react"

import { useState } from "react"
import { FileText, CheckCircle, AlertCircle } from "lucide-react"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    quantity: "",
    unit: "tons",
    deliveryLocation: "",
    deadline: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const products = [
    "Calcium Carbonate",
    "Coated calcium carbonate",
    "Talc Powder",
    "Limestone",
    "Agricultural Gypsum",
    "Rock Phosphate Powder",
    "Kaolin",
    "Feldspar",
    "Other",
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit quote request")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        quantity: "",
        unit: "tons",
        deliveryLocation: "",
        deadline: "",
        message: "",
      })

      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "An error occurred")
    }
  }

  return (
    <div className="bg-card rounded-lg border border-border p-8 md:p-10 shadow-lg">
      <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
        <FileText size={32} className="text-primary" />
        Request Your Quote
      </h2>
      <p className="text-muted-foreground mb-8">
        Provide your requirements and we'll send you a detailed quote within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="+20 XXX XXXX XXX"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-semibold mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="Your company"
            />
          </div>
        </div>

        {/* Product Selection */}
        <div>
          <label htmlFor="product" className="block text-sm font-semibold mb-2">
            Product *
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          >
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>
        </div>

        {/* Quantity & Unit */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="quantity" className="block text-sm font-semibold mb-2">
              Quantity *
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              required
              min="1"
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="0"
            />
          </div>
          <div>
            <label htmlFor="unit" className="block text-sm font-semibold mb-2">
              Unit *
            </label>
            <select
              id="unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="tons">Tons</option>
              <option value="kg">Kg</option>
              <option value="units">Units</option>
              <option value="containers">Containers</option>
            </select>
          </div>
        </div>

        {/* Delivery Location & Deadline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="deliveryLocation" className="block text-sm font-semibold mb-2">
              Delivery Location
            </label>
            <input
              type="text"
              id="deliveryLocation"
              name="deliveryLocation"
              value={formData.deliveryLocation}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              placeholder="City/Country"
            />
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-semibold mb-2">
              Required Delivery Date
            </label>
            <input
              type="date"
              id="deadline"
              name="deadline"
              value={formData.deadline}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold mb-2">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Any special requirements or questions..."
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Quote Request Submitted!</p>
              <p className="text-sm text-green-700">We'll send you a detailed quote within 24 hours.</p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">Error Submitting Quote</p>
              <p className="text-sm text-red-700">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" ? (
            <>
              <span className="animate-spin">⏳</span>
              Submitting...
            </>
          ) : (
            <>
              <FileText size={20} />
              Submit Quote Request
            </>
          )}
        </button>
      </form>

      {/* Info Box */}
      <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-sm text-foreground/70">
          <strong>Note:</strong> All quotes are customized based on your requirements and current market rates. Our
          sales team will contact you to confirm details and provide final pricing.
        </p>
      </div>
    </div>
  )
}
