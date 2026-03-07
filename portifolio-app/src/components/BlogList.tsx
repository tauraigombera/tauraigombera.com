import { useEffect, useState } from "react"
import BlogCard from "./BlogCard"
import { BlogMeta, BlogPost } from "../types/blog"
import { parseFrontmatter } from "../utils/parseFrontmatter"

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    const files = import.meta.glob("/src/blogs/*.md", {
      query: "?raw",
      import: "default",
    })

    async function loadPosts() {
      const loadedPosts: BlogPost[] = []

      for (const path in files) {
        const resolver = files[path] as () => Promise<string>
        const fileContent = await resolver()

        const { data } = parseFrontmatter<BlogMeta>(fileContent)
        console.log(data.date)

        loadedPosts.push({
          ...data,
          slug: path.split("/").pop()!.replace(".md", ""),
        })
      }

      loadedPosts.sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )

      setPosts(loadedPosts)
    }

    loadPosts()
  }, [])

  return (
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
  )
}