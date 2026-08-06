import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond, Geist } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const cormorant = Cormorant_Garamond({ subsets: ["latin"], variable: "--font-cormorant", weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = { title: "Adeel Sabir — Product Engineer", description: "Adeel Sabir is a product engineer creating considered digital products, interfaces, and systems for ambitious teams.", keywords: ["Adeel Sabir", "Product Engineer", "Full-Stack Developer", "UI Engineer", "React", "Next.js"], generator: "AS Portfolio", openGraph: { title: "Adeel Sabir — Product Engineer", description: "Considered digital products, interfaces, and systems.", type: "website", locale: "en_US", url: "https://adeelsabir.com" }, twitter: { card: "summary_large_image", title: "Adeel Sabir — Product Engineer", description: "Considered digital products, interfaces, and systems." }, alternates: { canonical: "https://adeelsabir.com" }, robots: { index: true, follow: true } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="dark bg-background" suppressHydrationWarning><head><Script id="structured-data" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Adeel Sabir", url: "https://adeelsabir.com", jobTitle: "Product Engineer", email: "adeelwork14@gmail.com", sameAs: ["https://www.linkedin.com/in/adeelsabir/", "https://github.com/adeelsabir14"] }) }} /></head><body className={`${geist.variable} ${cormorant.variable} font-sans antialiased`}>{children}</body></html> }
