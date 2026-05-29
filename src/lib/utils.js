// Lightweight className combiner (no clsx/tailwind-merge dependency needed)
export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

// ── Editable site config ───────────────────────────────────────
// Swap these values when you deploy / finalise.
export const SITE = {
  // ⚠️ localhost only works on your machine. Deploy (Vercel/Netlify) and
  // paste the public URL here so judges can open the live demo.
  demoUrl: 'http://localhost:5173/',
  repoUrl: '#', // add your GitHub repo link
  team: [
    { name: 'Your Name', role: 'Founder · Engineering' },
    { name: 'Teammate Two', role: 'AI / Vision' },
    { name: 'Teammate Three', role: 'Design · Accessibility' },
  ],
}
