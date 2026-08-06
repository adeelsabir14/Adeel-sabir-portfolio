"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Moon, Sun, X } from "lucide-react"

interface HeaderProps { isDark: boolean; toggleDarkMode: () => void }

export default function Header({ isDark, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Capabilities" },
    { href: "#experience", label: "Experience" },
    { href: "#reviews", label: "Reviews" },
  ]
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="#main-content" className="flex items-center gap-3" aria-label="Adeel Sabir home">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-mono text-sm font-bold text-primary-foreground">AS</span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">Adeel Sabir<span className="text-primary">.</span></span>
          </Link>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{link.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 sm:inline-flex">Let&apos;s talk</a>
            <button onClick={toggleDarkMode} className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground" aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}>{isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}</button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="rounded-md p-2 md:hidden" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen}>{isMenuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {isMenuOpen && <nav className="mx-auto flex max-w-6xl flex-col gap-1 border-t border-border px-4 py-4 md:hidden" aria-label="Mobile navigation">{navLinks.map((link) => <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground">{link.label}</a>)}<a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground">Let&apos;s talk</a></nav>}
      </header>
    </>
  )
}
