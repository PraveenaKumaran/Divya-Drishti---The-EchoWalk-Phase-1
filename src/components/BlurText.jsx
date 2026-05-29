import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * BlurText — word-by-word blur-in reveal.
 * Adapted from the motionsites Hero reference. Triggers on scroll into view
 * via IntersectionObserver, then staggers each word with a blur→focus motion.
 */
export default function BlurText({
  text = '',
  className = '',
  delay = 0,
  stagger = 0.09,
  as: Tag = 'h2',
}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const words = text.split(' ')

  const MotionTag = motion[Tag] || motion.h2

  return (
    <MotionTag
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', rowGap: '0.1em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(12px)', opacity: 0, y: 28 }}
          animate={
            inView
              ? { filter: 'blur(0px)', opacity: 1, y: 0 }
              : { filter: 'blur(12px)', opacity: 0, y: 28 }
          }
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: delay + i * stagger,
          }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  )
}
