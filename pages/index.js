import Preview from "../components/Preview"
import { posts } from "../actions"

const Home = () => (
  <main className="w-full max-w-screen-lg grid md:grid-cols-2 gap-10 mx-auto mt-20">
    {posts.map((post) => (
      <Preview key={post.link} post={post} />
    ))}
  </main>
)

export default Home