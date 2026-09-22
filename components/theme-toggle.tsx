"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

const subscribe = () => () => {}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(subscribe, () => true, () => false)

  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="inline-flex size-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
    >
      {isDark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </button>
  )
}
