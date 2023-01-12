import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Nevobit, Inc. All rights reserved.</p>
      <nav>
        <ul>
            <li><Link href="/">Terms</Link></li>
            <li><Link href="/">Privacy Policy</Link></li>
            <li className={`${styles.social} ${styles.first_social} `} ><Link href="/"><i className='bx bxl-instagram'></i></Link></li>
            <li className={styles.social} ><Link href="/"><i className='bx bxl-facebook'></i></Link></li>
            <li className={styles.social} ><Link href="/"><i className='bx bxl-linkedin'></i></Link></li>
            <li className={styles.social} ><Link href="/"><i className='bx bxl-twitter'></i></Link></li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
