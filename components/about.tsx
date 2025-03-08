"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function About() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div
            className={`relative h-[400px] overflow-hidden rounded-xl transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" />
          </div>
          <div
            className={`space-y-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">About Me</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Passionate Developer & Designer</h2>
            <p className="text-muted-foreground md:text-lg">
              I&apos;m a full-stack developer with over 5 years of experience building web applications. I specialize in
              creating responsive, user-friendly interfaces with modern technologies.
            </p>
            <p className="text-muted-foreground md:text-lg">
              My journey in web development started when I was in college, and since then, I&apos;ve worked with various
              clients and companies to bring their ideas to life. I&apos;m passionate about clean code, accessibility, and
              creating exceptional user experiences.
            </p>
            <p className="text-muted-foreground md:text-lg">
              When I&apos;m not coding, you can find me hiking, reading, or experimenting with new technologies.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="group">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

