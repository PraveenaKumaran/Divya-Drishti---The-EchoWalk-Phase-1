// Lightweight className combiner (no clsx/tailwind-merge dependency needed)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

// ── Editable site config ───────────────────────────────────────
// Swap these values when you deploy / finalise.
export const SITE = {
  // ⚠️ localhost only works on your machine. Deploy (Vercel/Netlify) and
  // paste the public URL here so judges can open the live demo.
  demoUrl: 'https://divya-drishti-the-echo-walk-phase-1-three.vercel.app',
  repoUrl: 'https://github.com/PraveenaKumaran/Divya-Drishti---The-EchoWalk-Phase-1-Demo', // add your GitHub repo link
  team: [
    { name: 'Your Name', role: 'Founder · Engineering' }
  ],
}
