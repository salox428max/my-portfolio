import { Navbar } from "@/components/portfolio/navbar";
import { SocialSidebar } from "@/components/portfolio/social-sidebar";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { AIChat } from "@/components/portfolio/ai-chat";
// Yangi komponentni import qilamiz
import FlagScanner from "@/components/FlagScanner";

export default function Page() {
  return (
    <>
      {/* Saytning tepa va yon qismlari */}
      <Navbar />
      <SocialSidebar />

      <main className="max-w-screen-xl mx-auto px-6 md:px-24 lg:px-32">
        {/* Asosiy bo'limlar */}
        <Hero />
        <About />
        <Experience />
        
        {/* Sun'iy Intelekt Bo'limi - Bayroq Skoneri */}
        <section id="ai-scanner" className="py-20 border-t border-zinc-800">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              AI Flag Identifier
            </h2>
            <p className="text-zinc-400 max-w-lg mx-auto">
              Ushbu sun'iy intelekt modeli dunyo bayroqlarini real vaqt rejimida taniy oladi. 
              Kamerani yoqing va bayroqni ko'rsating!
            </p>
          </div>
          
          <FlagScanner />
        </section>

        {/* Chat va Kontakt bo'limlari */}
        <AIChat />
        <Contact />
      </main>

      <Footer />
    </>
  );
}