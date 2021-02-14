import React from 'react'
import Head from 'next/head'

import '../globals.css'

import Header from '../components/Header'
import Footer from '../components/Footer'

const App = (props) => {

  const { Component, pageProps } = props
  return (
    <>
      <Head>
          <title>{process.env.APP_TITLE}</title>
          <meta name="Description" content={process.env.APP_DESCRIPTION} />

          <link rel="apple-touch-icon" sizes="180x180" href={process.env.APP_APPLE_TOUCH_ICON} />
          <link rel="icon" type="image/png" sizes="16x16" href={process.env.APP_FAVICON_16x16} />
          <link rel="icon" type="image/png" sizes="32x32" href={process.env.APP_FAVICON_32x32} />

          <meta property="og:title" content={process.env.APP_TITLE} />
          <meta property="og:site_name" content={process.env.APP_SITE_NAME} />
          <meta property="og:locale" content={process.env.APP_LOCALE} />
          <meta property="og:type" content={process.env.APP_TYPE} />
          <meta property="og:description" content={process.env.APP_DESCRIPTION} />
          <meta property="og:url" content={process.env.APP_URL} />
          <meta property="og:image" content={process.env.APP_IMAGE} />
          <meta property="og:image:secure_url" content={process.env.APP_IMAGE} />
          <meta property="og:image:type" content={process.env.APP_IMAGE_TYPE} /> 
          <meta property="og:image:width" content={process.env.APP_IMAGE_WIDTH} /> 
          <meta property="og:image:height" content={process.env.APP_IMAGE_HEIGHT} />
        </Head>
        <div className="flex flex-col justify-between min-h-screen mx-4">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
    </>
  )
}

export default App