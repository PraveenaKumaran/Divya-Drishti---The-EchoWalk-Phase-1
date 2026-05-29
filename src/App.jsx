import React from 'react'
import Navbar from './components/Navbar'
import FloatingActionMenu from './components/FloatingActionMenu'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import FourBrains from './sections/FourBrains'
import Architecture from './sections/Architecture'
import Demo from './sections/Demo'
import TechStack from './sections/TechStack'
import Privacy from './sections/Privacy'
import Phase2 from './sections/Phase2'
import Roadmap from './sections/Roadmap'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="relative bg-void text-starlight selection:bg-gold/30 selection:text-white">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Problem />
        <FourBrains />
        <Architecture />
        <Demo />
        <TechStack />
        <Privacy />
        <Phase2 />
        <Roadmap />
      </main>
      <Footer />
      <FloatingActionMenu />
    </div>
  )
}