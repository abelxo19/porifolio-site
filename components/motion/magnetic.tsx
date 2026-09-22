"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function Magnetic({ children, className, strength = 0.1 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 15, stiffness: 200, mass: 0.3 })
  const springY = useSpring(y, { damping: 15, stiffness: 200, mass: 0.3 })

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse" || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-4, Math.min(4, offsetX * strength)))
    y.set(Math.max(-4, Math.min(4, offsetY * strength)))
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={handlePointerMove}
      onPointerLeave={handleMouseLeave}
      onPointerCancel={handleMouseLeave}
    >
      <motion.div style={{ x: prefersReducedMotion ? 0 : springX, y: prefersReducedMotion ? 0 : springY }}>
        {children}
      </motion.div>
    </div>
  )
}
