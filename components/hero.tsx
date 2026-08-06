"use client"

import { ArrowDownRight, ArrowRight, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return <section id="main-content" className="relative overflow-hidden px-4 pb-20 pt-24 sm:px-6 sm:pt-32 lg:px-8 lg:pb-28">
    <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
      <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
        <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-primary"><span className="size-2 rounded-full bg-primary" aria-hidden="true" />Available for selected projects</p>
        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-8xl">Building digital products that <span className="text-primary">move businesses forward.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">I&apos;m Adeel Sabir, a full-stack developer and team lead creating fast, accessible web experiences with React, Next.js, Angular, and .NET.</p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row"><a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Explore selected work <ArrowRight data-icon="inline-end" /></a><a href="/Adeel_Sabir_Resume.pdf" download="Adeel_Sabir_Resume.pdf" className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"><Download data-icon="inline-start" />Download résumé</a></div>
      </motion.div>
      <motion.aside initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.65 }} className="border-l-2 border-primary pl-6 lg:mb-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">The short version</p><p className="mt-5 text-2xl font-medium leading-9">Strategy-minded engineering, obsessive attention to UI, and shipping habits you can rely on.</p><a href="#about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">More about my approach <ArrowDownRight data-icon="inline-end" /></a>
      </motion.aside>
    </div>
    <div className="mx-auto mt-20 grid max-w-6xl grid-cols-2 border-y border-border py-6 sm:grid-cols-4"><div><p className="text-3xl font-semibold">4+</p><p className="mt-1 text-sm text-muted-foreground">Years experience</p></div><div><p className="text-3xl font-semibold">15+</p><p className="mt-1 text-sm text-muted-foreground">Projects shipped</p></div><div><p className="text-3xl font-semibold">5+</p><p className="mt-1 text-sm text-muted-foreground">People led</p></div><div><p className="text-3xl font-semibold">01</p><p className="mt-1 text-sm text-muted-foreground">Reliable partner</p></div></div>
  </section>
}
