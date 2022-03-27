import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { usePanelbear } from '@panelbear/panelbear-nextjs';
import { useRouter } from 'next/router'

import '../globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const App = (props) => {
  const [theme, setTheme] = useState('light')

  const router = useRouter()
  const excludeHeader = ['/CV', '/intro-mobile', '/Test', '/intro', '/outro', '/poxel', '/scene']
  const excludeFooter = ['/CV', '/intro-mobile', '/Test', '/intro', '/outro', '/poxel', '/scene']

  usePanelbear('ENQ1HaV0pgl');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
      document.body.classList.add("bg-bodyDark")
    } else {
      setTheme('light')
      document.documentElement.classList.remove('dark')
      document.body.classList.remove("bg-bodyDark")
    }
  }, [])

  const handleTheme = (item) => {
    localStorage.theme = item
    setTheme(item)
    if (item === 'dark') {
      document.documentElement.classList.add('dark')
      document.body.classList.add("bg-bodyDark")
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove("bg-bodyDark")
    }
  }

  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="ie=edge" httpEquiv="x-ua-compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        <meta name="og:image" property="og:image" content={process.env.APP_IMAGE} />
        <meta name="og:image:secure_url" property="og:image:secure_url" content={process.env.APP_IMAGE} />

        <title>{process.env.APP_TITLE}</title>
      </Head>
      <div className="flex flex-col justify-between min-h-screen text-gray-700 dark:text-gray-50">
        {!excludeHeader.includes(router.pathname) && <Header theme={theme} handleTheme={handleTheme} />}
        <Component {...pageProps} />
        {!excludeFooter.includes(router.pathname) && <Footer />}
      </div>
    </>
  )
}

export default App