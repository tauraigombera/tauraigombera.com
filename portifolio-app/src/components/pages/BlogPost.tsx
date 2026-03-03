import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { BlogMeta } from "../../types/blog"
import { parseFrontmatter } from "../../utils/parseFrontmatter"
import Header from "../Header"
import Footer from "../Footer"

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string>("")
  const [meta, setMeta] = useState<BlogMeta | null>(null)

  useEffect(() => {
    const files = import.meta.glob("/src/blogs/*.md", {
      query: "?raw",
      import: "default",
    })

    async function loadPost() {
      if (!slug) return

      const match = Object.entries(files).find(([path]) =>
        path.endsWith(`${slug}.md`)
      )

      if (!match) return

      const resolver = match[1] as () => Promise<string>
      const fileContent = await resolver()

      const { data, content } =
        parseFrontmatter<BlogMeta>(fileContent)

      setMeta(data)
      setContent(content)
    }

    loadPost()
  }, [slug])

  if (!meta) return <div className="p-10">Loading...</div>

  return (
    <>
      <Header />
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold">{meta.title}</h1>

          <div className="text-gray-500 mt-2 mb-8">
            {meta.date} • {meta.readTime}
          </div>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      <Footer />
    </>
  )
}