'use client'

import { useRef, ReactNode } from 'react'
import { useGSAP } from '@/lib/gsap'
import gsap from 'gsap'

interface RevealAnimationProps {
  children: ReactNode
  delay?: number
  duration?: number
  y?: number
  scale?: boolean
}

export default function RevealAnimation({
  children,
  delay = 0,
  duration = 1,
  y = 60,
  scale = false,
}: RevealAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!elementRef.current) return

    const animation = scale
      ? { opacity: 0, scale: 0.8 }
      : { opacity: 0, y }

    gsap.fromTo(
      elementRef.current,
      animation,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 85%',
          once: true,
        },
      }
    )
  }, [])

  return <div ref={elementRef}>{children}</div>
}


