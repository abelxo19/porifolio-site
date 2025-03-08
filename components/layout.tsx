"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Home, Briefcase, User, Code, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar for desktop */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 transform bg-background border-r border-border transition-transform duration-300 ease-in-out md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center py-6 border-b">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">P</span>
              </div>
              <span className="font-bold text-xl">Portfolio</span>
            </Link>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            <Link
              href="#home"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <Briefcase className="h-5 w-5" />
              <span>Projects</span>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <User className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link
              href="#skills"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <Code className="h-5 w-5" />
              <span>Skills</span>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </nav>

          <div className="p-4 border-t">
            <div className="text-xs text-muted-foreground text-center">&copy; {new Date().getFullYear()} Portfolio</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64">
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm">
              Resume
            </Button>
            <Button size="sm">Contact Me</Button>
          </div>
        </header>
        <div className="container mx-auto">{children}</div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsOpen(false)} />}
    </div>
  )
}

