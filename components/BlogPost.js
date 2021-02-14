import React from 'react'
import Head from 'next/head'

export default function BlogPost({ children, meta}) {
  return (
    <>
      <Head>
        <title>{`${meta.title} :: ${process.env.APP_TITLE}`} </title>
        <meta name="Description" content={meta.description} />

        <meta property="og:title" content={`${meta.title} :: ${process.env.APP_SITE_NAME}`} />
        <meta property="og:description" content={meta.description} />

        <meta property="og:image" content={`${process.env.APP_URL}/${meta.coverImage}`} />
        <meta property="og:image:secure_url" content={`${process.env.APP_URL}/${meta.coverImage}`} />

        <meta property="og:image:width" content="256" /> 
        <meta property="og:image:height" content="256" />

      </Head>
        <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-20">
        {children}
      </div>
    </>
  )
}