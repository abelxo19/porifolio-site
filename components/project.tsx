"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ExternalLink, Github, Globe } from "lucide-react"
import FadeIn from "@/components/motion/fade-in"
import SectionHeading from "@/components/decor/section-heading"
import { cn } from "@/lib/utils"
import { getProjectActionKind, projects, type Project } from "@/lib/projects"

const getActionIcon = (label: string) => {
  if (getProjectActionKind(label) === "visit") return Globe
  return ExternalLink
}

function initialsOf(title: string) {
  return title
    .split(" ")
    .filter((word) => /[a-zA-Z]/.test(word[0]))
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("")
}

function ProjectImage({ project }: { project: Project }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 via-secondary/40 to-background">
        <span className="font-display text-4xl font-semibold text-primary/70">
          {initialsOf(project.title)}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={project.image}
      alt={project.title}
      fill
      sizes="(min-width: 1024px) 45vw, 100vw"
      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
      onError={() => setErrored(true)}
    />
  )
}

function CaseStudy({ project, index }: { project: Project; index: number }) {
  const PrimaryIcon = getActionIcon(project.primaryLabel)
  const reversed = index % 2 === 1

  return (
    <FadeIn amount={0.15} className="group">
      <div
        className={cn(
          "grid gap-8 rounded-3xl border border-border/60 bg-secondary/20 p-4 md:gap-10 md:p-6 lg:grid-cols-2 lg:items-center lg:p-8",
          reversed && "lg:[&>*:first-child]:order-2",
        )}
      >
        <div className="glow-border relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary/40">
          <ProjectImage project={project} />
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          <span className="glass-panel font-display absolute left-4 top-4 rounded-full px-3 py-1 text-sm font-semibold text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="space-y-5">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Case Study
            </span>
            <h3 className="font-display mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              {project.title}
            </h3>
          </div>

          <p className="text-sm text-muted-foreground md:text-base">{project.description}</p>

          {(project.problem || project.solution || project.impact) && (
            <dl className="grid gap-3 sm:grid-cols-3">
              {project.problem && (
                <div className="rounded-xl border border-border/50 bg-background/40 p-3">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Problem
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed">{project.problem}</dd>
                </div>
              )}
              {project.solution && (
                <div className="rounded-xl border border-border/50 bg-background/40 p-3">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Solution
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed">{project.solution}</dd>
                </div>
              )}
              {project.impact && (
                <div className="rounded-xl border border-border/50 bg-background/40 p-3">
                  <dt className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    Impact
                  </dt>
                  <dd className="mt-1 text-xs leading-relaxed">{project.impact}</dd>
                </div>
              )}
            </dl>
          )}

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="border-border/60">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Button size="sm" variant="glow" asChild>
              <a href={project.primaryLink} target="_blank" rel="noopener noreferrer">
                <PrimaryIcon className="h-4 w-4" />
                {project.primaryLabel}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
            {project.githubLink && (
              <Button variant="outline-glow" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading
          kicker="Selected Work"
          title="My Projects"
          description="A closer look at what I built, why it mattered, and the stack behind it."
          className="mb-14"
        />

        <div className="space-y-10">
          {projects.map((project, index) => (
            <CaseStudy key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
