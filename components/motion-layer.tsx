"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"

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

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })
  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary" style={{ scaleX }} />
}

export function PageIntro() {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1050)
    return () => window.clearTimeout(timer)
  }, [])
  return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[55] flex items-center justify-center bg-background" initial={{ opacity: 1 }} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : "-100%" }} transition={{ duration: .8, ease: [0.76, 0, 0.24, 1] }}><div className="w-48 overflow-hidden"><motion.div className="h-px origin-left bg-primary" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .7, ease: "easeOut" }} /><motion.p className="eyebrow mt-4 text-center text-muted-foreground" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>Adeel Sabir / 2026</motion.p></div></motion.div>
}

export function Reveal({ children, className = "", delay = 0, direction = "up" }: { children: React.ReactNode; className?: string; delay?: number; direction?: "up" | "left" | "right" }) {
  const offsets = { up: { y: 28, x: 0 }, left: { y: 0, x: 36 }, right: { y: 0, x: -36 } }
  return <motion.div className={className} initial={{ opacity: 0, ...offsets[direction] }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .82, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function KineticWord({ children, delay = .15 }: { children: React.ReactNode; delay?: number }) {
  return <motion.span className="inline-block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: .9, delay, ease: [0.16, 1, 0.3, 1] }}>{children}</motion.span>
}

export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18 })
  const springY = useSpring(y, { stiffness: 260, damping: 18 })
  const reduceMotion = useReducedMotion()
  const handleMove = (event: React.MouseEvent) => {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - (rect.left + rect.width / 2)) * .18)
    y.set((event.clientY - (rect.top + rect.height / 2)) * .18)
  }
  return <motion.div ref={ref} className={className} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div>
}

export function ParallaxImage({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"])
  return <div ref={ref} className="overflow-hidden"><motion.img src={src} alt={alt} className="h-full w-full object-cover" style={{ y, scale: 1.16 }} /></div>
}
