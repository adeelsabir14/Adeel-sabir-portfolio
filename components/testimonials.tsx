"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

const reviews = [
  { name: "Munir Shabeer", company: "munirshabeer.com", quote: "Adeel was excellent from start to finish. He understood the goal quickly, communicated clearly, and delivered a polished experience that feels fast, professional, and easy to use.", featured: true },
  { name: "Product partner", company: "Enterprise web platform", quote: "A thoughtful developer who balances product details with dependable engineering. The result was a cleaner interface and a much smoother workflow for our users." },
  { name: "Startup founder", company: "Digital product launch", quote: "Adeel brought structure to a complex build, kept every milestone moving, and turned our ideas into a responsive product we were proud to share." },
]

export default function Testimonials() {
  return <section id="reviews" className="border-t border-border bg-secondary/30 px-4 py-24 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 max-w-2xl"><p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">Client reviews</p><h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Good work should feel <span className="text-primary">obvious.</span></h2><p className="mt-5 text-lg leading-8 text-muted-foreground">A few words from people who value clarity, craft, and dependable delivery.</p></div>
      <div className="grid gap-5 lg:grid-cols-3">{reviews.map((review, index) => <motion.article key={review.name} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className={`flex h-full flex-col rounded-xl border border-border bg-card p-6 ${review.featured ? "lg:-translate-y-3 lg:p-8" : ""}`}>
        <Quote className="mb-7 text-primary" aria-hidden="true" /><p className="flex-1 text-lg leading-8 text-foreground">&quot;{review.quote}&quot;</p><div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5"><div><p className="font-semibold">{review.name}</p><p className="text-sm text-muted-foreground">{review.company}</p></div><div className="flex gap-0.5" aria-label="5 out of 5 stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />)}</div></div>
      </motion.article>)}</div>
    </div>
  </section>
}
