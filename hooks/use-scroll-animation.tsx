"use client"

import { useEffect, useRef, useState } from "react"

export function useScrollAnimation(
  threshold = 0.15,
  rootMargin = "0px 0px -80px 0px",
) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // 🔥 solo una vez
        }
      },
      {
        threshold,
        rootMargin,
      },
    )

    const el = elementRef.current
    if (el) observer.observe(el)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return { elementRef, isVisible }
}
