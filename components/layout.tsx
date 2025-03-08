"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Home, Briefcase, User, Code, Mail, Menu, X} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)

    // Add scroll event listener to update active section
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "skills", "contact"]
      const scrollPosition = window.scrollY + 100 // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-16">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-1">
                <NavLink href="#home" isActive={activeSection === "home"}>
                  Home
                </NavLink>
                <NavLink href="#about" isActive={activeSection === "about"}>
                About
              </NavLink>
              <NavLink href="#skills" isActive={activeSection === "skills"} >
                Skills
              </NavLink>
              <NavLink
                href="#projects"
                isActive={activeSection === "projects"}
              >
                Projects
              </NavLink>
              <NavLink href="#contact" isActive={activeSection === "contact"}>
                Contact
              </NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-5 absolute right-0" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-neutral-200">
            <nav className="flex flex-col py-4 px-4 space-y-2">
              <MobileNavLink href="#home" onClick={() => setIsMenuOpen(false)} icon={<Home className="h-5 w-5" />}>
                Home
              </MobileNavLink>
              <MobileNavLink
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                icon={<Briefcase className="h-5 w-5" />}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsMenuOpen(false)} icon={<User className="h-5 w-5" />}>
                About
              </MobileNavLink>
              <MobileNavLink href="#skills" onClick={() => setIsMenuOpen(false)} icon={<Code className="h-5 w-5" />}>
                Skills
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)} icon={<Mail className="h-5 w-5" />}>
                Contact
              </MobileNavLink>

             
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>
    </div>
  )
}

interface NavLinkProps {
  href: string
  isActive?: boolean
  icon?: React.ReactNode
  children: React.ReactNode
}

function NavLink({ href, isActive, icon, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive ? "bg-primary text-primary-foreground" : "hover:bg-secondary hover:text-foreground",
      )}
    >
      {icon}
      {children}
    </Link>
  )
}

interface MobileNavLinkProps {
  href: string
  onClick: () => void
  icon: React.ReactNode
  children: React.ReactNode
}

function MobileNavLink({ href, onClick, icon, children }: MobileNavLinkProps) {
  return (
    <Link href={href} onClick={onClick} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-secondary">
      {icon}
      <span>{children}</span>
    </Link>
  )
}

