import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adeel Sabir — Full-Stack Developer & UI Engineer",
  description: "Portfolio of Adeel Sabir, a Lahore-based full-stack developer building fast, accessible web products with React, Next.js, Angular, and .NET.",
  keywords: ["Adeel Sabir", "Full-Stack Developer", "React Developer", "Next.js", ".NET", "UI Engineer", "Lahore"],
  generator: "AS Portfolio",
  openGraph: { title: "Adeel Sabir — Full-Stack Developer & UI Engineer", description: "Strategy-minded engineering and polished interfaces for ambitious digital products.", type: "website", locale: "en_US", url: "https://adeelsabir.com" },
  twitter: { card: "summary_large_image", title: "Adeel Sabir — Full-Stack Developer", description: "Full-stack development, UI engineering, and reliable delivery." },
  alternates: { canonical: "https://adeelsabir.com" },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark bg-background" suppressHydrationWarning><head><Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Adeel Sabir", url: "https://adeelsabir.com", jobTitle: "Full-Stack Developer", email: "adeelwork14@gmail.com", address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" }, sameAs: ["https://www.linkedin.com/in/adeelsabir/", "https://github.com/adeelsabir14"], knowsAbout: ["React", "Next.js", "Angular", ".NET", "UI Engineering"] }) }} /></head><body className={`${_geist.className} font-sans antialiased`}>{children}</body></html>
}
