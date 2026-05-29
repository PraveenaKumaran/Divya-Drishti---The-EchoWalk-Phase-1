import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { cn } from '../lib/utils'

export default function DimensionalCanvas({ className }) {
  const canvasRef = useRef(null)
  
  // Tie the canvas opacity/scale to the scroll depth
  const { scrollYProgress } = useScroll({
    target: canvasRef,
    offset: ["start end", "center center"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    // Canvas sizing
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', resize)
    resize()

    // Particle Physics Setup
    const particles = []
    const particleCount = window.innerWidth < 768 ? 40 : 100
    
    const mouse = { x: null, y: null, radius: 150 }
    
    const handleMouseMove = (event) => {
      mouse.x = event.x
      mouse.y = event.y - canvas.getBoundingClientRect().top
    }
    window.addEventListener('mousemove', handleMouseMove)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 0.5
        this.baseX = this.x
        this.baseY = this.y
        this.density = (Math.random() * 30) + 1
        this.color = Math.random() > 0.5 ? 'rgba(232, 184, 75, ' : 'rgba(124, 92, 255, ' // Gold or Violet
      }
      
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
      
      update() {
        // Mouse repulsion
        let dx = mouse.x - this.x
        let dy = mouse.y - this.y
        let distance = Math.sqrt(dx * dx + dy * dy)
        let forceDirectionX = dx / distance
        let forceDirectionY = dy / distance
        let maxDistance = mouse.radius
        let force = (maxDistance - distance) / maxDistance
        let directionX = forceDirectionX * force * this.density
        let directionY = forceDirectionY * force * this.density

        if (distance < mouse.radius) {
          this.x -= directionX
          this.y -= directionY
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX
            this.x -= dx / 20
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY
            this.y -= dy / 20
          }
        }
      }
    }

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        ctx.fillStyle = particles[i].color + '0.8)'
        particles[i].draw()
        
        // Draw constellation lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = particles[i].color + (1 - distance/120) * 0.3 + ')'
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.closePath()
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    init()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      style={{ opacity, scale }}
      className={cn("pointer-events-none absolute inset-0 z-0 h-full w-full", className)}
    />
  )
}