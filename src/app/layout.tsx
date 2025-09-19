import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { ProfileProvider } from "@/contexts/profile-context"
import "../../styles/globals.css"
import { ClerkProvider } from "@clerk/nextjs"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Ampersand Admin",
  description: "Admin to manage the Ampersand platform",
  generator: "Inception",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${dmSans.style.fontFamily};
  --font-sans: ${dmSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <ClerkProvider>
      <body className={`${dmSans.variable} ${GeistMono.variable}`}>
        <ProfileProvider>{children}</ProfileProvider>
      </body>
      </ClerkProvider>
    </html>
  )
}
