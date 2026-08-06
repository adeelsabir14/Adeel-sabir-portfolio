"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"

interface HeaderProps { isDark: boolean; toggleDarkMode: () => void }

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [{ href: "#skills", label: "Services" }, { href: "#projects", label: "Work" }, { href: "#about", label: "About" }, { href: "#reviews", label: "Reviews" }]
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#main-content" className="flex items-center gap-3" aria-label="Adeel Sabir home"><span className="flex size-10 items-center justify-center rounded-xl bg-primary font-mono text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">AS</span><span className="text-sm font-semibold tracking-tight">Adeel Sabir<span className="text-primary">.dev</span></span></Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">{navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}</nav>
        <div className="flex items-center gap-2"><a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex">Let&apos;s talk</a><button onClick={toggleDarkMode} className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>{isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full p-2.5 md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>{isMenuOpen ? <X /> : <Menu />}</button></div>
      </div>
      {isMenuOpen && <nav className="mx-auto flex max-w-7xl flex-col gap-1 border-t border-white/10 px-4 py-4 md:hidden" aria-label="Mobile navigation">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{link.label}</a>)}<a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-full bg-primary px-3 py-3 text-center text-sm font-semibold text-primary-foreground">Let&apos;s talk</a></nav>}
    </header>
  </>
}
