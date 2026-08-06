"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, ArrowUpRight, Code2 } from "lucide-react"

export default function Hero() {
  return (
    <section id="main-content" className="studio-grid relative overflow-hidden border-b border-border px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-32 lg:px-12 lg:pt-40">
      <div className="mx-auto max-w-[1400px]">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid gap-16 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="mb-8 font-mono text-xs uppercase tracking-[0.24em] text-primary">Independent digital product developer / 2026</p>
            <h1 className="display max-w-5xl text-[4.5rem] font-medium sm:text-[7rem] lg:text-[9.5rem]">Software for <span className="text-primary">serious ideas.</span></h1>
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-7 text-muted-foreground sm:text-lg">I&apos;m Adeel Sabir. I design and build high-performance web products for teams that care about the details.</p>
              <a href="#projects" className="group inline-flex w-fit items-center gap-3 border-b border-primary pb-2 text-sm font-medium text-primary">Explore selected work <ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" aria-hidden="true" /></a>
            </div>
          </div>
          <div className="border-l border-border pl-6 lg:mb-2">
            <div className="mb-8 flex items-center gap-3"><span className="size-2 rounded-full bg-primary" /><span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Available for select projects</span></div>
            <p className="text-2xl leading-tight tracking-tight">From first sketch to shipped product, without the agency noise.</p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Start a conversation <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </motion.div>
        <div className="mt-20 grid border-y border-border sm:grid-cols-3"><div className="border-b border-border py-6 sm:border-b-0 sm:border-r sm:pr-8"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Focus</p><p className="mt-3 text-lg">Product engineering</p></div><div className="border-b border-border py-6 sm:border-b-0 sm:border-r sm:px-8"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Based in</p><p className="mt-3 text-lg">Lahore, Pakistan · Remote</p></div><div className="py-6 sm:pl-8"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Stack</p><p className="mt-3 flex items-center gap-2 text-lg"><Code2 className="size-4 text-primary" aria-hidden="true" /> React · Next.js · Node</p></div></div>
      </div>
    </section>
  )
}
