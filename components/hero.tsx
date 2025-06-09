"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [displayText, setDisplayText] = useState("")
  const fullName = "Abel Atkelet"
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    // Text generation effect
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, 300) // Adjust speed as needed

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <div className="container px-4 md:px-6">
        <div className="space-y-4">
          <div
            className={`inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          >
            Welcome to my portfolio
          </div>
          <h1
            className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl transition-all duration-500 delay-200 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          >
            Hi, I&apos;m{" "}
            <span className="text-primary relative">
              {displayText}
              {!isTypingComplete && (
                <span className="absolute -right-1 top-0 h-full w-[2px] bg-primary animate-pulse" />
              )}
            </span>
          </h1>
          <p
            className={`mx-auto max-w-[700px] text-muted-foreground md:text-xl transition-all duration-500 delay-400 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          >
            A passionate full-stack developer creating beautiful and functional web experiences
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-500 delay-600 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}
          > 
          <Link href='https://github.com/abelxo19'>
            <Button size="lg" className="group">
              View My Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>  
          <Link href='https://t.me/abelxo19'>
            <Button size="lg" variant="outline">
              Contact Me
            </Button>
          </Link>  
          </div>
        </div>
      </div>
    </section>
  )
}

