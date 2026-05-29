import React from 'react'
import { Eye, Github, ExternalLink, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import GlassButton from '../components/GlassButton'
import { SITE } from '../lib/utils'

export default function Footer() {
  return (
    <footer id="team" className="relative overflow-hidden pt-28 pb-12">
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 60% 70% at 50% 100%, rgba(232,184,75,0.14), transparent 60%), linear-gradient(180deg, #05060f, #07081a)',
      }} />
      <Starfield count={60} />

      {/* divine halo */}
      <div className="pointer-events-none absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 translate-y-1/3 rounded-full bg-gold/12 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-5">
        {/* Closing CTA */}
        <Reveal className="text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full liquid-glass-strong"
          >
            <Eye className="h-7 w-7 text-gold" strokeWidth={1.5} />
          </motion.div>

          <h2 className="font-display text-4xl md:text-6xl leading-tight text-starlight text-balance">
            Sight is a gift.<br />
            <span className="italic shimmer-gold">Let’s give it through sound.</span>
          </h2>
          <p className="mt-6 mx-auto max-w-xl text-moonmist font-light leading-relaxed">
            Divya Drishti began as a 5,000-year-old idea — being the eyes for one
            who cannot see. It runs today, and it’s only getting started.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <GlassButton href={SITE.demoUrl}>
              Try the live demo <ExternalLink className="h-4 w-4" />
            </GlassButton>
            <GlassButton variant="ghost" href={SITE.repoUrl}>
              <Github className="h-4 w-4" /> View the source
            </GlassButton>
          </div>
        </Reveal>

        
        {/* bottom bar */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full liquid-glass">
              <Eye className="h-3.5 w-3.5 text-gold" />
            </span>
            <span className="font-display text-lg text-starlight">
              Divya <span className="italic text-gold">Drishti</span>
            </span>
          </div>
          <p className="text-[12px] text-ash font-light flex items-center gap-1.5">
            Built with <Heart className="h-3 w-3 text-ember fill-ember" /> for those who navigate by sound &amp; touch
          </p>
          <p className="text-[12px] text-ash font-mono">EchoWalk · v1.0</p>
        </div>
      </div>
    </footer>
  )
}
