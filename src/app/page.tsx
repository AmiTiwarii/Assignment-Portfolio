"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Laptop, Brain } from "lucide-react"
import Tilt from "react-parallax-tilt"
import type { ComponentType } from "react"
import { SparklesCore } from "@/components/sparkles"

interface StatCardProps {
  icon: ComponentType<{ className?: string }>
  title: string
  value: string
}

const StatCard = ({ icon: Icon, title, value }: StatCardProps) => (
  <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.05} transitionSpeed={2000} className="h-full">
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-blue-500/10 rounded-xl border border-blue-500/20"
    >
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-blue-500/10">
          <Icon className="h-6 w-6 text-blue-400" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-blue-400">{value}</p>
        </div>
      </div>
    </motion.div>
  </Tilt>
)

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore minSize={0.6} maxSize={1.4} color="#FFFFFF" />
      </div>

      <div className="relative z-10 px-6 py-12 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Dr. Bakkialakshmi VS
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl leading-8 text-muted-foreground">
            Advancing research in Computer Science and Engineering with focus on Machine Learning, Image Processing, and
            Pattern Recognition.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600"
            >
              <Link href="/publications">View Research</Link>
            </Button>
            <Button variant="ghost" asChild className="w-full sm:w-auto hover:text-blue-400">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <StatCard icon={FileText} title="Publications" value="50+" />
          <StatCard icon={Brain} title="Research Areas" value="6+" />
          <StatCard icon={Laptop} title="Years Experience" value="15+" />
        </motion.div>
      </div>
    </div>
  )
}

