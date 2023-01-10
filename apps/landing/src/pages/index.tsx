import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Layout } from '@/components'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

export default function Home() {

  const {t} = useTranslation();
   const {locale, locales, defaultLocale} = useRouter();

  return (
    <Layout title={t("common:home")} description={t("common:banner-description")} >
    </Layout>
  )
}
