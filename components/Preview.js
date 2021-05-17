import Link from 'next/link'

export const Preview = ({ post }) => (
  <Link href={post.link}>
    <a href={post.link} className="flex flex-col my-2 cursor-pointer no-underline">
      <div className="previewImage">
        <img src={post.module.meta.coverImage} className="rounded" alt="preview image" />
      </div>
      <h4 className="mt-4 text-2xl sm:truncate">{post.module.meta.title}</h4>
      <span className="my-3 text-gray-900 dark:text-white">{post.module.meta.description}</span>
      <span className="text-sm text-gray-500 dark:text-gray-200">{post.module.meta.date}</span>
    </a>
  </Link>
)

export const LargePreview = ({ post }) => (
  <Link href={post.link}>
    <a href={post.link} className="flex flex-col md:grid md:grid-cols-2 md:gap-20 my-2 cursor-pointer no-underline">
      <div className="previewImageLarge w-full">
        <img src={post.module.meta.coverImage} className="rounded" alt="preview image" />
      </div>
      <div className="flex flex-col w-full md:justify-center">
        <h4 className="mt-4 text-2xl md:text-3xl sm:truncate">{post.module.meta.title}</h4>
        <span className="my-3 text-gray-900 dark:text-gray-200">{post.module.meta.description}</span>
        <span className="text-sm text-gray-500 dark:text-gray-200">{post.module.meta.date}</span>
      </div>
    </a>
  </Link>
)
