'use client'

import { useState } from 'react'
import { useGSAP } from '@/lib/gsap'
import gsap from 'gsap'
import styles from './Loader.module.css'

export default function Loader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setLoading(false)
        document.body.style.overflow = 'auto'
      },
    })

    tl.to({}, {
      duration: 2,
      onUpdate: function () {
        setProgress(Math.floor(this.progress() * 100))
      },
    })

    document.body.style.overflow = 'hidden'
  }, [])

  if (!loading) return null

  return (
    <div className={styles.loader}>
      <div className={styles.loaderContent}>
        <div className={styles.loaderNumber}>{progress}</div>
        <div className={styles.loaderText}>Loading Experience</div>
      </div>
    </div>
  )
}


