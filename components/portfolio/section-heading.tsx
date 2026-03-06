"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  number: string
  title: string
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 mb-10"
    >
      <span className="font-mono text-primary text-sm lg:text-base">
        {number}.
      </span>
      <h2 className="text-xl lg:text-2xl font-semibold text-foreground whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-muted flex-1 max-w-xs" />
    </motion.div>
  )
}
