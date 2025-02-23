"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Actual publication data from Google Scholar
const publications = [
  {
    year: 2024,
    title: "Emotion Recognition from RGB Kinect Videos and Physiological Signals Using Pre-Trained CNN Model",
    authors: ["S Anand"," L Mookiah", "VS Bakkialakshmi", "SS Surakshitha"],
    journal:  "International Conference on Intelligent Computing and Next Generation s",
    citations: 2,
  },
  {
    year: 2024,
    title: "An analysis of COVID-19 symptoms using machine learning algorithm",
    authors: ["VS Bakkialakshmi", "T Sudalaimuthu", "R Anandhi"],
    journal: "AIP Conference Proceedings 3075 (1)",
    citations: 1,
  },
  {
    year: 2024,
    title: "Individual human emotion detection with multimodal synchronous health detectors",
    authors: ["VS Bakkialakshmi", "VKM Sundar Rajan", "T Sudalaimuthu"],
    journal: "AIP Conference Proceedings 3075 (1)",
    citations: 1,
  },
  {
    year: 2024,
    title: "Affective analysis in machine learning using AMI-GOS with Gaussian expectation-maximization model",
    authors: ["B Kaliappan", "BV Sudalaiyadumperumal", "S Thalavaipillai"],
    journal: "Int J Reconfigurable & Embedded Syst 13 (1), 201-209",
    citations: 2,
  },
  {
    year: 2024,
    title:
    "The Digital Mirror-Reflecting Human Emotions through Machine Learning-Based Facial Gesture Recognition",
    authors: ["VS Bakkialakshmi"," N Kar"," V Kumar"],
    journal: " 1st International Conference on Cognitive, Green and Ubiquitous …",
    citations: 1,
  },
  {
    year: 2019,
    title:
    "Application of higher-order spectra for the characterization of Coronary artery disease using electrocardiogram signals",
    authors: ["L Mookiah", "U Rajendra Acharya", "V Martis"],
    journal: "Biomedical Signal Processing and Control",
    citations: 13,
  },
  {
    year: 2023,
    title: "Emo-Spots: detection and analysis of emotional attributes through bio-inspired facial landmarks",
    authors: ["VS Bakkialakshmi", "T Sudalaimuthu", "B Umamaheswari"],
    journal: "International Conference on IoT, Intelligent Computing and Security",
    citations: 3,
  },
  {
    year: 2022,
    title: "Effective prediction system for affective computing on emotional psychology with artificial neural network",
    authors: ["VS Bakkialakshmi", "T Sudalaimuthu", "S Winkler"],
    journal: "EasyChair Preprint",
    citations: 1,
  },
  {
    year: 2022,
    title: "AMIGOS: a robust emotion detection framework through Gaussian ResiNet",
    authors: ["VS Bakkialakshmi", "S Thalavaipillai"],
    journal: "Bulletin of Electrical Engineering and Informatics",
    citations: 8,
  },
  {
    year: 2021,
    title: "Anomaly detection in social media using text-mining and emotion classification with emotion detection",
    authors: ["VS Bakkialakshmi", "T Sudalaimuthu"],
    journal: "International Conference on Cognition and Recongition",
    citations: 7,
  },
  {
    year: 2021,
    title: "A survey on affective computing for psychological emotion recognition",
    authors: ["VS Bakkialakshmi", "T Sudalaimuthu"],
    journal: " 5th International Conference on Electrical, Electronics, Communication",
    citations: 10,
  },
]

export default function PublicationsList() {
  const [selectedYear, setSelectedYear] = useState<string>("all")

  const years = Array.from(new Set(publications.map((pub) => pub.year.toString()))).sort((a, b) => b.localeCompare(a))

  const filteredPublications =
    selectedYear === "all" ? publications : publications.filter((pub) => pub.year.toString() === selectedYear)

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Select value={selectedYear} onValueChange={setSelectedYear}>
          <SelectTrigger className="w-[180px] bg-card/50 backdrop-blur-sm border-blue-500/20">
            <SelectValue placeholder="Filter by year" />
          </SelectTrigger>
          <SelectContent className="bg-black">
            <SelectItem value="all">All Years</SelectItem>
            {years.map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <motion.div layout className="grid gap-4">
        {filteredPublications.map((pub, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 border-blue-500/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold group-hover:text-blue-400 transition-colors">
                  {pub.title}
                </CardTitle>
                <CardDescription>{pub.authors.join(", ")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{pub.journal}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">{pub.year}</span>
                    <span>•</span>
                    <span className="w-20">{pub.citations} citations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

