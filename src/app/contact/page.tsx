"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import { useEffect, useRef } from "react"
import * as THREE from "three"

export default function ContactPage() {
  const vantaRef = useRef<HTMLDivElement>(null)
  const vantaEffect = useRef<any>(null)

  useEffect(() => {
    const loadVanta = async () => {
      if (typeof window !== 'undefined' && !vantaEffect.current) {
        const VANTA = (await import('vanta/dist/vanta.birds.min.js')).default
        if (vantaRef.current) {
          vantaEffect.current = VANTA({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color1: 0x3b82f6,
            color2: 0x8b5cf6,
            colorMode: "variance",
            birdSize: 1.5,
            wingSpan: 20.0,
            separation: 50.0,
            alignment: 50.0,
            cohesion: 50.0,
            quantity: 3.0,
            backgroundAlpha: 0.0
          })
        }
      }
    }

    loadVanta()

    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy()
    }
  }, [])

  return (
    <div ref={vantaRef} className="relative min-h-screen overflow-hidden">
      <div className="container py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 gradient-text text-center">Contact</h1>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-blue-500/20">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span>bakkialakshmi.vs@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-400" />
                    <span>+91 XXXXXXXXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <span>
                      Department of Computer Science and Engineering
                      <br />
                      Chennai, India
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <a
                      href="https://scholar.google.com/citations?user=H33lryUAAAAJ"
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Scholar Profile
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-blue-500/20">
                <CardHeader>
                  <CardTitle>Research Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Interested in research collaboration? Feel free to reach out to discuss potential opportunities in:
                  </p>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Machine Learning Projects</li>
                    <li>Medical Image Analysis</li>
                    <li>Computer Vision Research</li>
                    <li>Academic Collaborations</li>
                    <li>Industry Partnerships</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

