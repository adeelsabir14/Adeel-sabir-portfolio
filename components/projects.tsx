"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  { number: "01", title: "DYDO Beverage Commerce", type: "E-commerce platform", description: "A conversion-focused shopping experience with product discovery, cart flows, and a responsive checkout journey.", stack: "React · Redux Toolkit · Tailwind · Node.js" },
  { number: "02", title: "Complaint Management System", type: "Operations product", description: "A clear, trackable workflow for customer complaints, internal ownership, status updates, and resolution reporting.", stack: "React · Redux · REST APIs · Node.js" },
  { number: "03", title: "E-Document Archive", type: "Enterprise system", description: "A structured document workspace with fast search, categorization, and secure file management for growing teams.", stack: "Next.js · React · Node.js · State management" },
  { number: "04", title: "Technical Service Portal", type: "Service experience", description: "A mobile-first service request platform that gives customers visibility from submission through completion.", stack: "React · Angular · JavaScript · CSS" },
]

export default function Projects() {
  return <section id="projects" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">Selected work</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Projects with a point of view.</h2></div><p className="max-w-sm text-sm leading-6 text-muted-foreground">A selection of platforms and products where thoughtful interfaces meet practical engineering.</p></div><div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">{projects.map((project, index) => <motion.article key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }} className="group bg-card p-6 transition-colors hover:bg-secondary/60 sm:p-8"><div className="flex items-start justify-between"><span className="font-mono text-xs text-primary">{project.number}</span><ArrowUpRight className="text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" aria-hidden="true" /></div><p className="mt-16 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{project.type}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3><p className="mt-4 max-w-md leading-7 text-muted-foreground">{project.description}</p><p className="mt-7 border-t border-border pt-4 font-mono text-xs text-primary">{project.stack}</p></motion.article>)}</div></div></section>
}
