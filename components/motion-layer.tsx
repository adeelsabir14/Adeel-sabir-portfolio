"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export function CursorAccent() {
  const [position, setPosition] = useState({ x: -100, y: -100 })
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const move = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY })
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [reduceMotion])

  if (reduceMotion) return null

  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-50 hidden size-5 rounded-full border border-primary/70 mix-blend-difference md:block" animate={{ x: position.x - 10, y: position.y - 10 }} transition={{ type: "spring", stiffness: 420, damping: 28, mass: 0.2 }} />
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function KineticWord({ children }: { children: React.ReactNode }) {
  return <motion.span className="inline-block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.span>
}
