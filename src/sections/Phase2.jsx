import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Users, Video, Headphones, Vibrate, Footprints, ArrowRight, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import DimensionalCanvas from '../components/DimensionalCanvas'
import BlurText from '../components/BlurText'
import EchoPinMap from '../components/EchoPinMap'
import { PHASE2 } from '../lib/content'

const ICONS = {
  EchoPin: Users,
  EchoLink: Video,
  EchoCast: Headphones,
  EchoPulse: Vibrate,
  EchoMarks: Footprints,
}

export default function Phase2() {
  const flagship = PHASE2.find((f) => f.flagship)
  const rest = PHASE2.filter((f) => !f.flagship)

  return (
    <section id="phase2" className="relative bg-void">
      {/* ── THE RIFT: Cinematic Transition ─────────────────────── */}
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden py-32">
        <DimensionalCanvas />
        
        {/* Deep gradient masking to blend the canvas into the background */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void via-transparent to-void" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
          <Reveal y={40} duration={1.2}>
            <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-aura/30 bg-aura/10 shadow-[0_0_40px_rgba(167,139,250,0.4)]">
              <Sparkles className="h-7 w-7 text-aura" />
            </div>
            
            <p className="text-[12px] uppercase tracking-[0.3em] text-aura mb-6 font-semibold">
              System Evolution • Phase Two
            </p>
          </Reveal>
          
          <BlurText
            text="When one app becomes a living community."
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-starlight justify-center drop-shadow-2xl"
          />
          
          <Reveal delay={0.4} y={30}>
            <p className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-moonmist font-light leading-relaxed">
              Phase 1 gave one person divine sight. Phase 2 connects them. 
              A living network where every user makes the world a little more 
              navigable for the next. This is the <span className="text-aura font-medium">EchoPin</span> ecosystem.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ── THE ECOSYSTEM ──────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-32 md:pb-48">
        
        {/* Flagship: EchoPin Map */}
        <Reveal y={60}>
          <div className="group relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-[2.5rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 p-8 md:p-14 overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-md">
            
            {/* Hover ambient glow */}
            <div className="pointer-events-none absolute -inset-20 bg-gradient-to-br from-gold/10 via-transparent to-violet/10 blur-[100px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold text-void mb-6 uppercase tracking-wider" style={{ background: flagship.gradient }}>
                <Users className="h-3.5 w-3.5" /> Flagship Protocol
              </span>
              <h3 className="font-display text-5xl md:text-7xl text-starlight leading-none mb-3">
                {flagship.name}
              </h3>
              <p className="text-xl italic font-display text-gold shimmer-gold">{flagship.tagline}</p>
              <p className="mt-7 text-[16px] text-moonmist font-light leading-relaxed">
                {flagship.desc}
              </p>
            </div>

            <div className="relative z-10 w-full transform transition-transform duration-700 group-hover:scale-[1.02]">
              <EchoPinMap />
            </div>
          </div>
        </Reveal>

        {/* The rest of the Echo family */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((f, i) => {
            const Icon = ICONS[f.name] || Sparkles
            return (
              <Reveal key={f.name} delay={i * 0.15} y={50}>
                <div className="group relative h-full">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 blur-[50px] transition-opacity duration-700 group-hover:opacity-40"
                    style={{ background: f.gradient }}
                  />
                  <div className="relative z-10 h-full rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 md:p-10 transition-colors duration-500 hover:bg-white/[0.04]">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]" style={{ background: f.gradient }}>
                        <Icon className="h-6 w-6 text-void" strokeWidth={2} />
                      </span>
                      <div>
                        <h4 className="font-display text-3xl text-starlight leading-none">{f.name}</h4>
                        <p className="text-[14px] italic text-moonmist mt-1.5">{f.tagline}</p>
                      </div>
                    </div>
                    <p className="text-[15px] text-moonmist font-light leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* Evolution Timeline */}
        <Reveal delay={0.2} y={30} className="mt-20">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] px-8 py-8 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-aura/5" />
            <p className="relative z-10 text-center text-[11px] uppercase tracking-divine text-moonmist mb-6">Lineage of Sight</p>
            <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 md:gap-5">
              {['EchoWalk', 'EchoPin', 'EchoLink', 'EchoCast', 'EchoPulse', 'EchoMarks'].map((name, i, arr) => (
                <React.Fragment key={name}>
                  <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className={`font-display text-xl md:text-3xl cursor-default transition-colors ${i === 0 ? 'text-gold drop-shadow-[0_0_15px_rgba(232,184,75,0.5)]' : 'text-starlight hover:text-aura'}`}
                  >
                    {name}
                    {i === 0 && <span className="ml-2 text-[10px] font-sans font-bold uppercase tracking-widest text-gold/80 align-top">Live</span>}
                  </motion.span>
                  {i < arr.length - 1 && <ArrowRight className="h-5 w-5 text-white/20" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}