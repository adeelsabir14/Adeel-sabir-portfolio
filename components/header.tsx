"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, Moon, Sun, X } from "lucide-react"

interface HeaderProps { isDark: boolean; toggleDarkMode: () => void }

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [{ href: "#projects", label: "Work" }, { href: "#skills", label: "Capabilities" }, { href: "#about", label: "About" }, { href: "#reviews", label: "Reviews" }]
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="#main-content" className="group flex items-baseline gap-3" aria-label="Adeel Sabir home"><span className="font-serif text-3xl font-semibold tracking-[-.08em] transition-transform duration-500 group-hover:-translate-y-1">AS</span><span className="eyebrow hidden text-muted-foreground transition-colors group-hover:text-primary sm:inline">Adeel Sabir</span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">{navLinks.map((link, index) => <motion.a key={link.href} href={link.href} className="eyebrow underline-sweep text-muted-foreground transition-colors hover:text-primary" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45 + index * .08 }}>{link.label}</motion.a>)}</nav>
        <div className="flex items-center gap-3"><a href="#contact" className="eyebrow hidden text-primary transition-transform hover:-translate-y-1 sm:inline">Let&apos;s talk</a><button onClick={toggleDarkMode} className="rounded-full p-2 text-muted-foreground transition-transform duration-300 hover:rotate-12 hover:text-primary" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>{isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full p-2 transition-transform duration-300 hover:rotate-6 md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>{isMenuOpen ? <X /> : <Menu />}</button></div>
      </div>
      <AnimatePresence>{isMenuOpen && <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mx-auto flex max-w-[1400px] flex-col gap-1 overflow-hidden border-t border-border px-5 py-4 md:hidden" aria-label="Mobile navigation">{navLinks.map((link, index) => <motion.a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .06 }} className="eyebrow py-3 text-muted-foreground transition-colors hover:text-primary">{link.label}</motion.a>)}</motion.nav>}</AnimatePresence>
    </header>
  </>
}
