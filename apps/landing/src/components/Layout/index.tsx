import { NextPage } from 'next'
import React from 'react'
import SEO from '../Seo'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: React.ReactNode,
    title: string,
    description?: string
}

const Layout: NextPage<Props> = ({children, title, description}: Props) => {
  return (
    <>
        <SEO title={title} description={description} />
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}

export default Layout
