"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "./section-heading"

const experiences = [
  {
    company: "Karshi state university",
    title: "Katta Frontend Muhandis",
    url: "#",
    range: "Yan 2023 - Hozir",
    duties: [
      "Kompaniyaning frontend qismini barpo qilishda ishlatiladigan muhim komponentlarni ishlab chiqish va qo'llab-quvvatlash.",
      "Veb-qulaylik bo'yicha eng yaxshi amaliyotlarni joriy etish uchun dasturchilar, dizaynerlar va mahsulot menejerlari bilan yaqin hamkorlik qilish.",
      "Eski jQuery kod bazasidan React-ga o'tishni loyihalash va amalga oshirish, sahifa yuklash vaqtini 40% ga qisqartirish.",
      "Kod tekshiruvlarini boshqarish va kichik dasturchilarga frontend bo'yicha eng yaxshi amaliyotlarni o'rgatish.",
    ],
  },
  {
    company: "StartupXYZ",
    title: "Frontend Dasturchi",
    url: "#",
    range: "Iyn 2021 - Dek 2022",
    duties: [
      "React, Next.js va TypeScript yordamida mijozlar uchun yuqori interaktiv veb-ilovalar yaratish va yetkazib berish.",
      "Barcha mijoz loyihalarida ishlatiladigan ichki komponentlar kutubxonasini ishlab chiqish va qo'llab-quvvatlash, ishlab chiqish vaqtini 30% ga qisqartirish.",
      "Murakkab UI dizaynlarining piksel darajasida aniq bajarilishini ta'minlash uchun dizaynerlar bilan hamkorlik qilish.",
    ],
  },
  {
    company: "Digital Agency",
    title: "Veb Dasturchi",
    url: "#",
    range: "Mar 2019 - May 2021",
    duties: [
      "Asosan HTML, CSS, JavaScript va React yordamida mijoz veb-saytlari uchun ishlab chiqarish kodini yaratish, qo'llab-quvvatlash va yetkazib berish.",
      "Eng yaxshi amaliyotlar va standartlarga muvofiqlikni ta'minlash uchun sifat nazorati sinovlari va kod tekshiruvlarini o'tkazish.",
      "Haftalik asosda mijozlar bilan bog'lanish, texnologik tajriba va loyiha yangiliklari bilan ta'minlash.",
    ],
  },
  {
    company: "Universitet laboratoriyasi",
    title: "Tadqiqot yordamchisi",
    url: "#",
    range: "Sen 2017 - Fev 2019",
    duties: [
      "D3.js va Python yordamida ilmiy maqolalar uchun interaktiv ma'lumotlar vizualizatsiya vositalarini ishlab chiqish.",
      "500+ talaba foydalanuvchi veb-asosidagi ta'lim platformalari prototiplarini yaratishda professorlarga yordam berish.",
      "Inson-kompyuter o'zaro ta'siri va qulay veb-dizayn bo'yicha 2 ta ilmiy maqola nashr etish.",
    ],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-20 lg:py-32 max-w-2xl">
      <SectionHeading number="02" title="Ish tajribam" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row"
      >
        {/* Tab List */}
        <div
          role="tablist"
          aria-label="Ish joylari"
          className="relative flex sm:flex-col overflow-x-auto sm:overflow-x-visible border-b sm:border-b-0 sm:border-l border-muted mb-8 sm:mb-0 sm:mr-8 min-w-fit"
        >
          {experiences.map((exp, i) => (
            <button
              key={exp.company}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`panel-${i}`}
              id={`tab-${i}`}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors border-b-2 sm:border-b-0 sm:border-l-2 -mb-px sm:-mb-0 sm:-ml-px ${
                activeTab === i
                  ? "text-primary border-primary bg-secondary/50"
                  : "text-muted-foreground border-transparent hover:text-primary hover:bg-secondary/30"
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>
        {/* Tab Panels */}
        <div className="min-h-[320px]">
          {experiences.map((exp, i) => (
            <div
              key={exp.company}
              id={`panel-${i}`}
              role="tabpanel"
              aria-labelledby={`tab-${i}`}
              hidden={activeTab !== i}
            >
              <h3 className="text-lg font-medium text-foreground mb-1">
                {exp.title}{" "}
                <span className="text-primary">
                  @{" "}
                  <a
                    href={exp.url}
                    className="hover:underline underline-offset-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {exp.company}
                  </a>
                </span>
              </h3>
              <p className="font-mono text-muted-foreground text-xs mb-6">
                {exp.range}
              </p>
              <ul className="space-y-3">
                {exp.duties.map((duty, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 shrink-0 font-mono text-xs">
                      {">"} 
                    </span>
                    <span>{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
