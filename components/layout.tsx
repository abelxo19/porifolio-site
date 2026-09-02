"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Home, Briefcase, User, Code, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"
import ThemeToggle from "@/components/theme-toggle"

interface LayoutProps {
  children: React.ReactNode
}

const NAV_SECTIONS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
]

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)

      const scrollPosition = window.scrollY + 120

      for (const section of NAV_SECTIONS) {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <div
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-2 rounded-full border px-3 py-2 transition-all duration-300 md:px-4",
            isScrolled
              ? "glass-panel border-border/60 shadow-[0_8px_30px_-12px_var(--glow-primary)]"
              : "border-transparent bg-transparent",
          )}
        >
          <Link
            href="#home"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-sm font-semibold tracking-tight"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm">
              AA
            </span>
            <span className="hidden font-display sm:inline">Abel Atkelet</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV_SECTIONS.map((section) => (
              <NavLink
                key={section.id}
                href={`#${section.id}`}
                isActive={activeSection === section.id}
              >
                {section.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground md:hidden"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 glass-panel md:hidden"
          >
            <motion.nav
              className="flex h-full flex-col items-center justify-center gap-3 px-6"
              aria-label="Mobile"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
            >
              {NAV_SECTIONS.map((section) => (
                <MobileNavLink
                  key={section.id}
                  href={`#${section.id}`}
                  isActive={activeSection === section.id}
                  onClick={() => setIsMenuOpen(false)}
                  icon={<section.icon className="h-5 w-5" />}
                >
                  {section.label}
                </MobileNavLink>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main id="main-content" className="flex-1 pt-24">
        {children}
      </main>
    </div>
  )
}

interface NavLinkProps {
  href: string
  isActive?: boolean
  children: React.ReactNode
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
        isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground",
      )}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full bg-primary"
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  )
}

interface MobileNavLinkProps {
  href: string
  isActive?: boolean
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}

function MobileNavLink({ href, isActive, onClick, children, icon }: MobileNavLinkProps) {
  return (
    <motion.div
      variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
      className="w-full max-w-xs"
    >
      <Link
        href={href}
        onClick={onClick}
        className={cn(
          "flex w-full items-center justify-center gap-3 rounded-xl border border-transparent px-4 py-3 text-lg font-medium transition-colors",
          isActive ? "border-primary/30 bg-primary/10 text-primary" : "hover:bg-secondary/60",
        )}
      >
        {icon}
        {children}
      </Link>
    </motion.div>
  )
}
