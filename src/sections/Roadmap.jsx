import React from 'react'
import { motion } from 'framer-motion'
import { Check, Circle, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'
import { ROADMAP } from '../lib/content'

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative cosmic-bg py-28 md:py-36 overflow-hidden noise-overlay">
      <Starfield count={45} />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">The Path Ahead</p>
          </Reveal>
          <BlurText
            text="Complete RoadMap"
            className="font-display text-4xl md:text-6xl leading-tight text-starlight justify-center"
          />
        </div>

        {/* 
          Changed grid-cols-3 to grid-cols-2 and added max-w-4xl mx-auto 
          so the two cards don't stretch too wide. 
        */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Connecting line adjusted for 2 columns (25% from each side) */}
          <div className="hidden md:block absolute top-[68px] left-[25%] right-[25%] h-px bg-gradient-to-r from-gold to-violet" />

          {/* Sliced the array to only render the first two phases */}
          {ROADMAP.slice(0, 2).map((r, i) => (
            <Reveal key={r.phase} delay={i * 0.12} y={45}>
              <div className="relative h-full">
                {/* node */}
                <div className="flex justify-center mb-6">
                  <span className={`relative flex h-12 w-12 items-center justify-center rounded-full ${
                    i === 0 ? 'bg-gradient-to-br from-gold to-amber' : 'liquid-glass'
                  }`}>
                    {i === 0 ? (
                      <Check className="h-5 w-5 text-void" strokeWidth={2.5} />
                    ) : i === 1 ? (
                      <Circle className="h-4 w-4 text-violet" strokeWidth={2.5} />
                    ) : (
                      <Sparkles className="h-4 w-4 text-aura" />
                    )}
                    {i === 0 && <span className="absolute inset-0 rounded-full bg-gold/30 animate-ping" />}
                  </span>
                </div>

                <div className="rounded-2xl liquid-glass p-7 text-center h-full">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-[11px] uppercase tracking-divine text-moonmist">{r.phase}</span>
                  </div>
                  <h3 className="font-display text-3xl text-starlight mb-2">{r.name}</h3>
                  <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium mb-5 ${
                    i === 0 ? 'bg-gold/15 text-gold' : i === 1 ? 'bg-violet/15 text-aura' : 'bg-white/5 text-moonmist'
                  }`}>
                    {r.status}
                  </span>
                  <ul className="space-y-2 text-left">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-[14px] text-moonmist font-light">
                        <span className="h-1 w-1 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}