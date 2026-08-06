"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"

interface HeaderProps { isDark: boolean; toggleDarkMode: () => void }

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [{ href: "#skills", label: "Capabilities" }, { href: "#projects", label: "Work" }, { href: "#about", label: "About" }, { href: "#reviews", label: "Reviews" }]
  return <>
    <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="#main-content" className="flex items-center gap-3" aria-label="Adeel Sabir home"><span className="font-mono text-lg font-bold tracking-[-0.1em]">AS<span className="text-primary">/</span></span><span className="hidden text-xs uppercase tracking-[0.18em] text-muted-foreground sm:inline">Adeel Sabir</span></Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">{navLinks.map((link) => <a key={link.href} href={link.href} className="text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}</nav>
        <div className="flex items-center gap-3"><a href="#contact" className="hidden border-b border-primary pb-1 text-xs uppercase tracking-[0.14em] text-primary sm:inline">Let&apos;s talk</a><button onClick={toggleDarkMode} className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>{isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button><button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-full p-2 md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>{isMenuOpen ? <X /> : <Menu />}</button></div>
      </div>
      {isMenuOpen && <nav className="mx-auto flex max-w-[1400px] flex-col gap-1 border-t border-border px-5 py-4 md:hidden" aria-label="Mobile navigation">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="py-3 text-sm text-muted-foreground hover:text-foreground">{link.label}</a>)}<a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 w-fit border-b border-primary py-2 text-sm text-primary">Let&apos;s talk</a></nav>}
    </header>
  </>
}
