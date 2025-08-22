'use client'

import styles from './About.module.css'
import SkillCard from '@/components/ui/SkillCard'

const skills = [
  { name: 'Creative Development', description: 'GSAP, WebGL, interactive storytelling' },
  { name: 'UI/UX', description: 'Editorial layouts, design systems, accessibility' },
  { name: 'Performance', description: 'Smooth scroll, lazy loading, bundle optimization' },
]

export default function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutHeader}>
        <h2 className={styles.aboutTitle}>About</h2>
        <p className={styles.aboutSubtitle}>Designer & creative developer</p>
      </div>
      <div className={styles.aboutBody}>
        <p className={styles.aboutIntro}>
          I craft editorial-inspired digital experiences focusing on motion, clarity, and feel.
        </p>
        <div className={styles.skillsGrid}>
          {skills.map((s) => (
            <SkillCard key={s.name} name={s.name} description={s.description} />
          ))}
        </div>
      </div>
    </section>
  )
}


