"use client"

import { motion } from "framer-motion"
import Tilt from "react-parallax-tilt"

const education = [
  {
    degree: "PDF - Post Doctoral Fellowship",
    institution: " Shinawatra University - Pathum Thani 12160, Thailand",
    year: "2024",
    description: "PDF - Post Doctoral Fellowship",
  },
  {
    degree: "Ph.D. - Doctor of Philosophy",
    institution: "Hindustan University - Padur, India",
    year: "2023",
    description: "Thesis: Efficient Techniques for Image Compression and Retrieval",
  },
  {
    degree: "M.A, Psychology (Pursuing)",
    institution: "IGNOU - New Delhi",
    year: "2022",
    description: "Master of Arts in Psychology.",
  },
  {
    degree: "M.E. in Computer Science and Engineering",
    institution: "Annamalai University - India",
    year: "2007",
    description: "Specialized in advanced computer science concepts",
  },
  {
    degree: "M.Phil, Computer Science",
    institution: "Bharathidasan University - Trichy, Indiaity of Madras",
    year: "2005",
    description: "Foundation in computer science",
  },
  {
    degree: "M.Sc. in Computer Science",
    institution: "University of Madras - Chennai, India",
    year: "2004",
    description: "Foundation in computer science",
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "University of Madras - Chennai, India",
    year: "2002",
    description: "Foundation in computer science",
  },
]

const EducationCard = ({ degree, institution, year, description }:any) => (
  <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} className="h-full">
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-blue-500/10 rounded-xl border border-blue-500/20"
    >
      <h3 className="text-xl font-semibold text-blue-400">{degree}</h3>
      <p className="text-violet-300">{institution}</p>
      <p className="text-sm text-muted-foreground">{year}</p>
      <p className="mt-2 text-gray-300">{description}</p>
    </motion.div>
  </Tilt>
)

export default function Education() {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] py-12 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400"
      >
        Educational Background
      </motion.h1>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
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
              <EducationCard {...edu} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

