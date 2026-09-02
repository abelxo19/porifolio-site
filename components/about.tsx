"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import FadeIn from "@/components/motion/fade-in"
import SectionHeading from "@/components/decor/section-heading"

const highlights = [
  { label: "Focus", value: "Full-stack web apps" },
  { label: "Experience", value: "3+ years building" },
  { label: "Approach", value: "Clean, accessible code" },
]

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-16 items-center">
          <FadeIn direction="left" className="relative">
            <motion.div
              className="glow-border relative min-h-[340px] overflow-hidden rounded-2xl border border-border/60 bg-secondary/40 shadow-sm md:min-h-[460px]"
              whileHover={{ rotateY: 3, rotateX: 1.5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Image
                src="/hero.png"
                alt="Abel Atkelet"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="glass-panel absolute -bottom-6 left-1/2 flex -translate-x-1/2 gap-6 rounded-2xl px-6 py-4 shadow-xl sm:left-auto sm:right-6 sm:translate-x-0"
            >
              <div className="text-center">
                <div className="font-display text-2xl font-semibold text-primary">3+</div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Years
                </div>
              </div>
              <div className="h-full w-px bg-border" aria-hidden />
              <div className="text-center">
                <div className="font-display text-2xl font-semibold text-primary">Full-Stack</div>
                <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                  Developer
                </div>
              </div>
            </motion.div>
          </FadeIn>

          <div className="space-y-6 pt-6 lg:pt-0">
            <SectionHeading
              kicker="About Me"
              title="Passionate Developer & Designer"
              align="left"
              className="items-start text-left"
            />

            <div className="space-y-4">
              <FadeIn delay={0.05}>
                <p className="text-muted-foreground text-sm md:text-lg">
                  I&apos;m a full-stack developer with over 3 years of experience
                  building web applications. I specialize in creating responsive,
                  user-friendly interfaces with modern technologies like Next.js.
                </p>
              </FadeIn>
              <FadeIn delay={0.15}>
                <p className="text-muted-foreground text-sm md:text-lg">
                  My journey in web development started when I was in university,
                  and since then, I&apos;ve worked on various projects to bring ideas
                  to life. I&apos;m passionate about clean code, responsiveness,
                  accessibility, and creating exceptional user experiences.
                </p>
              </FadeIn>
              <FadeIn delay={0.25}>
                <p className="text-muted-foreground text-sm md:text-lg">
                  When I&apos;m not coding, you can find me playing football, reading, or
                  experimenting with new technologies.
                </p>
              </FadeIn>
            </div>

            <FadeIn delay={0.35} className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-border/60 bg-secondary/30 px-4 py-3"
                >
                  <div className="text-[11px] uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </div>
                  <div className="mt-1 text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
