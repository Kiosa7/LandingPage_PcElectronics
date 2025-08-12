import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <head>
        <title>PcElectronics - Facturación Electrónica y API REST</title>
        <meta
          name="description"
          content="Transforma tu facturación con PcElectronics. Sistema confiable con API REST para automatizar procesos de facturación electrónica."
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.dev'
    };
