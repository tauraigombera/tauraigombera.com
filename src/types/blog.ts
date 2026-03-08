export interface BlogMeta {
  title: string
  date: string
  readTime: string
  excerpt: string
  image: string
}

export interface BlogPost extends BlogMeta {
  slug: string
}