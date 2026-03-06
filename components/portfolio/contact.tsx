"use client"

import { motion } from "framer-motion"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 max-w-xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="font-mono text-primary text-sm mb-4">
          03. {"Keyingi qadam?"}
        </p>
        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-5 text-balance">
          {"Bog'lanish"}
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-12">
          {"Hozirda yangi imkoniyatlar qidirayotgan bo'lmasam ham, pochta qutim doimo ochiq. Savolingiz bo'lsa yoki shunchaki salom aytmoqchi bo'lsangiz, sizga javob berishga harakat qilaman!"}
        </p>
        <a
          href="mailto:salox428@gmail.com"
          className="inline-block border border-primary text-primary font-mono text-sm px-7 py-4 rounded hover:bg-primary/10 transition-colors"
        >
          Salom ayting
        </a>
      </motion.div>
    </section>
  )
}
