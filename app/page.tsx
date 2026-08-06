"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import About from "@/components/about"
import Skills from "@/components/skills"
import WorkProcess from "@/components/work-process"
import Experience from "@/components/experience"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(() => typeof window !== "undefined" && localStorage.getItem("darkMode") !== "false")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleDarkMode = () => {
    const next = !isDark
    setIsDark(next)
    localStorage.setItem("darkMode", String(next))
    document.documentElement.classList.toggle("dark", next)
  }

  return <div className="min-h-screen bg-background text-foreground"><Header isDark={isDark} toggleDarkMode={toggleDarkMode} /><main id="main-content"><Hero /><Skills /><Projects /><WorkProcess /><Experience /><About /><Testimonials /><Contact /></main><Footer /></div>
}
