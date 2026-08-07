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
  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-50 hidden size-5 rounded-full border border-primary mix-blend-difference md:block" animate={{ x: position.x - 10, y: position.y - 10 }} transition={{ type: "spring", stiffness: 420, damping: 28, mass: .2 }} />
}

export function CursorLabel() {
  const [label, setLabel] = useState("")
  const [position, setPosition] = useState({ x: -200, y: -200 })
  const reduceMotion = useReducedMotion()
  useEffect(() => {
    if (reduceMotion) return
    const move = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest<HTMLElement>("[data-cursor]")
      setLabel(target?.dataset.cursor ?? "")
      setPosition({ x: event.clientX + 18, y: event.clientY + 18 })
    }
    window.addEventListener("mousemove", move, { passive: true })
    return () => window.removeEventListener("mousemove", move)
  }, [reduceMotion])
  if (reduceMotion) return null
  return <motion.div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-50 hidden border border-primary bg-primary px-3 py-2 font-mono text-[10px] uppercase tracking-[.2em] text-primary-foreground md:block" animate={{ x: position.x, y: position.y, opacity: label ? 1 : 0, scale: label ? 1 : .8 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>{label}</motion.div>
}

export function ScrollProgress() { const { scrollYProgress } = useScroll(); const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: .2 }); return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-primary" style={{ scaleX }} /> }

export function PageIntro() { const [visible, setVisible] = useState(true); useEffect(() => { const timer = window.setTimeout(() => setVisible(false), 1200); return () => window.clearTimeout(timer) }, []); return <motion.div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[55] flex items-center justify-center bg-background" initial={{ opacity: 1 }} animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : "-100%" }} transition={{ duration: .9, ease: [.76, 0, .24, 1] }}><div className="w-56 overflow-hidden"><motion.div className="h-px origin-left bg-primary" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .8 }} /><motion.p className="eyebrow mt-4 text-center text-muted-foreground" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>Adeel Sabir / Independent engineer</motion.p></div></motion.div> }

const offsets = { up: { y: 34, x: 0 }, left: { y: 0, x: 42 }, right: { y: 0, x: -42 } }
export function Reveal({ children, className = "", delay = 0, direction = "up" }: { children: React.ReactNode; className?: string; delay?: number; direction?: keyof typeof offsets }) { return <motion.div className={className} initial={{ opacity: 0, ...offsets[direction] }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true, margin: "-70px" }} transition={{ duration: .82, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div> }
export function Stagger({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) { return <motion.div className={className} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={{ hidden: {}, show: { transition: { staggerChildren: .09, delayChildren: delay } } }}>{children}</motion.div> }
export function StaggerItem({ children, className = "" }: { children: React.ReactNode; className?: string }) { return <motion.div className={className} variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: .72, ease: [.22, 1, .36, 1] } } }}>{children}</motion.div> }
export function KineticWord({ children, delay = .15 }: { children: React.ReactNode; delay?: number }) { return <motion.span className="inline-block" initial={{ y: "105%" }} animate={{ y: 0 }} transition={{ duration: .9, delay, ease: [.16, 1, .3, 1] }}>{children}</motion.span> }
export function Magnetic({ children, className = "" }: { children: React.ReactNode; className?: string }) { const ref = useRef<HTMLDivElement>(null); const x = useMotionValue(0); const y = useMotionValue(0); const springX = useSpring(x, { stiffness: 260, damping: 18 }); const springY = useSpring(y, { stiffness: 260, damping: 18 }); const reduceMotion = useReducedMotion(); const handleMove = (event: React.MouseEvent) => { if (reduceMotion || !ref.current) return; const rect = ref.current.getBoundingClientRect(); x.set((event.clientX - (rect.left + rect.width / 2)) * .18); y.set((event.clientY - (rect.top + rect.height / 2)) * .18) }; return <motion.div ref={ref} className={className} style={{ x: springX, y: springY }} onMouseMove={handleMove} onMouseLeave={() => { x.set(0); y.set(0) }}>{children}</motion.div> }
export function Tilt({ children, className = "" }: { children: React.ReactNode; className?: string }) { const ref = useRef<HTMLDivElement>(null); const rotateX = useMotionValue(0); const rotateY = useMotionValue(0); const sx = useSpring(rotateX, { stiffness: 220, damping: 20 }); const sy = useSpring(rotateY, { stiffness: 220, damping: 20 }); const reduceMotion = useReducedMotion(); return <motion.div ref={ref} className={className} style={{ rotateX: sx, rotateY: sy, transformPerspective: 900 }} onMouseMove={(event) => { if (reduceMotion || !ref.current) return; const r = ref.current.getBoundingClientRect(); rotateY.set(((event.clientX - r.left) / r.width - .5) * 7); rotateX.set(-((event.clientY - r.top) / r.height - .5) * 7) }} onMouseLeave={() => { rotateX.set(0); rotateY.set(0) }}>{children}</motion.div> }
export function SectionWipe({ className = "" }: { className?: string }) { return <motion.div aria-hidden="true" className={`section-wipe ${className}`} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.1, ease: [.76, 0, .24, 1] }} /> }
export function ScrollScale({ children, className = "" }: { children: React.ReactNode; className?: string }) { const ref = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] }); const scale = useTransform(scrollYProgress, [0, .5, 1], [.94, 1, .94]); const opacity = useTransform(scrollYProgress, [0, .18, .82, 1], [.45, 1, 1, .45]); return <motion.div ref={ref} className={className} style={{ scale, opacity, position: "relative" }}>{children}</motion.div> }
export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) { const ref = useRef<HTMLSpanElement>(null); const [display, setDisplay] = useState(0); useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; let frame = 0; const start = performance.now(); const tick = (now: number) => { const progress = Math.min((now - start) / 1200, 1); setDisplay(Math.round(value * (1 - Math.pow(1 - progress, 3)))); if (progress < 1) frame = requestAnimationFrame(tick) }; frame = requestAnimationFrame(tick); observer.disconnect(); return () => cancelAnimationFrame(frame) }, { threshold: .5 }); if (ref.current) observer.observe(ref.current); return () => observer.disconnect() }, [value]); return <span ref={ref}>{display}{suffix}</span> }
export function ParallaxImage({ src, alt }: { src: string; alt: string }) { const ref = useRef<HTMLDivElement>(null); const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] }); const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]); return <div ref={ref} className="overflow-hidden"><motion.img src={src} alt={alt} className="h-full w-full object-cover" style={{ y, scale: 1.16 }} /></div> }
