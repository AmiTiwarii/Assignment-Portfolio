"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface SparkleProps {
  color?: string
  size?: number
  style?: React.CSSProperties
}

const Sparkle: React.FC<SparkleProps> = ({ color = "#FFA500", size = 10, style }) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        backgroundColor: color,
        borderRadius: "50%",
        width: size,
        height: size,
        ...style,
      }}
      animate={{
        scale: [0, 1, 0],
        opacity: [1, 0.8, 0],
      }}
      transition={{
        duration: Math.random() * 2 + 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

interface SparklesProps {
  color?: string
  minSize?: number
  maxSize?: number
  quantity?: number
}

export const SparklesCore: React.FC<SparklesProps> = ({
  color = "#FFA500",
  minSize = 5,
  maxSize = 10,
  quantity = 900,
}) => {
  const [sparkles, setSparkles] = useState<React.ReactNode[]>([])

  useEffect(() => {
    const newSparkles = Array.from({ length: quantity }).map((_, i) => (
      <Sparkle
        key={i}
        color={color}
        size={Math.random() * (maxSize - minSize) + minSize}
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))
    setSparkles(newSparkles)
  }, [color, minSize, maxSize, quantity])

  return <div style={{ position: "absolute", width: "100%", height: "100%", overflow: "hidden" }}>{sparkles}</div>
}

