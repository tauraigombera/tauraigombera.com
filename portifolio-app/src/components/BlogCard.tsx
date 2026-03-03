import { Link } from "react-router-dom"
import { BlogPost } from "../types/blog"

interface Props {
  post: BlogPost
}

function BlogCard({ post }: Props) {
  return (
    <Link to={`/posts/${post.slug}`}>
      <div className="flex gap-6 group cursor-pointer">
        {/* Thumbnail */}
        <div className="w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-semibold text-blue-600 group-hover:underline">
              {post.title}
            </h2>

            <div className="flex items-center text-sm text-gray-500 mt-2 space-x-2">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <p className="mt-3 text-gray-600 leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogCard