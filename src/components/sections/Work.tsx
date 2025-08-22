'use client'

import styles from './Work.module.css'
import ProjectCard from '@/components/ui/ProjectCard'
import { Project } from '@/types'

const projects: Project[] = [
  {
    id: 1,
    title: 'Interactive Brand Microsite',
    category: 'Web Design',
    year: '2024',
    description: 'A storytelling microsite with scroll-driven animations and 3D accents.',
    link: '/projects/interactive-brand',
    featured: true,
  },
  {
    id: 2,
    title: 'Portfolio Experience',
    category: 'Creative Dev',
    year: '2024',
    description: 'Editorial-inspired portfolio with GSAP-driven motion and smooth scroll.',
    link: '/projects/portfolio-experience',
  },
  {
    id: 3,
    title: 'E-commerce Refresh',
    category: 'UX/UI',
    year: '2023',
    description: 'Conversion-focused redesign with refined product storytelling.',
    link: '/projects/ecommerce-refresh',
  },
]

export default function Work() {
  return (
    <section id="work" className={styles.workSection}>
      <header className={styles.workHeader}>
        <h2 className={styles.workTitle}>Selected Work</h2>
        <p className={styles.workSubtitle}>A selection of recent projects</p>
      </header>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}


