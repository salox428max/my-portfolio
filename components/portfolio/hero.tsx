"use client"

import { motion } from "framer-motion"

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-20 lg:py-0"
    >
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="font-mono text-primary text-sm mb-5"
      >
        Salom, mening ismim
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-3 text-balance"
      >
        Khujayarov Saloxiddin.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-muted-foreground mb-6 text-balance"
      >
        Men veb dasturichiman.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-muted-foreground max-w-lg text-base leading-relaxed mb-12"
      >
        {"Men ajoyib raqamli tajribalar yaratishga (va ba'zan loyihalashga) ixtisoslashgan dasturiy ta'minot muhandisiman. Hozirda men "}
        <a
          href="#"
          className="text-primary hover:underline underline-offset-4"
        >
          Karshi state university
        </a>
        {"da qulay va insonlarga yo'naltirilgan mahsulotlar yaratishga e'tibor qaratmoqdaman."}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        <a
          href="#contact"
          className="inline-block border border-primary text-primary font-mono text-sm px-7 py-4 rounded hover:bg-primary/10 transition-colors"
        >
          Bog'lanish
        </a>
      </motion.div>
    </section>
  )
}
