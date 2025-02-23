"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import Tilt from "react-parallax-tilt"

const experience = [
  {
    title: "Assistant Professor",
    company: "Department of Computer Science and Engineering",
    location: "Chennai, India",
    duration: "2015 - Present",
    description: [
      "Leading research in Machine Learning and Computer Vision",
      "Supervising Ph.D. and M.Tech students",
      "Publishing research in top-tier journals and conferences",
    ],
  },
  {
    title: "Researcher",
    company: "University of Applied Science Upper Austria",
    duration: "05.2022 - 10.2022",
    description: "Started teaching career in Computer Science.",
  },
  {
    title: "Research Scholar - Teaching Research Fellow",
    company: "Hindustan Institute of Technology and Science Chennai",
    duration: "02.2020 - 01.2023",
    description: "Maintained positive classroom environments by reinforcing rules for behavior and relationship-building actions.Managed consistent, learning-focused classroom environments by establishing and communicating clear objectives for students.",
  },
  {
    title: "Director & Head - HR & Administrations",
    company: "Fedify Technologies Private Limited Chennai",
    duration: "05.2022 - 10.2022",
    description: "Directing daily operations of the department, analyzing workflow, establishing priorities, developing standards, and setting deadlines.Multitasking with all responsibilities and structured process execution at maximum at the same time.",
  },
  {
    title: "Lecturer",
    company: "Annamalai University",
    duration: "Sep 2001 - Dec 2006",
    description: "Started teaching career in Computer Science.",
  },
]

const ExperienceCard = ({ title, company, duration, description }:any) => (
  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-blue-500/10 rounded-xl border border-blue-500/20"
    >
      <h3 className="text-xl font-semibold text-blue-400">{title}</h3>
      <p className="text-violet-300">{company}</p>
      <p className="text-sm text-muted-foreground">{duration}</p>
      <p className="mt-2 text-gray-300">{description}</p>
    </motion.div>
  </Tilt>
)

export default function Experience() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
      >
        Professional Experience
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        {experience.map((exp:any, index:any) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8 relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50" />
            <div className="absolute left-[-6px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-black" />
            <div className="ml-8">
              <ExperienceCard {...exp} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


