import { Navbar } from "@/components/portfolio/navbar"
import { SocialSidebar } from "@/components/portfolio/social-sidebar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main className="max-w-screen-xl mx-auto px-6 md:px-24 lg:px-32">
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
