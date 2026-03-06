"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "PostgreSQL",
  "GraphQL",
]

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32">
      <SectionHeading number="01" title="Men haqimda" />
      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-4"
        >
          <p className="text-muted-foreground leading-relaxed">
            {"Salom! Mening ismim Saloxiddin va men internetda yashaydigan narsalarni yaratishni yaxshi ko'raman. Veb-dasturlashga qiziqishim 2012-yilda Tumblr mavzularini tahrirlashga urinishimdan boshlangan \u2014 maxsus reblog tugmasini yaratish menga HTML va CSS haqida ko'p narsani o'rgatdi!"}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {"Bugungi kunga kelib, men "}
            <a href="#" className="text-primary hover:underline underline-offset-4">startapda</a>
            {", "}
            <a href="#" className="text-primary hover:underline underline-offset-4">yirik korporatsiyada</a>
            {" va "}
            <a href="#" className="text-primary hover:underline underline-offset-4">dizayn studiyasida</a>
            {" ishlash sharafiga muyassar bo'ldim. Hozirgi kunlarda mening asosiy e'tiborim turli mijozlar uchun qulay, inklyuziv mahsulotlar va raqamli tajribalar yaratishga qaratilgan."}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {"Yaqinda men ishlatgan ba'zi texnologiyalar:"}
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 max-w-md">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-sm text-muted-foreground flex items-center gap-2"
              >
                <span className="text-primary font-mono text-xs">{">"}</span>
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group mx-auto lg:mx-0"
        >
          <div className="relative w-64 h-64 rounded overflow-hidden">
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10 rounded" />
            <Image
              src="/images/profile.jpg"
              alt="Khujayarov Saloxiddin"
              width={256}
              height={256}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="absolute top-4 left-4 w-64 h-64 border-2 border-primary rounded -z-10 group-hover:top-3 group-hover:left-3 transition-all duration-300" />
        </motion.div>
      </div>
    </section>
  )
}
