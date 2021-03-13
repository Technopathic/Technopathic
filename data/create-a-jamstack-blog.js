export const data = [
  `const withMDX = require("@next/mdx")({
  extension: /\\.mdx?$/
})

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx"]
})
`,
  `import Link from 'next/link'

const Header = () => (
  <header>
    <section>
      <Link href="/">
        <a>Blog Name</a>
      </Link>
      <section>
        <a target="_blank" href="#">NavLink</a>
      </section>
    </section>
  </header>
)

export default Header
`,
  `import React from 'react'
import '../styles/globals.css'

import Header from '../components/Header'

const App = (props) => {

  const { Component, pageProps } = props
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default App
`,
  `<header className="h-16 w-full flex justify-center fixed top-0 left-0 right-0 z-50 bg-white">
  ...
</header>`,
  `<header className="...">
  <section className="w-full max-w-screen-lg flex justify-between items-center mx-4">
      ... 
  </section>
</header>`,
  `<Link href="/">
  <a className="text-2xl">Blog Name</a>
</Link>`,
  `<section className="flex items-center">
  <a target="_blank" href="#">NavLink</a>
</section>`,
  `<section className="flex items-center">
  <a target="_blank" href="#" className="mx-2 hover:opacity-70">NavLink</a>
</section>`,
  `import Link from 'next/link'

const Header = ( props ) => {

    return(
        <header 
            className="h-16 w-full flex justify-center fixed top-0 left-0 right-0 z-50 bg-white"
        >
            <section className="w-full max-w-screen-lg flex justify-between items-center mx-4">
                <Link href="/">
                    <a className="text-2xl">Blog Name</a>
                </Link>
                <section className="flex items-center">
                    <a target="_blank" href="#" className="mx-2 hover:opacity-70">NavLink</a>
                </section>    
            </section>
        </header>
    )
}

export default Header`,
  `import Link from 'next/link'

const Preview = () => (
  <Link href="#">
    <a>
      <h4></h4>
      <img src="" />
      <span></span>  
      <span></span>
    </a>
  </Link>
)

export default Preview`,
  `<a className="flex flex-col my-2 p-4">
...
</a>`,
  `<h4 className="mb-2 text-2xl"></h4>
<img className="w-full" src="#" />
<span className="my-4"></span>  
<span className="text-gray-500"></span>`,
  `const Preview = ({ post }) => (
  ...
)`,
  `<Link href={'/blog' + post.link}>
...
</Link>`,
  `<h4 className="mb-2 text-2xl">
  {post.module.meta.title}
</h4>
<img className="w-full" src={post.module.meta.coverImage} />
<span className="my-4">
  {post.module.meta.description}
</span>  
<span className="text-gray-500">
  {post.module.meta.date}
</span>`,
  `import Link from 'next/link'

const Preview = ({ post }) => (
  <Link href={'/blog' + post.link}>
    <a className="flex flex-col my-2 p-4">
      <h4 className="mb-2 text-2xl">{post.module.meta.title}</h4>
      <img className="w-full" src={post.module.meta.coverImage} />
      <span className="my-4">{post.module.meta.description}</span>  
      <span className="text-gray-500">{post.module.meta.date}</span>
    </a>
  </Link>
)

export default Preview`,
  `import React from 'react'
import Head from 'next/head'

const Post = () => (
  <>
    <Head>
      <title></title>
      <meta name="Description" content="" />

      <meta property="og:title" content="" />
      <meta property="og:description" content="" />

      <meta property="og:image" content="" />
      <meta property="og:image:secure_url" content="" />

      <meta property="og:image:width" content="256" />
      <meta property="og:image:height" content="256" />
    </Head>
    
    <div></div>
  </>
)

export default Post`,
  `<Head>
...
</Head>
<div className="flex flex-col w-full max-w-screen-lg mx-auto mt-20"></div>`,
  `const Post = ({ children, meta }) => (
  ...
)`,
  `<Head>
  <title>{meta.title}</title>
  <meta name="Description" content={meta.description} />

  <meta property="og:title" content={meta.title} />
  <meta property="og:description" content={meta.description} />

  <meta property="og:image" content={"http://yoursite.com/" + meta.coverImage} />
  <meta property="og:image:secure_url" content={"http://yoursite.com/" + meta.coverImage} />

  <meta property="og:image:width" content="256" /> 
  <meta property="og:image:height" content="256" />
</Head>`,
  `<div className="flex flex-col w-full max-w-screen-lg mx-auto mt-20">
  {children}
</div>`,
  `import React from 'react'
import Head from 'next/head'

const Post = ({ children, meta }) => (
  <>
    <Head>
      <title>{meta.title}</title>
      <meta name="Description" content={meta.description} />

      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />

      <meta property="og:image" content={"http://yoursite.com/" + meta.coverImage} />
      <meta property="og:image:secure_url" content={"http://yoursite.com/" + meta.coverImage} />

      <meta property="og:image:width" content="256" /> 
      <meta property="og:image:height" content="256" />
    </Head>
    <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-20">
      {children}
    </div>
  </>
)

export default Post`,
  `import Post from "../../components/Post"

export const meta = {
  title: "First Post",
  description: "Welcome to the first post of our new blog!",
  date: "February 21, 2021",
  coverImage: "/images/first-post/cover-image.png"
}

export default ({ children }) => <Post meta={meta}>{children}</Post>`,
  `# First post!

Welcome to my first post! I hope you enjoy this post on this blog. I followed a guide written by NowNano to create this blog. 

## How I built this

This blog is built with amazing technologies. I definitely will continue to learn and strive for greatness as I master these and exciting new things.`,
  `import Post from "../../components/Post"

export const meta = {
  title: "First Post",
  description: "Welcome to the first post of our new blog!",
  date: "February 21, 2021",
  coverImage: "/images/first-post/cover-image.png"
}

export default ({ children }) => <Post meta={meta}>{children}</Post>

# First post!

Welcome to my first post! I hope you enjoy this post on this blog. I followed a guide written by NowNano to create this blog. 

## How I built this

This blog is built with amazing technologies. I definitely will continue to learn and strive for greatness as I master these and exciting new things.`,
  `function getPosts(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/\\.mdx$/, ""),
    module: r(fileName)
  }))
}`,
  `export const posts = getPosts(
  require.context("./pages/blog/", false, /\\.mdx$/)
)`,
  `function getPosts(r) {
    return r.keys().map((fileName) => ({
        link: fileName.substr(1).replace(/\\.mdx$/, ""),
        module: r(fileName)
    }))
}
  
export const posts = getPosts(
    require.context("./pages/blog/", false, /\\.mdx$/)
)`,
  `const Home = () => (
  <main>
  </main>
)

export default Home`,
  `<main className="w-full max-w-screen-lg grid lg:grid-cols-3 gap-7 md:grid-cols-2 mx-auto mt-20">
</main>`,
  `import Preview from "../components/Preview"
import { posts } from "../actions"`,
  `<main className="...">
  {posts.map((post) => (
    <Preview key={post.link} post={post} />
  ))}
</main>`,
  `import Preview from "../components/Preview"
import { posts } from "../actions"

const Home = () => (
    <main className="w-full max-w-screen-lg grid lg:grid-cols-3 gap-7 md:grid-cols-2 mx-auto mt-20">
      {posts.map((post) => (
        <Preview key={post.link} post={post} />
      ))}
    </main>
)

export default Home`,
  `h1 {
  font-size: 48px;
  font-weight: bold;
}

h2 {
  font-size: 32px;
  font-weight: bold;
}

p {
  font-size: 18px;
  line-height: 1.5;
  margin: 8px 0px;
}
`,
  `git init 
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/username/my-blog.git
git push -u origin main`
]