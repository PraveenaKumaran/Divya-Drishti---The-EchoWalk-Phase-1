import React from 'react'
import { ShieldCheck, EyeOff, Smartphone, UserX, Trash2, Hand } from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'

const PRINCIPLES = [
  {
    icon: Smartphone,
    title: 'The camera stays home',
    body: 'The Fast Brain runs entirely on-device. Unless explicitly triggering an EchoLink SOS call, the live video feed is never uploaded or streamed. It physically stays in your hand.',
  },
  {
    icon: Hand,
    title: 'Cloud only on a tap',
    body: 'The only time a frame reaches the cloud is when a Deep Scan is deliberately requested. One static image is processed and immediately discarded — never a continuous feed.',
  },
  {
    icon: UserX,
    title: 'No face recognition',
    body: 'Drishti describes scenes, not people. Any image sent to the Slow Brain is stripped of PII (Personally Identifiable Information), ensuring bystanders remain completely anonymous.',
  },
  {
    icon: Trash2,
    title: 'Nothing stored',
    body: 'No saved video, no recorded routes, and no hidden databases. There is no user account required to use the app, meaning there is zero history to leak.',
  },
  {
    icon: EyeOff,
    title: 'No tracking',
    body: 'No advertising SDKs, no behavioral analytics, and no silent data brokering. The application’s single, uncompromised job is to help its user navigate safely.',  },
  {
    icon: ShieldCheck,
    title: 'Open by default',
    body: 'Utilizing open-source models (Llama/TensorFlow) and open mapping data (OSM) ensures these privacy claims are fully inspectable — not empty promises behind a closed black box.',  },
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
              A tool that watches the world on your behalf carries massive responsibility. 
              Privacy here isn’t a policy page — it’s an architectural directive baked into 
              how each brain functions.
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
