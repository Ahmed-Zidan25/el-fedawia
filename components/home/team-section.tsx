"use client"

import { Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Mohamed Rashwan",
    role: "Chief Executive Officer",
    email: "m.rashwan@elfedawia.com",
    image: "/professional-business-portrait-ceo.jpg",
  },
  {
    name: "Montaser Rashwan",
    role: "Commercial Manager",
    email: "montaser@elfedawia.com",
    image: "/professional-business-portrait-manager.jpg",
  },
  {
    name: "Mariam Rashwan",
    role: "Sales Manager",
    email: "mariam.rashwan@elfedawia.com",
    image: "/professional-business-portrait-sales.jpg",
  },
]

export default function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Meet Our Leadership</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experienced professionals driving innovation and excellence
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-lg overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/50"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-4">{member.role}</p>
                <p className="text-foreground/70 text-sm mb-4">
                  Bringing expertise and vision to El Fedawia Co. and driving our continued success.
                </p>

                {/* Contact Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground rounded transition-colors text-sm font-medium"
                  >
                    <Mail size={16} />
                    Email
                  </a>
                  <button className="flex items-center gap-2 px-3 py-2 border border-border hover:bg-muted rounded transition-colors text-sm font-medium">
                    <Linkedin size={16} />
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
