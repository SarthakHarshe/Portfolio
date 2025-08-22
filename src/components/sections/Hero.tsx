'use client'

import { useRef } from 'react'
import { useGSAP } from '@/lib/gsap'
import gsap from 'gsap'
import styles from './Hero.module.css'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to('.title-line span', {
      y: 0,
      rotateX: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: 'power3.out',
    })
      .to(
        '.hero-subtitle',
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .to(
        '.floating-el',
        {
          opacity: 0.1,
          duration: 1,
          stagger: 0.2,
        },
        '-=0.5'
      )

    gsap.to('.title-line.serif span', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      x: -100,
      rotateY: 20,
      opacity: 0.5,
    })

    gsap.to('.title-line.sans span', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      x: 100,
      rotateY: -20,
      opacity: 0.5,
    })
  }, [])

  return (
    <section ref={containerRef} className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.heroGradient} />
      </div>

      <div className={styles.floatingElements}>
        <div className="floating-el">
          <div className={styles.floatingElInner} />
        </div>
        <div className="floating-el">
          <div className={styles.floatingElInner} />
        </div>
        <div className="floating-el">
          <div className={styles.floatingElInner} />
        </div>
      </div>

      <div className={styles.heroContent}>
        <h1 ref={titleRef} className={styles.heroTitle}>
          <div className="title-line serif">
            <span>Creative</span>
          </div>
          <div className="title-line sans">
            <span>Designer</span>
          </div>
        </h1>
        <p className="hero-subtitle">
          Digital Experiences × Brand Identity × Creative Technology
        </p>
      </div>
    </section>
  )
}


