import { NextResponse } from "next/server"

export async function GET() {
  const resumeText = `
ADEEL SABIR
MERN Stack & UI Developer
Email: adeel.sabir@gmail.com
Experience: 1 Year
Skills: React, Next.js, Angular, Node.js
`

  return new NextResponse(resumeText, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Content-Disposition": 'attachment; filename="Adeel_Sabir_Resume.txt"',
    },
  })
}
