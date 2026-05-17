"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Globe } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "Islamic Seminary Website",
    description:
      "WordPress website experience supporting a content-rich seminary presence with clear navigation, structured pages, and a polished public-facing experience.",
    image: "/Tisa.png  ",
    tags: ["WordPress", "Elementor", "CMS", "Website Management"],
    primaryLink: "https://islamicseminary.us",
    primaryLabel: "Visit Site",
    imageMode: "icon",
  },
  {
    title: "Dr. Tamara Henry Website",
    description:
      "WordPress and Elementor site work for a professional brand, balancing approachable content presentation, mobile responsiveness, and maintainable page layouts.",
    image: "/dr.png",
    tags: ["WordPress", "Elementor", "Professional Site", "Responsive UI"],
    primaryLink: "https://drtamarahenry.com/",
    primaryLabel: "Visit Site",
    imageMode: "icon",
  },
  {
    title: "Simsbury Troop 1175 Website",
    description:
      "Community-focused WordPress website experience with organized content, easy updates, and practical page structures for visitors and members.",
    image: "/Troop1175.png",
    tags: ["WordPress", "Elementor", "Community Site", "Content Updates"],
    primaryLink: "https://simsburytroop1175.org",
    primaryLabel: "Visit Site",
    imageMode: "icon",
  },
  {
    title: "E-Commerce Platform",
    description:
      "EcoShop is a Next.js-powered e-commerce platform with wishlist, search, and secure Stripe payments, delivering a fast, responsive, and smooth shopping experience.",
    image: "/eco.png",
    tags: ["Nextjs.js", "MongoDB", "Stripe", "kinde"],
    primaryLink: "#",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/my-eco-shop.git",
  },
  {
    title: "Horror Fan Site",
    description:
      "A collection of my best horror-inspired stories and top horror movie and series picks. Dark, eerie, and thrilling, step into my world of creativity and fear.",
    image: "/haunt.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "kinde"],
    primaryLink: "https://horror-fan-site.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/horror-fan-site.git",
  },
  {
    title: "Landing Page",
    description: "A modern landing page website showcasing projects and skills with a clean, minimalist and responsive design.",
    image: "/landing.png",
    tags: ["Nextjs", "Tailwind CSS", "Framer Motion"],
    primaryLink: "https://modern-landing-page-theta.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/modern-landing-page.git",
  },
  {
    title: "AI-Powered Cloud-Based Fitness-Tracker Web App",
    description:
      "A fitness tracker web app powered by AI, leveraging cloud-based technologies to provide personalized fitness insights and progress tracking.",
    image: "/fitness.png",
    tags: ["React", "Firebase", "GeminiAI", "GoogleCloud"],
    primaryLink: "https://fitness-track--fitness-tracker-458718.us-central1.hosted.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/fitness-track.git",
  },
  {
    title: "ConnectX - E-Commerce Platform",
    description:
      "ConnectX is a multi-tenant e-commerce platform for merchant onboarding, store management, analytics, orders, and secure payment integration.",
    image: "/connect.png",
    tags: ["Next.js", "Django", "PostgreSQL", "Docker"],
    primaryLink: "https://connect-x-peach.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/maajidAwol/ConnectX.git",
  },
]

const getActionIcon = (label: string) => {
  if (label.toLowerCase().includes("visit")) return Globe
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
          <div className="relative h-48 w-full overflow-hidden bg-secondary/40">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={`transition-transform duration-500 hover:scale-105 ${
                project.imageMode === "icon" ? "object-contain p-12" : "object-cover"
              }`}
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
