import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * DivineAura — a Three.js particle field that forms a soft, glowing aura.
 * Particles drift gently and lean toward the cursor, creating a "divine energy
 * follows your hand" effect. This is the ONE place we use real Three.js; the
 * rest of the site uses CSS/GSAP to stay light. Honors prefers-reduced-motion.
 */
export default function DivineAura() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 60

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // ── Particle geometry ──────────────────────────────────────
    const COUNT = reduced ? 400 : 1100
    const positions = new Float32Array(COUNT * 3)
    const basePositions = new Float32Array(COUNT * 3)
    const colorArr = new Float32Array(COUNT * 3)

    const gold = new THREE.Color('#e8b84b')
    const violet = new THREE.Color('#7c5cff')
    const aura = new THREE.Color('#a78bfa')

    for (let i = 0; i < COUNT; i++) {
      // distribute in a soft sphere / disc
      const r = 18 + Math.random() * 34
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.6
      const z = r * Math.cos(phi) * 0.5
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      basePositions[i * 3] = x
      basePositions[i * 3 + 1] = y
      basePositions[i * 3 + 2] = z

      const mix = Math.random()
      const c = mix < 0.5 ? gold.clone().lerp(aura, mix * 2) : violet.clone().lerp(aura, (mix - 0.5) * 2)
      colorArr[i * 3] = c.r
      colorArr[i * 3 + 1] = c.g
      colorArr[i * 3 + 2] = c.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colorArr, 3))

    // soft round sprite texture
    const sprite = makeGlowTexture()
    const material = new THREE.PointsMaterial({
      size: 1.4,
      map: sprite,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // ── Pointer tracking ───────────────────────────────────────
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    const onMove = (e) => {
      const rect = mount.getBoundingClientRect()
      mouse.tx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      mouse.ty = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    }
    window.addEventListener('pointermove', onMove)

    // ── Animation loop ─────────────────────────────────────────
    let raf
    const clock = new THREE.Clock()
    const animate = () => {
      raf = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      mouse.x += (mouse.tx - mouse.x) * 0.04
      mouse.y += (mouse.ty - mouse.y) * 0.04

      const pos = geometry.attributes.position.array
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3
        const bx = basePositions[ix]
        const by = basePositions[ix + 1]
        const bz = basePositions[ix + 2]
        // gentle drift
        const drift = Math.sin(t * 0.5 + i * 0.05) * 1.2
        pos[ix] = bx + mouse.x * 6 + drift * 0.3
        pos[ix + 1] = by + mouse.y * 6 + Math.cos(t * 0.4 + i * 0.07) * 0.8
        pos[ix + 2] = bz + drift
      }
      geometry.attributes.position.needsUpdate = true

      points.rotation.y = t * 0.03 + mouse.x * 0.2
      points.rotation.x = mouse.y * 0.15

      renderer.render(scene, camera)
    }
    animate()

    // ── Resize ─────────────────────────────────────────────────
    const onResize = () => {
      if (!mount) return
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      sprite.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden="true" />
}

// Soft radial glow sprite for each particle
function makeGlowTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  g.addColorStop(0, 'rgba(255,255,255,1)')
  g.addColorStop(0.25, 'rgba(255,240,210,0.8)')
  g.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  const tex = new THREE.CanvasTexture(canvas)
  return tex
}
