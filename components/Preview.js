import Link from 'next/link'

const Preview = ({ post }) => (
  <Link href={post.link}>
    <a href={post.link} className="flex flex-col my-2 cursor-pointer no-underline">
      <h4 className="mb-2 text-2xl sm:truncate">{post.module.meta.title}</h4>
      <div className="previewImage">
        <img src={post.module.meta.coverImage} alt="preview image" />
      </div>
      <span className="my-2 text-gray-900 dark:text-white">{post.module.meta.description}</span>
      <span className="text-sm text-gray-500 dark:text-gray-200">{post.module.meta.date}</span>
    </a>
  </Link>
)

export default Preview