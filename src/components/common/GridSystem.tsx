'use client'

import styles from './GridSystem.module.css'

export default function GridSystem() {
  const columns = Array.from({ length: 12 })
  return (
    <div className={styles.gridOverlay} aria-hidden>
      {columns.map((_, i) => (
        <div key={i} className={styles.gridColumn} />
      ))}
    </div>
  )
}


