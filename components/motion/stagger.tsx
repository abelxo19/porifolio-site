"use client"

import type React from "react"
import { motion, type Variants } from "framer-motion"

interface StaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  amount?: number
}

const containerVariants: Variants = {
  hidden: {},
  visible: {},
}

export function StaggerGroup({ children, className, staggerDelay = 0.08, amount = 0.2 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={containerVariants}
      transition={{ staggerChildren: staggerDelay }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  )
}
