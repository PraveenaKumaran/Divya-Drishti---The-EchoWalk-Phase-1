import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Volume2 } from 'lucide-react'

/**
 * EchoPinMap — adapted from the 21st.dev expand-map component.
 * An animated mini-map where community "audio pins" drop and pulse, with roads
 * drawing themselves in. Reworked into the divine palette. Clicking a pin
 * "plays" its tip (visual only here).
 */
const PINS = [
  { x: '28%', y: '38%', tip: 'Safe crosswalk — audio signal works', delay: 0.4 },
  { x: '64%', y: '30%', tip: 'ATM here has a headphone jack', delay: 0.7 },
  { x: '45%', y: '66%', tip: 'Footpath broken — keep right', delay: 1.0 },
  { x: '78%', y: '62%', tip: 'Bakery on the corner — good landmark', delay: 1.3 },
]

export default function EchoPinMap() {
  const [active, setActive] = useState(null)

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] liquid-glass-strong border border-white/10">
      {/* map base */}
      <div className="absolute inset-0 bg-gradient-to-br from-twilight via-cosmos to-void" />

      {/* roads */}
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        {[
          ['0%', '35%', '100%', '35%', 0.2],
          ['0%', '68%', '100%', '68%', 0.3],
          ['30%', '0%', '30%', '100%', 0.4],
          ['70%', '0%', '70%', '100%', 0.5],
        ].map(([x1, y1, x2, y2, d], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="rgba(167,139,250,0.18)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: d }}
          />
        ))}
      </svg>

      {/* grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* pins */}
      {PINS.map((p, i) => (
        <motion.button
          key={i}
          onClick={() => setActive(active === i ? null : i)}
          className="absolute z-10"
          style={{ left: p.x, top: p.y, transform: 'translate(-50%, -100%)' }}
          initial={{ opacity: 0, y: -20, scale: 0 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, damping: 18, delay: p.delay }}
        >
          {/* pulse ring */}
          <span className="absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2">
            <span className="block h-8 w-8 rounded-full bg-gold/30 animate-ping" />
          </span>
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold to-amber shadow-[0_0_20px_rgba(232,184,75,0.6)]">
            <MapPin className="h-4 w-4 text-void" strokeWidth={2.2} />
          </span>

          {/* tip bubble */}
          {active === i && (
            <motion.div
              initial={{ opacity: 0, y: 6, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className="absolute bottom-full left-1/2 mb-2 w-44 -translate-x-1/2 rounded-xl liquid-glass-strong px-3 py-2 text-left"
            >
              <div className="flex items-start gap-2">
                <Volume2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" />
                <span className="text-[12px] text-starlight font-light leading-snug">{p.tip}</span>
              </div>
            </motion.div>
          )}
        </motion.button>
      ))}

      {/* user dot */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6 }}
      >
        <span className="block h-4 w-4 rounded-full bg-sky shadow-[0_0_16px_#7dd3fc]" />
        <span className="absolute inset-0 rounded-full bg-sky/40 animate-ping" />
      </motion.div>

      {/* hint */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full liquid-glass px-3 py-1.5">
        <span className="text-[11px] text-moonmist font-light">Tap a pin to hear the tip</span>
      </div>
    </div>
  )
}
