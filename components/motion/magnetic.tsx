"use client"

import type React from "react"
import { useRef } from "react"
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion"

interface MagneticProps {
  children: React.ReactNode
  className?: string
  strength?: number
}

export default function Magnetic({ children, className, strength = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { damping: 15, stiffness: 200, mass: 0.3 })
  const springY = useSpring(y, { damping: 15, stiffness: 200, mass: 0.3 })

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    x.set(offsetX * strength)
    y.set(offsetY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
