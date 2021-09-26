import { Preview, LargePreview } from "../components/Preview"
import { posts } from "../actions"

import Story from '../components/Story'

const Home = () => (
  <main className="mb-32">
    <section>
      <section className="w-full max-w-screen-xl mx-auto mt-32">
        <LargePreview key={posts[0].link} post={posts[0]} />
      </section>
      <section className="w-full max-w-screen-xl mx-auto mt-20">
        <h2 className="mb-6"></h2>
        <section className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
          {posts.map((post, i) => (
            i !== 0 && <Preview key={post.link} post={post} />
          ))}
        </section>
      </section>
    </section>
    <section></section>
  </main>
)

export default Home