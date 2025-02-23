import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundAnimation } from "@/components/background-animation"

export const metadata: Metadata = {
  title: "Dr. Bakkialakshmi VS - Research Portfolio",
  description: "Academic and Research Portfolio of Dr. Bakkialakshmi VS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-black">
            <BackgroundAnimation />
            <div className="relative z-10 flex min-h-screen">
              <Sidebar />
              <main className="flex-1 overflow-hidden">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

