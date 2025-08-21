'use client'

import { useEffect, useRef } from 'react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animateCursor = () => {
      const dx = mouseX - cursorX
      const dy = mouseY - cursorY

      cursorX += dx * 0.15
      cursorY += dy * 0.15

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`

      requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', handleMouseMove)
    animateCursor()

    const interactiveElements = document.querySelectorAll('a, button, [data-cursor="hover"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => cursor.classList.add(styles.hover))
      el.addEventListener('mouseleave', () => cursor.classList.remove(styles.hover))
    })

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div ref={cursorRef} className={styles.cursor}>
      <div ref={cursorDotRef} className={styles.cursorDot} />
    </div>
  )
}


