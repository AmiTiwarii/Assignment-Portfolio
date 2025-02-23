"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Home, User, Briefcase, GraduationCap, FileText, Mail, Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Publications", href: "/publications", icon: FileText },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Contact", href: "/contact", icon: Mail },
]

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-4 left-4 z-50 rounded-full p-2 bg-card/80 backdrop-blur-sm border border-blue-500/20 md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X /> : <Menu />}
      </motion.button>

      <AnimatePresence>
        {(isMobileMenuOpen || !isMobile) && (
          <motion.aside
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-card to-card/95 backdrop-blur-sm border-r border-blue-500/20 transform md:translate-x-0 md:relative",
              isMobile ? "absolute" : "relative",
            )}
          >
            <div className="flex flex-col h-full">
              <div className="flex flex-col items-center p-8 border-b border-blue-500/20">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative w-32 h-32 rounded-full overflow-hidden mb-4 ring-2 ring-blue-500/20 ring-offset-2 ring-offset-background"
                >
                  <Image src="/Bakkialakshmi.png" alt="Dr. Bakkialakshmi VS" fill className="object-cover" />
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
                >
                  Dr. Bakkialakshmi V S
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-sm text-muted-foreground text-center mt-2"
                >
                  Assistant Professor & Researcher
                </motion.p>
              </div>

              <nav className="flex-1 p-4 overflow-y-auto">
                <ul className="space-y-2">
                  {navigation.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center px-4 py-2 text-sm rounded-lg hover:bg-blue-500/10 hover:text-blue-400 transition-colors"
                        onClick={() => isMobile && setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5 mr-3" />
                        {item.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}

