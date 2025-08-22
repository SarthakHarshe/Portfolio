'use client'

import { useRef } from 'react'
import { useGSAP } from '@/lib/gsap'
import gsap from 'gsap'
import Link from 'next/link'
import { Project } from '@/types'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const card = cardRef.current
    if (!card) return

    gsap.fromTo(
      card,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 90%',
          once: true,
        },
      }
    )

    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(titleRef.current, {
        letterSpacing: '0em',
        duration: 0.3,
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
      gsap.to(titleRef.current, {
        letterSpacing: '-0.02em',
        duration: 0.3,
      })
    })

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(card, {
        x: x * 0.1,
        y: y * 0.1,
        rotation: x * 0.02,
        duration: 0.5,
        ease: 'power2.out',
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    })
  }, [index])

  return (
    <article ref={cardRef} className={styles.projectCard}>
      <Link href={project.link} className={styles.projectLink}>
        <div className={styles.projectIndex}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className={styles.projectMeta}>
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <h3 ref={titleRef} className={styles.projectTitle}>
          {project.title}
        </h3>
        <p className={styles.projectDescription}>{project.description}</p>
        <div className={styles.projectSpecs}>
          <div className={styles.specItem}>
            <strong>Stack:</strong> React, Three.js, GSAP
          </div>
          <div className={styles.specItem}>
            <strong>Awards:</strong> Awwwards SOTD
          </div>
        </div>
      </Link>
    </article>
  )
}


