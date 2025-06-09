"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const technologies = [
  {
    name: "React",
    logo: "/tech/react.svg",
    category: "Frontend"
  },
  {
    name: "Next.js",
    logo: "/tech/next.svg",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    logo: "/tech/typescript.png",
    category: "Frontend"
  },
  {
    name: "Node.js",
    logo: "/tech/node.svg",
    category: "Backend"
  },


  {
    name: "PostgreSQL",
    logo: "/tech/postgresql.svg",
    category: "Database"
  },
  {
    name: "Tailwind CSS",
    logo: "/tech/tailwind.svg",
    category: "Frontend"
  },
  {
    name: "Django",
    logo: "/tech/django.svg",
    category: "Backend"
  },
  {
    name: "Python",
    logo: "/tech/python.png",
    category: "Backend"
  },
  {
    name: "Git",
    logo: "/tech/git.svg",
    category: "Tools"
  },
  {
    name: "GitHub",
    logo: "/tech/github.svg",
    category: "Version Control"
  }
]

export default function Skills() {
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

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
        </div>

        <div className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative w-16 h-16 mb-2 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain filter dark:invert"
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-background/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg border border-primary/10">
                  <span className="text-sm font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

