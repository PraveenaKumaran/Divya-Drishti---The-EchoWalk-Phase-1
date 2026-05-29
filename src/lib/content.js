// ── All site content in one editable place ─────────────────────

export const VERSES = [
  {
    num: '९',
    numEng: 'Verse 9',
    sanskrit: 'एष ते सञ्जयो राजन् युद्धमेतद्वदिष्यति ।\nएतस्य सर्वसङ्ग्रामे न परोक्षं भविष्यति ॥',
    translation:
      'This Sanjaya, O King, will describe this battle to you. In the entire war, nothing will be hidden from his sight.',
    link: 'A narrator becomes the eyes of one who cannot see.',
  },
  {
    num: '१०',
    numEng: 'Verse 10',
    sanskrit: 'चक्षुषा सञ्जयो राजन् दिव्येनैव समन्वितः ।\nकथयिष्यति ते युद्धं सर्वज्ञश्च भविष्यति ॥',
    translation:
      'Endowed with divine vision, O King, Sanjaya will narrate the battle to you, and he will be all-knowing.',
    link: 'Divya Drishti — “divine vision” — spoken aloud, in real time.',
  },
  {
    num: '११',
    numEng: 'Verse 11',
    sanskrit:
      'प्रकाशं वाऽप्रकाशं वा दिवा वा यदि वा निशि ।\nमनसा चिन्तितमपि सर्वं वेत्स्यति सञ्जयः ॥',
    translation:
      'Whether visible or concealed, whether by day or by night, even what is merely thought — Sanjaya will know everything.',
    link: 'By day or night, the seen and the hidden — exactly what our AI must perceive.',
  },
]

export const BRAINS = [
  {
    n: '01',
    name: 'Fast Brain',
    tag: 'On-device obstacle detection',
    color: 'sky',
    gradient: 'linear-gradient(137deg, #7dd3fc 0%, #38bdf8 50%, #0ea5e9 100%)',
    tech: 'TensorFlow.js · COCO-SSD',
    desc: 'Runs entirely inside the browser on the phone. Detects people, vehicles, and obstacles in real time and speaks a short Tamil warning only when something gets close — never streaming the camera anywhere.',
    points: ['Real-time, fully offline-capable', 'Speaks only when an object is near (>150px)', '5-second cooldown prevents audio fatigue'],
  },
  {
    n: '02',
    name: 'Slow Brain',
    tag: 'Deep scene understanding',
    color: 'violet',
    gradient: 'linear-gradient(137deg, #a78bfa 0%, #7c5cff 50%, #4b3bd6 100%)',
    tech: 'Groq · Llama-4-Scout Vision',
    desc: 'On demand, the user can trigger a single-frame “Deep Scan”. A vision model reads the whole scene and describes it in natural Tamil — “which can is the coconut milk?”, “is the path clear ahead?”',
    points: ['User-triggered, never continuous', 'One frame sent, then forgotten', 'Natural Tamil scene description'],
  },
  {
    n: '03',
    name: 'The Locator',
    tag: 'Where am I?',
    color: 'gold',
    gradient: 'linear-gradient(137deg, #ffcf6b 0%, #e8b84b 50%, #ff9d3c 100%)',
    tech: 'OpenStreetMap · Nominatim',
    desc: 'A single tap answers the most grounding question: “Where am I?” Reverse-geocoding turns GPS coordinates into a spoken neighbourhood name in Tamil, restoring a sense of place.',
    points: ['One-tap orientation', 'Neighbourhood-level awareness', 'Spoken in Tamil'],
  },
  {
    n: '04',
    name: 'The Navigator',
    tag: 'Turn-by-turn walking',
    color: 'ember',
    gradient: 'linear-gradient(137deg, #ff9d3c 0%, #f97316 50%, #ea580c 100%)',
    tech: 'OpenRouteService · foot-walking',
    desc: 'Genuinely careful pedestrian guidance: two-stage turns (a 20 m heads-up, then a 5 m “now”), wrong-way detection, and distance reminders paced to avoid overwhelming the user.',
    points: ['Two-stage turns: prepare, then act', 'Detects & warns on wrong direction', 'Anti-spam distance reminders'],
  },
]

