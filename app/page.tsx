import Hero from "@/components/hero"
import Projects from "@/components/project"
import About from "@/components/about"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

