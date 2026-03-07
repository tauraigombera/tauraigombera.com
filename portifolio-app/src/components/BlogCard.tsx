import { Link } from "react-router-dom"
import { BlogPost } from "../types/blog"
import { dateFormatter } from "../utils/dateFormatter"
import { Calendar } from "lucide-react"

interface Props {
  post: BlogPost
}

function BlogCard({ post }: Props) {
  return (
    <div className="flex gap-4 sm:gap-6 group py-3">
      <Link to={`/posts/${post.slug}`} className="hidden sm:block">
        <div className="w-40 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 cursor-pointer">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
          />
        </div>
      </Link>

      <div className="flex flex-col justify-between">
        <div>
          <Link to={`/posts/${post.slug}`}>
            <h2 className="text-lg sm:text-xl font-semibold text-theme hover:underline cursor-pointer">
              {post.title}
            </h2>
          </Link>

          <div className="flex items-center text-xs sm:text-sm text-gray-500 mt-2 space-x-2 italic">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{dateFormatter(post.date)}</span>
            </div>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          <p className="mt-2 sm:mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
            {post.excerpt}
          </p>
        </div>
      </div>

    </div>
  )
}

export default BlogCard