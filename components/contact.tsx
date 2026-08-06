"use client"

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react"

const contactMethods = [
  { icon: Mail, label: "Email", value: "adeelwork14@gmail.com", href: "mailto:adeelwork14@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/adeelsabir01", external: true },
  { icon: Github, label: "GitHub", value: "See my code", href: "https://github.com/adeelsabir14", external: true },
]

export default function Contact() {
  return <section id="contact" className="border-t border-border px-4 py-24 sm:px-6 lg:px-8"><div className="mx-auto max-w-6xl"><div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end"><div><p className="mb-3 font-mono text-xs uppercase tracking-[0.22em] text-primary">Start a conversation</p><h2 className="max-w-2xl text-5xl font-semibold tracking-tight sm:text-6xl">Have a product to make <span className="text-primary">better?</span></h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">Tell me what you&apos;re building, where you&apos;re stuck, or what needs to move faster. I&apos;ll bring a practical plan and a sharp eye for the details.</p><a href="mailto:adeelwork14@gmail.com" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5">Email Adeel <ExternalLink data-icon="inline-end" /></a></div><div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{contactMethods.map((method) => { const Icon = method.icon; return <a key={method.label} href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noreferrer" : undefined} className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"><span className="flex items-center gap-3"><Icon className="text-primary" aria-hidden="true" /><span><span className="block text-xs uppercase tracking-wider text-muted-foreground">{method.label}</span><span className="text-sm font-medium">{method.value}</span></span></span><ExternalLink className="size-4 text-muted-foreground" aria-hidden="true" /></a> })}</div></div></div></section>
}
