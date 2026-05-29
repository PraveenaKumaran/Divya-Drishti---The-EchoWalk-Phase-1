import React from 'react'
import { cn } from '../lib/utils'

/**
 * GlassButton — premium liquid-glass CTA.
 * Simplified, self-contained adaptation of the Apple-Tahoe liquid-glass button
 * (no external SVG displacement maps / shadcn deps — uses layered shadows).
 */
export default function GlassButton({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary' | 'ghost'
  className = '',
  ...props
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 active:scale-[0.97] select-none'

  const styles =
    variant === 'primary'
      ? 'px-7 py-3.5 text-[15px] text-void bg-gradient-to-r from-gold via-amber to-gold bg-[length:200%_auto] hover:bg-[position:right_center] shadow-[0_8px_30px_-6px_rgba(232,184,75,0.5)] hover:scale-[1.03]'
      : 'px-7 py-3.5 text-[15px] text-starlight liquid-glass-strong hover:scale-[1.03]'

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cn(base, styles, className)} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button onClick={onClick} className={cn(base, styles, className)} {...props}>
      {content}
    </button>
  )
}
