"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import SectionHeading from "@/components/decor/section-heading"
import { StaggerGroup, StaggerItem } from "@/components/motion/stagger"
import { technologies } from "@/lib/skills-data"

const categoryOrder = [
  "Frontend",
  "Backend",
  "Database",
  "CMS",
  "Page Builder",
  "Programming",
  "Tools",
  "Version Control",
]

const groupedTechnologies = categoryOrder
  .map((category) => ({
    category,
    items: technologies.filter((tech) => tech.category === category),
  }))
  .filter((group) => group.items.length > 0)

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="container mx-auto max-w-5xl px-4">
        <SectionHeading
          kicker="Capabilities"
          title="Skills & Technologies"
          description="The languages, frameworks, and tools I reach for when building reliable, polished products."
          className="mb-14"
        />

        <div className="space-y-10">
          {groupedTechnologies.map((group) => (
            <div key={group.category}>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {group.category}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden />
              </div>

              <StaggerGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {group.items.map((tech) => (
                  <StaggerItem key={tech.name}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="glow-border group flex items-center gap-3 rounded-xl border border-border/60 bg-secondary/30 px-4 py-3 transition-colors hover:border-primary/30"
                    >
                      <div className="relative h-8 w-8 shrink-0">
                        <Image
                          src={tech.logo}
                          alt={tech.name}
                          fill
                          className={`object-contain ${tech.preserveColor ? "" : "dark:invert"}`}
                        />
                      </div>
                      <span className="text-sm font-medium">{tech.name}</span>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
