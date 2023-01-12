import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styles from './Header.module.css'
import useTranslation from 'next-translate/useTranslation'

const Header = () => {
  const {t} = useTranslation();

  const {push, pathname, locales, asPath} = useRouter();

  const changeLanguage = (e: any) => {
    const locale = e.target.value;
    push(pathname, asPath, {locale});
  }
  return (
    <header className={styles.header}>
      <Link href="/"><Image src="/logo.svg" width={160} height={55} alt="Logo nevobit" /></Link>
      <nav>
        <ul>
           
            <li><Link href="/">{t('common:services')}</Link></li>
            <li><Link href="/">{t('common:solutions')}</Link></li>
            <li><Link href="/">{t('common:work')}</Link></li>
            <li><Link href="/">{t('common:methodology')}</Link></li>
            <li><Link href="/">{t('common:about')}</Link></li>
            <li><Link href="/">BLOG</Link></li>
            <li className={styles.language_container}>
              <select onChange={changeLanguage} className={styles.language}>
                {locales?.map((locale) => (
                <option key={locale} value={locale} >{locale}</option>
                ))}
              </select>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
