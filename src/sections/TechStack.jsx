import React from 'react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'
import SpotlightCard from '../components/SpotlightCard'
import { TECH_STACK } from '../lib/content'

// Map out the glow colors based on your divine cosmic palette
const GLOW_COLORS = [
  'rgba(124, 92, 255, 0.25)', // Violet
  'rgba(125, 211, 252, 0.25)', // Sky
  'rgba(232, 184, 75, 0.25)', // Gold
  'rgba(167, 139, 250, 0.25)', // Aura
]

export default function TechStack() {
  return (
    <section id="tech" className="relative cosmic-bg py-28 md:py-40 overflow-hidden">
      <Starfield count={50} />
      
      {/* Deep ambient background lighting */}
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-gold/5 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">System Infrastructure</p>
          </Reveal>
          <BlurText
            text="Built on open, deliberate choices."
            className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-starlight justify-center"
          />
          <Reveal delay={0.2} y={20}>
            <p className="mt-8 text-lg md:text-xl text-moonmist font-light leading-relaxed">
              Every tool was picked for a reason — privacy, speed, or absolute openness. 
              No proprietary lock-in, nothing that needs a credit card, and nothing that 
              streams a blind user’s camera to a centralized server.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((t, i) => (
            <Reveal key={t.name} delay={(i % 4) * 0.12} y={40}>
              <SpotlightCard 
                spotlightColor={GLOW_COLORS[i % GLOW_COLORS.length]} 
                className="h-full flex flex-col justify-between"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                      {t.cat}
                    </span>
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                  <h3 className="font-display text-2xl text-starlight leading-tight mb-4">
                    {t.name}
                  </h3>
                </div>
                <p className="text-[14px] text-moonmist/80 font-light leading-relaxed">
                  {t.why}
                </p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}