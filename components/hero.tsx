"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Magnetic from "@/components/motion/magnetic"
import RevealText from "@/components/motion/reveal-text"
import FadeIn from "@/components/motion/fade-in"
import GridGlow from "@/components/decor/grid-glow"
import { projects } from "@/lib/projects"
import { technologies } from "@/lib/skills-data"

const stats = [
  { label: "Years Building", value: "3+" },
  { label: "Projects Shipped", value: `${projects.length}+` },
  { label: "Technologies", value: `${technologies.length}+` },
]

const orbitIcons = [
  { name: "React", src: "/tech/react.svg", className: "left-[6%] top-[12%]", size: 44, delay: 0 },
  { name: "Tailwind CSS", src: "/tech/tailwind.svg", className: "right-[4%] top-[22%]", size: 40, delay: 0.6 },
  { name: "HTML", src: "/tech/html.svg", className: "left-[2%] bottom-[24%]", size: 38, delay: 1.1 },
  { name: "GitHub", src: "/tech/github.svg", className: "right-[10%] bottom-[10%]", size: 40, delay: 0.3 },
  { name: "WordPress", src: "/tech/wordpress.svg", className: "left-[26%] top-[2%]", size: 34, delay: 0.9 },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden pb-20 pt-10 md:pb-28"
    >
      <GridGlow variant="hero" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-7">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Available for freelance work &amp; collaborations
              </span>
            </FadeIn>

            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block text-muted-foreground">Hi, I&apos;m</span>
              <RevealText
                text="Abel Atkelet"
                as="span"
                className="text-gradient block"
                delay={0.15}
              />
            </h1>

            <FadeIn delay={0.35}>
              <p className="max-w-xl text-base text-muted-foreground md:text-xl">
                A passionate full-stack developer creating beautiful and functional web
                experiences&mdash;from polished WordPress sites to modern Next.js
                applications.
              </p>
            </FadeIn>

            <FadeIn delay={0.45} className="flex flex-col gap-4 sm:flex-row">
              <Magnetic>
                <Button size="lg" variant="glow" className="group w-full sm:w-auto" asChild>
                  <Link href="https://github.com/abelxo19" target="_blank" rel="noopener noreferrer">
                    View My Projects
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline-glow" className="w-full sm:w-auto" asChild>
                  <Link href="https://t.me/abelxo19" target="_blank" rel="noopener noreferrer">
                    Contact Me
                  </Link>
                </Button>
              </Magnetic>
            </FadeIn>

            <FadeIn delay={0.55} className="flex flex-wrap gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </FadeIn>
          </div>

          <motion.div
            style={{ y: parallaxY, opacity: parallaxOpacity }}
            className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
          >
            <div className="glass-panel absolute inset-[12%] rounded-full border-primary/15" />
            <div
              className="absolute inset-[22%] rounded-full opacity-70 blur-2xl"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
            />
            <div className="glass-panel absolute inset-[30%] flex items-center justify-center rounded-full border-primary/20 font-display text-xl font-semibold text-primary">
              AA
            </div>

            {orbitIcons.map((icon) => (
              <motion.div
                key={icon.name}
                className={`glass-panel absolute flex items-center justify-center rounded-2xl p-2.5 ${icon.className}`}
                style={{ width: icon.size + 20, height: icon.size + 20 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: icon.delay }}
              >
                <Image src={icon.src} alt={icon.name} width={icon.size} height={icon.size} className="object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-6 flex justify-center"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-primary"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  )
}
