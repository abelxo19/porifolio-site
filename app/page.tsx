import Hero from "@/components/hero"
import Projects from "@/components/project"
import About from "@/components/about"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import AmbientBackground from "@/components/decor/ambient-background"

export default function Home() {
  return (
    <div className="isolate min-h-screen bg-background">
      <AmbientBackground />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

