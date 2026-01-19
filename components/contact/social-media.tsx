"use client"

import { Linkedin, Facebook, Mail, Phone, MessageCircle } from "lucide-react"

export default function SocialMediaSection() {
  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:mariam.rashwan@elfedawia.com",
      value: "mariam.rashwan@elfedawia.com",
      bgColor: "from-red-500/10 to-red-500/5",
    },
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+201012595634",
      value: "+20 1012595634",
      bgColor: "from-orange-500/10 to-orange-500/5",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "https://wa.me/+201012595634",
      value: "Chat with us",
      bgColor: "from-green-500/10 to-green-500/5",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      value: "@ElFedawiaCo",
      bgColor: "from-blue-500/10 to-blue-500/5",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "#",
      value: "@ElFedawiaCo",
      bgColor: "from-blue-600/10 to-blue-600/5",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Connect With Us</h2>
        <p className="text-muted-foreground text-lg">Multiple ways to reach our team</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
        {socialLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <a
              key={index}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg p-6 text-center backdrop-blur-sm bg-gradient-to-br ${link.bgColor}`}
            >
              {/* Animated background gradient */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/5 to-transparent" />

              <div className="relative z-10">
                <div className="flex justify-center mb-3">
                  <div className="p-2.5 bg-primary/20 group-hover:bg-primary/30 rounded-lg transition-all duration-300 transform group-hover:scale-110">
                    <Icon size={24} className="text-primary" />
                  </div>
                </div>
                <p className="font-semibold text-sm md:text-base mb-1 group-hover:text-primary transition-colors">
                  {link.label}
                </p>
                <p className="text-xs md:text-sm text-foreground/70 truncate group-hover:text-foreground/90 transition-colors">
                  {link.value}
                </p>
              </div>

              {/* Hover indicator line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </a>
          )
        })}
      </div>
    </div>
  )
}
