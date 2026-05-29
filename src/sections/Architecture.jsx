import React from 'react'
import { motion } from 'framer-motion'
import { Camera, Cpu, Cloud, Volume2, Vibrate, MapPin, Smartphone } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'

export default function Architecture() {
  return (
    <section id="architecture" className="relative cosmic-bg py-28 md:py-36 overflow-hidden">
      <Starfield count={40} />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">How It Flows</p>
          </Reveal>
          <BlurText
            text="The architecture, end to end."
            className="font-display text-4xl md:text-6xl leading-tight text-starlight justify-center"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-moonmist font-light leading-relaxed">
              Most processing happens on the phone itself. Only a deliberate,
              user-triggered Deep Scan or a route request ever reaches the cloud —
              and the output always returns as Tamil speech and gentle haptics.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <FlowDiagram />
        </Reveal>

        {/* Layer legend */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { label: 'On-device', color: 'text-sky', desc: 'Camera, Fast Brain, GPS, voice — never leaves the phone.' },
            { label: 'On-demand cloud', color: 'text-violet', desc: 'A single frame or route request, only when the user asks.' },
            { label: 'Human output', color: 'text-gold', desc: 'Tamil speech and haptic pulses — the world, made perceivable.' },
          ].map((l, i) => (
            <Reveal key={l.label} delay={i * 0.1}>
              <div className="rounded-2xl liquid-glass p-5">
                <p className={`text-sm font-semibold ${l.color} mb-1.5`}>{l.label}</p>
                <p className="text-[13px] text-moonmist font-light leading-relaxed">{l.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function FlowDiagram() {
  // Three horizontal "lanes": Input → Processing → Output
  const inputs = [
    { icon: Camera, label: 'Camera' },
    { icon: MapPin, label: 'GPS' },
  ]
  const processing = [
    { icon: Cpu, label: 'Fast Brain', sub: 'on-device', glow: 'sky' },
    { icon: Cloud, label: 'Slow Brain', sub: 'Groq · on-demand', glow: 'violet' },
  ]
  const outputs = [
    { icon: Volume2, label: 'Tamil Voice' },
    { icon: Vibrate, label: 'Haptics (Next Phase)' },
  ]

  return (
    <div className="relative rounded-[28px] liquid-glass p-8 md:p-12 overflow-hidden">
      {/* animated connecting beam (SVG) */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0" />
            <stop offset="35%" stopColor="#7c5cff" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="65%" stopColor="#e8b84b" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff9d3c" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.line
          x1="18%" y1="50%" x2="82%" y2="50%"
          stroke="url(#beam)"
          strokeWidth="2"
          strokeDasharray="8 12"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -200 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="hidden md:block"
        />
      </svg>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-center">
        {/* Inputs */}
        <Lane title="Sense" nodes={inputs} accent="sky" />
        {/* Processing */}
        <Lane title="Understand" nodes={processing} accent="violet" center />
        {/* Outputs */}
        <Lane title="Speak & Feel" nodes={outputs} accent="gold" />
      </div>

      {/* The phone wrapper note */}
      <div className="relative mt-10 flex items-center justify-center gap-2 text-moonmist">
        <Smartphone className="h-4 w-4 text-sky" />
        <span className="text-[12px] font-light">
          Everything inside the dashed line runs on the user’s own phone — no account, no stored video.
        </span>
      </div>
    </div>
  )
}

function Lane({ title, nodes, accent, center }) {
  const ring = {
    sky: 'shadow-[0_0_30px_-8px_#7dd3fc] border-sky/30',
    violet: 'shadow-[0_0_30px_-8px_#7c5cff] border-violet/30',
    gold: 'shadow-[0_0_30px_-8px_#e8b84b] border-gold/30',
  }[accent]

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-[10px] uppercase tracking-divine text-moonmist">{title}</span>
      <div className={`flex ${center ? 'flex-col' : 'flex-row md:flex-col'} gap-3`}>
        {nodes.map((n, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 rounded-2xl liquid-glass border ${ring} px-4 py-3 min-w-[140px]`}
          >
            <n.icon className={`h-5 w-5 text-${accent === 'sky' ? 'sky' : accent === 'violet' ? 'aura' : 'gold'}`} strokeWidth={1.6} />
            <div>
              <p className="text-sm text-starlight font-medium leading-none">{n.label}</p>
              {n.sub && <p className="text-[10px] text-moonmist mt-1">{n.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
