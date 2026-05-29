import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { cn } from '../lib/utils'

export default function LinkPreview({
  children,
  url,
  imageSrc,
  className,
  width = 240,
  height = 320,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Mouse tracking physics
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springConfig = { stiffness: 350, damping: 25, mass: 1 }
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    // Calculate center of the preview card
    const targetX = e.clientX - rect.left - width / 2
    const targetY = e.clientY - rect.top - height - 20 // 20px above the text

    x.set(targetX)
    y.set(targetY)
  }

  return (
    <span
      ref={ref}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onMouseMove={handleMouseMove}
      className={cn('relative inline-block cursor-pointer', className)}
    >
      <span className="relative z-10">{children}</span>
      
      {/* The glowing underline indicator */}
      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100" />

      {isMounted && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10, rotateX: -15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                x: springX,
                y: springY,
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 50,
                width,
                height,
                perspective: 1000,
              }}
              className="pointer-events-none"
            >
              <div
                className="relative h-full w-full overflow-hidden rounded-2xl border border-white/15 shadow-[0_20px_50px_-12px_rgba(232,184,75,0.35)]"
                style={{
                  background: 'linear-gradient(to bottom right, #111, #000)',
                }}
              >
                {/* Image or Fallback */}
                {imageSrc ? (
                <motion.img
                    src={imageSrc}
                    alt="Preview"
                    className="h-full w-full object-cover transition-all duration-500"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4 }}
                />
                ) : (
                  <div className="flex h-full items-center justify-center bg-void text-xs text-moonmist">
                    Image pending
                  </div>
                )}
                {/* Cinematic Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-90" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </span>
  )
}