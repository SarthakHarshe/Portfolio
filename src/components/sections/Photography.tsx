'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@/lib/gsap'
import gsap from 'gsap'
import { PhotoItem } from '@/types'
import styles from './Photography.module.css'

const photoData: PhotoItem[] = [
  { id: 1, title: 'Brutalist Dreams', category: 'architecture', year: '2024', size: 'large' },
  { id: 2, title: 'Human Stories', category: 'portrait', year: '2024', size: 'medium' },
  { id: 3, title: 'Form Studies', category: 'abstract', year: '2024', size: 'small' },
]

export default function Photography() {
  const containerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [filter, setFilter] = useState<string>('all')
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  useGSAP(() => {
    const grid = gridRef.current
    if (!grid) return

    grid.addEventListener('mouseenter', () => {
      gsap.to(grid, { animationPlayState: 'paused' })
    })

    grid.addEventListener('mouseleave', () => {
      gsap.to(grid, { animationPlayState: 'running' })
    })
  }, [])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 2
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleFilter = (category: string) => {
    setFilter(category)

    const items = document.querySelectorAll('.photo-item')
    items.forEach((item) => {
      const itemCategory = item.getAttribute('data-category')
      if (category === 'all' || itemCategory === category) {
        gsap.to(item, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'power3.out',
        })
      } else {
        gsap.to(item, {
          opacity: 0.3,
          scale: 0.9,
          duration: 0.6,
          ease: 'power3.out',
        })
      }
    })
  }

  return (
    <section className={styles.photographySection} id="photography">
      <div className={styles.photographyHeader}>
        <h2 className={styles.photographyTitle}>Photography</h2>
        <p className={styles.photographySubtitle}>Visual narratives captured through lens</p>
      </div>

      <div className={styles.photoFilters}>
        {['all', 'architecture', 'portrait', 'abstract', 'nature'].map((cat) => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
            onClick={() => handleFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div
        ref={containerRef}
        className={`${styles.infiniteGridContainer} ${isDragging ? styles.grabbing : ''}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div ref={gridRef} className={styles.infiniteGrid}>
          {[0, 1, 2, 3, 4].map((columnIndex) => (
            <div key={columnIndex} className={styles.photoColumn}>
              {photoData
                .filter((_, index) => index % 5 === columnIndex)
                .map((photo) => (
                  <div
                    key={photo.id}
                    className={`photo-item ${styles.photoItem} ${styles[photo.size]}`}
                    data-category={photo.category}
                  >
                    <div className={styles.photoContent}>
                      <div className={styles.photoNumber}>{String(photo.id).padStart(2, '0')}</div>
                      <div className={styles.photoOverlay}>
                        <h3 className={styles.photoTitle}>{photo.title}</h3>
                        <p className={styles.photoMeta}>
                          {photo.category} • {photo.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}

          {[0, 1, 2, 3, 4].map((columnIndex) => (
            <div key={`dup-${columnIndex}`} className={styles.photoColumn}>
              {photoData
                .filter((_, index) => index % 5 === columnIndex)
                .map((photo) => (
                  <div
                    key={`dup-${photo.id}`}
                    className={`photo-item ${styles.photoItem} ${styles[photo.size]}`}
                    data-category={photo.category}
                  >
                    <div className={styles.photoContent}>
                      <div className={styles.photoNumber}>{String(photo.id).padStart(2, '0')}</div>
                      <div className={styles.photoOverlay}>
                        <h3 className={styles.photoTitle}>{photo.title}</h3>
                        <p className={styles.photoMeta}>
                          {photo.category} • {photo.year}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


