"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "EcoShop is a Next.js-powered e-commerce platform with wishlist, search, and secure Stripe payments, delivering a fast, responsive, and smooth shopping experience.",
    image: "/eco.png",
    tags: ["Nextjs.js", "MongoDB", "Stripe", "kinde"],
    demoLink: "#",
    githubLink: "https://github.com/abelxo19/my-eco-shop.git",
  },
  {
    title: "Horror Fan Site",
    description:
      "A collection of my best horror-inspired stories, my best pics on top horror movies and series. Dark, eerie, and thrilling—step into my world of creativity and fear!",
    image: "/haunt.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "kinde"],
    demoLink: "https://horror-fan-site.vercel.app/",
    githubLink: "https://github.com/abelxo19/horror-fan-site.git",
  },
  {
    title: "Landing Page",
    description: "A modern landing page website showcasing projects and skills with a clean, minimalist and responsive design.",
    image: "/landing.png",
    tags: ["Nextjs", "Tailwind CSS", "Framer Motion"],
    demoLink: "https://modern-landing-page-theta.vercel.app/",
    githubLink: "https://github.com/abelxo19/modern-landing-page.git",
  },
  {
    title: "AI-Powered Cloud-Based Fitness-Tracker Web App",
    description:
      "A fitness tracker web app powered by AI, leveraging cloud-based technologies to provide personalized fitness insights and progress tracking.",
    image: "/fitness.png", // Replace with the actual image path
    tags: ["React", "Firebase", "GeminiAI", "GoogleCloud"],
    demoLink: "https://fitness-track--fitness-tracker-458718.us-central1.hosted.app/",
    githubLink: "https://github.com/abelxo19/fitness-track.git",
  },
  {
    title: "ConnectX - E-Commerce Platform",
    description:
      "ConnectX is a multi-tenant e-commerce platform that enables merchants to manage their online stores, products, and orders, while providing customers with a seamless shopping experience. It features merchant onboarding, admin management, analytics, and secure payment integration.",
    image: "/connect.png",
    tags: ["Next.js", "Django", "PostgreSQL", "Docker"],
    demoLink: "https://connect-x-peach.vercel.app/",
    githubLink: "https://github.com/maajidAwol/ConnectX.git",
  },]
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
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-background/80 border-primary/10">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className=" transition-transform duration-500 hover:scale-105"
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
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {projects.slice(3).map((project, index) => (
              <div
                key={index + 3}
                className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${(index + 3) * 100}ms` }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 backdrop-blur-sm bg-background/80 border-primary/10">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="transition-transform duration-500 hover:scale-105"
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
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

