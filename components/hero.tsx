import { ArrowDown, ArrowUpRight, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeIn from "@/components/motion/fade-in"

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-16">
      <div className="site-container">
        <FadeIn className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <span className="text-sm font-medium text-muted-foreground">Full-stack developer & WordPress specialist</span>
          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            Available for freelance work
          </span>
        </FadeIn>

        <FadeIn delay={0.08}>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] sm:text-6xl lg:text-7xl">Abel Atkelet<span className="text-primary">.</span></h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Thoughtful design. Reliable development. I build websites and web
            applications that look great, work well, and feel effortless to use.
          </p>
        </FadeIn>

        <FadeIn delay={0.16} className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" className="rounded-md bg-foreground text-background hover:bg-foreground/85" asChild>
            <a href="#projects">View projects <ArrowDown className="size-4" /></a>
          </Button>
          <Button size="lg" variant="outline" className="rounded-md" asChild>
            <a href="#contact">Let&apos;s talk <ArrowUpRight className="size-4" /></a>
          </Button>
          <div className="flex items-center gap-1 sm:ml-3">
            <a href="https://github.com/abelxo19" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" title="GitHub" className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><Github className="size-5" /></a>
            <a href="https://www.linkedin.com/in/abel-atkelet-b36993282" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" title="LinkedIn" className="inline-flex size-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"><Linkedin className="size-5" /></a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
