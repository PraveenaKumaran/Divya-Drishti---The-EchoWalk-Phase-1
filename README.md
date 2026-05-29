# Divya Drishti — Divine Sight

> *"Endowed with divine vision, Sañjaya will narrate the battle to the blind king — by day or night, the seen and the unseen."*
> — Mahābhārata, Bhīṣma Parva 6.2.10

A cinematic explainer & demo site for **Divya Drishti**, an AI companion that gives Tamil-first divine sight to the visually impaired. This is the project site (the "Phase 1 — EchoWalk" app itself lives in a separate repo).

## What's inside

A premium, dark-cosmic React site explaining the project to hackathon judges:

- **Hero** — divine title with Three.js particle aura, GooeyText concept morph
- **Origin** — the Mahābhārata Sañjaya parallel told through three Sanskrit verses on code-built parchment scrolls
- **Problem · Four-Brain System · Architecture · Demo · Tech Stack · Privacy** — the case for the build
- **Phase 2 — EchoPin ecosystem** — the animated future showcase (EchoPin, EchoLink, EchoCast, EchoPulse, EchoMarks)
- **Roadmap · Team · Closing CTA**

## Stack

- **Vite + React 18**
- **Tailwind CSS 3**
- **Framer Motion** — component-level micro-interactions
- **GSAP + ScrollTrigger** — scroll-driven cinematic reveals & parallax
- **Three.js** — the cursor-responsive divine aura in the hero (only)
- **lucide-react** — icons

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:3000`).

## Customise

Everything that's likely to change lives in two files:

- **`src/lib/utils.js`** → `SITE.demoUrl`, `SITE.repoUrl`, team names & roles
- **`src/lib/content.js`** → Sanskrit verses, brain descriptions, tech stack rationale, Phase-2 features, roadmap

To change colours, edit the `colors` block in **`tailwind.config.js`** and the CSS variables at the top of **`src/styles/index.css`**.

## Deploy

```bash
npm run build      # outputs to dist/
```

Drop `dist/` onto Vercel, Netlify, Cloudflare Pages, or any static host. Then **update `SITE.demoUrl` in `src/lib/utils.js`** with the public URL of your actual Drishti app — `http://localhost:5173/` only works on your own machine.

## Accessibility notes

- All animations honour `prefers-reduced-motion`
- The site is a pitch deck *about* an accessibility product; the deck itself is keyboard-navigable and uses semantic HTML
- Colour contrast on body text meets WCAG AA against the dark backgrounds
- The Three.js aura is marked `aria-hidden` and gracefully degrades to a static field when reduced motion is set

## Credits

- Sanskrit verses sourced from Mahābhārata, Book 6 (Bhīṣma Parva), Chapter 2, Verses 9–11
- Visual language adapted from selected open components on 21st.dev and motionsites.ai (see comments in component files), substantially reworked for this project's palette and architecture
- Fonts: Cormorant Garamond (display), Outfit (body), Tiro Devanagari Sanskrit (Sanskrit), JetBrains Mono — all via Google Fonts

---

Built with care for those who navigate by sound and touch.
