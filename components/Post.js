import React from 'react'
import Head from 'next/head'

const Post = ({ children, meta }) => (
  <>
    <Head>
      <title>{`${meta.title} :: ${process.env.APP_TITLE}`} </title>
      <meta name="description" content={meta.description} />

      <meta name="og:title" property="og:title" content={`${meta.title} :: ${process.env.APP_SITE_NAME}`} />
      <meta name="og:description" property="og:description" content={meta.description} />

      <meta name="og:image" property="og:image" content={`${process.env.APP_URL}/${meta.coverImage}`} />
      <meta name="og:image:secure_url" property="og:image:secure_url" content={`${process.env.APP_URL}/${meta.coverImage}`} />

    </Head>
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-24">
      {children}
    </div>
  </>
)

export default Post