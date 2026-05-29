import React, { useState, useRef, useEffect } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { Power } from 'lucide-react'
import { cn } from '../lib/utils'

export default function LeverSwitch({ onActivate, className }) {
  const [isActive, setIsActive] = useState(false)
  const constraintsRef = useRef(null)
  const controls = useAnimation()
  
  // Track the drag position
  const x = useMotionValue(0)
  
  // Transform drag distance into visual feedback (glow & opacity)
  const glowOpacity = useTransform(x, [0, 150], [0.1, 1])
  const textOpacity = useTransform(x, [0, 100], [1, 0])
  const scale = useTransform(x, [0, 150], [1, 1.05])

  const handleDragEnd = async (event, info) => {
    // If pulled more than 120px, ACTIVATE
    if (info.offset.x > 120) {
      setIsActive(true)
      
      // Snap to the end
      await controls.start({ x: 160, transition: { type: 'spring', stiffness: 400, damping: 25 } })
      
      // Haptic feedback (if supported by device)
      if (typeof window !== 'undefined' && window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate([30, 50, 30])
      }

      // Trigger the actual action (wait a tiny bit for the animation to feel impactful)
      setTimeout(() => {
        if (onActivate) onActivate()
        // Reset after launching
        setTimeout(() => {
          setIsActive(false)
          controls.start({ x: 0 })
        }, 1000)
      }, 400)
    } else {
      // Snap back if not pulled far enough
      controls.start({ x: 0, transition: { type: 'spring', stiffness: 500, damping: 20 } })
    }
  }

  return (
    <div className={cn("relative flex flex-col items-start gap-3", className)}>
      <span className="text-[10px] uppercase tracking-widest text-moonmist/70">
        System Override // Power Up
      </span>
      
      {/* The Track */}
      <motion.div
        ref={constraintsRef}
        className="relative flex h-16 w-64 items-center rounded-full liquid-glass-strong border border-white/10 p-1.5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
        style={{ scale }}
      >
        {/* Dynamic Glow that intensifies as you pull */}
        <motion.div 
          className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-gold/0 via-gold/40 to-amber/80 blur-xl"
          style={{ opacity: glowOpacity }}
        />

        {/* Track Label */}
        <motion.div 
          className="pointer-events-none absolute inset-0 flex items-center justify-center pl-8"
          style={{ opacity: textOpacity }}
        >
          <span className="font-mono text-sm tracking-widest text-starlight/60">
            PULL TO LAUNCH
          </span>
        </motion.div>

        {/* The Handle */}
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.05}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
          animate={controls}
          style={{ x }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, cursor: 'grabbing' }}
          className={cn(
            "relative z-10 flex h-13 w-13 cursor-grab items-center justify-center rounded-full transition-colors duration-300",
            isActive 
              ? "bg-amber shadow-[0_0_30px_rgba(255,207,107,0.8)]" 
              : "bg-gradient-to-b from-[#2a2c3e] to-[#151623] border border-white/20 shadow-lg"
          )}
        >
          <Power className={cn(
            "h-5 w-5 transition-colors duration-300",
            isActive ? "text-void" : "text-gold"
          )} strokeWidth={2.5} />
        </motion.div>
      </motion.div>
    </div>
  )
}