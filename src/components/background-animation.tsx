"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"

export function BackgroundAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Create particles
    const geometry = new THREE.BufferGeometry()
    const vertices = []
    const size = 2000

    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * size
      const y = (Math.random() - 0.5) * size
      const z = (Math.random() - 0.5) * size
      vertices.push(x, y, z)
    }

    geometry.setAttribute("position", new THREE.Float32BufferAttribute(vertices, 3))
    const material = new THREE.PointsMaterial({
      size: 2,
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.5,
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    camera.position.z = 500

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)
      particles.rotation.x += 0.0005
      particles.rotation.y += 0.0005
      renderer.render(scene, camera)
    }

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      containerRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none" />
}

