import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
import DivineAura from '../components/DivineAura'
import Starfield from '../components/Starfield'
import GooeyText from '../components/GooeyText'
import GlassButton from '../components/GlassButton'
import ParchmentScroll from '../components/ParchmentScroll'
import Reveal from '../components/Reveal'
import { VERSES } from '../lib/content'
import { SITE } from '../lib/utils'
import LinkPreview from '../components/LinkPreview'


export default function Hero() {
  return (
    <section id="origin" className="relative cosmic-bg">
      {/* ── Act I: the divine title ──────────────────────────── */}
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden noise-overlay pt-32">        <Starfield count={70} />
        <DivineAura />

        {/* soft halo behind title */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-7 flex items-center gap-2 rounded-full liquid-glass px-4 py-2"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-[11px] font-medium uppercase tracking-divine text-moonmist">
              Mahābhārata · Bhīṣma Parva · 6.2.9–11
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(14px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight"
          >
            <span className="shimmer-gold">Divya</span>{' '}
            <span className="italic text-starlight">Drishti</span>
          </motion.h1>

          {/* Gooey morphing concept across languages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 h-[70px] md:h-[90px] w-full max-w-2xl"
          >
            <GooeyText
              texts={['Divine Sight', 'திருஷ்டி', 'Divine Vision', 'दृष्टि', 'Sight for All']}
              className="h-full"
              textClassName="font-display italic text-4xl md:text-6xl text-moonmist"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-moonmist font-body font-light text-balance"
          >
            An AI companion that becomes the eyes of those who cannot see —
            describing the world, guiding each step, and speaking their own
            language. Tamil-first. On-device. Built with respect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <GlassButton onClick={() => document.getElementById('the-verses')?.scrollIntoView({ behavior: 'smooth' })}>
              Discover the story
            </GlassButton>
            <GlassButton variant="ghost" href={SITE.demoUrl}>
              Try the live demo
            </GlassButton>
          </motion.div>
        </div>

        <motion.button
          onClick={() => document.getElementById('the-verses')?.scrollIntoView({ behavior: 'smooth' })}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-moonmist"
        >
          <span className="text-[10px] uppercase tracking-divine">Why this name</span>
          <ChevronDown className="h-5 w-5 animate-bounce text-gold" />
        </motion.button>
      </div>

      {/* ── Act II: the origin — Sanjaya & the blind king ─────── */}
      <div id="the-verses" className="relative px-5 py-28 md:py-40 scroll-mt-32">
        <Starfield count={40} />
        <div className="relative z-50 mx-auto max-w-4xl text-center mb-20">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">The Origin</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight text-starlight text-balance">
              A blind king. A narrator gifted with{' '}
              <span className="italic shimmer-gold">divine sight.</span>
            </h2>
            <p className="mt-9 mx-auto max-w-2xl text-lg text-moonmist font-light leading-relaxed">
              On the eve of the Kurukshetra war, the sage{' '}
              <LinkPreview 
                imageSrc="/images/vyasa.jpg" 
                className="font-medium text-gold transition-colors hover:text-amber"
              >
                Vyāsa
              </LinkPreview>{' '}
              offers the blind king{' '}
              <LinkPreview 
                imageSrc="/images/dhritarashtra.jpg" 
                className="font-medium text-gold transition-colors hover:text-amber"
              >
                Dhṛtarāṣṭra
              </LinkPreview>{' '}
              a gift: he grants his charioteer{' '}
              <LinkPreview 
                imageSrc="/images/sanjaya.jpg" 
                className="font-medium text-gold transition-colors hover:text-amber"
              >
                Sañjaya
              </LinkPreview>{' '}
              <span className="text-starlight font-medium">divya drishti</span> — divine
              vision — so he can narrate the entire battle aloud. Nothing hidden,
              by day or night. It is, perhaps, the oldest story of giving sight
              through words to one who cannot see.
            </p>
          </Reveal>
        </div>

        {/* The three verses revealed on the parchment, staggered at depth */}
        <div className="relative z-10 mx-auto max-w-5xl space-y-16 md:space-y-24">
          {VERSES.map((v, i) => (
            <Reveal
              key={v.num}
              y={80}
              delay={i * 0.15}
              // 2. Reduce the aggressive parallax so they don't collide
              parallax={i === 0 ? -3 : i === 1 ? 3 : -2} 
              className={
                i === 0
                  ? 'md:mr-auto md:ml-0 md:max-w-3xl'
                  : i === 1
                  ? 'md:ml-auto md:mr-0 md:max-w-3xl'
                  : 'md:mx-auto md:max-w-3xl'
              }
            >
              <VerseCard verse={v} index={i} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} y={30} className="relative z-10 mx-auto max-w-2xl text-center mt-28">
          <div className="relative overflow-hidden rounded-3xl liquid-glass-strong px-8 py-10 shadow-[0_0_40px_-10px_rgba(232,184,75,0.15)]">
            {/* Inner glowing core */}
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
            
            <p className="font-display text-2xl md:text-3xl italic text-starlight leading-snug">
              “To illuminate the unseen —<br />
              <span className="shimmer-gold">translating light into language.”</span>
            </p>
            <p className="mt-4 text-[15px] text-moonmist font-light">
              What was once a divine myth is now a technical reality. Here is the architecture.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function VerseCard({ verse, index }) {
  return (
    <div className="my-4">
      <ParchmentScroll>
        <div className="text-center text-[#3a2a16]">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="font-sanskrit text-3xl md:text-4xl text-[#6b3f1d]">{verse.num}</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#7a5a32]">{verse.numEng}</span>
          </div>
          <p
            className="font-sanskrit text-lg md:text-2xl leading-relaxed text-[#3a2a16] whitespace-pre-line"
            style={{ textShadow: '0 1px 0 rgba(255,245,220,0.5)' }}
          >
            {verse.sanskrit}
          </p>
          <p className="mt-5 font-display italic text-base md:text-lg text-[#5a4126] max-w-xl mx-auto">
            “{verse.translation}”
          </p>
        </div>
      </ParchmentScroll>

      {/* the link to our app, floating below each verse */}
      <div className="mt-5 flex justify-center">
        <div className="flex items-center gap-2.5 rounded-full liquid-glass px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-[12px] md:text-[13px] text-moonmist font-light">{verse.link}</span>
        </div>
      </div>
    </div>
  )
}
