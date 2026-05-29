import React from 'react'
import { motion } from 'framer-motion'
import { Eye, ScanSearch, Navigation2, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import LeverSwitch from '../components/LeverSwitch'
import { SITE } from '../lib/utils'

const ACTIONS = [
  { icon: Eye, label: 'Start Camera', sub: 'Fast Brain', color: 'sky' },
  { icon: ScanSearch, label: 'Deep Scan', sub: 'Slow Brain', color: 'gold' },
  { icon: MapPin, label: 'Where am I?', sub: 'Locator', color: 'gold' },
  { icon: Navigation2, label: 'Navigate', sub: 'Turn-by-turn', color: 'gold' },
]

export default function Demo() {
  return (
    <section id="demo" className="relative cosmic-bg py-28 md:py-40 overflow-hidden">
      <Starfield count={50} />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 -translate-x-1/2 rounded-full bg-violet/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Left: Copy + Actions + Lever */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/5 px-4 py-1.5 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[11px] uppercase tracking-divine text-gold">Live Environment</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-starlight">
                Not a mockup.<br />
                <span className="italic shimmer-gold">A working build.</span>
              </h2>
              <p className="mt-6 text-lg text-moonmist font-light leading-relaxed max-w-lg">
                The Four-Brain System runs today. Here it is detecting obstacles
                in real time — entirely in the browser, ready to speak warnings in Tamil.
                No install required.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-4 max-w-lg">
              {ACTIONS.map((a, i) => (
                <Reveal key={a.label} delay={i * 0.1}>
                  <div className="group flex items-center gap-3.5 rounded-2xl liquid-glass border border-white/5 px-4 py-3.5 transition-all duration-300 hover:bg-white/[0.03] hover:border-white/10">
                    <span className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5`}>
                      <a.icon className={`h-4 w-4 text-${a.color === 'ember' ? 'ember' : a.color === 'violet' ? 'aura' : a.color} transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.8} />
                      <span className={`absolute inset-0 rounded-xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-30 bg-${a.color}`} />
                    </span>
                    <div>
                      <p className="text-[14px] text-starlight font-medium leading-none">{a.label}</p>
                      <p className="text-[11px] text-moonmist mt-1.5">{a.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* The Mechanical Lever */}
            <Reveal delay={0.3} className="mt-12">
              <LeverSwitch onActivate={() => window.open('https://divya-drishti-the-echo-walk-phase-1-three.vercel.app', '_blank')} />
              <p className="mt-5 text-[12px] text-ash font-light max-w-xs">
                Ensure your camera is enabled. Processing happens entirely on-device via TensorFlow.js.
              </p>
            </Reveal>
          </div>

          {/* Right: Device Mockup */}
          <Reveal y={60} delay={0.2} parallax={5}>
            <DeviceMockup />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function DeviceMockup() {
  return (
    <div className="relative mx-auto max-w-[400px] lg:max-w-none">
      {/* Intense glow behind the device */}
      <div className="pointer-events-none absolute -inset-10 rounded-[40px] bg-gradient-to-br from-sky/15 via-violet/15 to-gold/15 blur-[80px]" />

      <motion.div
        initial={{ rotateY: -12, rotateX: 5, scale: 0.95 }}
        whileHover={{ rotateY: 0, rotateX: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 30 }}
        style={{ transformStyle: 'preserve-3d', perspective: 1500 }}
        className="relative z-10 rounded-[2rem] bg-gradient-to-b from-white/10 to-white/5 p-2 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl border border-white/10"
      >
        {/* Inner screen border */}
        <div className="relative overflow-hidden rounded-[1.5rem] bg-void border border-white/5">
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.02]">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            </div>
            <div className="ml-4 flex-1 rounded-md bg-black/30 px-3 py-1.5 border border-white/5">
              <span className="font-mono text-[10px] text-moonmist/70 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-sky animate-pulse" />
                vision.drishti.ai
              </span>
            </div>
          </div>
          
          <img
            src="/demo-screenshot.png"
            alt="Drishti Interface"
            className="w-full h-auto block opacity-90 transition-opacity hover:opacity-100"
          />
        </div>
      </motion.div>

      {/* Floating UI Chips */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 10 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, type: "spring" }}
        className="absolute -bottom-6 -left-8 z-20 flex items-center gap-3 rounded-xl liquid-glass-strong px-4 py-3 shadow-2xl border border-white/10"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky"></span>
        </span>
        <div>
          <span className="block text-[10px] font-mono text-sky uppercase tracking-wider mb-0.5">Detection Log</span>
          <span className="text-[13px] text-starlight font-medium">Person · 98% Confidence</span>
        </div>
      </motion.div>
    </div>
  )
}