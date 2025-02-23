"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PublicationsList from "@/components/publications-list"
import CitationsChart from "@/components/citations-chart"

export default function PublicationsPage() {
  return (
    <div className="container py-8 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 gradient-text text-center"
      >
        Publications & Impact
      </motion.h1>

      <div className="grid gap-8 md:grid-cols-2 mb-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-blue-500/10 border-blue-500/20">
            <h2 className="text-xl font-semibold mb-2 gradient-text">Publication Metrics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Publications</p>
                <p className="text-2xl font-bold text-blue-400">17</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total Citations</p>
                <p className="text-2xl font-bold text-violet-400">54</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-blue-500/10 border-blue-500/20">
            <h2 className="text-xl font-semibold mb-2 gradient-text">Recent Impact</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Publications (2023)</p>
                <p className="text-2xl font-bold text-blue-400">4</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Citations (2023)</p>
                <p className="text-2xl font-bold text-violet-400">19</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="bg-card/50 backdrop-blur-sm border-blue-500/20 w-full justify-center mb-4">
          <TabsTrigger value="list" className="data-[state=active]:bg-blue-500/20 flex-1">
            Publications List
          </TabsTrigger>
          <TabsTrigger value="charts" className="data-[state=active]:bg-blue-500/20 flex-1">
            Publication Statistics
          </TabsTrigger>
        </TabsList>
        <TabsContent value="list">
          <PublicationsList />
        </TabsContent>
        <TabsContent value="charts">
          <CitationsChart />
        </TabsContent>
      </Tabs>
    </div>
  )
}

