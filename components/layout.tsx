"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 140
      let current = "home"
      for (const section of NAV_SECTIONS) {
        const element = document.getElementById(section.id)
        if (element && position >= element.offsetTop) current = section.id
      }
      setActiveSection(current)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (isMenuOpen) dialog?.showModal()
    else dialog?.close()
    const previousOverflow = document.body.style.overflow
    if (isMenuOpen) document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = previousOverflow }
  }, [isMenuOpen])

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)")
    const closeOnDesktop = () => { if (desktop.matches) setIsMenuOpen(false) }
    desktop.addEventListener("change", closeOnDesktop)
    return () => desktop.removeEventListener("change", closeOnDesktop)
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background">
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="site-container flex h-20 items-center justify-between gap-4">
          <a href="#home" aria-label="Abel Atkelet home" className="inline-flex items-center gap-2.5 font-display text-sm font-semibold">
            <span className="flex size-9 items-center justify-center rounded-md bg-foreground text-xs text-background">AA<span className="text-primary">.</span></span>
            <span className="sm:text-base">Abel Atkelet</span>
          </a>
          <nav className="hidden items-center gap-4 md:flex lg:gap-7" aria-label="Primary">
            {NAV_SECTIONS.map((section) => (
              <a
                key={section.id}
                href={"#" + section.id}
                aria-current={activeSection === section.id ? "location" : undefined}
                className={cn("relative py-3 text-sm transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-foreground after:transition-opacity", activeSection === section.id ? "text-foreground after:opacity-100" : "text-muted-foreground after:opacity-0 hover:text-foreground")}
              >
                {section.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button type="button" className="inline-flex size-11 items-center justify-center rounded-md hover:bg-secondary md:hidden" onClick={() => setIsMenuOpen(true)} aria-label="Open menu" aria-expanded={isMenuOpen} aria-controls="mobile-navigation">
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-menu-title"
        onCancel={() => setIsMenuOpen(false)}
        onClose={() => setIsMenuOpen(false)}
        className="fixed inset-x-4 top-4 m-0 w-auto max-w-none rounded-lg border border-border bg-background p-5 text-foreground shadow-xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      >
        <div className="mb-5 flex items-center justify-between">
          <p id="mobile-menu-title" className="font-display font-semibold">Abel Atkelet</p>
          <button type="button" onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className="inline-flex size-11 items-center justify-center rounded-md hover:bg-secondary"><X className="size-5" /></button>
        </div>
        <nav aria-label="Mobile" className="divide-y divide-border">
          {NAV_SECTIONS.map((section) => (
            <a key={section.id} href={"#" + section.id} onClick={() => setIsMenuOpen(false)} aria-current={activeSection === section.id ? "location" : undefined} className="flex items-center justify-between py-4 text-base hover:text-primary">
              {section.label}<ArrowUpRight className="size-4" />
            </a>
          ))}
        </nav>
      </dialog>

      <main id="main-content" tabIndex={-1} className="flex-1 pt-20 focus:outline-none">{children}</main>
    </div>
  )
}
