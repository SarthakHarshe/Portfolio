'use client'

import styles from './SkillCard.module.css'

interface SkillCardProps {
  name: string
  description: string
}

export default function SkillCard({ name, description }: SkillCardProps) {
  return (
    <div className={styles.skillCard}>
      <h4 className={styles.skillName}>{name}</h4>
      <p className={styles.skillDescription}>{description}</p>
    </div>
  )
}


