import { useParams, Link } from "react-router-dom"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { BlogMeta } from "../../types/blog"
import { parseFrontmatter } from "../../utils/parseFrontmatter"
import Header from "../Header"
import Footer from "../Footer"
import { dateFormatter } from "../../utils/dateFormatter"
import { Calendar, ChevronUp } from "lucide-react"

type BlogEntry = { slug: string; meta: BlogMeta }

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const [content, setContent] = useState<string>("")
  const [meta, setMeta] = useState<BlogMeta | null>(null)
  const [allPosts, setAllPosts] = useState<BlogEntry[]>([])

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
      const { data, content } = parseFrontmatter<BlogMeta>(fileContent)
      setMeta(data)
      setContent(content)
    }

    async function loadAllPosts() {
      const entries: BlogEntry[] = []
      for (const [path, resolver] of Object.entries(files)) {
        const fileContent = await (resolver as () => Promise<string>)()
        const { data } = parseFrontmatter<BlogMeta>(fileContent)
        const postSlug = path.split("/").pop()?.replace(".md", "") ?? ""
        entries.push({ slug: postSlug, meta: data })
      }
      entries.sort(
        (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
      )
      setAllPosts(entries)
    }

    loadPost()
    loadAllPosts()
  }, [slug])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const pageUrl = encodeURIComponent(window.location.href)
  const pageTitle = encodeURIComponent(meta?.title ?? "")

  const shareLinks = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Bluesky",
      href: `https://bsky.app/intent/compose?text=${pageTitle}%20${pageUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${pageTitle}%20${pageUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
  ]

  if (!meta) return <div className="p-10">Loading...</div>

  const otherPosts = allPosts.filter((p) => p.slug !== slug)

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-theme">{meta.title}</h1>

        <div className="text-gray-500 mt-2 mb-8 flex items-center italic text-sm space-x-1">
          <Calendar size={16} />
          <span>{dateFormatter(meta.date)}</span>
          <span>•</span>
          <span>{meta.readTime}</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="italic mb-3">Share this post on:</p>
          <div className="flex items-center gap-8">
            {shareLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${label}`}
                className="text-gray-500 hover:text-black transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          {otherPosts.length > 0 ? (
            <p className="italic text-sm">
              <Link to="/posts" className="text-theme hover:underline">
                Continue reading...
              </Link>
            </p>
          ) : (
            <span />
          )}

          <button
            onClick={scrollToTop}
            className="text-sm text-gray-500 hover:text-black transition-colors flex items-center gap-1"
          >
            <ChevronUp size={16} />
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </>
  )
}