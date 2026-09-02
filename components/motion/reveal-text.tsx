"use client"

import type { ElementType } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  text: string
  className?: string
  charClassName?: string
  delay?: number
  staggerChildren?: number
  as?: ElementType
}

export default function RevealText({
  text,
  className,
  charClassName,
  delay = 0,
  staggerChildren = 0.028,
  as: Component = "span",
}: RevealTextProps) {
  const characters = Array.from(text)

  return (
    <Component className={className}>
      <motion.span
        className="inline-block"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren, delayChildren: delay } } }}
      >
        {characters.map((char, index) => (
          <span key={index} className="inline-block overflow-hidden pb-1 align-bottom">
            <motion.span
              className={cn("inline-block", charClassName)}
              variants={{
                hidden: { y: "110%" },
                visible: { y: "0%" },
              }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Component>
  )
}
