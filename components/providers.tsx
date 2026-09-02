"use client"

import type React from "react"
import { ThemeProvider } from "next-themes"
import { MotionConfig } from "framer-motion"
import CursorGlow from "@/components/motion/cursor-glow"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <MotionConfig reducedMotion="user">
        <CursorGlow />
        {children}
      </MotionConfig>
    </ThemeProvider>
  )
}