export const TECH_STACK = [
  { name: 'React + Vite', why: 'Fast, modern UI that runs anywhere a browser does — no app-store install needed.', cat: 'Frontend' },
  { name: 'TensorFlow.js', why: 'Runs the obstacle-detection model on-device, so the live camera never leaves the phone.', cat: 'On-device AI' },
  { name: 'COCO-SSD', why: 'A compact, well-trained object model — 80 everyday classes, fast enough for live video.', cat: 'On-device AI' },
  { name: 'Groq (Llama-4-Scout)', why: 'Extremely fast vision inference, so the Deep Scan answers in seconds, not minutes.', cat: 'Cloud vision' },
  { name: 'OpenRouteService', why: 'Free, open pedestrian routing with proper foot-walking maneuvers.', cat: 'Navigation' },
  { name: 'OpenStreetMap Nominatim', why: 'Open geocoding — converts coordinates to human place names, no proprietary lock-in.', cat: 'Location' },
  { name: 'Web Speech API', why: 'Built-in Tamil text-to-speech — zero added cost, works offline once loaded.', cat: 'Voice' },
  { name: 'FastAPI (Python)', why: 'A thin, fast backend that brokers the Deep Scan and routing calls.', cat: 'Backend' },
]

export const PHASE2 = [
  {
    name: 'EchoPin',
    tagline: 'Peer-to-peer accessibility tagging',
    color: 'gold',
    gradient: 'linear-gradient(137deg, #ffcf6b, #e8b84b, #ff9d3c)',
    desc: 'Users drop “audio pins” on a shared map — a safe crosswalk, an ATM with a headphone jack, a broken footpath. When another Divya Drishti user walks near, the app reads that shared wisdom aloud. The community becomes the map.',    flagship: true,
  },
  {
    name: 'EchoLink',
    tagline: 'Live sighted-fallback',
    color: 'sky',
    gradient: 'linear-gradient(137deg, #7dd3fc, #38bdf8, #0ea5e9)',
    desc: 'When the AI hits its limit on a tricky scene, one tap opens a 10-second video call to a network of trusted volunteers or family — "which can is the coconut milk?" Human help, exactly when AI isn’t enough.',  },
  {
    name: 'EchoCast',
    tagline: 'Virtual pre-walk mode',
    color: 'violet',
    gradient: 'linear-gradient(137deg, #a78bfa, #7c5cff, #4b3bd6)',
    desc: 'Before leaving home, hear a sped-up 3D spatial-audio simulation of the route — turns arriving in your left or right ear. Build the mental map first; walk it with confidence later.',  },
  {
    name: 'EchoPulse',
    tagline: 'Haptic turn signals',
    color: 'ember',
    gradient: 'linear-gradient(137deg, #ff9d3c, #f97316, #ea580c)',
    desc: 'Constant audio blocks out traffic. EchoPulse moves directions to touch: two short buzzes for right, one long for left, rapid pulsing for an obstacle. Ears stay free for the world.',  },
  {
    name: 'EchoMarks',
    tagline: 'Sensory waypoints',
    color: 'aura',
    gradient: 'linear-gradient(137deg, #c4b5fd, #a78bfa, #8b5cf6)',
    desc: 'Navigation in the language of real perception: "walk until the tactile paving changes," "turn left after the bakery." Landmarks you can feel and smell — not just metres on a screen.',  },
]

export const ROADMAP = [
  {
    phase: 'Phase 1',
    name: 'EchoWalk',
    status: 'Live now',
    items: ['Four-Brain Architecture', 'Tamil-first localized voice', 'On-device obstacle detection', 'Turn-by-turn foot routing'],
  },
  {
    phase: 'Phase 2',
    name: 'Echo Ecosystem',
    status: 'Next',
    items: ['EchoPin: Peer-to-peer audio pins', 'EchoLink: Live volunteer fallback', 'EchoCast: 3D pre-walk audio', 'EchoPulse: Haptic navigation','EchoMarks'],
  }
]
