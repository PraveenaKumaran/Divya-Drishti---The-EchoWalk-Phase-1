import React, { useMemo } from 'react'

/**
 * Starfield — pure-CSS twinkling stars for cosmic atmosphere.
 * Lightweight (no canvas/WebGL) so it can layer behind every section.
 */
export default function Starfield({ count = 60, className = '' }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 2 + 1}px`,
        dur: `${Math.random() * 4 + 2.5}s`,
        delay: `${Math.random() * 4}s`,
      })),
    [count]
  )

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--dur': s.dur,
            '--delay': s.delay,
          }}
        />
      ))}
    </div>
  )
}
