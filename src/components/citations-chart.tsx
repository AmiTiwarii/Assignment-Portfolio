"use client"

import { motion } from "framer-motion"
import { Bar, BarChart, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Yearly publication statistics
const publicationStats = [
  { year: 2019, papers: 1 },
  { year: 2020, papers: 2 },
  { year: 2021, papers: 5 },
  { year: 2022, papers: 10 },
  { year: 2023, papers: 8 },
  { year: 2024, papers: 21 },
  { year: 2025, papers: 1 },
]

export default function CitationsChart() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full space-y-4">
      <Card className="p-4 bg-card/50 backdrop-blur-sm border-blue-500/20">
        <CardHeader>
          <CardTitle className="text-xl font-semibold gradient-text">Publication Statistics</CardTitle>
          <CardDescription>Yearly breakdown of published papers</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={publicationStats}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: "rgba(17, 24, 39, 0.8)", borderColor: "#3B82F6" }} />
              <Legend />
              <Bar dataKey="papers" fill="#8884d8" name="Papers Published" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  )
}

