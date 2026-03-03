export interface ParsedMarkdown<T> {
  data: T
  content: string
}

export function parseFrontmatter<T = any>(
  file: string
): ParsedMarkdown<T> {
  const match = file.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)

  if (!match) {
    return {
      data: {} as T,
      content: file,
    }
  }

  const frontmatter = match[1]
  const content = match[2]

  const data = frontmatter
    .split("\n")
    .reduce((acc: any, line) => {
      const [key, ...rest] = line.split(":")
      acc[key.trim()] = rest.join(":").trim().replace(/^"|"$/g, "")
      return acc
    }, {})

  return { data: data as T, content }
}