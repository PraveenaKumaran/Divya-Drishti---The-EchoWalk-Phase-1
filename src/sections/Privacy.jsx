import React from 'react'
import { ShieldCheck, EyeOff, Smartphone, UserX, Trash2, Hand } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'

const PRINCIPLES = [
  {
    icon: Smartphone,
    title: 'The camera stays home',
    body: 'The Fast Brain runs entirely on the phone. The live video feed is never uploaded, never streamed — it physically never leaves the device.',
  },
  {
    icon: Hand,
    title: 'Cloud only on a tap',
    body: 'The one time a frame reaches the cloud is a Deep Scan the user deliberately triggers. One image, processed, then gone — never a continuous feed.',
  },
  {
    icon: UserX,
    title: 'No face recognition',
    body: 'Drishti describes scenes and obstacles. It never identifies, profiles, or remembers individuals. People in frame are “a person,” nothing more.',
  },
  {
    icon: Trash2,
    title: 'Nothing stored',
    body: 'No saved video, no recorded routes, no usage profile. There is no account to create and no history to leak.',
  },
  {
    icon: EyeOff,
    title: 'No tracking',
    body: 'No advertising SDKs, no behavioural analytics following the user around. The app’s only job is to help its user see.',
  },
  {
    icon: ShieldCheck,
    title: 'Open by default',
    body: 'Open models and open mapping data mean the privacy claims are inspectable — not promises behind a closed black box.',
  },
]

export default function Privacy() {
  return (
    <section id="privacy" className="relative cosmic-bg py-28 md:py-36 overflow-hidden">
      <Starfield count={40} />
      {/* divine shield glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-sky/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full liquid-glass px-4 py-2 mb-6">
              <ShieldCheck className="h-3.5 w-3.5 text-sky" />
              <span className="text-[11px] uppercase tracking-divine text-moonmist">Privacy by Design</span>
            </div>
          </Reveal>
          <BlurText
            text="The most private eye you’ll ever trust."
            className="font-display text-4xl md:text-6xl leading-tight text-starlight justify-center"
          />
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-moonmist font-light leading-relaxed">
              A tool that watches the world on your behalf carries real
              responsibility. So privacy here isn’t a policy page — it’s an
              architectural decision baked into how each brain works.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08} y={45}>
              <div className="group h-full rounded-2xl liquid-glass p-7 transition-transform duration-500 hover:-translate-y-1">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky/20 to-violet/15 border border-white/5">
                  <p.icon className="h-5 w-5 text-sky" strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl text-starlight mb-2.5">{p.title}</h3>
                <p className="text-[14.5px] text-moonmist font-light leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
