"use client"

import { useEffect, useRef, type ReactNode, type ElementType } from "react"

interface RevealProps {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: number
}

/**
 * Wraps children in a scroll-triggered fade/slide-in animation.
 * Uses IntersectionObserver so it costs nothing until the element
 * is actually scrolled into view, and respects prefers-reduced-motion
 * via the .reveal CSS in globals.css.
 */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
