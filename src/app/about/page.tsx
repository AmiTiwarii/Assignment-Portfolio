"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, type ReactNode, type ComponentType } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Brain,
  Code,
  Database,
  Eye,
  FileCode2,
  FlaskRoundIcon as Flask,
  LineChart,
  Microscope,
  Binary,
} from "lucide-react"
import Tilt from "react-parallax-tilt"

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
}
interface MovingBorderProps {
  children: ReactNode
  duration?: number
  className?: string
}

const MovingBorder = ({ children, duration = 2.5, className = "" }:MovingBorderProps) => {
  return (
    <div className="relative rounded-lg p-[1px] overflow-hidden bg-gradient-to-r from-blue-500 to-violet-500">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 animate-border-move" />
      </div>
      <div className={`relative bg-black rounded-lg ${className}`}>{children}</div>
    </div>
  )
}

interface SkillCardProps {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}
const SkillCard = ({ icon: Icon, title, description }:SkillCardProps) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      },
    })
  }, [controls])

  return (
    <Tilt  
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={2000}
      perspective={1000}
      className="h-full"
    >
      <MovingBorder>
        <motion.div animate={controls} className="p-6 h-full">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-3 rounded-full bg-blue-500/10">
              <Icon className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </motion.div>
      </MovingBorder>
    </Tilt>
  )
}

export default function AboutPage() {
  const skills = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep expertise in neural networks and ML algorithms",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Specialized in image processing and analysis",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Advanced data analysis and visualization",
    },
    {
      icon: Code,
      title: "Programming",
      description: "Python, TensorFlow, PyTorch, OpenCV",
    },
    {
      icon: Microscope,
      title: "Research",
      description: "Published researcher in top journals",
    },
    {
      icon: LineChart,
      title: "Analytics",
      description: "Statistical analysis and modeling",
    },
    {
      icon: FileCode2,
      title: "Development",
      description: "Software development and implementation",
    },
    {
      icon: Flask,
      title: "Experimentation",
      description: "Research design and methodology",
    },
    {
      icon: Binary,
      title: "Algorithms",
      description: "Algorithm design and optimization",
    },
  ]

  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text text-center">About Me</h1>

        {/* Placeholder for the 3D scene */}

        <MovingBorder className="mb-8 p-6">
          <Card className="bg-transparent border-0">
            <CardHeader>
              <CardTitle className="gradient-text text-2xl">Profile</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                Dr. Bakkialakshmi VS is a distinguished Professor at the Department of Computer Science and Engineering,
                with over 15 years of experience in academia and research. Her expertise spans Machine Learning, Deep
                Learning, and Computer Vision, with a particular focus on medical image analysis and pattern
                recognition.
              </motion.p>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                Her research has contributed significantly to the field of healthcare applications, developing
                innovative solutions for medical diagnosis and analysis using artificial intelligence. She has published
                extensively in prestigious journals and conferences, establishing herself as a leading researcher in her
                field.
              </motion.p>
            </CardContent>
          </Card>
        </MovingBorder>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          <h2 className="text-2xl font-semibold mb-6 gradient-text text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
              >
                <SkillCard {...skill} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

