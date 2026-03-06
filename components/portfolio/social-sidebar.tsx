"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

export function SocialSidebar() {
  return (
    <>
      {/* Left - Socials */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="fixed bottom-0 left-6 lg:left-10 hidden md:flex flex-col items-center gap-6 z-40"
      >
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>

      {/* Right - Email */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
        className="fixed bottom-0 right-6 lg:right-10 hidden md:flex flex-col items-center gap-6 z-40"
      >
        <a
          href="mailto:salox428@gmail.com"
          className="font-mono text-xs text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200 tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          salox428@gmail.com
        </a>
        <div className="w-px h-24 bg-muted-foreground" />
      </motion.div>
    </>
  )
}
