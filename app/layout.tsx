import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "El Fedawia Co. | Mining & Manufacturing Excellence",
  description:
    "Leading provider of phosphate and kaolin products. Committed to delivering exceptional quality in mining and manufacturing through innovation and sustainability.",
  keywords: "mining, manufacturing, phosphate, kaolin, industrial, Egypt",
  openGraph: {
    title: "El Fedawia Co. | Mining & Manufacturing Excellence",
    description: "Leading provider of phosphate and kaolin products for industrial applications.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#c62828",
  width: "device-width",
  initialScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${geistSans.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
