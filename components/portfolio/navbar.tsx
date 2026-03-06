"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Men haqimda", href: "#about" },
  { name: "Tajriba", href: "#experience" },
  { name: "Aloqa", href: "#contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-screen-xl mx-auto flex items-center justify-between px-6 lg:px-12 py-4"
        aria-label="Asosiy navigatsiya"
      >
        {/* Logo */}
        <motion.a
          href="#hero"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-10 h-10 flex items-center justify-center border-2 border-primary text-primary font-mono font-bold text-lg rounded-sm hover:bg-primary/10 transition-colors"
          aria-label="Home"
        >
          S
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * i }}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="font-mono text-primary text-xs mr-1">
                0{i + 1}.
              </span>
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="/resume.pdf"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="ml-3 border border-primary text-primary font-mono text-sm px-4 py-2 rounded hover:bg-primary/10 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rezyume
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-50 text-primary p-2"
          aria-label={mobileOpen ? "Menyuni yopish" : "Menyuni ochish"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg text-foreground hover:text-primary transition-colors"
              >
                <span className="block font-mono text-primary text-sm text-center mb-1">
                  0{i + 1}.
                </span>
                {link.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              onClick={() => setMobileOpen(false)}
              className="border border-primary text-primary font-mono text-sm px-8 py-3 rounded hover:bg-primary/10 transition-colors mt-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rezyume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
