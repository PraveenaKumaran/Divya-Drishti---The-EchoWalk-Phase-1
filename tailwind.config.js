/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Divine Cosmic Palette ───────────────────────────────
        // Deep space base
        void: '#05060f',
        cosmos: '#0a0c1c',
        nebula: '#11142b',
        twilight: '#1a1f3d',
        // Divine accents
        gold: '#e8b84b',        // primary divine glow
        amber: '#ffcf6b',       // bright highlight
        ember: '#ff9d3c',       // warm secondary
        violet: '#7c5cff',      // cosmic violet
        indigo: '#4b3bd6',      // deep cosmic
        aura: '#a78bfa',        // soft aura purple
        sky: '#7dd3fc',         // celestial cyan
        // Text
        starlight: '#f4f1e8',   // warm white
        moonmist: '#b8b5c8',    // muted lavender-grey
        ash: '#6b6880',         // dim
      },
      fontFamily: {
        // Distinctive, non-generic pairing
        display: ['"Cormorant Garamond"', 'serif'],   // divine headline serif
        body: ['"Outfit"', 'sans-serif'],              // modern geometric body
        sanskrit: ['"Tiro Devanagari Sanskrit"', 'serif'], // proper Devanagari
        mono: ['"JetBrains Mono"', 'monospace'],       // technical / code
      },
      letterSpacing: {
        divine: '0.28em',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'blur(40px)' },
          '50%': { opacity: '0.7', filter: 'blur(55px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'beam-travel': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 5s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
}
