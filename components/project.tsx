"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronDown, Github } from "lucide-react"
import FadeIn from "@/components/motion/fade-in"
import SectionHeading from "@/components/decor/section-heading"
import { cn } from "@/lib/utils"
import { projects, type Project } from "@/lib/projects"

const filters = ["All projects", "WordPress", "Web apps"] as const
type ProjectFilter = (typeof filters)[number]

function matchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === "All projects") return true
  const isWordPress = project.tags.includes("WordPress")
  return filter === "WordPress" ? isWordPress : !isWordPress
}

function ProjectImage({ project }: { project: Project }) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className="flex h-full items-center justify-center bg-secondary text-sm text-muted-foreground">
        {project.title}
      </div>
    )
  }

  return (
    <Image
      src={project.image}
      alt={project.title + " website preview"}
      fill
      sizes="(min-width: 1200px) 550px, (min-width: 768px) calc((100vw - 72px) / 2), calc(100vw - 40px)"
      className="object-contain"
      onError={() => setErrored(true)}
    />
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isLive = /^https?:/.test(project.primaryLink)
  const previewLink = isLive ? project.primaryLink : project.githubLink
  const domain = previewLink ? new URL(previewLink).hostname.replace(/^www\./, "") : "Project preview"

  return (
    <FadeIn distance={16} amount={0.08} className="min-w-0">
      <article className="project-card group overflow-hidden rounded-lg border border-border bg-card">
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={(isLive ? "Visit " : "View source for ") + project.title + " (opens in a new tab)"}
          className="block border-b border-border focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary"
        >
          <div className="flex h-9 items-center gap-3 border-b border-border bg-secondary/50 px-4">
            <span className="flex shrink-0 gap-1.5" aria-hidden="true">
              <span className="size-1.5 rounded-full bg-muted-foreground/30" />
              <span className="size-1.5 rounded-full bg-muted-foreground/30" />
              <span className="size-1.5 rounded-full bg-muted-foreground/30" />
            </span>
            <span className="min-w-0 flex-1 truncate text-center text-[11px] text-muted-foreground">{domain}</span>
            <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground" />
          </div>
          <div className="relative aspect-video w-full bg-secondary/50">
            <ProjectImage project={project} />
          </div>
        </a>

        <div className="p-5">
          <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
            <span>{project.tags.includes("WordPress") ? "WordPress & Elementor" : "Web application"}</span>
            <span className="font-mono text-[11px]" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="font-display text-xl font-semibold leading-snug">
            <a href={previewLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
              {project.title}
            </a>
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground md:min-h-12">{project.description}</p>

          <ul className="mt-4 flex min-h-12 flex-wrap content-start gap-1.5" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className="rounded bg-secondary px-2 py-1 text-[11px] font-medium leading-4 text-secondary-foreground">
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-4 flex min-h-10 items-center justify-between gap-3 border-t border-border pt-4">
            {isLive ? (
              <a href={project.primaryLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-sm font-medium hover:text-primary">
                {project.primaryLabel === "Demo" ? "Live demo" : project.primaryLabel}
                <ArrowUpRight className="size-4 transition-transform motion-safe:group-hover:-translate-y-0.5 motion-safe:group-hover:translate-x-0.5" />
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">Source available</span>
            )}
            {project.githubLink && (
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 text-sm text-muted-foreground hover:text-foreground" aria-label={"View source code for " + project.title}>
                <Github className="size-4" />
                Code
              </a>
            )}
          </div>

          {(project.problem || project.solution || project.impact) && (
            <details className="project-details mt-2 border-t border-border">
              <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between gap-2 text-xs font-medium text-muted-foreground hover:text-foreground">
                Project details
                <ChevronDown className="size-4 transition-transform" />
              </summary>
              <dl className="space-y-4 pb-2 pt-3 text-sm leading-6">
                {[
                  ["The brief", project.problem],
                  ["The approach", project.solution],
                  ["The result", project.impact],
                ].map(([label, value]) => value && (
                  <div key={label}>
                    <dt className="font-medium">{label}</dt>
                    <dd className="mt-1 text-muted-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </details>
          )}
        </div>
      </article>
    </FadeIn>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("All projects")
  const visibleProjects = projects.filter((project) => matchesFilter(project, filter))

  return (
    <section id="projects" className="section-space border-t border-border">
      <div className="site-container">
        <div className="mb-8 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            kicker="01 / Selected work"
            title="Ideas, made real."
            description="A selection of client websites and applications I've built."
            align="left"
          />
          <div role="group" aria-label="Filter projects" className="flex w-fit max-w-full rounded-lg border border-border bg-secondary/50 p-1">
            {filters.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={filter === option}
                aria-controls="project-grid"
                onClick={() => setFilter(option)}
                className={cn(
                  "inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-3 text-xs font-medium transition-colors sm:text-sm",
                  filter === option ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {option}
                <span className="hidden text-[11px] text-muted-foreground sm:inline">{projects.filter((project) => matchesFilter(project, option)).length}</span>
              </button>
            ))}
          </div>
        </div>

        <p role="status" className="sr-only">Showing {visibleProjects.length} {filter.toLowerCase()}</p>
        <div id="project-grid" className="grid items-start gap-6 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.title} project={project} index={projects.indexOf(project)} />
          ))}
        </div>
      </div>
    </section>
  )
}
