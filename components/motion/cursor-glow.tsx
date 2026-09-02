"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

export default function CursorGlow() {
  const [isCoarsePointer, setIsCoarsePointer] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 30, stiffness: 200, mass: 0.4 })
  const springY = useSpring(y, { damping: 30, stiffness: 200, mass: 0.4 })

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)")
    setIsCoarsePointer(!media.matches)

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener("pointermove", handleMove)
    return () => window.removeEventListener("pointermove", handleMove)
  }, [x, y])

  if (isCoarsePointer || prefersReducedMotion) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div
        className="h-[420px] w-[420px] rounded-full opacity-[0.15] blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  )
}
