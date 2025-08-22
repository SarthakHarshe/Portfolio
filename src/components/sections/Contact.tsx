'use client'

import styles from './Contact.module.css'

const links = [
  { label: 'Email', href: 'mailto:you@example.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-profile' },
  { label: 'GitHub', href: 'https://github.com/your-username' },
]

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Let’s collaborate</h2>
      <p className={styles.contactSubtitle}>Open for freelance and full-time opportunities</p>
      <div className={styles.linkGrid}>
        {links.map((l) => (
          <a key={l.href} className={styles.linkItem} href={l.href} target="_blank" rel="noreferrer">
            {l.label}
          </a>
        ))}
      </div>
    </section>
  )
}


