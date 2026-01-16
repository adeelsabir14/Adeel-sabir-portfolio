import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adeel Sabir | MERN Stack Developer & UI Developer | Portfolio",
  description:
    "MERN Stack Developer with 1 year of experience specializing in React, Angular, Next.js, and Node.js. Expert in frontend development, state management, and responsive UI design. Currently leading a team at Invobyte.",
  keywords: [
    "MERN Stack Developer",
    "React Developer",
    "Frontend Engineer",
    "Next.js",
    "Angular",
    "JavaScript",
    "Node.js",
    "Web Development",
    "UI Developer",
    "Lahore",
    "Adeel Sabir",
    "Full Stack Developer",
  ],
  generator: "v0.app",
  openGraph: {
    title: "Adeel Sabir | MERN Stack Developer & UI Developer",
    description:
      "MERN Stack Developer with 1 year of experience at Invobyte, specializing in React, Angular, Next.js, and Node.js.",
    type: "website",
    locale: "en_US",
    url: "https://adeelsabir.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adeel Sabir | MERN Stack Developer & UI Developer",
    description: "MERN Stack Developer with expertise in React, Angular, Next.js, Node.js, and responsive web design.",
  },
  alternates: {
    canonical: "https://adeelsabir.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-L3XQRP3SR9" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L3XQRP3SR9', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Adeel Sabir",
              url: "https://adeelsabir.com",
              jobTitle: "MERN Stack Developer",
              email: "adeelwork14@gmail.com",
              telephone: "+923039676205",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressCountry: "PK",
              },
              sameAs: ["https://www.linkedin.com/in/adeelsabir/", "https://github.com/adeelsabir"],
              knowsAbout: ["React.js", "Angular", "Next.js", "Node.js", "JavaScript", "Tailwind CSS", "Redux"],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
