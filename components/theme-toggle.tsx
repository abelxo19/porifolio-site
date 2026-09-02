"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative inline-flex h-8 w-14 items-center rounded-full border border-border bg-secondary/60 p-1 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <motion.span
        className="absolute inset-y-1 grid aspect-square place-items-center rounded-full bg-primary text-primary-foreground shadow-md"
        animate={{ x: isDark ? 24 : 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
      >
        {isDark ? <Moon className="h-3.5 w-3.5" /> : <Sun className="h-3.5 w-3.5" />}
      </motion.span>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
