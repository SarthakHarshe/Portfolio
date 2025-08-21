'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navigation.module.css'

const navItems = [
  { href: '#work', label: 'Work' },
  { href: '#photography', label: 'Photography' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`${styles.navContainer} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <div className={styles.logoMark} />
        <div className={styles.logoText}>Portfolio™</div>
      </div>
      <nav className={styles.nav}>
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.navItem}
            data-index={String(index + 1).padStart(2, '0')}
          >
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}


