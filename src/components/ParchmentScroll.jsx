import React from 'react'

export default function ParchmentScroll({ children, className = '' }) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Wood gradient definition */}
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <defs>
          <radialGradient id="wood-cap" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9a6b3e" />
            <stop offset="70%" stopColor="#6b4a2b" />
            <stop offset="100%" stopColor="#3d280f" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative flex items-stretch">
        <Roller side="left" />

        {/* Center Container - The Paper */}
        <div className="relative flex-1 -mx-2 z-10 flex flex-col">
          
          {/* 1. Rock-Solid CSS Background */}
          <div
            className="absolute inset-0 z-0 rounded-sm"
            style={{
              background: 'linear-gradient(135deg, #e8d9b5 0%, #ddc89a 25%, #e6d6ad 50%, #d4bf8e 75%, #e2d0a3 100%)',
              boxShadow: '0 20px 50px -20px rgba(0,0,0,0.8), inset 0 0 40px rgba(120,85,40,0.4), inset 0 0 10px rgba(90,60,25,0.2)',
            }}
          />

          {/* 2. Paper Grain / Noise Texture */}
          <div 
            className="pointer-events-none absolute inset-0 z-0 mix-blend-multiply opacity-20 rounded-sm"
            style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* 3. The Content */}
          <div className="relative z-10 flex-1 px-8 py-10 md:px-20 md:py-16 flex items-center justify-center">
            <div className="w-full">{children}</div>
          </div>
          
        </div>

        <Roller side="right" />
      </div>
    </div>
  )
}

function Roller({ side }) {
  return (
    <div className="relative z-20 flex flex-col items-center" style={{ width: '38px' }}>
      {/* top cap knob */}
      <div
        className="rounded-full"
        style={{
          width: '30px',
          height: '30px',
          background: 'url(#wood-cap)',
          backgroundImage: 'radial-gradient(circle at 35% 35%, #9a6b3e, #6b4a2b 70%, #3d280f)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.6), inset 0 2px 3px rgba(255,220,170,0.4)',
          marginBottom: '-6px',
          zIndex: 2,
        }}
      />
      {/* shaft */}
      <div
        className="flex-1 w-full rounded-[6px]"
        style={{
          background: 'linear-gradient(90deg, #4a3018 0%, #8a5e36 30%, #b07d48 50%, #7a5230 70%, #3d280f 100%)',
          boxShadow: 'inset 2px 0 4px rgba(255,220,170,0.3), inset -2px 0 6px rgba(0,0,0,0.5), 0 10px 30px rgba(0,0,0,0.5)',
        }}
      />
      {/* bottom cap knob */}
      <div
        className="rounded-full"
        style={{
          width: '30px',
          height: '30px',
          backgroundImage: 'radial-gradient(circle at 35% 35%, #9a6b3e, #6b4a2b 70%, #3d280f)',
          boxShadow: '0 4px 10px rgba(0,0,0,0.6), inset 0 2px 3px rgba(255,220,170,0.4)',
          marginTop: '-6px',
          zIndex: 2,
        }}
      />
    </div>
  )
}