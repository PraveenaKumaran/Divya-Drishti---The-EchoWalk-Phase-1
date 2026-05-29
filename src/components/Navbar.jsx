import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'

const LINKS = [
  { id: 'origin', label: 'Origin' },
  { id: 'problem', label: 'The Gap' },
  { id: 'system', label: 'Four Brains' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'demo', label: 'Live Engine' },
  { id: 'phase2', label: 'Phase 2' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('origin')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // HUD Active Targeting (Intersection Observer)
  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -60% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700',
        scrolled ? 'py-4' : 'py-6 md:py-8'
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 md:px-8">
        
        {/* Logo */}
        <button onClick={() => go('origin')} className="group flex items-center gap-3">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:bg-white/[0.08]">
            <Eye className="h-4 w-4 text-gold" strokeWidth={2} />
            <span className="absolute inset-0 rounded-full bg-gold/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <span className="font-display text-xl tracking-tight text-starlight">
            Divya <span className="italic text-gold">Drishti</span>
          </span>
        </button>

        {/* Desktop Limelight HUD */}
        <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.02] p-1.5 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          {LINKS.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={cn(
                'relative px-5 py-2 text-[13px] font-medium transition-colors duration-500 rounded-full',
                active === l.id ? 'text-void' : 'text-moonmist/70 hover:text-starlight'
              )}
            >
              {active === l.id && (
                <motion.span
                  layoutId="limelight-indicator"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-gold via-amber to-gold shadow-[0_0_20px_rgba(232,184,75,0.4)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => go('phase2')}
            className="group relative overflow-hidden rounded-full border border-aura/30 bg-aura/10 px-6 py-2.5 text-[13px] font-bold tracking-wide text-aura transition-all hover:bg-aura/20 hover:shadow-[0_0_30px_-5px_rgba(167,139,250,0.4)] hover:scale-105"
          >
            <span className="relative z-10">EXPLORE PHASE 2</span>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-starlight backdrop-blur-md"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="lg:hidden absolute left-5 right-5 top-20 rounded-3xl border border-white/10 bg-[#0a0c1c]/95 p-4 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  onClick={() => go(l.id)}
                  className={cn(
                    'rounded-2xl px-5 py-4 text-left text-sm font-medium transition-all',
                    active === l.id 
                      ? 'bg-gold/15 text-gold border border-gold/20 shadow-[inset_0_0_20px_rgba(232,184,75,0.1)]' 
                      : 'text-moonmist hover:bg-white/5'
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

//