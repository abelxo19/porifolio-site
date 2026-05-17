"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")
    const shouldUseDark = savedTheme === "dark"

    document.documentElement.classList.toggle("dark", shouldUseDark)
    setIsDark(shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const nextTheme = !isDark

    document.documentElement.classList.toggle("dark", nextTheme)
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light")
    setIsDark(nextTheme)
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="group relative inline-flex h-9 w-16 items-center rounded-full border border-neutral-200 bg-white p-1 shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800"
    >
      <span
        className={`absolute inset-y-1 grid aspect-square place-items-center rounded-full bg-primary text-primary-foreground shadow-md transition-transform duration-300 ${
          isDark ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
