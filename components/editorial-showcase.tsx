"use client"

import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowUpRight, Code2, Sparkles } from "lucide-react"

export default function EditorialShowcase() {
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const rotate = useSpring(useTransform(scrollYProgress, [0, 0.28], [0, -5]), { stiffness: 80, damping: 20 })
  const y = useSpring(useTransform(scrollYProgress, [0, 0.3], [0, -36]), { stiffness: 80, damping: 20 })

  return (
    <div className="editorial-stage" aria-label="Adeel Sabir portfolio preview">
      <motion.div className="stage-orbit stage-orbit-one" animate={reduceMotion ? undefined : { rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: "linear" }} />
      <motion.div className="stage-orbit stage-orbit-two" animate={reduceMotion ? undefined : { rotate: -360 }} transition={{ duration: 38, repeat: Infinity, ease: "linear" }} />
      <motion.div className="stage-kicker" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .2 }}>Independent engineer / 2024—2026</motion.div>
      <motion.div className="stage-browser" style={{ rotate, y }} initial={{ opacity: 0, y: 70, rotate: 5 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 1.1, ease: [.16, 1, .3, 1] }}>
        <div className="stage-browser-bar"><span /><span /><span /><p>adeelsabir.dev</p><ArrowUpRight size={13} aria-hidden="true" /></div>
        <div className="stage-browser-body">
          <div className="stage-browser-copy"><p className="eyebrow text-primary">Product engineer</p><h3>THINK<br /><em>CREATIVELY</em></h3><p className="stage-browser-note">Digital products with clarity, character, and a sharp technical edge.</p><span className="stage-button">View selected work <ArrowUpRight size={13} aria-hidden="true" /></span></div>
          <div className="stage-monogram"><div className="stage-monogram-ring"><span>AS</span></div><Code2 size={18} aria-hidden="true" /></div>
        </div>
        <div className="stage-browser-footer"><span><Sparkles size={11} aria-hidden="true" /> Built with intention</span><span>Scroll to explore ↓</span></div>
      </motion.div>
      <motion.p className="stage-side stage-side-left" animate={reduceMotion ? undefined : { y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>BUILD / SHIP / REFINE</motion.p>
      <motion.p className="stage-side stage-side-right" animate={reduceMotion ? undefined : { y: [0, 8, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>LAHORE × WORLDWIDE</motion.p>
    </div>
  )
}
