import Image from "next/image"
import { ArrowDownToLine } from "lucide-react"
import FadeIn from "@/components/motion/fade-in"
import SectionHeading from "@/components/decor/section-heading"
import portrait from "@/public/hero.png"

export default function About() {
  return (
    <section id="about" className="section-space border-t border-border bg-secondary/25">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <FadeIn direction="right" distance={16}>
          <figure className="portrait-figure max-w-[480px]">
            <div className="portrait-frame relative">
            <Image
              src={portrait}
              alt="Abel Atkelet"
              sizes="(min-width: 1200px) 450px, (min-width: 1024px) 40vw, (min-width: 640px) 480px, calc(100vw - 40px)"
              className="h-auto w-full max-w-[480px] rounded-lg"
              placeholder="blur"
            />
            </div>
            <figcaption className="mt-4 flex max-w-[480px] items-center justify-between gap-3 text-xs text-muted-foreground">
              <span>Abel Atkelet</span>
              <span>Developer & designer</span>
            </figcaption>
          </figure>
        </FadeIn>

        <div>
          <SectionHeading kicker="02 / About me" title="A little about the person behind the work." align="left" />
          <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground sm:text-base">
            <FadeIn delay={0.05}>
              <p>I&apos;m a full-stack developer with over 3 years of experience turning ideas into responsive, accessible web experiences.</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p>My work spans custom React and Next.js applications, as well as WordPress and Elementor websites. From the first layout to payments and deployment, I care about the details that make a website useful and easy to maintain.</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p>I started building while at university and haven&apos;t stopped exploring since. Away from the screen, you&apos;ll usually find me playing football, reading, or trying something new.</p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mt-7 flex flex-wrap items-center gap-6 border-t border-border pt-6">
            <span className="text-sm"><strong className="font-semibold">3+ years</strong><span className="text-muted-foreground"> of hands-on experience</span></span>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium hover:text-primary">
              <ArrowDownToLine className="size-4" /> View resume
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
