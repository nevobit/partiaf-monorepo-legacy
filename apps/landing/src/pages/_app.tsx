import '../styles/globals.css'
import '../styles/variables.css'
import type { AppProps } from 'next/app'
import { Poppins } from '@next/font/google'
import { Fragment } from 'react'

const inter = Poppins({
  weight: ['100', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>

  ) 
  
}
