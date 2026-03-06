"use client"

import { Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function Footer() {
  return (
    <footer className="py-6 text-center">
      {/* Mobile socials */}
      <div className="flex items-center justify-center gap-6 mb-4 md:hidden">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
      <a
        href="#"
        className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors leading-relaxed"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Khujayarov Saloxiddin tomonidan loyihalangan va yaratilgan</p>
      </a>
    </footer>
  )
}
