"use client"

import { useEffect, useState } from "react"
import { Progress } from "@/components/ui/progress"

const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Framer-Motion", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "UI/UX Design", level: 70 },
]

const technologies = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
  "GitHub",
  "Figma",
  "Responsive Design",
  "SEO",
  "Supabase",
  "Vercel",
  "Python",
  "Django",
  "REST APIs",
  "FastAPI",
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const [progressValues, setProgressValues] = useState(skills.map(() => 0))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)

          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setProgressValues((prev) => {
                const newValues = [...prev]
                newValues[index] = skill.level
                return newValues
              })
            }, index * 100)
          })

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
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Here are some of the technologies and tools I work with.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div
            className={`space-y-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold">Core Competencies</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{progressValues[index]}%</span>
                  </div>
                  <Progress value={progressValues[index]} className="h-2" />
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className={`bg-background border border-primary/20 rounded-full px-4 py-2 text-sm transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

