import React from 'react'
import Link from 'next/link'
import Post from "../components/Post"
import { posts } from "../actions"

const Home = () => (
  <div className="flex flex-col w-full max-w-screen-lg mx-auto mt-20">
    <div className="grid w-full lg:grid-cols-3 gap-7 md:grid-cols-2">
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </div>
  </div>
)

export default Home