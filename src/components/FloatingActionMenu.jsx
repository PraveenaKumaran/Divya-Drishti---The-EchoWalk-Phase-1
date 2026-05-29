import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, PlayCircle, Github, Rocket, ArrowUp } from 'lucide-react'
import { SITE } from '../lib/utils'

/**
 * FloatingActionMenu — adapted from the 21st.dev component.
 * Persistent quick-actions in the corner: launch demo, repo, jump to top.
 */
export default function FloatingActionMenu() {
  const [open, setOpen] = useState(false)

  const options = [
    {
      label: 'Try the Demo',
      Icon: <PlayCircle className="h-4 w-4 text-gold" />,
      onClick: () => window.open(SITE.demoUrl, '_blank'),
    },
    {
      label: 'View Phase 2',
      Icon: <Rocket className="h-4 w-4 text-aura" />,
      onClick: () => document.getElementById('phase2')?.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      label: 'Source',
      Icon: <Github className="h-4 w-4 text-sky" />,
      onClick: () => window.open(SITE.repoUrl, '_blank'),
    },
    {
      label: 'Top',
      Icon: <ArrowUp className="h-4 w-4 text-starlight" />,
      onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    },
  ]

  return (
    <div className="fixed bottom-7 right-7 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="relative flex h-12 w-12 items-center justify-center rounded-full liquid-glass-strong shadow-[0_0_30px_rgba(232,184,75,0.25)]"
        aria-label="Quick actions"
      >
        <span className="absolute inset-0 rounded-full bg-gold/15 blur-lg" />
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative"
        >
          <Plus className="h-5 w-5 text-gold" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
            transition={{ duration: 0.4, type: 'spring', stiffness: 300, damping: 22 }}
            className="absolute bottom-14 right-0 mb-1"
          >
            <div className="flex flex-col items-end gap-2">
              {options.map((o, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  onClick={o.onClick}
                  className="flex items-center gap-2 rounded-xl liquid-glass px-3.5 py-2 text-[13px] font-medium text-starlight hover:scale-[1.04] transition-transform whitespace-nowrap"
                >
                  {o.Icon}
                  <span>{o.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
