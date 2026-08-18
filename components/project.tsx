"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe } from "lucide-react"
import Image from "next/image"
import { getProjectActionKind, projects } from "@/lib/projects"

const getActionIcon = (label: string) => {
  if (getProjectActionKind(label) === "visit") return Globe
  return ExternalLink
}

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const renderProjectCard = (project: (typeof projects)[number], index: number) => {
    const PrimaryIcon = getActionIcon(project.primaryLabel)

    return (
      <div
        key={project.title}
        className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-background/80 border-primary/10">
          <div className="relative h-56 w-full overflow-hidden bg-secondary/40">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <Badge key={i} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="mt-auto flex justify-between gap-3">
            {project.githubLink ? (
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
            ) : (
              <span />
            )}
            <Button size="sm" asChild>
              <a href={project.primaryLink} target="_blank" rel="noopener noreferrer">
                <PrimaryIcon className="mr-2 h-4 w-4" />
                {project.primaryLabel}
              </a>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <section id="projects" className="py-16 bg-secondary/20 px-2 md:px-4">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => renderProjectCard(project, index))}
        </div>
      </div>
    </section>
  )
}
