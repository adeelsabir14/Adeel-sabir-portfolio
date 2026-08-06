"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Check, Code2, Download, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="main-content" className="relative overflow-hidden tech-grid px-4 pb-20 pt-20 sm:px-6 sm:pb-28 sm:pt-28 lg:px-8 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,color-mix(in_srgb,var(--accent)_20%,transparent),transparent_28%),radial-gradient(circle_at_20%_20%,color-mix(in_srgb,var(--primary)_14%,transparent),transparent_30%)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-7 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5"><Sparkles className="size-3.5" aria-hidden="true" /> Independent developer</span><span className="text-muted-foreground">Lahore · Pakistan</span></div>
          <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem]">I build software that makes <span className="text-gradient">ambitious ideas real.</span></h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">I&apos;m Adeel Sabir — a full-stack developer helping teams turn complex products into clear, fast, and dependable digital experiences.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:-translate-y-0.5">Start a project <ArrowRight data-icon="inline-end" /></a><a href="/Adeel_Sabir_Resume.pdf" download="Adeel_Sabir_Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3.5 font-semibold transition-colors hover:bg-secondary"><Download data-icon="inline-start" /> View résumé</a></div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"><span className="inline-flex items-center gap-2"><Check className="size-4 text-primary" aria-hidden="true" /> Product-minded</span><span className="inline-flex items-center gap-2"><Check className="size-4 text-primary" aria-hidden="true" /> Senior-level ownership</span><span className="inline-flex items-center gap-2"><Check className="size-4 text-primary" aria-hidden="true" /> Clear communication</span></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96, y: 16 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative lg:pl-6">
          <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-card/80 p-2 shadow-2xl shadow-slate-950/30"><div className="flex items-center gap-2 border-b border-white/10 px-4 py-3"><span className="size-2.5 rounded-full bg-destructive/70" /><span className="size-2.5 rounded-full bg-primary/70" /><span className="size-2.5 rounded-full bg-accent/70" /><span className="ml-3 font-mono text-[10px] text-muted-foreground">adeel.dev / selected-work</span></div><Image src="/hero-product-dashboard.png" alt="Dark product dashboard interface designed by Adeel Sabir" width={1600} height={1000} priority className="aspect-[16/10] w-full object-cover" /></div>
          <div className="glass-panel absolute -bottom-6 -left-3 flex items-center gap-3 rounded-2xl px-4 py-3 sm:-left-8"><span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary"><Code2 aria-hidden="true" /></span><span><span className="block text-xs text-muted-foreground">Currently shipping</span><span className="block text-sm font-semibold">Web products that work</span></span></div>
        </motion.div>
      </div>
      <div className="relative mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"><div className="bg-background/80 p-5 sm:p-7"><p className="text-3xl font-semibold tracking-tight sm:text-4xl">4<span className="text-primary">+</span></p><p className="mt-2 text-sm text-muted-foreground">Years building</p></div><div className="bg-background/80 p-5 sm:p-7"><p className="text-3xl font-semibold tracking-tight sm:text-4xl">15<span className="text-primary">+</span></p><p className="mt-2 text-sm text-muted-foreground">Products shipped</p></div><div className="bg-background/80 p-5 sm:p-7"><p className="text-3xl font-semibold tracking-tight sm:text-4xl">5<span className="text-primary">+</span></p><p className="mt-2 text-sm text-muted-foreground">People led</p></div><div className="bg-background/80 p-5 sm:p-7"><p className="text-3xl font-semibold tracking-tight sm:text-4xl">100<span className="text-primary">%</span></p><p className="mt-2 text-sm text-muted-foreground">Ownership mindset</p></div></div>
    </section>
  )
}
