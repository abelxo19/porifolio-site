"use client"

import type React from "react"
import { motion, type Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none"

interface FadeInProps {
  children: React.ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  distance?: number
  as?: "div" | "span" | "li"
  amount?: number
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance }
    case "down":
      return { x: 0, y: -distance }
    case "left":
      return { x: distance, y: 0 }
    case "right":
      return { x: -distance, y: 0 }
    default:
      return { x: 0, y: 0 }
  }
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  distance = 24,
  amount = 0.2,
}: FadeInProps) {
  const offset = offsetFor(direction, distance)

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
