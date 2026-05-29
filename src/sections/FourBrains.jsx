import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'
import { BRAINS } from '../lib/content'

export default function FourBrains() {
  return (
    <section id="system" className="relative cosmic-bg py-28 md:py-36 overflow-hidden noise-overlay">
      <Starfield count={50} />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">The Core Innovation</p>
          </Reveal>
          <BlurText
            text="One companion. Four brains."
            className="font-display text-4xl md:text-6xl leading-tight text-starlight justify-center"
            as="h2"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-moonmist font-light leading-relaxed">
              Like Sañjaya perceiving the visible and the hidden, Drishti runs
              four specialised systems — each tuned to a different way of seeing.
              Fast reflexes on-device, deep understanding in the cloud, a sense
              of place, and a careful guide.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
          {BRAINS.map((b, i) => (
            <BrainCard key={b.n} brain={b} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BrainCard({ brain, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="group relative"
    >
      {/* blurred glow behind */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[28px] opacity-50 blur-[55px] transition-opacity duration-500 group-hover:opacity-80"
        style={{ background: brain.gradient }}
      />
      {/* gradient-border card */}
      <div
        className="relative z-10 h-full rounded-[28px] p-8 overflow-hidden"
        style={{
          background: `linear-gradient(#0a0c1c, #0a0c1c) padding-box, ${brain.gradient} border-box`,
          border: '1.5px solid transparent',
        }}
      >
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-mono text-xs text-moonmist">{brain.n}</span>
            <h3 className="font-display text-3xl md:text-4xl text-starlight leading-none mt-1">
              {brain.name}
            </h3>
            <p className="mt-1.5 text-sm text-moonmist font-light">{brain.tag}</p>
          </div>
          <span
            className="rounded-full px-3 py-1.5 text-[11px] font-medium text-void whitespace-nowrap"
            style={{ background: brain.gradient }}
          >
            {brain.tech}
          </span>
        </div>

        <p className="text-[15px] leading-relaxed text-moonmist font-light mb-6">
          {brain.desc}
        </p>

        <ul className="space-y-2.5">
          {brain.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5">
              <span
                className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
                style={{ background: brain.gradient }}
              >
                <Check className="h-2.5 w-2.5 text-void" strokeWidth={3} />
              </span>
              <span className="text-[14px] text-starlight/90 font-light">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
