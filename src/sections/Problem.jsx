import React from 'react'
import { 
  Volume2, 
  Languages, 
  MapPinned, 
  Brain, 
  PhoneCall, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Starfield from '../components/Starfield'
import BlurText from '../components/BlurText'

const ANALYSIS = [
  {
    icon: Languages,
    title: 'English-First Bias',
    body: 'Most assistive apps assume English and structured western environments. For millions who live in regional spaces, the assistance simply does not speak their language or understand local navigation.',
    moatTitle: 'Hyper-Local Tamil Core',
    moatBody: 'Built ground-up with a native Tamil voice engine that processes regional environmental context, rather than just running rigid western concepts through a generic text-to-speech translator.',
  },
  {
    icon: Volume2,
    title: 'Audio Fatigue & Sensory Risk',
    body: 'Constant AI narration ("car, person, wall") drowns out ambient environment sounds like horns, engine proximity, and footsteps that visually impaired individuals rely on to stay safe.',
    moatTitle: 'EchoPulse (Haptic Steering)',
    moatBody: 'Phase 1 cognitive cooldowns filter AI noise. Phase 2 unloads your ears entirely by shifting turn markers to touch patterns: rhythmic, distinct vibration buzzes for safe steering.',
  },
  {
    icon: MapPinned,
    title: 'Static Western Street Logic',
    body: 'Traditional turn-by-turn navigation assumes clean, gridded paths. It completely fails on unpredictable sidewalks, open potholes, and impromptu street construction.',
    moatTitle: 'EchoPin (P2P Live Tagging)',
    moatBody: 'A crowdsourced accessibility layer. Users drop contextual "audio pins" (broken footpaths, safe crossings) to build a proactive community safety map updated in real-time.',
  },
  {
    icon: Brain,
    title: 'Mathematical Distance Overload',
    body: 'Telling a user to "walk 89 meters" is highly abstract and induces cognitive anxiety. Human mobility training is inherently built on real, perceivable landmarks.',
    moatTitle: 'EchoMarks & EchoCast',
    moatBody: 'Navigating through spatial memory. EchoCast allows 3D sound rehearsal before leaving home, while EchoMarks uses sensory markers: "Turn left when the floor tactile pavement changes."',
  },
]

export default function Problem() {
  return (
    <section id="problem" className="relative cosmic-bg py-28 md:py-36 overflow-hidden noise-overlay">
      <Starfield count={45} />
      <div className="relative z-10 mx-auto max-w-6xl px-5">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-divine text-gold mb-5">Market Differentiation</p>
          </Reveal>
          <BlurText
            text="The Competitive Distinction."
            className="font-display text-4xl md:text-6xl leading-[1.05] text-starlight"
          />
          <Reveal delay={0.2}>
            <p className="mt-7 text-lg md:text-xl text-moonmist font-light leading-relaxed max-w-2xl">
              Global giants build assistive tech for Silicon Valley sidewalks. Divya Drishti bridges this exact gap by creating a sensory ecosystem engineered specifically for the hyper-chaotic realities of South Asian terrain.
            </p>
          </Reveal>
        </div>

        {/* Core USP Highlight Banner - FIXED FOR TECHNICAL ACCURACY */}
        <Reveal delay={0.25}>
          <div className="mb-12 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 via-amber/5 to-transparent p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Sparkles className="h-40 w-40 text-gold" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-3">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold/20">
                    <Zap className="h-3.5 w-3.5 text-gold" />
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gold">Our Core Unique Selling Point (USP)</h3>
                </div>
                <h4 className="font-display text-2xl md:text-3xl text-starlight mb-3 font-semibold">
                  Local-First Hybrid Intelligence
                </h4>
                <p className="text-moonmist font-light text-[15px] leading-relaxed">
                  Unlike apps that are 100% cloud-dependent—causing massive latency, high costs, and privacy vulnerabilities—Divya Drishti splits its cognitive processing. Continuous, high-speed spatial navigation runs completely on-device (**EdgeGuard**). The cloud endpoint (**Scene Scout via Groq API**) is isolated and only pinged on-demand when the user requests ultra-deep environmental context.
                </p>
              </div>
              <div className="flex items-center gap-4 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 shrink-0">
                <div>
                  <div className="text-3xl font-display font-bold text-gold">On-Demand</div>
                  <div className="text-[11px] uppercase tracking-wider text-white/40 font-medium">Cloud Isolation</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Dynamic Matrix Grid */}
        <div className="space-y-6">
          {ANALYSIS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} y={40}>
              <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 rounded-2xl liquid-glass p-6 md:p-8 border border-white/5 relative overflow-hidden transition-all duration-300 hover:border-white/10">
                
                {/* Competition Weakness Half */}
                <div className="md:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="mb-4 flex items-center gap-2">
                      <span className="inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold bg-white/5 text-white/40 border border-white/5">
                        The Status Quo
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-white/80 mb-2 font-medium">{item.title}</h3>
                    <p className="text-white/40 font-light text-[14px] leading-relaxed">{item.body}</p>
                  </div>
                </div>

                {/* The Intersecting Divider Line */}
                <div className="hidden md:flex col-span-1 justify-center items-center relative">
                  <div className="w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent group-hover:via-gold/30 transition-colors duration-500" />
                </div>

                {/* Our Unique Advantage Half */}
                <div className="md:col-span-6 flex flex-col justify-between bg-gold/[0.01] rounded-xl p-4 md:p-5 border border-gold/[0.03]">
                  <div>
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-block px-2 py-0.5 rounded text-[9px] uppercase tracking-wider font-bold bg-gold/10 text-gold border border-gold/20 animate-pulse">
                        Competitive Edge
                      </span>
                    </div>
                    <h4 className="font-display text-xl text-gold mb-2 font-semibold">{item.moatTitle}</h4>
                    <p className="text-starlight font-light text-[14px] leading-relaxed">{item.moatBody}</p>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* The EchoLink Ecosystem Highlight Callout */}
        <Reveal delay={0.3} className="mt-12">
          <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-r from-sky-500/5 via-transparent to-transparent p-6 md:p-8 relative overflow-hidden group">
            <div className="absolute right-6 top-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <PhoneCall className="h-24 w-24 text-sky-400" />
            </div>
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck className="h-5 w-5 text-sky-400" />
                <h3 className="font-display text-xl text-starlight font-semibold">The Hybrid Moat: EchoLink</h3>
              </div>
              <p className="text-moonmist font-light text-[15px] leading-relaxed">
                AI systems inherently encounter structural limitations in hyper-chaotic environments. Instead of forcing an all-or-nothing approach, Divya Drishti bridges the gap with <span className="text-sky-400 font-medium">EchoLink</span>. A single intentional touch channels a privacy-masked video stream directly to trusted volunteers for a rapid 10-second human verification. Perfect synergy between artificial and human intelligence.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}