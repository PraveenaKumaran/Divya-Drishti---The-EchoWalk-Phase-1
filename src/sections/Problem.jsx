import React from 'react'
import { Volume2, Languages, MapPinned, Brain } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'

const GAPS = [
  {
    icon: Languages,
    title: 'English-first tools',
    body: 'Most assistive apps assume English. For millions who think and live in Tamil, the help simply doesn’t speak their language.',
  },
  {
    icon: Volume2,
    title: 'Audio fatigue',
    body: 'Constant narration drowns out the very sounds blind navigators rely on — traffic, footsteps, echoes. More audio can mean less safety.',
  },
  {
    icon: MapPinned,
    title: 'Western street logic',
    body: 'Turn-by-turn built for gridded cities falls apart on Indian footpaths, unmarked crossings, and improvised routes.',
  },
  {
    icon: Brain,
    title: 'Sight is more than seeing',
    body: 'Blind individuals build rich mental maps and read the world through touch, sound and smell — not a single stream of spoken labels.',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative cosmic-bg py-28 md:py-36 overflow-hidden">
      <Starfield count={45} />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="max-w-3xl mb-16">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">The Gap</p>
          </Reveal>
          <BlurText
            text="The tools exist. They just weren’t built for here."
            className="font-display text-4xl md:text-6xl leading-[1.05] text-starlight"
          />
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-moonmist font-light leading-relaxed max-w-2xl">
              There is a <span className="text-starlight font-medium">massive blind spot</span> in the global assistive technology market: tech is being built for the environment of Silicon Valley, not the reality of South Asia. India has one of the world’s largest visually-impaired populations, yet the tools they receive rely on assumptions that completely fall apart on the streets of Coimbatore or Chennai.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {GAPS.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08} y={50}>
              <div className="group relative h-full rounded-2xl liquid-glass p-7 transition-transform duration-500 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/20 to-violet/20 border border-white/5">
                  <g.icon className="h-5 w-5 text-gold" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl text-starlight mb-2.5">{g.title}</h3>
                <p className="text-moonmist font-light leading-relaxed text-[15px]">{g.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <div className="rounded-2xl border-l-2 border-gold/50 bg-gradient-to-r from-gold/5 to-transparent px-7 py-6">
            <p className="font-display text-xl md:text-2xl italic text-starlight leading-snug">
              So we didn’t build another screen reader. We built a companion that
              sees, speaks Tamil, and respects how blind people actually move
              through the world.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
